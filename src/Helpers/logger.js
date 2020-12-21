const { info } = require("winston");
const winston = require("winston");

function logger(log) {
  const logConfiguration = [
    new winston.transports.File({
      level: info,
      filename: "info.log",
      json: true,
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    }),
  ];

  const logger = winston.createLogger(logConfiguration);

  logger.info(log);
}

module.exports = logger;
