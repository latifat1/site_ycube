import { NextResponse } from 'next/server';
import { sendMail } from "../utils/sendMail";
import { getAppointmentConfirmationTemplate, getAppointmentNotificationTemplate } from "../utils/emailTemplates";

export async function POST(request: Request) {
  try {
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

    // Database storage disabled - feature removed
    // Create mock appointment object
    const appointment = {
      id: 'appt-' + Date.now(),
      service,
      name,
      company: company || null,
      phone,
      email,
      date: new Date(date),
      time,
      message: message || null,
      createdAt: new Date(),
    };

    // Envoi d'un email de notification à hello@ycubeac.com (non bloquant)
    try {
      const notificationTemplate = getAppointmentNotificationTemplate({
        name,
        email,
        phone,
        company: company || undefined,
        service,
        date: date,
        time: time,
        message: message || undefined,
      });

      const notificationResult = await sendMail({
        to: 'hello@ycubeac.com',
        subject: `Nouvelle demande de rendez-vous - ${name}`,
        text: notificationTemplate.text,
        html: notificationTemplate.html,
      });

      if (notificationResult.success) {
        console.log('✅ Email de notification envoyé à hello@ycubeac.com');
      } else {
        console.warn('❌ Échec envoi email de notification:', notificationResult.error);
      }
    } catch (emailError) {
      // L'email a échoué mais le rendez-vous est enregistré
      console.error('❌ Erreur lors de l\'envoi de l\'email de notification:', emailError);
      // On continue quand même car le rendez-vous est enregistré
    }

    // Envoi d'un email de confirmation à l'utilisateur (non bloquant)
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

      if (emailResult.success) {
        console.log(`✅ Email de confirmation envoyé au client: ${email} (ID: ${emailResult.messageId})`);
      } else {
        console.error(`❌ Échec envoi email de confirmation au client (${email}):`, {
          error: emailResult.error,
          details: emailResult.errorDetails,
        });
      }
    } catch (emailError) {
      // L'email a échoué mais le rendez-vous est enregistré
      console.error(`❌ Erreur lors de l'envoi de l'email de confirmation au client (${email}):`, emailError);
      // On continue quand même car le rendez-vous est enregistré
    }

    return NextResponse.json({
      success: true,
      appointment,
      message: 'Rendez-vous créé avec succès'
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating appointment:', error);

    // Gestion des erreurs de parsing JSON
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