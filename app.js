require("dotenv/config");
const express = require("express");

const app = express();
const bodyPars = require("body-parser");
const routes = require("./src/main");
const db = require("./src/Config/db");

app.use(bodyPars.urlencoded({ extended: false }));
app.use(bodyPars.json());
app.use(routes);

db.connect()
  .then(console.log("Database Connect"))
  .catch((err) => console.log("Database Not Connect", err));

app.listen(8081, () => {
  console.log("Server running on port http://localhost:8081");
});
