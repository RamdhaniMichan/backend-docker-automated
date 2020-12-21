const respon = require("../Helpers/respons");
const redis = require("../Config/redis");

const getAll = (req, res, next) => {
  redis.redisdb.get("product", (err, data) => {
    if (err) {
      return respon(res, 500, err);
    }

    if (data != null) {
      const result = JSON.parse(data);
      return respon(res, 200, result);
    }
    next();
  });
};

module.exports = getAll;
