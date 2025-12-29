// @ts-ignore - nodemailer types not available
import nodemailer from 'nodemailer';

// Types pour nodemailer
type Transporter = any;
type NodemailerSendMailOptions = any;

/**
 * Vérifie si la configuration email est disponible
 */
export function isEmailConfigured(): boolean {
  return !!(process.env.EMAIL_USER && process.env.EMAIL_PASS);
}

/**
 * Crée ou récupère le transporter Nodemailer
 */
let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    if (!isEmailConfigured()) {
      throw new Error('Email configuration is missing. Please set EMAIL_USER and EMAIL_PASS in your .env file');
    }

    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  return transporter;
}

/**
 * Vérifie la connexion au serveur email
 */
export async function verifyEmailConnection(): Promise<boolean> {
  try {
    if (!isEmailConfigured()) {
      return false;
    }
    const transport = getTransporter();
    await transport.verify();
    return true;
  } catch (error) {
    console.error('Email verification failed:', error);
    return false;
  }
}

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  attachments?: Array<{
    filename: string;
    path?: string;
    content?: Buffer;
    contentType?: string;
  }>;
  cc?: string | string[];
  bcc?: string | string[];
}

/**
 * Envoie un email avec gestion d'erreur améliorée
 */
export async function sendMail({
  to,
  subject,
  text,
  html,
  attachments,
  cc,
  bcc,
}: SendMailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    // Vérifier la configuration
    if (!isEmailConfigured()) {
      console.warn('Email not configured. Skipping email send.');
      return {
        success: false,
        error: 'Email configuration is missing',
      };
    }

    const transport = getTransporter();

    const mailOptions: NodemailerSendMailOptions = {
      from: `"Y3 Audit & Conseils" <${process.env.EMAIL_USER}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      text,
      html: html || text.replace(/\n/g, '<br>'), // Convertir le texte en HTML basique si HTML n'est pas fourni
      attachments,
    };

    if (cc) {
      mailOptions.cc = Array.isArray(cc) ? cc.join(', ') : cc;
    }

    if (bcc) {
      mailOptions.bcc = Array.isArray(bcc) ? bcc.join(', ') : bcc;
    }

    const info = await transport.sendMail(mailOptions);

    console.log('Email sent successfully:', {
      to,
      subject,
      messageId: info.messageId,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error: any) {
    console.error('Error sending email:', {
      to,
      subject,
      error: error.message,
      stack: error.stack,
    });

    return {
      success: false,
      error: error.message || 'Unknown error occurred',
    };
  }
} 