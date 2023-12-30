const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createShop = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getShops = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getShop = {
  params: Joi.object().keys({
    shopId: Joi.string().custom(objectId),
  }),
};

const updateShop = {
  params: Joi.object().keys({
    shopId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    password: Joi.string().custom(password),
    logo: Joi.string(),
    description: Joi.string()
  })
  .min(1),
};

const deleteShop = {
  params: Joi.object().keys({
    shopId: Joi.string().custom(objectId),
  }),
};

const getShopCatalog = {
  params: Joi.object().keys({
    shopId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    articul: Joi.number().required().integer(),
  })
}

const createShopCatalog = {
  params: Joi.object().keys({
    shopId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().integer(),
    quantity: Joi.number().required().integer(),
    images: Joi.array().items(Joi.string()).required(),
    tags: Joi.array().items(Joi.string()).required(),
    squares: Joi.array().items(Joi.string()).required(),
  })
}

const updateShopCatalog = {
  params: Joi.object().keys({
    shopId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    articul: Joi.number().required().integer(),
  }),
  body: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    price: Joi.number().integer(),
    quantity: Joi.number().integer(),
    images: Joi.array().items(Joi.string()),
    tags: Joi.array().items(Joi.string()),
    squares: Joi.array().items(Joi.string())
  }).min(1),
}

const deleteShopCatalog = {
  params: Joi.object().keys({
    shopId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    articul: Joi.number().required().integer(),
  })
}

module.exports = {
  createShop,
  getShop,
  getShops,
  updateShop,
  deleteShop,
  getShopCatalog,
  createShopCatalog,
  updateShopCatalog,
  deleteShopCatalog
};
