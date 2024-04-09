import jwt from "jsonwebtoken";
import config from "../config/config.js";

const { JWT_SECRET } = config;

export const generateAccessToken = (data) => {
  try {
    const token = {
      sub: data._id,
      user: {
        username: data.username,
        email: data.email,
        avatar: data.avatar,
      },
    };
    return jwt.sign(token, JWT_SECRET, { expiresIn: "1d" });
  } catch (error) {}
};

export const verifyToken = (token) => {
  return token ? jwt.verify(token, JWT_SECRET) : null;
};
