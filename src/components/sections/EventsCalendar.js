'use client';

import React, { useState, useMemo } from 'react';

import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import { getEventsForMonth } from '../../lib/helpers/events';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function EventsCalendar({ isOpen, onClose }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthEvents = useMemo(
    () => getEventsForMonth(year, month),
    [year, month],
  );

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  // Create calendar grid
  const calendarDays = [];
  // Empty cells for days before month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const navigateMonth = (direction) => {
    setSelectedDay(null); // Reset selected day when changing months
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDay = (day) => {
    if (!day) {
      return [];
    }
    return monthEvents.filter((event) => event.start.getDate() === day);
  };

  const handleDayClick = (day) => {
    if (!day) {
      return;
    }
    const dayEvents = getEventsForDay(day);
    if (dayEvents.length > 0) {
      setSelectedDay(day);
    } else {
      setSelectedDay(null);
    }
  };

  const selectedDayEvents = selectedDay ? getEventsForDay(selectedDay) : [];

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Events calendar"
    >
      <div
        className="bg-background rounded-3xl border border-foreground/10 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-foreground/10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Events Calendar
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
            aria-label="Close calendar"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Calendar */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <h3 className="text-xl font-semibold text-foreground">
              {MONTHS[month]} {year}
            </h3>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {DAYS.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-semibold text-foreground/70 py-2"
              >
                {day}
              </div>
            ))}
            {calendarDays.map((day, index) => {
              const dayEvents = getEventsForDay(day);
              const hasEvents = dayEvents.length > 0;
              const isToday =
                day &&
                new Date().toDateString() ===
                  new Date(year, month, day).toDateString();

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDayClick(day)}
                  disabled={!day}
                  className={`min-h-[60px] p-1 border border-foreground/10 rounded-lg text-left transition-colors ${
                    day
                      ? 'bg-surface-alt hover:bg-foreground/5'
                      : 'bg-transparent'
                  } ${isToday ? 'ring-2 ring-customGreen' : ''} ${
                    selectedDay === day
                      ? 'ring-2 ring-customGreen bg-customGreen/10'
                      : ''
                  } ${!day ? 'cursor-default' : 'cursor-pointer'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen`}
                >
                  {day && (
                    <>
                      <div
                        className={`text-sm font-medium mb-1 ${
                          isToday ? 'text-customGreen' : 'text-foreground/80'
                        }`}
                      >
                        {day}
                      </div>
                      {hasEvents && (
                        <div className="space-y-1">
                          {dayEvents.map((event) => (
                            <div
                              key={event.startDate}
                              className="text-xs bg-customGreen/20 text-customGreen px-1 py-0.5 rounded truncate"
                              title={event.title}
                            >
                              {event.title}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Day Events */}
          {selectedDayEvents.length > 0 && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Events on {MONTHS[month]} {selectedDay}
              </h4>
              <div className="space-y-4">
                {selectedDayEvents.map((event) => (
                  <div
                    key={event.startDate}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-foreground/10 bg-black/20"
                  >
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h5 className="text-lg font-semibold text-foreground mb-1">
                        {event.title}
                      </h5>
                      <p className="text-sm text-customGreen mb-2">
                        {event.formattedDate}
                      </p>
                      <p className="text-sm text-foreground/75">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Events for Month (if no day selected) */}
          {selectedDayEvents.length === 0 && monthEvents.length > 0 && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Events in {MONTHS[month]}
              </h4>
              <div className="space-y-4">
                {monthEvents.map((event) => (
                  <div
                    key={event.startDate}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-foreground/10 bg-black/20"
                  >
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h5 className="text-lg font-semibold text-foreground mb-1">
                        {event.title}
                      </h5>
                      <p className="text-sm text-customGreen mb-2">
                        {event.formattedDate}
                      </p>
                      <p className="text-sm text-foreground/75">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsCalendar;
