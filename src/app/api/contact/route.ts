import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, preferredContactMethod } = body;

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend's test sender email
      to: email,
      subject: 'Thank you for contacting VoterData Insights',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you soon. Here's a summary of your inquiry:</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <p>Would you like to schedule a one-on-one call with our team? You can book a time slot that works for you using our calendar:</p>
          <p style="margin: 20px 0;">
            <a href="https://calendly.com/dorddis/30min" 
               style="background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Schedule a Call
            </a>
          </p>
          <p>Best regards,<br>The VoterData Insights Team</p>
        </div>
      `,
    });

    // Send notification email to the admin
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend's test sender email
      to: 'delivered@resend.dev', // Resend's test recipient email
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Preferred Contact Method:</strong> ${preferredContactMethod}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 