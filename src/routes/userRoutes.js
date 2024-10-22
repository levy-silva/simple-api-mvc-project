const { Router } = require("express");
const UserController = require("../controllers/UserController");

const route = Router();

route
  .post("/users", UserController.createUser)
  .get("/users", UserController.getAllUsers)
  .get("/users/id/:id", UserController.getUserById)
  .put("/users/id/:id", UserController.updateUserById)
  .delete("/users/id/:id", UserController.deleteUserById)

module.exports = route;