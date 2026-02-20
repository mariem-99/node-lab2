// utils/helpers.mjs
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function calculateEventDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const hours = (end - start) / (1000 * 60 * 60);
  return hours;
}

export function getEventStatus(eventDate) {
  const now = new Date();
  const event = new Date(eventDate);

  if (event < now) return 'past';
  if (event.toDateString() === now.toDateString()) return 'today';
  return 'upcoming';
}
