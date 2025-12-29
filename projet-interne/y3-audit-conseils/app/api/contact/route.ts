import { NextResponse } from 'next/server';
// @ts-ignore - PrismaClient will be available after generation
import { PrismaClient } from '@prisma/client';
import { sendMail } from "../utils/sendMail";
import { getContactConfirmationTemplate } from "../utils/emailTemplates";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

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