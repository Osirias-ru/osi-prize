const Logger = require("@ptkdev/logger");

const options = {
	language: "ru",
	colors: true,
	debug: true,
	info: true,
	warning: true,
	error: true,
	sponsor: false,
	write: false,
};

const logger = new Logger(options);

module.exports = logger;
