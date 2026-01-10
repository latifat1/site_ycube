import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, subject, text, html } = body;

    if (!to || !subject || !text) {
      return NextResponse.json({ 
        error: 'Les champs to, subject et text sont requis' 
      }, { status: 400 });
    }

    // Utiliser Resend pour envoyer l'email (déjà configuré)
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        error: 'Configuration email manquante' 
      }, { status: 500 });
    }

    const payload = {
      from: 'Y3 Audit & Conseils <hello@ycubeac.com>',
      to: to,
      subject: subject,
      text: text,
      html: html || text.replace(/\n/g, '<br>'),
    };

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
      console.error('Resend API Error:', data);
      return NextResponse.json({ 
        error: data.message || 'Erreur lors de l\'envoi de l\'email' 
      }, { status: response.status });
    }

    return NextResponse.json({ 
      success: true,
      messageId: data.id
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error in send-email route:', error);
    return NextResponse.json({ 
      error: error.message || 'Erreur serveur' 
    }, { status: 500 });
  }
}



