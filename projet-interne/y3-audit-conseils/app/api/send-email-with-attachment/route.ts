import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const to = formData.get('to') as string;
    const subject = formData.get('subject') as string;
    const text = formData.get('text') as string;
    const html = formData.get('html') as string;
    const cv = formData.get('cv') as File | null;

    if (!to || !subject || !text) {
      return NextResponse.json({ 
        error: 'Les champs to, subject et text sont requis' 
      }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        error: 'Configuration email manquante' 
      }, { status: 500 });
    }

    const attachments: Array<{
      filename: string;
      content: string;
    }> = [];

    if (cv && cv instanceof File) {
      const cvBuffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({
        filename: cv.name,
        content: cvBuffer.toString('base64'),
      });
    }

    const payload: any = {
      from: 'Y3 Audit & Conseils <hello@ycubeac.com>',
      to: to,
      subject: subject,
      text: text,
      html: html || text.replace(/\n/g, '<br>'),
    };

    if (attachments.length > 0) {
      payload.attachments = attachments;
    }

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
    console.error('Error in send-email-with-attachment route:', error);
    return NextResponse.json({ 
      error: error.message || 'Erreur serveur' 
    }, { status: 500 });
  }
}



