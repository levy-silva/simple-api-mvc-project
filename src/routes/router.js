const express = require("express");
const users = require("./userRoutes");

const router = (app) => {
  app.route("/").get((req, res) => res.status(200).json({ message: "Root route listenig." }));

  app.use(
    express.json(),
    users,
  )
}

module.exports = router;