const express = require("express");

const routes = express.Router();
const controller = require("../Controllers/users");
const validate = require("../Middleware/validate");

routes.get("/", validate("admin"), controller.getAll);
routes.get("/", controller.getEmail);
routes.post("/", validate("admin"), controller.add);

module.exports = routes;
