const express = require("express");
const router = require("./routes/router");
const errorHandler = require("./middlewares/errorHandler");

require("./database/models/index");

const app = express();
router(app);

app.use(errorHandler)

module.exports = app;