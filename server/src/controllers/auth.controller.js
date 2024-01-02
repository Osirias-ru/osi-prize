const httpStatus = require("http-status");
const catchAsync = require("@utils/catchAsync");
const crypto = require("crypto");
const URL = require("url");
const querystring = require("querystring");
/*const {
  authService,
  userService,
  tokenService,
  emailService,
} = require("@services");*/
const User = require("@models/user.model");

const telegramOAuth = catchAsync(async (req, res, next) => {
});

const telegramOAuthCallback = catchAsync(async (req, res, next) => {
  const telegramData = req.body;

  const parsedUrl = new URL(req.url);
  const queryParams = querystring.parse(parsedUrl.query);

  const hash = queryParams.hash;
  const payload = JSON.parse(
    Buffer.from(queryParams.payload, "base64").toString()
  );

  const secretKey = crypto
    .createHash("sha256")
    .update(botToken + publicKey)
    .digest();
  const checkHash = crypto
    .createHmac("sha256", secretKey)
    .update(queryParams.payload)
    .digest("hex");

  if (hash !== checkHash) {
    res.status(400).send("Invalid hash");
    return;
  }

  const user = payload.user;
  const userId = user.id;
  const firstName = user.first_name;
  const username = user.username;

  const userExists = await User.findOne({ userId });

  if (!userExists) {
    const newUser = new User({
      userId,
      firstName,
      username,
    });

    await newUser.save();
  }

  return res.status(httpStatus.PERMANENT_REDIRECT).redirect("/" + username);
});

module.exports = {
  telegramOAuth,
  telegramOAuthCallback,
};
