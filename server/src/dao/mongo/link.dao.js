import LinkModel from "./models/link.model.js";

export default class LinkDao {
  constructor() {
    this.model = LinkModel;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      error.from = "link dao";
      throw error;
    }
  }

  async findById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      error.from = "link dao";
      throw error;
    }
  }

  async find(id) {
    try {
      return await this.model.find({ owner: id });
    } catch (error) {
      error.from = "link dao";
      throw error;
    }
  }

  async findOne(url) {
    try {
      return await this.model.findOne({
        shortLink: url,
      });
    } catch (error) {
      error.from = "link dao";
      throw error;
    }
  }

  async findByIdAndUpdate(id, data) {
    try {
      return await this.model.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      error.from = "DAO";
      error.status = 500;
      throw error;
    }
  }

  async findByIdAndDelete(id) {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      error.from = "DAO";
      error.status = 500;
      throw error;
    }
  }
}
