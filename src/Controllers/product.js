const product = {};
const model = require("../Models/product");
const respon = require("../Helpers/respons");

product.get = async (req, res) => {
  try {
    const result = await model.get();
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 404, error);
  }
};

product.getByName = async (req, res) => {
  try {
    const result = await model.getByName(req.query.name);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 404, error);
  }
};

product.findBy = async (req, res) => {
  try {
    const queryCategory = req.query.category;
    const queryPrice = req.query.price;
    const querySort = req.query.sort;
    const result = await model.findBy(queryCategory, queryPrice, querySort);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 404, error);
  }
};

product.add = async (req, res) => {
  try {
    const result = await model.add(req.body);
    return respon(res, 201, result);
  } catch (error) {
    return respon(res, 404, error);
  }
};

product.update = async (req, res) => {
  try {
    const result = await model.update(req.body);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 404, error);
  }
};

product.del = async (req, res) => {
  try {
    const result = await model.del(req.params.id);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 404, error);
  }
};

module.exports = product;
