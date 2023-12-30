const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'PRIZE API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/Osirias-ru/wm-api/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `https://api.prize.osirias.ru/`,
    },
    {
      url: `http://localhost:${config.port}/`,
    },
  ],
};

module.exports = swaggerDef;
