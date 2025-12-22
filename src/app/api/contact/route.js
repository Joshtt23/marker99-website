import { NextResponse } from 'next/server';

import { z } from 'zod';

import { sendEmail, formatEmailBody } from '@/lib/email';
import { logger } from '@/lib/logger';

const SUBJECT_LABELS = {
  'event-inquiry': 'Event Inquiry',
  'general-question': 'General Question',
  feedback: 'Feedback',
  complaint: 'Complaint',
  other: 'Other',
};

const contactFormSchema = z
  .object({
    subject: z.string().min(1),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    // Date and time are optional, but required for event inquiries
    preferredDate: z.string().optional(),
    preferredTime: z.string().optional(),
    // Event inquiry specific fields
    numberOfPeople: z.string().optional(),
    locationPreference: z.string().optional(),
    // Notes/message - required for non-event inquiries
    notes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Event inquiry validation
    if (data.subject === 'event-inquiry') {
      if (!data.preferredDate || data.preferredDate.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Preferred date is required',
          path: ['preferredDate'],
        });
      }
      if (!data.preferredTime || data.preferredTime.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Preferred time is required',
          path: ['preferredTime'],
        });
      }
      if (!data.numberOfPeople || data.numberOfPeople.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Number of people is required',
          path: ['numberOfPeople'],
        });
      }
      if (!data.locationPreference || data.locationPreference.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Location preference is required',
          path: ['locationPreference'],
        });
      }
    }
    // Non-event inquiry validation
    if (data.subject !== 'event-inquiry') {
      if (!data.notes || data.notes.trim().length < 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please provide a message (at least 10 characters)',
          path: ['notes'],
        });
      }
    }
  });

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
          timestamp: new Date().toISOString(),
        },
        { status: 400 },
      );
    }

    const data = validationResult.data;

    // Format email content
    const subjectLabel = SUBJECT_LABELS[data.subject] || data.subject;
    const emailSubject = `${subjectLabel} - ${data.name}`;

    let emailBody = `
New ${subjectLabel}

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
`;

    // Add event inquiry specific fields
    if (data.subject === 'event-inquiry') {
      if (data.preferredDate) {
        emailBody += `Preferred Date: ${data.preferredDate}\n`;
      }
      if (data.preferredTime) {
        emailBody += `Preferred Time: ${data.preferredTime}\n`;
      }
      if (data.numberOfPeople) {
        emailBody += `Number of People: ${data.numberOfPeople}\n`;
      }
      if (data.locationPreference) {
        emailBody += `Location Preference: ${data.locationPreference}\n`;
      }
      if (data.notes) {
        emailBody += `\nNotes:\n${data.notes}\n`;
      }
    } else {
      // For non-event inquiries, notes/message is the main content
      if (data.notes) {
        emailBody += `\nMessage:\n${data.notes}\n`;
      }
    }

    emailBody += `\n---\nSubmitted via Marker 99 website`;

    const formattedEmailBody = formatEmailBody(emailBody);

    // Send email via Resend
    try {
      await sendEmail({
        to: 'joshua.traver1998@gmail.com',
        subject: emailSubject,
        text: formattedEmailBody,
      });
    } catch (emailError) {
      logger.error('Failed to send contact form email', emailError, {
        endpoint: '/api/contact',
        subject: emailSubject,
      });
      // Log in development even if email fails
      if (process.env.NODE_ENV === 'development') {
        logger.warn('Contact Form Submission (email failed)', {
          subject: emailSubject,
          body: formattedEmailBody,
        });
      }
      // Still return success to user, but log the error
      // In production, you might want to return an error here
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry submitted successfully',
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch (error) {
    logger.error('Error processing contact form', error, {
      endpoint: '/api/contact',
    });
    return NextResponse.json(
      {
        success: false,
        error:
          'Failed to process inquiry. Please try again or call us directly.',
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
