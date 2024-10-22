const { where } = require("sequelize");
const database = require("../database/models/index");
const uuid = require("uuid");

class UserService {

  async getAllUsers() {
    return database.User.findAll();
  }

  async getUserById(id) {
    return database.User.findByPk(id);
  }

  async getUserByemail(email) {
    return database.User.findOne({ where: { email: email } });
  }

  async updateUserById(id, update) {
    const isUpdated = await database.User.update(update, { where: { id: id } });
    if (isUpdated[0] === 0) return false;
    const updatedUser = await database.User.findOne({ where: { id: id }});
    return updatedUser;
  }

  async deleteUserById(id) {
    const isDeleted = await database.User.destroy({ where: { id: id } });
    if (isDeleted === 0) return false;
    return true;
  }

  async createUser(dto) {

    const existingUser = await database.User.findOne({ where: { email: dto.email } });

    if (existingUser) {
      throw new Error("This email address is already in use. Prease try logging in or use a different email address");
    }

    const newUser = await database.User.create({
      id: uuid.v4(),
      name: dto.name,
      email: dto.email,
      role: dto.role,
      active: dto.active,
    });

    return newUser;
  }
}

module.exports = UserService;