const httpStatus = require("http-status");
const catchAsync = require("@utils/catchAsync");
const {
  authService,
  userService,
  tokenService,
  emailService,
} = require("@services");

const telegramOAuth = catchAsync(async (req, res, next) => {
  
});

const telegramOAuthCallback = catchAsync(async (req, res, next) => {
  
});

module.exports = {
  telegramOAuth,
  telegramOAuthCallback,
};
