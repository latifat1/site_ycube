/**
 * Vérifie si la configuration email est disponible
 */
export function isEmailConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}

/**
 * Vérifie la connexion au serveur email
 */
export async function verifyEmailConnection(): Promise<boolean> {
  try {
    if (!isEmailConfigured()) {
      return false;
    }
    // Test simple avec Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Y3 Audit & Conseils <hello@ycubeac.com>',
        to: 'hello@ycubeac.com',
        subject: 'Test',
        text: 'Test',
      }),
    });
    return response.ok;
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
 * Envoie un email avec gestion d'erreur améliorée via Resend API
 */
export async function sendMail({
  to,
  subject,
  text,
  html,
  attachments,
  cc,
  bcc,
}: SendMailOptions): Promise<{ success: boolean; messageId?: string; error?: string; errorDetails?: any }> {
  try {
    // Vérifier la configuration
    if (!isEmailConfigured()) {
      console.warn('Email not configured. Skipping email send.');
      return {
        success: false,
        error: 'Email configuration is missing. Please set RESEND_API_KEY in your .env file',
      };
    }

    // Préparer les destinataires
    const recipients = Array.isArray(to) ? to : [to];
    const ccRecipients = cc ? (Array.isArray(cc) ? cc : [cc]) : [];
    const bccRecipients = bcc ? (Array.isArray(bcc) ? bcc : [bcc]) : [];

    // Préparer les pièces jointes pour Resend (format base64)
    const resendAttachments: Array<{
      filename: string;
      content: string;
      type?: string;
    }> = [];

    if (attachments && attachments.length > 0) {
      const fs = await import('fs/promises');
      const path = await import('path');
      
      for (const attachment of attachments) {
        let content: Buffer;
        
        if (attachment.content) {
          // Si le contenu est déjà fourni
          content = attachment.content;
        } else if (attachment.path) {
          // Lire le fichier depuis le chemin
          const fullPath = path.isAbsolute(attachment.path) 
            ? attachment.path 
            : path.join(process.cwd(), attachment.path);
          content = await fs.readFile(fullPath);
        } else {
          console.warn(`Attachment ${attachment.filename} has no content or path, skipping`);
          continue;
        }

        // Convertir en base64 pour Resend
        resendAttachments.push({
          filename: attachment.filename,
          content: content.toString('base64'),
          type: attachment.contentType,
        });
      }
    }

    // Déterminer l'adresse "from"
    // Option 1: Utiliser RESEND_FROM_EMAIL si défini dans .env
    // Option 2: Utiliser hello@ycubeac.com si le domaine est vérifié dans Resend
    // Option 3: Utiliser onboarding@resend.dev (adresse de test Resend) en dernier recours
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'hello@ycubeac.com';
    const fromName = 'Y3 Audit & Conseils';
    
    // Note: Si vous obtenez une erreur "domain not verified", utilisez temporairement:
    // const fromEmail = 'onboarding@resend.dev';
    
    // Préparer le payload pour Resend
    const payload: any = {
      from: `${fromName} <${fromEmail}>`,
      to: recipients,
      subject,
      text,
      html: html || text.replace(/\n/g, '<br>'),
    };

    if (ccRecipients.length > 0) {
      payload.cc = ccRecipients;
    }

    if (bccRecipients.length > 0) {
      payload.bcc = bccRecipients;
    }

    if (resendAttachments.length > 0) {
      payload.attachments = resendAttachments;
    }

    // Envoyer l'email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message || data.error?.message || `HTTP error! status: ${response.status}`;
      console.error('Resend API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: data,
        payload: { ...payload, text: payload.text.substring(0, 100) + '...' }, // Log partiel pour éviter les logs trop longs
      });
      throw new Error(errorMessage);
    }

    console.log('✅ Email sent successfully via Resend:', {
      to,
      subject,
      messageId: data.id,
      from: payload.from,
    });

    return {
      success: true,
      messageId: data.id,
    };
  } catch (error: any) {
    console.error('❌ Error sending email:', {
      to,
      subject,
      error: error.message,
      errorDetails: error.response || error.data,
      stack: error.stack,
    });

    return {
      success: false,
      error: error.message || 'Unknown error occurred',
      errorDetails: error.response || error.data,
    };
  }
} 