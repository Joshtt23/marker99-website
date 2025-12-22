import eventsData from '../../data/events.json';

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

const DATE_ONLY_FORMAT = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
});

/**
 * Get upcoming events from today forward
 * @param {number} limit - Maximum number of events to return
 * @param {Date} referenceDate - Date to use as reference (defaults to today)
 * @returns {Array} Array of upcoming events
 */
export function getUpcomingEvents(limit = 3, referenceDate = new Date()) {
  // Set reference date to start of today (midnight) for accurate filtering
  const today = new Date(referenceDate);
  today.setHours(0, 0, 0, 0);
  const now = today.getTime();

  const normalized = eventsData
    .map((event) => {
      const start = new Date(event.startDate);
      if (Number.isNaN(start.getTime())) {
        return null;
      }
      return {
        ...event,
        start,
        formattedDate: DATE_FORMAT.format(start),
        dateOnly: DATE_ONLY_FORMAT.format(start),
      };
    })
    .filter(Boolean)
    .filter((event) => event.start.getTime() >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  return normalized.slice(0, limit);
}

/**
 * Get all upcoming events (no limit)
 * @param {Date} referenceDate - Date to use as reference (defaults to today)
 * @returns {Array} Array of all upcoming events
 */
export function getAllUpcomingEvents(referenceDate = new Date()) {
  const today = new Date(referenceDate);
  today.setHours(0, 0, 0, 0);
  const now = today.getTime();

  const normalized = eventsData
    .map((event) => {
      const start = new Date(event.startDate);
      if (Number.isNaN(start.getTime())) {
        return null;
      }
      return {
        ...event,
        start,
        formattedDate: DATE_FORMAT.format(start),
        dateOnly: DATE_ONLY_FORMAT.format(start),
      };
    })
    .filter(Boolean)
    .filter((event) => event.start.getTime() >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  return normalized;
}

/**
 * Get events for a specific month
 * @param {number} year - Year
 * @param {number} month - Month (0-11)
 * @returns {Array} Array of events in that month
 */
export function getEventsForMonth(year, month) {
  return eventsData
    .map((event) => {
      const start = new Date(event.startDate);
      if (Number.isNaN(start.getTime())) {
        return null;
      }
      if (start.getFullYear() === year && start.getMonth() === month) {
        return {
          ...event,
          start,
          formattedDate: DATE_FORMAT.format(start),
          dateOnly: DATE_ONLY_FORMAT.format(start),
        };
      }
      return null;
    })
    .filter(Boolean)
    .sort((a, b) => a.start.getTime() - b.start.getTime());
}
