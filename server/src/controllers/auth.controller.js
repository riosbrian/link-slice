import config from "../config/config.js";
import * as AuthService from "../services/auth.service.js";
import { generateAccessToken } from "../utils/jwt.js";
const { CLIENT_URL } = config;

export const loginWithGithub = async (req, res, next) => {
  const user = req.user;
  try {
    const token = generateAccessToken(user);
    const options = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.cookie("accessToken", token, options);
    res.redirect(CLIENT_URL);
  } catch (error) {
    error.from = error.from || "auth controller";
    next(error);
  }
};

export const loginWithGoogle = async (req, res, next) => {
  const user = req.user;
  try {
    const token = generateAccessToken(user);
    const options = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.cookie("accessToken", token, options);
    res.redirect(CLIENT_URL);
  } catch (error) {
    error.from = error.from || "auth controller";
    next(error);
  }
};

export const getLoggedUser = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: req.user,
    message: "User retrieved",
  });
};

export const logout = async (req, res, next) => {
  res.clearCookie("accessToken");
  res.status(200).json({
    status: "success",
    error: false,
    message: "Session closed successfully",
  });
};
