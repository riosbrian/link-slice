import passport from "passport";

export const isAuthenticate = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (error, user) => {
    // console.log("MIDDLEWARE AUTH:");
    // console.log(user);
    if (error) return next(error);
    if (!user) {
      req.user = null;
      return next();
    }
    req.user = user;
    next();
  })(req, res, next);
};
