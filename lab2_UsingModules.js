// Lab2_UsingModules.js
// HOW TO USE YOUR NEW MODULES
// IMPORT the modules you created
const { validateEvent, validateEmail } = require('./utils/validators');
const { formatDate, getEventStatus } = require('./utils/helpers');
const { MAX_EVENT_TITLE_LENGTH } = require('./config/constants');
console.log('🎯 TESTING YOUR MODULES\n');
console.log('='.repeat(50) + '\n');
// TEST 1: Validate an event
console.log('TEST 1: Validating an event\n');
const goodEvent = {
 title: 'Tech Conference 2024',
 date: '2024-03-15',
 capacity: 500
};
const validationResult = validateEvent(goodEvent);
console.log('Event:', goodEvent);
console.log('Is valid?', validationResult.isValid);
console.log('Errors:', validationResult.errors);
console.log();
// TEST 2: Validate a BAD event
console.log('TEST 2: Validating a BAD event\n');
const badEvent = {
 title: '', // Empty!
 date: '2020-01-01', // Past date!
 capacity: 0 // Invalid capacity!
};
const badValidation = validateEvent(badEvent);
console.log('Event:', badEvent);
console.log('Is valid?', badValidation.isValid);
console.log('Errors:');
badValidation.errors.forEach(err => console.log(` ❌ ${err}`));
console.log();
// TEST 3: Format dates
console.log('TEST 3: Formatting dates\n');
const eventDate = '2024-03-15';
console.log('Raw date:', eventDate);
console.log('Formatted:', formatDate(eventDate));
console.log();
// TEST 4: Get event status
console.log('TEST 4: Get event status\n');
const pastEvent = '2020-01-01';
const upcomingEvent = '2025-12-31';
console.log(`Event on ${pastEvent}: ${getEventStatus(pastEvent)}`);
console.log(`Event on ${upcomingEvent}: ${getEventStatus(upcomingEvent)}`);
console.log();
// TEST 5: Validate email
console.log('TEST 5: Validating emails\n');
const emails = [
 'user@example.com',
 'invalid-email',
 'test@domain.co.uk'
];
emails.forEach(email => {
 const isValid = validateEmail(email);
 console.log(`${email}: ${isValid ? '✅ Valid' : '❌ Invalid'}`);
});
console.log('\n✅ All module tests completed!');
const env = require('./config/environment');
console.log(`App: ${env.app_name}`);
console.log(`Port: ${env.port}`);
console.log(`Environment: ${env.env}`);