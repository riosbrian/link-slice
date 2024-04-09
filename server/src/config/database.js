import mongoose from "mongoose";
import config from "./config.js";

const { MONGO_URL } = config;

export const connectToMongoDB = () => {
  try {
    mongoose.connect(MONGO_URL).then(() => console.log("Connected to MongoDB"));
  } catch (error) {
    throw error;
  }
};
