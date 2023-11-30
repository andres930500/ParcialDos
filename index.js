const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const loggerMiddleware = require('./middlewares/logger.middleware');
const app = express();
require('dotenv').config();
const routerApi = require('./routes');
const PORT = process.env.PORT || 3000;


// Crear directorio de logs
const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

// Middleware para registrar logs en archivos
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' })
}));

// Permitir tráfico en formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Definir las rutas de la aplicación
routerApi(app);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
