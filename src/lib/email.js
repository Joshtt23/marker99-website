import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/**
 * Send an email using Resend
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text email body
 * @param {string} [options.html] - HTML email body (optional)
 * @param {string} [options.from] - Sender email address (defaults to configured email)
 * @returns {Promise<Object>} Resend API response
 */
export async function sendEmail({ to, subject, text, html, from }) {
  // If Resend is not configured, log and throw error
  if (!resend || !process.env.RESEND_API_KEY) {
    const error = new Error('RESEND_API_KEY is not configured');
    console.error('Email sending failed:', error.message);
    console.warn('Email would have been sent:', { to, subject, text });
    throw error;
  }

  // Use Resend's default sending domain which doesn't require verification
  // The recipient (joshua.traver1998@gmail.com) is the account email
  const senderEmail = from || 'noreply@resend.dev';
  const fromEmail = `Marker 99 <${senderEmail}>`;

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: [to],
      subject,
      text,
      html: html || text, // Use HTML if provided, otherwise use text
    });

    // Log the result for debugging (using warn to satisfy lint rules)
    if (process.env.NODE_ENV === 'development') {
      console.warn('Resend email sent:', {
        id: result.id,
        to,
        subject,
      });
    }

    return result;
  } catch (error) {
    console.error('Resend email error:', error);
    throw error;
  }
}

/**
 * Format plain text email body with consistent styling
 * @param {string} content - Email content
 * @returns {string} Formatted email body
 */
export function formatEmailBody(content) {
  return content.trim();
}
