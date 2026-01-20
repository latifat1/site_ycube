import { NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';
import { sendMail } from "../utils/sendMail";
import { getApplicationConfirmationTemplate } from "../utils/emailTemplates";

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

    // Database storage disabled - feature removed
    // Create mock application object
    let application;
    try {
      application = {
        id: 'app-' + Date.now(),
        firstName,
        lastName,
        email,
        phone,
        position,
        cvPath: `/uploads/cvs/${cvFilename}`,
        coverLetter: coverLetter || null,
        createdAt: new Date(),
      };
    } catch (dbError: any) {
      console.error('Error creating application:', dbError);

      // Supprimer le fichier si l'enregistrement a échoué
      try {
        await unlink(cvPath);
      } catch (unlinkError) {
        console.error('Error deleting uploaded file:', unlinkError);
      }

      return NextResponse.json({
        error: 'Erreur de traitement',
        details: 'Impossible de traiter votre candidature. Veuillez réessayer plus tard.'
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
  }
} 