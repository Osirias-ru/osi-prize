const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'HNY API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/Osirias-ru/wm-api/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `https://api.hny.osirias.ru/`,
    },
    {
      url: `http://localhost:${config.port}/`,
    },
  ],
};

module.exports = swaggerDef;
