const express = require("express");
const { swaggerUi, specs } = require('./swagger');
const app = express();

const bodyParser = require("body-parser")
require("dotenv").config();

const port = process.env.PORT || 3000;
// Your routes and other middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/routes"); //importing route
routes(app)
app.listen(port, () => console.log(`Server connected to http://localhost:${port}`))