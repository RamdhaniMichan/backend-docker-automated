const bcr = require("bcrypt");
const jwt = require("jsonwebtoken");
const model = require("../Models/users");
const respon = require("../Helpers/respons");

class Auth {
  login = async (req, res) => {
    try {
      const passDB = await model.getEmail(req.body.email);
      const passUser = req.body.password;
      
      if (passDB.length <= 0) {
        
        return respon(res, 200, { msg: "Email is not registered" });
      }
      const check = await bcr.compare(passUser, passDB[0].password);
      const role = passDB[0].role

      if (check) {
        const result = await this.setToken(req.body.email, role);
        return respon(res, 200, result);
      }
      return respon(res, 200, { msg: "Check Password" });
    } catch (error) {
      return respon(res, 500, error);
    }
  }

  setToken = async(email, role) => {
    try {
      const payloads = {
        email,
        role : role
      };

      const token = jwt.sign(payloads, process.env.JWT_KEYS, { expiresIn: '1d' });

      const result = {
        msg: "Token created",
        token,
        role
      };

      return result;
    } catch (error) {
      throw error;
    }
  }
}


module.exports = new Auth();
