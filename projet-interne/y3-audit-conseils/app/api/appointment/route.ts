import { NextResponse } from 'next/server';
// @ts-ignore - PrismaClient will be available after generation
import { PrismaClient } from '@prisma/client';
import { sendMail } from "../utils/sendMail";
import { getAppointmentConfirmationTemplate } from "../utils/emailTemplates";

let prisma: PrismaClient | null = null;

// Initialisation sécurisée de Prisma
function getPrismaClient(): PrismaClient {
  if (!prisma) {
    try {
      // Vérifier que DATABASE_URL est défini
      if (!process.env.DATABASE_URL) {
        console.error('DATABASE_URL is not defined in environment variables');
        throw new Error('DATABASE_URL is not configured. Please create a .env file with DATABASE_URL="file:../../prisma/dev.db"');
      }
      
      prisma = new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
      });
      
      // Tester la connexion
      prisma.$connect().catch((error: any) => {
        console.error('Failed to connect to database:', error);
        throw error;
      });
    } catch (prismaError: any) {
      console.error('Failed to initialize Prisma:', prismaError);
      console.error('DATABASE_URL:', process.env.DATABASE_URL);
      throw prismaError;
    }
  }
  return prisma;
}

export async function POST(request: Request) {
  try {
    // Initialiser Prisma
    const prismaClient = getPrismaClient();
    const body = await request.json();
    const { service, name, company, phone, email, date, time, message } = body;

    // Validation des champs requis
    if (!service || !name || !phone || !email || !date || !time) {
      const missingFields = [];
      if (!service) missingFields.push('service');
      if (!name) missingFields.push('name');
      if (!phone) missingFields.push('phone');
      if (!email) missingFields.push('email');
      if (!date) missingFields.push('date');
      if (!time) missingFields.push('time');
      
      return NextResponse.json({ 
        error: 'Champs manquants', 
        details: `Les champs suivants sont requis : ${missingFields.join(', ')}` 
      }, { status: 400 });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        error: 'Email invalide',
        details: 'Le format de l\'email n\'est pas valide'
      }, { status: 400 });
    }

    // Création du rendez-vous en base de données
    let appointment;
    try {
      appointment = await prismaClient.appointment.create({
        data: {
          service,
          name,
          company: company || null,
          phone,
          email,
          date: new Date(date),
          time,
          message: message || null,
        },
      });
    } catch (dbError: any) {
      console.error('Database error:', dbError);
      console.error('Database error details:', {
        code: dbError.code,
        message: dbError.message,
        meta: dbError.meta,
        stack: dbError.stack,
        cause: dbError.cause
      });
      
      // Vérifier si c'est une erreur de contrainte unique
      if (dbError.code === 'P2002') {
        return NextResponse.json({ 
          error: 'Erreur de base de données',
          details: 'Un rendez-vous similaire existe déjà'
        }, { status: 409 });
      }
      
      // Vérifier si c'est une erreur de connexion
      if (dbError.code === 'P1001' || dbError.message?.includes('Can\'t reach database server')) {
        return NextResponse.json({ 
          error: 'Erreur de connexion à la base de données',
          details: 'Impossible de se connecter à la base de données. Veuillez vérifier la configuration.'
        }, { status: 503 });
      }
      
      // Vérifier si c'est une erreur de fichier de base de données (SQLite)
      if (dbError.message?.includes('ENOENT') || dbError.message?.includes('no such file') || dbError.message?.includes('SQLITE_CANTOPEN')) {
        return NextResponse.json({ 
          error: 'Base de données introuvable',
          details: 'Le fichier de base de données n\'existe pas. Veuillez exécuter: npx prisma migrate deploy'
        }, { status: 500 });
      }
      
      // Vérifier si c'est une erreur de validation Prisma
      if (dbError.code === 'P2003' || dbError.message?.includes('Invalid') || dbError.message?.includes('Validation')) {
        return NextResponse.json({ 
          error: 'Erreur de validation',
          details: dbError.message || 'Les données envoyées ne sont pas valides. Vérifiez que tous les champs requis sont remplis correctement.'
        }, { status: 400 });
      }
      
      // Retourner le message d'erreur complet pour le débogage
      const errorDetails = dbError.message || 'Impossible d\'enregistrer le rendez-vous. Veuillez réessayer plus tard.';
      return NextResponse.json({ 
        error: 'Erreur de base de données',
        details: errorDetails,
        code: dbError.code || 'UNKNOWN',
        meta: dbError.meta || null
      }, { status: 500 });
    }

    // Envoi d'un email personnalisé à l'utilisateur (non bloquant)
    try {
      const template = getAppointmentConfirmationTemplate({
        name,
        service,
        date: date,
        time: time,
      });

      const emailResult = await sendMail({
        to: email,
        subject: "Confirmation de votre demande de rendez-vous",
        text: template.text,
        html: template.html,
      });

      if (!emailResult.success) {
        console.warn('Email sending failed:', emailResult.error);
      }
    } catch (emailError) {
      // L'email a échoué mais le rendez-vous est enregistré
      console.error('Email sending failed:', emailError);
      // On continue quand même car le rendez-vous est enregistré
    }

    return NextResponse.json({ 
      success: true,
      appointment,
      message: 'Rendez-vous créé avec succès'
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating appointment:', error);
    console.error('Error stack:', error.stack);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    
    // Gestion des erreurs de parsing JSON
    if (error instanceof SyntaxError || error.message?.includes('JSON')) {
      return NextResponse.json({ 
        error: 'Format de données invalide',
        details: 'Les données envoyées ne sont pas au bon format'
      }, { status: 400 });
    }
    
    // Gestion des erreurs Prisma non initialisé
    if (error.message?.includes('PrismaClient') || error.message?.includes('prisma')) {
      return NextResponse.json({ 
        error: 'Erreur de configuration',
        details: 'Le client de base de données n\'est pas correctement configuré. Veuillez exécuter: npx prisma generate'
      }, { status: 500 });
    }
    
    // Gérer les erreurs d'initialisation Prisma
    if (error.message?.includes('DATABASE_URL') || error.message?.includes('PrismaClient')) {
      return NextResponse.json({ 
        error: 'Erreur de configuration',
        details: error.message || 'Le client de base de données n\'est pas correctement configuré. Veuillez créer un fichier .env avec DATABASE_URL="file:../../prisma/dev.db"'
      }, { status: 500 });
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