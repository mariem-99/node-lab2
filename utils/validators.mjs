// utils/validators.mjs (ES Module version)
// utils/validators.mjs (ES Module version)
export function validateEvent(event) {
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

export function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function validatePassword(password) {
	if (password.length < 6) {
		return { isValid: false, message: 'Password must be at least 6 characters' };
	}
	return { isValid: true };
}