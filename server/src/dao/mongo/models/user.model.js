import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },
});

const UserModel = model("users", userSchema);
export default UserModel;
