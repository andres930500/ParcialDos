// logger.middleware.js

const fs = require('fs');
const path = require('path');
const moment = require('moment');

const logDirectory = path.join(__dirname, '..', 'logs');
const logFilePath = path.join(logDirectory, 'access.log');

// Crea el directorio si no existe
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

function loggerMiddleware(req, res, next) {
  const { method, originalUrl } = req;
  const timestamp = moment().format('YYYY/MM/DD HH:mm');
  const logLine = `${timestamp} [${method} ${originalUrl}]`;

  // Log file path
  console.log('Log file path:', logFilePath);

  // Log to console
  console.log(logLine);

  // Log to file
  fs.appendFile(logFilePath, logLine + '\n', (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });

  next();
}

module.exports = {loggerMiddleware}
