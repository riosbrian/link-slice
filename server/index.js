import { connectToMongoDB } from "./src/config/database.js";
import apiRouter from "./src/routes/api.routes.js";
import indexRouter from "./src/routes/index.routes.js";
import config from "./src/config/config.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import iniPassportStrategies from "./src/config/passport.js";
import morgan from "morgan";
import passport from "passport";
import { notFoundHandler } from "./src/middlewares/notFound.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const { PORT } = config;

// DATABASE CONNECTION
connectToMongoDB();
iniPassportStrategies();

const app = express();

// MIDDLEWARES
app.use(
  cors({
    origin: ["http://localhost:5173", "https://link-slice.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(morgan("dev"));

// ROUTES
app.use(apiRouter);
app.use(indexRouter);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
