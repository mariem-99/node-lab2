// utils/helpers.js
// UTILITY HELPER FUNCTIONS
function formatDate(date) {
 return new Date(date).toLocaleDateString('en-US', {
 year: 'numeric',
 month: 'long',
 day: 'numeric'
 });
}
function calculateEventDuration(startDate, endDate) {
 const start = new Date(startDate);
 const end = new Date(endDate);
 const hours = (end - start) / (1000 * 60 * 60);
 return hours;
}
function getEventStatus(eventDate) {
 const now = new Date();
 const event = new Date(eventDate);

 if (event < now) return 'past';
 if (event.toDateString() === now.toDateString()) return 'today';
 return 'upcoming';
}
module.exports = {
 formatDate,
 calculateEventDuration,
 getEventStatus
};