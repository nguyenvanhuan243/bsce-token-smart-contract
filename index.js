const express = require("express");
const app = express();

const bodyParser = require("body-parser")
require("dotenv").config();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/routes"); //importing route
routes(app)
app.listen(port, () => console.log(`Server connected to http://localhost:${port}`))