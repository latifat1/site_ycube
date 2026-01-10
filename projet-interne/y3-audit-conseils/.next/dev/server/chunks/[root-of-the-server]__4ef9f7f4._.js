module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/projet-interne/y3-audit-conseils/app/api/utils/sendMail.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Vérifie si la configuration email est disponible
 */ __turbopack_context__.s([
    "isEmailConfigured",
    ()=>isEmailConfigured,
    "sendMail",
    ()=>sendMail,
    "verifyEmailConnection",
    ()=>verifyEmailConnection
]);
function isEmailConfigured() {
    return !!process.env.RESEND_API_KEY;
}
async function verifyEmailConnection() {
    try {
        if (!isEmailConfigured()) {
            return false;
        }
        // Test simple avec Resend
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Y3 Audit & Conseils <hello@ycubeac.com>',
                to: 'hello@ycubeac.com',
                subject: 'Test',
                text: 'Test'
            })
        });
        return response.ok;
    } catch (error) {
        console.error('Email verification failed:', error);
        return false;
    }
}
async function sendMail({ to, subject, text, html, attachments, cc, bcc }) {
    try {
        // Vérifier la configuration
        if (!isEmailConfigured()) {
            console.warn('Email not configured. Skipping email send.');
            return {
                success: false,
                error: 'Email configuration is missing. Please set RESEND_API_KEY in your .env file'
            };
        }
        // Préparer les destinataires
        const recipients = Array.isArray(to) ? to : [
            to
        ];
        const ccRecipients = cc ? Array.isArray(cc) ? cc : [
            cc
        ] : [];
        const bccRecipients = bcc ? Array.isArray(bcc) ? bcc : [
            bcc
        ] : [];
        // Préparer les pièces jointes pour Resend (format base64)
        const resendAttachments = [];
        if (attachments && attachments.length > 0) {
            const fs = await __turbopack_context__.A("[externals]/fs/promises [external] (fs/promises, cjs, async loader)");
            const path = await __turbopack_context__.A("[externals]/path [external] (path, cjs, async loader)");
            for (const attachment of attachments){
                let content;
                if (attachment.content) {
                    // Si le contenu est déjà fourni
                    content = attachment.content;
                } else if (attachment.path) {
                    // Lire le fichier depuis le chemin
                    const fullPath = path.isAbsolute(attachment.path) ? attachment.path : path.join(process.cwd(), attachment.path);
                    content = await fs.readFile(fullPath);
                } else {
                    console.warn(`Attachment ${attachment.filename} has no content or path, skipping`);
                    continue;
                }
                // Convertir en base64 pour Resend
                resendAttachments.push({
                    filename: attachment.filename,
                    content: content.toString('base64'),
                    type: attachment.contentType
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
        const payload = {
            from: `${fromName} <${fromEmail}>`,
            to: recipients,
            subject,
            text,
            html: html || text.replace(/\n/g, '<br>')
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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        if (!response.ok) {
            const errorMessage = data.message || data.error?.message || `HTTP error! status: ${response.status}`;
            console.error('Resend API Error:', {
                status: response.status,
                statusText: response.statusText,
                error: data,
                payload: {
                    ...payload,
                    text: payload.text.substring(0, 100) + '...'
                }
            });
            throw new Error(errorMessage);
        }
        console.log('✅ Email sent successfully via Resend:', {
            to,
            subject,
            messageId: data.id,
            from: payload.from
        });
        return {
            success: true,
            messageId: data.id
        };
    } catch (error) {
        console.error('❌ Error sending email:', {
            to,
            subject,
            error: error.message,
            errorDetails: error.response || error.data,
            stack: error.stack
        });
        return {
            success: false,
            error: error.message || 'Unknown error occurred',
            errorDetails: error.response || error.data
        };
    }
}
}),
"[project]/projet-interne/y3-audit-conseils/app/api/utils/emailTemplates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Templates d'emails HTML pour les messages automatiques
 */ __turbopack_context__.s([
    "getApplicationConfirmationTemplate",
    ()=>getApplicationConfirmationTemplate,
    "getAppointmentConfirmationTemplate",
    ()=>getAppointmentConfirmationTemplate,
    "getAppointmentNotificationTemplate",
    ()=>getAppointmentNotificationTemplate,
    "getAppointmentStatusTemplate",
    ()=>getAppointmentStatusTemplate,
    "getContactConfirmationTemplate",
    ()=>getContactConfirmationTemplate
]);
/**
 * Template de base pour tous les emails
 */ function getBaseTemplate(content) {
    return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Y3 Audit & Conseils</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #073E5D; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Y3 Audit & Conseils</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              ${content}
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; margin: 0 0 10px 0; font-size: 14px;">
                <strong>Y3 Audit & Conseils</strong><br>
                Cocody, Riviera<br>
                Email: hello@ycubeac.com<br>
                Téléphone: +225 05 46 00 63 93
              </p>
              <p style="color: #999999; margin: 10px 0 0 0; font-size: 12px;">
                Cet email a été envoyé automatiquement, merci de ne pas y répondre directement.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
function getAppointmentConfirmationTemplate(data) {
    const html = getBaseTemplate(`
    <h2 style="color: #073E5D; margin-top: 0;">Confirmation de votre demande de rendez-vous</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Bonjour <strong>${data.name}</strong>,
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous avons bien reçu votre demande de rendez-vous pour le service : <strong>${data.service}</strong>.
    </p>
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #80C342;">
      <p style="margin: 0; color: #333333; font-size: 16px;">
        <strong>Date prévue :</strong> ${new Date(data.date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}<br>
        <strong>Heure :</strong> ${data.time}
      </p>
    </div>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous vous contacterons rapidement pour confirmer la date et l'heure définitives.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Cordialement,<br>
      <strong>L'équipe Y3 Audit & Conseils</strong>
    </p>
  `);
    const text = `Bonjour ${data.name},

Nous avons bien reçu votre demande de rendez-vous pour le service : ${data.service}.

Date prévue : ${new Date(data.date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}
Heure : ${data.time}

Nous vous contacterons rapidement pour confirmer la date et l'heure définitives.

Cordialement,
L'équipe Y3 Audit & Conseils`;
    return {
        html,
        text
    };
}
function getContactConfirmationTemplate(data) {
    const html = getBaseTemplate(`
    <h2 style="color: #073E5D; margin-top: 0;">Merci pour votre message !</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Bonjour <strong>${data.name}</strong>,
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous avons bien reçu votre message concernant : <strong>"${data.subject}"</strong>.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Notre équipe va l'examiner et vous répondra dans les plus brefs délais.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Cordialement,<br>
      <strong>L'équipe Y3 Audit & Conseils</strong>
    </p>
  `);
    const text = `Bonjour ${data.name},

Nous avons bien reçu votre message : "${data.subject}".

Nous vous répondrons rapidement.

Cordialement,
L'équipe Y3 Audit & Conseils`;
    return {
        html,
        text
    };
}
function getApplicationConfirmationTemplate(data) {
    const html = getBaseTemplate(`
    <h2 style="color: #073E5D; margin-top: 0;">Votre candidature a bien été reçue !</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Bonjour <strong>${data.firstName}</strong>,
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous avons bien reçu votre candidature pour le poste de <strong>${data.position}</strong>.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous vous remercions de l'intérêt porté à notre cabinet. Nous reviendrons vers vous après étude de votre dossier.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Cordialement,<br>
      <strong>L'équipe Y3 Audit & Conseils</strong>
    </p>
  `);
    const text = `Bonjour ${data.firstName},

Nous avons bien reçu votre candidature pour le poste de ${data.position}.

Nous vous remercions de l'intérêt porté à notre cabinet.
Nous reviendrons vers vous après étude de votre dossier.

Cordialement,
L'équipe Y3 Audit & Conseils`;
    return {
        html,
        text
    };
}
function getAppointmentStatusTemplate(data) {
    let statusContent = '';
    let statusText = '';
    if (data.status === 'confirme') {
        statusContent = `
      <div style="background-color: #d4edda; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #28a745;">
        <p style="margin: 0; color: #155724; font-size: 16px;">
          <strong>✅ Votre rendez-vous est confirmé !</strong><br>
          Date : ${data.date ? new Date(data.date).toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : 'À confirmer'}<br>
          Heure : ${data.time || 'À confirmer'}
        </p>
      </div>
      <p style="color: #333333; font-size: 16px; line-height: 1.6;">
        Nous vous attendons avec plaisir à cette date.
      </p>
    `;
        statusText = `Votre rendez-vous pour le service ${data.service} est confirmé pour le ${data.date ? new Date(data.date).toLocaleDateString('fr-FR') : 'date à confirmer'} à ${data.time || 'heure à confirmer'}.`;
    } else if (data.status === 'a_replanifier') {
        statusContent = `
      <div style="background-color: #fff3cd; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #ffc107;">
        <p style="margin: 0; color: #856404; font-size: 16px;">
          <strong>⚠️ Votre rendez-vous doit être replanifié</strong>
        </p>
      </div>
      <p style="color: #333333; font-size: 16px; line-height: 1.6;">
        Merci de répondre à ce message en nous indiquant la nouvelle date et l'heure qui vous conviendraient.
      </p>
      <p style="color: #333333; font-size: 16px; line-height: 1.6;">
        Nous reviendrons vers vous pour confirmer la nouvelle date.
      </p>
    `;
        statusText = `Votre rendez-vous pour le service ${data.service} doit être replanifié. Merci de répondre à ce message en nous indiquant la nouvelle date et l'heure qui vous conviendraient.`;
    } else if (data.status === 'annule') {
        statusContent = `
      <div style="background-color: #f8d7da; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #dc3545;">
        <p style="margin: 0; color: #721c24; font-size: 16px;">
          <strong>❌ Votre rendez-vous a été annulé</strong>
        </p>
      </div>
      <p style="color: #333333; font-size: 16px; line-height: 1.6;">
        N'hésitez pas à nous recontacter pour fixer une nouvelle date.
      </p>
    `;
        statusText = `Nous vous informons que votre rendez-vous pour le service ${data.service} a été annulé. N'hésitez pas à nous recontacter pour fixer une nouvelle date.`;
    }
    const html = getBaseTemplate(`
    <h2 style="color: #073E5D; margin-top: 0;">Mise à jour de votre rendez-vous</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Bonjour <strong>${data.name}</strong>,
    </p>
    ${statusContent}
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Cordialement,<br>
      <strong>L'équipe Y3 Audit & Conseils</strong>
    </p>
  `);
    const text = `Bonjour ${data.name},

${statusText}

Cordialement,
L'équipe Y3 Audit & Conseils`;
    return {
        html,
        text
    };
}
function getAppointmentNotificationTemplate(data) {
    const html = getBaseTemplate(`
    <h2 style="color: #073E5D; margin-top: 0;">Nouvelle demande de rendez-vous</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Une nouvelle demande de rendez-vous a été reçue.
    </p>
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #80C342;">
      <p style="margin: 0 0 10px 0; color: #333333; font-size: 16px;">
        <strong>Nom :</strong> ${data.name}<br>
        <strong>Email :</strong> ${data.email}<br>
        <strong>Téléphone :</strong> ${data.phone}<br>
        ${data.company ? `<strong>Entreprise :</strong> ${data.company}<br>` : ''}
        <strong>Service :</strong> ${data.service}<br>
        <strong>Date :</strong> ${new Date(data.date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}<br>
        <strong>Heure :</strong> ${data.time}
      </p>
      ${data.message ? `<p style="margin: 10px 0 0 0; color: #333333; font-size: 16px;"><strong>Message :</strong><br>${data.message}</p>` : ''}
    </div>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Veuillez contacter le client pour confirmer le rendez-vous.
    </p>
  `);
    const text = `Nouvelle demande de rendez-vous

Nom : ${data.name}
Email : ${data.email}
Téléphone : ${data.phone}
${data.company ? `Entreprise : ${data.company}\n` : ''}Service : ${data.service}
Date : ${new Date(data.date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}
Heure : ${data.time}
${data.message ? `\nMessage :\n${data.message}` : ''}

Veuillez contacter le client pour confirmer le rendez-vous.`;
    return {
        html,
        text
    };
}
}),
"[project]/projet-interne/y3-audit-conseils/app/api/application/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/server.js [app-route] (ecmascript)");
// @ts-ignore - PrismaClient will be available after generation
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$19$2e$1_prism_d4c309513f45d21f4e4aa7921d8002c7$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/@prisma+client@6.19.1_prism_d4c309513f45d21f4e4aa7921d8002c7/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$api$2f$utils$2f$sendMail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/api/utils/sendMail.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$api$2f$utils$2f$emailTemplates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/api/utils/emailTemplates.ts [app-route] (ecmascript)");
;
;
;
;
;
;
let prisma = null;
// Initialisation sécurisée de Prisma
function getPrismaClient() {
    if (!prisma) {
        try {
            if (!process.env.DATABASE_URL) {
                console.error('DATABASE_URL is not defined in environment variables');
                throw new Error('DATABASE_URL is not configured. Please create a .env file with DATABASE_URL="file:../../prisma/dev.db"');
            }
            prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$19$2e$1_prism_d4c309513f45d21f4e4aa7921d8002c7$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
                log: ("TURBOPACK compile-time truthy", 1) ? [
                    'error',
                    'warn'
                ] : "TURBOPACK unreachable"
            });
        } catch (prismaError) {
            console.error('Failed to initialize Prisma:', prismaError);
            throw prismaError;
        }
    }
    return prisma;
}
async function POST(request) {
    try {
        const formData = await request.formData();
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const position = formData.get('position');
        const cv = formData.get('cv');
        const coverLetter = formData.get('coverLetter');
        // Validation des champs requis
        if (!firstName || !lastName || !email || !phone || !position || !cv) {
            const missingFields = [];
            if (!firstName) missingFields.push('firstName');
            if (!lastName) missingFields.push('lastName');
            if (!email) missingFields.push('email');
            if (!phone) missingFields.push('phone');
            if (!position) missingFields.push('position');
            if (!cv) missingFields.push('cv');
            return __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Champs manquants',
                details: `Les champs suivants sont requis : ${missingFields.join(', ')}`
            }, {
                status: 400
            });
        }
        // Vérifier que c'est bien un fichier
        if (!(cv instanceof File)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Format de fichier invalide',
                details: 'Le CV doit être un fichier valide'
            }, {
                status: 400
            });
        }
        // Créer le dossier uploads/cvs s'il n'existe pas
        const uploadsDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads', 'cvs');
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadsDir, {
                recursive: true
            });
        } catch (mkdirError) {
            // Le dossier existe déjà, c'est normal
            if (mkdirError.code !== 'EEXIST') {
                console.error('Error creating uploads directory:', mkdirError);
                throw new Error('Impossible de créer le dossier d\'upload');
            }
        }
        // Handle file upload
        const cvBuffer = Buffer.from(await cv.arrayBuffer());
        const cvFilename = `${Date.now()}-${cv.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        const cvPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadsDir, cvFilename);
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(cvPath, cvBuffer);
        } catch (writeError) {
            console.error('Error writing CV file:', writeError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Erreur lors de l\'enregistrement du fichier',
                details: 'Impossible d\'enregistrer le CV. Vérifiez les permissions du dossier.'
            }, {
                status: 500
            });
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
                    coverLetter: coverLetter || null
                }
            });
        } catch (dbError) {
            console.error('Database error:', dbError);
            // Supprimer le fichier si l'enregistrement en base a échoué
            try {
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["unlink"])(cvPath);
            } catch (unlinkError) {
                console.error('Error deleting uploaded file:', unlinkError);
            }
            // Vérifier si c'est une erreur de connexion
            if (dbError.code === 'P1001' || dbError.message?.includes('Can\'t reach database server')) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Erreur de connexion à la base de données',
                    details: 'Impossible de se connecter à la base de données. Veuillez vérifier la configuration.'
                }, {
                    status: 503
                });
            }
            // Vérifier si c'est une erreur de fichier de base de données
            if (dbError.message?.includes('ENOENT') || dbError.message?.includes('no such file') || dbError.message?.includes('SQLITE_CANTOPEN')) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Base de données introuvable',
                    details: 'Le fichier de base de données n\'existe pas. Veuillez exécuter: npm run prisma:migrate'
                }, {
                    status: 500
                });
            }
            // Autres erreurs de base de données
            return __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Erreur de base de données',
                details: dbError.message || 'Impossible d\'enregistrer la candidature. Veuillez réessayer plus tard.',
                code: dbError.code || 'UNKNOWN'
            }, {
                status: 500
            });
        }
        // Envoi d'un email personnalisé à l'utilisateur (non bloquant)
        try {
            const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$api$2f$utils$2f$emailTemplates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getApplicationConfirmationTemplate"])({
                firstName,
                position
            });
            const emailResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$api$2f$utils$2f$sendMail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendMail"])({
                to: email,
                subject: "Votre candidature a bien été reçue !",
                text: template.text,
                html: template.html
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
            const emailText = `Nouvelle candidature spontanée\n\n` + `Informations du candidat :\n` + `- Nom : ${lastName}\n` + `- Prénom : ${firstName}\n` + `- Email : ${email}\n` + `- Téléphone : ${phone}\n` + `- Poste recherché : ${position}\n` + `${coverLetter ? `- Lettre de motivation :\n${coverLetter}\n` : ''}` + `\nDate de candidature : ${new Date().toLocaleString('fr-FR')}\n\n` + `Le CV est joint à cet email.`;
            const adminEmailResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$api$2f$utils$2f$sendMail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendMail"])({
                to: process.env.ADMIN_EMAIL || 'hello@ycubeac.com',
                subject: `Nouvelle candidature spontanée - ${firstName} ${lastName} - ${position}`,
                text: emailText,
                attachments: [
                    {
                        filename: cvFilename,
                        path: cvPath
                    }
                ]
            });
            if (!adminEmailResult.success) {
                console.warn('Admin email sending failed:', adminEmailResult.error);
            }
        } catch (adminEmailError) {
            console.error('Admin email sending failed:', adminEmailError);
        // On continue quand même car la candidature est enregistrée
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            application,
            message: 'Candidature créée avec succès'
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Error creating job application:', error);
        console.error('Error stack:', error.stack);
        console.error('Error name:', error.name);
        // Gestion des erreurs de parsing
        if (error instanceof SyntaxError || error.message?.includes('JSON')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Format de données invalide',
                details: 'Les données envoyées ne sont pas au bon format'
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Une erreur est survenue',
            details: error.message || 'Erreur lors du traitement de votre demande'
        }, {
            status: 500
        });
    } finally{
        try {
            if (prisma) {
                await prisma.$disconnect();
            }
        } catch (disconnectError) {
            console.error('Error disconnecting Prisma:', disconnectError);
        }
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4ef9f7f4._.js.map