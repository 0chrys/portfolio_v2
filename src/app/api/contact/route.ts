import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, website } = body;

    // Server-side Bottrap: Si le champ 'website' (honeypot) est rempli, on ignore
    if (website) {
      return NextResponse.json({ success: true, message: 'Message sent (bottrapped)' });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires.' },
        { status: 400 }
      );
    }

    // Basic sanitization
    const cleanName = name.replace(/[<>]/g, "");
    const cleanSubject = subject.replace(/[<>]/g, "");
    const cleanMessage = message.replace(/[<>]/g, "");

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'chryskonan@icloud.com',
      subject: `[Portfolio] - ${cleanSubject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background: #4338ca; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nouvelle Alerte de Contact</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Source: chryskonan.com</p>
          </div>
          
          <div style="padding: 32px; color: #1f2937;">
            <div style="margin-bottom: 24px;">
              <p style="text-transform: uppercase; font-size: 10px; font-weight: bold; color: #6b7280; letter-spacing: 0.1em; margin-bottom: 4px;">Expéditeur</p>
              <p style="font-size: 16px; margin: 0; font-weight: bold;">${cleanName}</p>
              <p style="font-size: 14px; margin: 4px 0 0; color: #4338ca;">${email}</p>
            </div>
            
            <div style="margin-bottom: 24px;">
              <p style="text-transform: uppercase; font-size: 10px; font-weight: bold; color: #6b7280; letter-spacing: 0.1em; margin-bottom: 4px;">Sujet de la mission</p>
              <p style="font-size: 16px; margin: 0; font-weight: 500;">${cleanSubject}</p>
            </div>
            
            <div style="background: white; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin-top: 10px;">
              <p style="text-transform: uppercase; font-size: 10px; font-weight: bold; color: #6b7280; letter-spacing: 0.1em; margin-bottom: 12px;">Contenu du message</p>
              <p style="font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${cleanMessage}</p>
            </div>
          </div>
          
          <div style="background: #f3f4f6; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">Connecté à CK Labs - System Stable</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
