const Joi = require('joi');

const uploadImage = {
  files: Joi.any().required()
};

module.exports = {
  uploadImage,
};