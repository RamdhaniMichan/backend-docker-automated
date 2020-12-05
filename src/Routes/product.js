const express = require("express");

const routes = express.Router();
const controller = require("../Controllers/product");

routes.get("/", controller.get);
routes.get("/names", controller.getByName);
routes.get("/find", controller.findBy);
routes.post("/", controller.add);
routes.put("/", controller.update);
routes.delete("/:id", controller.del);

module.exports = routes;
