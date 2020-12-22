const jwt = require("jsonwebtoken");
const respon = require("../Helpers/respons");

const checkToken = (roles) => function (req, res, next) {
  const { authtoken } = req.headers;

  if (!authtoken) {
    const result = {
      msg: "Login first",
    };
    return respon(res, 401, result);
  }

  jwt.verify(authtoken, process.env.JWT_KEYS, (err, decode) => {
    if (err) {
      return respon(res, 401, err);
    }

    let valid = false;

    roles.map((role) => {
      if (decode.role === role) {
        valid = true;
      }
    });
    // if (roles === decode.role) {
    //   valid = true;
    // }

    if (valid) {
      next();
    } else {
      return respon(res, 400, { msg: "Access is not permitted" });
    }
  });
};

module.exports = checkToken;
