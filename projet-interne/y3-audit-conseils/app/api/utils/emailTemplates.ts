/**
 * Templates d'emails HTML pour les messages automatiques
 */

export interface EmailTemplateData {
  name: string;
  [key: string]: any;
}

/**
 * Template de base pour tous les emails
 */
function getBaseTemplate(content: string): string {
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

/**
 * Template pour la confirmation de rendez-vous
 */
export function getAppointmentConfirmationTemplate(data: {
  name: string;
  service: string;
  date: string;
  time: string;
}): { html: string; text: string } {
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

  return { html, text };
}

/**
 * Template pour la confirmation de contact
 */
export function getContactConfirmationTemplate(data: {
  name: string;
  subject: string;
}): { html: string; text: string } {
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

  return { html, text };
}

/**
 * Template pour la confirmation de candidature
 */
export function getApplicationConfirmationTemplate(data: {
  firstName: string;
  position: string;
}): { html: string; text: string } {
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

  return { html, text };
}

/**
 * Template pour le changement de statut de rendez-vous
 */
export function getAppointmentStatusTemplate(data: {
  name: string;
  service: string;
  status: string;
  date?: string;
  time?: string;
}): { html: string; text: string } {
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

  return { html, text };
}





