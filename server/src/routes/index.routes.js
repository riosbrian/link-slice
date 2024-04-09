import { Router } from "express";
import * as LinkController from "../controllers/link.controller.js";
const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    error: false,
    message: "¡Welcome to Link.slice()!",
    data: {
      author: "Brian Rios",
      website: "https://www.brianriosdev.com",
      message:
        "Thank you for visiting and use my API! Feel free to explore and discover more about what I do.",
      github: "https://github.com/riosbrian",
      linkedin: "https://www.linkedin.com/in/brian-rios-5823a2214/",
      email: "riosbrian.ar@gmail.com",
    },
  });
});

indexRouter.use("/:link", LinkController.redirectLink);

export default indexRouter;
