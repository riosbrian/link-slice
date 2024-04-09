import { Router } from "express";
import passport from "passport";
import * as AuthController from "../../controllers/auth.controller.js";
import { isAuthenticate } from "../../middlewares/secure.middleware.js";

const authRouter = Router();

// GITHUB

authRouter.get("/github", passport.authenticate("github", { session: false }));
authRouter.get(
  "/github/callback",
  passport.authenticate("github", { session: false }),
  AuthController.loginWithGithub
);

// GOOGLE

authRouter.get("/google", passport.authenticate("google", { session: false }));
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  AuthController.loginWithGoogle
);

authRouter.get("/user", isAuthenticate, AuthController.getLoggedUser);
authRouter.post("/logout", isAuthenticate, AuthController.logout);

export default authRouter;
