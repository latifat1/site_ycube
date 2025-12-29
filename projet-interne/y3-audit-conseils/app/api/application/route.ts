import { NextResponse } from 'next/server';
// @ts-ignore - PrismaClient will be available after generation
import { PrismaClient } from '@prisma/client';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';
import { sendMail } from "../utils/sendMail";
import { getApplicationConfirmationTemplate } from "../utils/emailTemplates";

let prisma: PrismaClient | null = null;

// Initialisation sécurisée de Prisma
function getPrismaClient(): PrismaClient {
  if (!prisma) {
    try {
      if (!process.env.DATABASE_URL) {
        console.error('DATABASE_URL is not defined in environment variables');
        throw new Error('DATABASE_URL is not configured. Please create a .env file with DATABASE_URL="file:../../prisma/dev.db"');
      }
      
      prisma = new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
      });
    } catch (prismaError: any) {
      console.error('Failed to initialize Prisma:', prismaError);
      throw prismaError;
    }
  }
  return prisma;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const cv = formData.get('cv') as File;
    const coverLetter = formData.get('coverLetter') as string;

    // Validation des champs requis
    if (!firstName || !lastName || !email || !phone || !position || !cv) {
      const missingFields = [];
      if (!firstName) missingFields.push('firstName');
      if (!lastName) missingFields.push('lastName');
      if (!email) missingFields.push('email');
      if (!phone) missingFields.push('phone');
      if (!position) missingFields.push('position');
      if (!cv) missingFields.push('cv');
      
      return NextResponse.json({ 
        error: 'Champs manquants', 
        details: `Les champs suivants sont requis : ${missingFields.join(', ')}` 
      }, { status: 400 });
    }

    // Vérifier que c'est bien un fichier
    if (!(cv instanceof File)) {
      return NextResponse.json({ 
        error: 'Format de fichier invalide',
        details: 'Le CV doit être un fichier valide'
      }, { status: 400 });
    }

    // Créer le dossier uploads/cvs s'il n'existe pas
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'cvs');
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (mkdirError: any) {
      // Le dossier existe déjà, c'est normal
      if (mkdirError.code !== 'EEXIST') {
        console.error('Error creating uploads directory:', mkdirError);
        throw new Error('Impossible de créer le dossier d\'upload');
      }
    }

    // Handle file upload
    const cvBuffer = Buffer.from(await cv.arrayBuffer());
    const cvFilename = `${Date.now()}-${cv.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const cvPath = path.join(uploadsDir, cvFilename);
    
    try {
      await writeFile(cvPath, cvBuffer);
    } catch (writeError: any) {
      console.error('Error writing CV file:', writeError);
      return NextResponse.json({ 
        error: 'Erreur lors de l\'enregistrement du fichier',
        details: 'Impossible d\'enregistrer le CV. Vérifiez les permissions du dossier.'
      }, { status: 500 });
    }

    // Initialiser Prisma et créer la candidature
    let application;
    try {
      const prismaClient = getPrismaClient();
      application = await prismaClient.jobApplication.create({
        data: {
          firstName,
          lastName,
          email,
          phone,
          position,
          cvPath: `/uploads/cvs/${cvFilename}`,
          coverLetter: coverLetter || null,
        },
      });
    } catch (dbError: any) {
      console.error('Database error:', dbError);
      
      // Supprimer le fichier si l'enregistrement en base a échoué
      try {
        await unlink(cvPath);
      } catch (unlinkError) {
        console.error('Error deleting uploaded file:', unlinkError);
      }
      
      // Vérifier si c'est une erreur de connexion
      if (dbError.code === 'P1001' || dbError.message?.includes('Can\'t reach database server')) {
        return NextResponse.json({ 
          error: 'Erreur de connexion à la base de données',
          details: 'Impossible de se connecter à la base de données. Veuillez vérifier la configuration.'
        }, { status: 503 });
      }
      
      // Vérifier si c'est une erreur de fichier de base de données
      if (dbError.message?.includes('ENOENT') || dbError.message?.includes('no such file') || dbError.message?.includes('SQLITE_CANTOPEN')) {
        return NextResponse.json({ 
          error: 'Base de données introuvable',
          details: 'Le fichier de base de données n\'existe pas. Veuillez exécuter: npm run prisma:migrate'
        }, { status: 500 });
      }
      
      // Autres erreurs de base de données
      return NextResponse.json({ 
        error: 'Erreur de base de données',
        details: dbError.message || 'Impossible d\'enregistrer la candidature. Veuillez réessayer plus tard.',
        code: dbError.code || 'UNKNOWN'
      }, { status: 500 });
    }

    // Envoi d'un email personnalisé à l'utilisateur (non bloquant)
    try {
      const template = getApplicationConfirmationTemplate({ firstName, position });
      const emailResult = await sendMail({
        to: email,
        subject: "Votre candidature a bien été reçue !",
        text: template.text,
        html: template.html,
      });

      if (!emailResult.success) {
        console.warn('Email sending failed:', emailResult.error);
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // On continue quand même car la candidature est enregistrée
    }

    // Envoi d'un email au cabinet avec les données du formulaire (non bloquant)
    try {
      const emailText = `Nouvelle candidature spontanée\n\n` +
        `Informations du candidat :\n` +
        `- Nom : ${lastName}\n` +
        `- Prénom : ${firstName}\n` +
        `- Email : ${email}\n` +
        `- Téléphone : ${phone}\n` +
        `- Poste recherché : ${position}\n` +
        `${coverLetter ? `- Lettre de motivation :\n${coverLetter}\n` : ''}` +
        `\nDate de candidature : ${new Date().toLocaleString('fr-FR')}\n\n` +
        `Le CV est joint à cet email.`;

      const adminEmailResult = await sendMail({
        to: process.env.ADMIN_EMAIL || 'hello@ycubeac.com',
        subject: `Nouvelle candidature spontanée - ${firstName} ${lastName} - ${position}`,
        text: emailText,
        attachments: [
          {
            filename: cvFilename,
            path: cvPath,
          },
        ],
      });

      if (!adminEmailResult.success) {
        console.warn('Admin email sending failed:', adminEmailResult.error);
      }
    } catch (adminEmailError) {
      console.error('Admin email sending failed:', adminEmailError);
      // On continue quand même car la candidature est enregistrée
    }

    return NextResponse.json({ 
      success: true,
      application,
      message: 'Candidature créée avec succès'
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating job application:', error);
    console.error('Error stack:', error.stack);
    console.error('Error name:', error.name);
    
    // Gestion des erreurs de parsing
    if (error instanceof SyntaxError || error.message?.includes('JSON')) {
      return NextResponse.json({ 
        error: 'Format de données invalide',
        details: 'Les données envoyées ne sont pas au bon format'
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      error: 'Une erreur est survenue',
      details: error.message || 'Erreur lors du traitement de votre demande'
    }, { status: 500 });
  } finally {
    try {
      if (prisma) {
        await prisma.$disconnect();
      }
    } catch (disconnectError) {
      console.error('Error disconnecting Prisma:', disconnectError);
    }
  }
} 