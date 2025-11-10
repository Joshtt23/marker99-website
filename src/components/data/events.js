import eventsData from '../../data/events.json';

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

export function getUpcomingEvents(limit = 3, referenceDate = new Date()) {
  const now = referenceDate.getTime();

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
      };
    })
    .filter(Boolean)
    .filter((event) => event.start.getTime() >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  return normalized.slice(0, limit);
}
