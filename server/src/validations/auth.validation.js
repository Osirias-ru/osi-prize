const Joi = require('joi');
const { password } = require('./custom.validation');

const telegramOAuth = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  }),
};

const telegramOAuthCallback = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  telegramOAuth,
  telegramOAuthCallback,
};