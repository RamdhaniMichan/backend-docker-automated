const express = require("express");

const routes = express.Router();
const controller = require("../Controllers/history");
const validate = require("../Middleware/validate");

routes.get("/", controller.get);
routes.post("/", validate(["admin"]), controller.add);
routes.get("/total", validate(["admin"]), controller.getTotal);
routes.get("/amount", validate(["admin"]), controller.getAmount);
// routes.put("/", controller.update);
// routes.delete("/:id", controller.del);

module.exports = routes;
