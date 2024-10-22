const { ValidationError } = require("sequelize");

function errorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    const err = error.errors.map((e) => e.message).join(" ")
    return res.status(400).json({ message: `${err}` });
  } else {
    return res.status(500).json({ message: `${error.message}` })
  }
}

module.exports = errorHandler;