const model = require("../Models/users");
const respon = require("../Helpers/respons");
const hashPassword = require("../Helpers/hash");

class Users {
  async add(req, res) {
    try {
      const { email, password } = req.body;
      if (email <= 0) {
        return respon(res, 400, { msg: "Email is required" });
      }
      if (password <= 0) {
        return respon(res, 400, { msg: "Password is required" });
      }

      const emailDB = await model.getEmail(req.body.email);
      console.log(emailDB);
      if (emailDB.length >= 1) {
        return respon(res, 400, { msg: "Mail is registered" });
      }

      const newPassword = await hashPassword(req.body.password);
      const users = {
        email: req.body.email,
        password: newPassword,
        role: req.body.role,
      };

      const data = await model.add(users);

      return respon(res, 200, data);
    } catch (error) {
      return respon(res, 400, error);
    }
  }

  async getAll(req, res) {
    try {
      const data = await model.getAll();
      return respon(res, 200, data);
    } catch (error) {
      return respon(res, 400, error);
    }
  }

  async getEmail(req, res) {
    try {
      const data = await model.getEmail(req.body.email);
      return respon(res, 200, data);
    } catch (error) {
      return respon(res, 400, error);
    }
  }
}

module.exports = new Users();
