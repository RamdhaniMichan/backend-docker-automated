const express = require("express");

const routes = express.Router();
const controller = require("../Controllers/history");
const validate = require("../Middleware/validate");

routes.get("/", controller.get);
routes.post("/", validate(["admin", "user"]), controller.add);
routes.get("/total", validate(["admin", "user"]), controller.getTotal);
routes.get("/amount", validate(["admin", "user"]), controller.getAmount);
// routes.put("/", controller.update);
// routes.delete("/:id", controller.del);

module.exports = routes;
