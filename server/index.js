require("dotenv").config();
require("module-alias/register");
const mongoose = require('mongoose');
const app = require('@src/app');
const config = require('@config/config');
const logger = require('@config/logger');

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Подключена MongoDB');
  server = app.listen(config.port, () => {
    logger.info(`Подключение утановлено на порт ${config.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Сервер закрыт');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('Получен SIGTERM');
  if (server) {
    server.close();
  }
});
