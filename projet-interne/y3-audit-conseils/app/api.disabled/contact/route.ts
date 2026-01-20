import { NextResponse } from 'next/server';
import { sendMail } from "../utils/sendMail";
import { getContactConfirmationTemplate } from "../utils/emailTemplates";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Database storage disabled - feature removed
    const submission = {
      id: 'temp-' + Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    };

    // Envoi d'un email personnalisé à l'utilisateur
    const template = getContactConfirmationTemplate({ name, subject });
    await sendMail({
      to: email,
      subject: "Merci pour votre message !",
      text: template.text,
      html: template.html,
    });

    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
} 