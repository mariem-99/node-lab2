// Lab2_Modern.mjs
// Using modern ES module syntax
import { validateEvent, validateEmail } from './utils/validators.mjs';
import { formatDate } from './utils/helpers.mjs';
console.log('🎯 MODERN ES MODULES\n');
const event = {
 title: 'Conference',
 date: '2024-03-15',
 capacity: 100
};
const result = validateEvent(event);
console.log('Valid?', result.isValid);