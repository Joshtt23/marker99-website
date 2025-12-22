import { NextResponse } from 'next/server';

import { z } from 'zod';

import { sendEmail, formatEmailBody } from '@/lib/email';

const contactFormSchema = z.object({
  subject: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

const SUBJECT_LABELS = {
  'event-inquiry': 'Event Inquiry',
  'general-question': 'General Question',
  feedback: 'Feedback',
  complaint: 'Complaint',
  other: 'Other',
};

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data. Please check all required fields.',
          details: validationResult.error.issues,
        },
        { status: 400 },
      );
    }

    const data = validationResult.data;

    // Format email content
    const subjectLabel = SUBJECT_LABELS[data.subject] || data.subject;
    const emailSubject = `Contact Form: ${subjectLabel} - ${data.name}`;
    const emailBody = formatEmailBody(`
New Contact Form Submission

Subject: ${subjectLabel}
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}

---
Submitted via Marker 99 website
    `);

    // Send email via Resend
    try {
      await sendEmail({
        to: 'joshua.traver1998@gmail.com',
        subject: emailSubject,
        text: emailBody,
      });
    } catch (emailError) {
      console.error('Failed to send contact form email:', emailError);
      // Log in development even if email fails
      if (process.env.NODE_ENV === 'development') {
        console.warn('Contact Form Submission (email failed):', {
          subject: emailSubject,
          body: emailBody,
        });
      }
      // Still return success to user, but log the error
      // In production, you might want to return an error here
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message submitted successfully',
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          'Failed to process message. Please try again or call us directly.',
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
