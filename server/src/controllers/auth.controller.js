import * as AuthService from "../services/auth.service.js";
import { generateAccessToken } from "../utils/jwt.js";
const CLIENT_URL = "http://localhost:5173";

export const loginWithGithub = async (req, res, next) => {
  const user = req.user;
  try {
    const token = generateAccessToken(user);
    const options = {
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      httpOnly: true,
      // secure: true, // Solo enviar en conexiones HTTPS
      // sameSite: "None", // Permitir cookies de terceros en solicitudes entre sitios
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
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      httpOnly: true,
      // secure: true, // Solo enviar en conexiones HTTPS
      // sameSite: "None", // Permitir cookies de terceros en solicitudes entre sitios
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
