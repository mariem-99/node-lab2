// utils/validators.js
// REUSABLE VALIDATION FUNCTIONS
function validateEvent(event) {
 const errors = [];

 // Check title
 if (!event.title || event.title.trim() === '') {
 errors.push('Event title is required');
 } else if (event.title.length > 100) {
 errors.push('Title cannot exceed 100 characters');
 }

 // Check date
 if (!event.date) {
 errors.push('Event date is required');
 } else if (new Date(event.date) <= new Date()) {
 errors.push('Event date must be in the future');
 }

 // Check capacity
 if (!event.capacity || event.capacity < 1) {
 errors.push('Capacity must be at least 1');
 }

 return {
 isValid: errors.length === 0,
 errors: errors
 };
}
function validateEmail(email) {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return emailRegex.test(email);
}
function validatePassword(password) {
 if (password.length < 6) {
 return { isValid: false, message: 'Password must be at least 6 characters' };
 }
 return { isValid: true };
}
// Additional validators 
//username, phone number, URL
function validateUsername(username) {
  if (!username || username.trim() === '') {
    return { isValid: false, message: 'Username is required' };
  }
  if (username.length < 3) {
    return { isValid: false, message: 'Username must be at least 3 characters' };
  }
  if (username.length > 20) {
    return { isValid: false, message: 'Username cannot exceed 20 characters' };
  }
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return { isValid: false, message: 'Username can only contain letters, numbers, and underscores' };
  }
  return { isValid: true };
}

function validatePhoneNumber(phone) {
  const phoneRegex = /^\+?[\d\s\-()]{7,15}$/;
  if (!phoneRegex.test(phone)) {
    return { isValid: false, message: 'Invalid phone number format' };
  }
  return { isValid: true };
}

function validateUrl(url) {
  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return { isValid: false, message: 'Invalid URL format' };
  }
}
// EXPORT these functions so other files can use them
module.exports = {
  validateEvent,
  validateEmail,
  validatePassword,
  validateUsername,
  validatePhoneNumber,
  validateUrl
};