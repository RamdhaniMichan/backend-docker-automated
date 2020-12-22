const product = {};
const model = require("../Models/product");
const respon = require("../Helpers/respons");
const cloadUpload = require("../Helpers/cloadUpload");
const { redisdb } = require("../Config/redis");

product.get = async (req, res) => {
  try {
    const result = await model.get();
    const cache = JSON.stringify(result);
    redisdb.setex("product", 60, cache);
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
    const {
      name, description, price, idcategory,
    } = req.body;
    if (name <= 0) {
      return respon(res, 500, { msg: "Name is required" });
    }
    if (description <= 0) {
      return respon(res, 500, { msg: "Description is required" });
    }
    if (price <= 0) {
      return respon(res, 500, { msg: "Price is required" });
    }
    if (req.file === undefined) {
      return respon(res, 500, { msg: "Image is required" });
    }
    if (idcategory <= 0) {
      return respon(res, 500, { msg: "Id Category is required" });
    }
    const imgUrl = await cloadUpload(req.file.path);
    const result = await model.add(req.body, imgUrl);
    return respon(res, 201, result);
  } catch (error) {
    return respon(res, 404, error);
  }
};

product.update = async (req, res) => {
  try {
    const {
      name, description, price, idcategory,
    } = req.body;
    if (name <= 0) {
      return respon(res, 500, { msg: "Name is required" });
    }
    if (description <= 0) {
      return respon(res, 500, { msg: "Description is required" });
    }
    if (price <= 0) {
      return respon(res, 500, { msg: "Price is required" });
    }
    if (req.file === undefined) {
      return respon(res, 500, { msg: "Image is required" });
    }
    if (idcategory <= 0) {
      return respon(res, 500, { msg: "Id Category is required" });
    }
    const imgUrl = await cloadUpload(req.file.path);
    const result = await model.update(req.body, imgUrl);
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
