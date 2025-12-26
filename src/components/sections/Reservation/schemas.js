import { z } from 'zod';

export const largePartyFormSchema = z
  .object({
    subject: z.string().min(1, 'Please select a subject'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    // Date and time are optional, but required for event inquiries
    preferredDate: z.string().optional(),
    preferredTime: z.string().optional(),
    // Event inquiry specific fields
    numberOfPeople: z.string().optional(),
    locationPreference: z.string().optional(),
    // Notes/message - required for non-event inquiries
    notes: z.string().optional(),
  })
  .refine(
    (data) => {
      // If subject is event-inquiry, require all event-specific fields
      if (data.subject === 'event-inquiry') {
        return (
          data.preferredDate &&
          data.preferredDate.trim() !== '' &&
          data.preferredTime &&
          data.preferredTime.trim() !== '' &&
          data.numberOfPeople &&
          data.numberOfPeople.trim() !== '' &&
          data.locationPreference &&
          data.locationPreference.trim() !== ''
        );
      }
      // For non-event inquiries, require notes/message
      if (data.subject !== 'event-inquiry') {
        return data.notes && data.notes.trim().length >= 10;
      }
      return true;
    },
    {
      message: 'Please complete all required fields',
    },
  )
  .superRefine((data, ctx) => {
    // Event inquiry validation
    if (data.subject === 'event-inquiry') {
      if (
        !data.preferredDate ||
        (typeof data.preferredDate === 'string' &&
          data.preferredDate.trim() === '')
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Preferred date is required',
          path: ['preferredDate'],
        });
      }
      if (
        !data.preferredTime ||
        (typeof data.preferredTime === 'string' &&
          data.preferredTime.trim() === '')
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Preferred time is required',
          path: ['preferredTime'],
        });
      }
      if (
        !data.numberOfPeople ||
        (typeof data.numberOfPeople === 'string' &&
          data.numberOfPeople.trim() === '')
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Number of people is required',
          path: ['numberOfPeople'],
        });
      }
      if (
        !data.locationPreference ||
        (typeof data.locationPreference === 'string' &&
          data.locationPreference.trim() === '')
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Location preference is required',
          path: ['locationPreference'],
        });
      }
    }
    // Non-event inquiry validation
    if (data.subject !== 'event-inquiry') {
      if (
        !data.notes ||
        (typeof data.notes === 'string' && data.notes.trim().length < 10)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please provide a message (at least 10 characters)',
          path: ['notes'],
        });
      }
    }
  });

