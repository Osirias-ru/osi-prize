const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const config = require("@config/config");
const httpStatus = require("http-status");
const routes = require("./routes/v1");

const { authLimiter } = require("./middlewares/rateLimiter");
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("@utils/ApiError");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());

app.use(express.static("public"));

if (config.env === "production") {
  app.use("/auth", authLimiter);
}

app.use("/", routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Не найдено"));
});

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
