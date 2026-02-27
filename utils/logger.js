// utils/logger.js
function log(message) {
  console.log(`[${new Date().toISOString()}] ℹ️  ${message}`);
}

function logError(message) {
  console.log(`[${new Date().toISOString()}] ❌ ERROR: ${message}`);
}

function logSuccess(message) {
  console.log(`[${new Date().toISOString()}] ✅ SUCCESS: ${message}`);
}

module.exports = { log, logError, logSuccess };

//Bonus 3: Semantic Versioning
// 16   .   0   .   0
// MAJOR   MINOR   PATCH
//^  = accept minor and patch updates, but NOT major
//~  = accept patch updates only
//*  = accept any version (dangerous!)