import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import {
  trackConversion,
  AnalyticsEvent,
} from '../../../../lib/analytics/events';
import {
  FormField,
  TextInput,
  TextAreaInput,
  SelectInput,
} from '../../../shared/form/FormField';
import { Button } from '../../../ui/button';
import { largePartyFormSchema } from '../schemas';

const SUBJECT_OPTIONS = [
  { value: 'event-inquiry', label: 'Event Inquiry' },
  { value: 'general-question', label: 'General Question' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'complaint', label: 'Complaint' },
  { value: 'other', label: 'Other' },
];

const LOCATION_OPTIONS = [
  { value: 'inside', label: 'Inside' },
  { value: 'outside', label: 'Outside' },
];

const getNotesLabel = (subject, isEventInquiry) => {
  if (isEventInquiry) {
    return 'Notes';
  }
  if (subject === 'general-question') {
    return 'Your Question';
  }
  if (subject === 'feedback') {
    return 'Your Feedback';
  }
  if (subject === 'complaint') {
    return 'Details';
  }
  return 'Message';
};

const getNotesPlaceholder = (subject, isEventInquiry) => {
  if (isEventInquiry) {
    return 'Any additional comments or requests...';
  }
  if (subject === 'general-question') {
    return 'Please provide details about your question...';
  }
  if (subject === 'feedback') {
    return 'We would love to hear your thoughts...';
  }
  if (subject === 'complaint') {
    return 'Please describe the issue...';
  }
  return 'Please provide more details...';
};

export const ContactForm = ({ isSubmitting, setIsSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(largePartyFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
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
      const response = await fetch('/api/contact', {
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

      trackConversion(AnalyticsEvent.RESERVATION_SUBMIT, 50, 'USD', {
        source: 'form',
        subject: data.subject,
        numberOfPeople: data.numberOfPeople || 'N/A',
      });

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
    <div className="rounded-3xl border border-foreground/10 bg-black/20 p-8 md:p-10 space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
          Contact Us
        </h3>
        <p className="text-foreground/75 text-base md:text-lg">
          Have a question, planning an event, or want to share feedback? Fill
          out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <FormField id="subject" label="Subject" required error={errors.subject}>
          <SelectInput
            id="subject"
            value={selectedSubject || 'event-inquiry'}
            onValueChange={(value) => setValue('subject', value)}
            error={errors.subject}
            placeholder="Select a subject"
            options={SUBJECT_OPTIONS}
          />
        </FormField>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField id="name" label="Name" required error={errors.name}>
            <TextInput
              id="name"
              type="text"
              register={register('name')}
              error={errors.name}
            />
          </FormField>

          <FormField id="email" label="Email" required error={errors.email}>
            <TextInput
              id="email"
              type="email"
              register={register('email')}
              error={errors.email}
            />
          </FormField>
        </div>

        <FormField id="phone" label="Phone" required error={errors.phone}>
          <TextInput
            id="phone"
            type="tel"
            register={register('phone')}
            error={errors.phone}
            placeholder="(321) 555-1234"
          />
        </FormField>

        {isEventInquiry && (
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              id="preferredDate"
              label="Preferred Date"
              required
              error={errors.preferredDate}
            >
              <TextInput
                id="preferredDate"
                type="date"
                register={register('preferredDate')}
                error={errors.preferredDate}
              />
            </FormField>

            <FormField
              id="preferredTime"
              label="Preferred Time"
              required
              error={errors.preferredTime}
            >
              <TextInput
                id="preferredTime"
                type="time"
                register={register('preferredTime')}
                error={errors.preferredTime}
              />
            </FormField>
          </div>
        )}

        {isEventInquiry && (
          <>
            <FormField
              id="numberOfPeople"
              label="Number of People"
              required
              error={errors.numberOfPeople}
            >
              <TextInput
                id="numberOfPeople"
                type="number"
                min="1"
                register={register('numberOfPeople')}
                error={errors.numberOfPeople}
                placeholder="Enter number of guests"
              />
            </FormField>

            <FormField
              id="locationPreference"
              label="Location Preference"
              required
              error={errors.locationPreference}
            >
              <SelectInput
                id="locationPreference"
                value={watch('locationPreference') || undefined}
                onValueChange={(value) => setValue('locationPreference', value)}
                error={errors.locationPreference}
                placeholder="Select location preference"
                options={LOCATION_OPTIONS}
              />
            </FormField>
          </>
        )}

        <FormField
          id="notes"
          label={getNotesLabel(selectedSubject, isEventInquiry)}
          required={!isEventInquiry}
          error={errors.notes}
        >
          <TextAreaInput
            id="notes"
            register={register('notes')}
            error={errors.notes}
            placeholder={getNotesPlaceholder(selectedSubject, isEventInquiry)}
          />
        </FormField>

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
  );
};
