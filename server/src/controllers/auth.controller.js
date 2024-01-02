const httpStatus = require("http-status");
const catchAsync = require("@utils/catchAsync");
/*const {
  authService,
  userService,
  tokenService,
  emailService,
} = require("@services");*/

const telegramOAuth = catchAsync(async (req, res, next) => {
  const telegramData = req.body;

  // Обработка данных, например, сохранение информации о пользователе
  console.log("Получены данные от Telegram:", telegramData);

  // Возвращает подтверждение (200 OK)
  res.status(200).end();
});

const telegramOAuthCallback = catchAsync(async (req, res, next) => {});

module.exports = {
  telegramOAuth,
  telegramOAuthCallback,
};
