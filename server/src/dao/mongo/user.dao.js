import UserModel from "./models/user.model.js";

export default class UserDao {
  constructor() {
    this.model = UserModel;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      error.from = "user dao";
      throw error;
    }
  }

  async findById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      error.from = "user dao";
      throw error;
    }
  }

  async findOne(email) {
    try {
      return await this.model.findOne({ email });
    } catch (error) {
      error.from = "user dao";
      throw error;
    }
  }
}
