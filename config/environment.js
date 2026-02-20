// config/environment.js
require('dotenv').config();
module.exports = {
 app_name: process.env.APP_NAME || 'Event App',
 port: process.env.APP_PORT || 3000,
 env: process.env.NODE_ENV || 'development'
};