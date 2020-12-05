const category = {};
const model = require("../Models/category");
const respon = require("../Helpers/respons");

category.get = async (req, res) => {
  try {
    const result = await model.get();
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 400, error);
  }
};

category.add = async (req, res) => {
  try {
    const result = await model.add(req.body);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 400, error);
  }
};

category.update = async (req, res) => {
  try {
    const result = await model.update(req.body);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 400, error);
  }
};

category.del = async (req, res) => {
  try {
    const result = await model.del(req.params.id);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 400, error);
  }
};
module.exports = category;
