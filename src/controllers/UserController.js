const UserService = require("../services/UserService");

const userService = new UserService();

class UserController {
  
  static async createUser(req, res, next) {
    try {
      const { name, email, role, active } = req.body;
      const newUser = await userService.createUser({ name, email, role, active });
      return res.status(201).json({ message: "User created succefully", user: newUser });
    } catch (error) {
      next(error);
    }
  }

  static async getAllUsers(req, res, next) {
    try {
      const userList = await userService.getAllUsers();
      return res.status(200).json(userList);
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user)
    } catch (error) {
      next(error);
    }
  }

  static async getUserByEmail(req, res, next) {
    try {
      const { email } = req.params;
      const user = await userService.getUserByemail(email);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user)
    } catch (error) {
      next(error);
    }
  }

  static async updateUserById(req, res, next) {
    try {
      const { id } = req.params;
      const update = req.body;

      const isUpdated = await userService.updateUserById(id, update);

      if (!isUpdated) {
        return res.status(404).json({ message: "User not found" });
      }
      
      return res.status(200).json({ message: "User updated successfully", user: isUpdated })
    } catch (error) {
      next(error);
    }
  }

  static async deleteUserById(req, res, next) {
    try {
      const { id } = req.params;
      const isdeleted = await userService.deleteUserById(id);
      
      if (!isdeleted) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;