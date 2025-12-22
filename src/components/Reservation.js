'use client';

import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import {
  trackEvent,
  trackConversion,
  AnalyticsEvent,
} from '../lib/analytics/events';
import { reservationConfig } from '../lib/siteConfig';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';

const largePartyFormSchema = z
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

const Reservation = ({ onlineReservation }) => {
  const { embedUrl, provider, phone } = reservationConfig;
  const canRenderEmbed = onlineReservation && embedUrl.length > 0;
  const phoneHref = phone.replace(/[^+\d]/g, '');
  const displayPhone = phone.replace('+1-', '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(largePartyFormSchema),
    mode: 'onSubmit', // Only validate on submit, not on change or blur
    reValidateMode: 'onSubmit', // Re-validate on submit only
    defaultValues: {
      subject: 'event-inquiry',
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      numberOfPeople: '',
      locationPreference: '',
      notes: '',
    },
  });

  const selectedSubject = watch('subject');
  const isEventInquiry = selectedSubject === 'event-inquiry';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/large-party-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry');
      }

      // Track conversion
      trackConversion(
        AnalyticsEvent.RESERVATION_SUBMIT,
        50, // Estimated reservation value
        'USD',
        {
          source: 'form',
          subject: data.subject,
          numberOfPeople: data.numberOfPeople || 'N/A',
        },
      );

      toast.success(
        'We have received your inquiry and will be back with you shortly.',
      );
      reset();
    } catch (error) {
      toast.error(
        error.message ||
          'Failed to submit inquiry. Please try calling us instead.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reserve"
      aria-labelledby="reservation-heading"
      className="py-20 md:py-24 bg-background scroll-mt-32"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="rounded-3xl border border-foreground/10 bg-black/25 p-10 md:p-16 backdrop-blur max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="reservation-heading"
              className="text-3xl md:text-4xl font-semibold text-foreground"
            >
              Reserve Your Table
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Whether you're celebrating waterfront with family or planning a
              sunset date night, our reservations team will help you find the
              perfect table.
            </p>
          </div>

          {canRenderEmbed ? (
            <div className="rounded-3xl overflow-hidden border border-foreground/10 shadow-lg shadow-black/30 bg-white text-black">
              <iframe
                src={embedUrl}
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`${provider} reservation widget`}
              ></iframe>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Phone Reservation Section */}
              <div className="rounded-3xl border border-foreground/10 bg-black/20 p-8 md:p-10 text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Reserve by Phone
                </h3>
                <p className="text-foreground/75 text-base md:text-lg max-w-2xl mx-auto">
                  Online reservations are coming soon. Until then, our hosts are
                  available daily to help you secure a waterfront table, answer
                  menu questions, and coordinate celebrations.
                </p>
                <ul className="text-sm md:text-base text-foreground/70 space-y-2 leading-relaxed max-w-xl mx-auto">
                  <li>• Same-day seating updates and waitlist management</li>
                  <li>
                    • Preferred timing for sunsets, happy hour, and live music
                  </li>
                  <li>• Recommendations for dietary needs or special toasts</li>
                </ul>
                <div className="pt-4">
                  <a
                    href={`tel:${phoneHref}`}
                    onClick={() =>
                      trackEvent(AnalyticsEvent.PHONE_CLICK, {
                        source: 'reservation-section',
                      })
                    }
                    className="inline-block text-2xl md:text-3xl font-semibold text-customGreen hover:text-customGreen/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-customGreen transition-colors"
                    aria-label={`Call Marker 99 at ${displayPhone}`}
                  >
                    {displayPhone}
                  </a>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="rounded-3xl border border-foreground/10 bg-black/20 p-8 md:p-10 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                    Contact Us
                  </h3>
                  <p className="text-foreground/75 text-base md:text-lg">
                    Have a question, planning an event, or want to share
                    feedback? Fill out the form below and we'll get back to you
                    as soon as possible.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={selectedSubject || 'event-inquiry'}
                      onValueChange={(value) => setValue('subject', value)}
                    >
                      <SelectTrigger
                        id="subject"
                        className="bg-background/50 border-foreground/20"
                        aria-invalid={errors.subject ? 'true' : 'false'}
                        aria-describedby={
                          errors.subject ? 'subject-error' : undefined
                        }
                      >
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="event-inquiry">
                          Event Inquiry
                        </SelectItem>
                        <SelectItem value="general-question">
                          General Question
                        </SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="text-sm text-red-400"
                        role="alert"
                      >
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        {...register('name')}
                        className="bg-background/50 border-foreground/20"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={
                          errors.name ? 'name-error' : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-sm text-red-400"
                          role="alert"
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="bg-background/50 border-foreground/20"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={
                          errors.email ? 'email-error' : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-sm text-red-400"
                          role="alert"
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className="bg-background/50 border-foreground/20"
                      placeholder="(321) 555-1234"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={
                        errors.phone ? 'phone-error' : undefined
                      }
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="text-sm text-red-400"
                        role="alert"
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {isEventInquiry && (
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label
                          htmlFor="preferredDate"
                          className="text-foreground"
                        >
                          Preferred Date <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          {...register('preferredDate')}
                          className="bg-background/50 border-foreground/20"
                          aria-invalid={errors.preferredDate ? 'true' : 'false'}
                          aria-describedby={
                            errors.preferredDate
                              ? 'preferredDate-error'
                              : undefined
                          }
                        />
                        {errors.preferredDate && (
                          <p
                            id="preferredDate-error"
                            className="text-sm text-red-400"
                            role="alert"
                          >
                            {errors.preferredDate.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="preferredTime"
                          className="text-foreground"
                        >
                          Preferred Time <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="preferredTime"
                          type="time"
                          {...register('preferredTime')}
                          className="bg-background/50 border-foreground/20"
                          aria-invalid={errors.preferredTime ? 'true' : 'false'}
                          aria-describedby={
                            errors.preferredTime
                              ? 'preferredTime-error'
                              : undefined
                          }
                        />
                        {errors.preferredTime && (
                          <p
                            id="preferredTime-error"
                            className="text-sm text-red-400"
                            role="alert"
                          >
                            {errors.preferredTime.message}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {isEventInquiry && (
                    <>
                      <div className="space-y-2">
                        <Label
                          htmlFor="numberOfPeople"
                          className="text-foreground"
                        >
                          Number of People{' '}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="numberOfPeople"
                          type="number"
                          min="1"
                          {...register('numberOfPeople')}
                          className="bg-background/50 border-foreground/20"
                          placeholder="Enter number of guests"
                          aria-invalid={
                            errors.numberOfPeople ? 'true' : 'false'
                          }
                          aria-describedby={
                            errors.numberOfPeople
                              ? 'numberOfPeople-error'
                              : undefined
                          }
                        />
                        {errors.numberOfPeople && (
                          <p
                            id="numberOfPeople-error"
                            className="text-sm text-red-400"
                            role="alert"
                          >
                            {errors.numberOfPeople.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="locationPreference"
                          className="text-foreground"
                        >
                          Location Preference{' '}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={watch('locationPreference') || ''}
                          onValueChange={(value) =>
                            setValue('locationPreference', value)
                          }
                        >
                          <SelectTrigger
                            id="locationPreference"
                            className="bg-background/50 border-foreground/20"
                            aria-invalid={
                              errors.locationPreference ? 'true' : 'false'
                            }
                            aria-describedby={
                              errors.locationPreference
                                ? 'locationPreference-error'
                                : undefined
                            }
                          >
                            <SelectValue placeholder="Select location preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inside">Inside</SelectItem>
                            <SelectItem value="outside">Outside</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.locationPreference && (
                          <p
                            id="locationPreference-error"
                            className="text-sm text-red-400"
                            role="alert"
                          >
                            {errors.locationPreference.message}
                          </p>
                        )}
                        {errors.numberOfPeople &&
                          errors.numberOfPeople.message?.includes(
                            'location',
                          ) && (
                            <p
                              id="locationPreference-error"
                              className="text-sm text-red-400"
                              role="alert"
                            >
                              Location preference is required
                            </p>
                          )}
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-foreground">
                      {isEventInquiry
                        ? 'Notes'
                        : selectedSubject === 'general-question'
                          ? 'Your Question'
                          : selectedSubject === 'feedback'
                            ? 'Your Feedback'
                            : selectedSubject === 'complaint'
                              ? 'Details'
                              : 'Message'}
                      {!isEventInquiry && (
                        <span className="text-red-500"> *</span>
                      )}
                    </Label>
                    <Textarea
                      id="notes"
                      rows={4}
                      {...register('notes')}
                      className="bg-background/50 border-foreground/20"
                      placeholder={
                        isEventInquiry
                          ? 'Any additional comments or requests...'
                          : selectedSubject === 'general-question'
                            ? 'Please provide details about your question...'
                            : selectedSubject === 'feedback'
                              ? 'We would love to hear your thoughts...'
                              : selectedSubject === 'complaint'
                                ? 'Please describe the issue...'
                                : 'Please provide more details...'
                      }
                      aria-invalid={errors.notes ? 'true' : 'false'}
                      aria-describedby={
                        errors.notes ? 'notes-error' : undefined
                      }
                    />
                    {errors.notes && (
                      <p
                        id="notes-error"
                        className="text-sm text-red-400"
                        role="alert"
                      >
                        {errors.notes.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-customGreen hover:bg-customGreen/90 text-white font-semibold px-8 py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
