import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { cookieExtractor } from "../utils/cookieExtractor.js";
import * as AuthService from "../services/auth.service.js";
import config from "./config.js";

const {
  GH_CLIENT_ID,
  GH_CLIENT_SECRET,
  GH_CALLBACK_URL,
  G_CLIENT_ID,
  G_CLIENT_SECRET,
  G_CALLBACK_URL,
  JWT_SECRET,
} = config;

const iniPassportStrategies = () => {
  passport.use(
    "github",
    new GitHubStrategy(
      {
        clientID: GH_CLIENT_ID,
        clientSecret: GH_CLIENT_SECRET,
        callbackURL: GH_CALLBACK_URL,
        scope: ["user:email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const ghUser = {
            username: profile._json.name,
            avatar: profile._json.avatar_url,
            email: profile.emails[0].value,
          };
          const { data } = await AuthService.login(ghUser);
          return done(null, data);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: G_CLIENT_ID,
        clientSecret: G_CLIENT_SECRET,
        callbackURL: G_CALLBACK_URL,
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const gUser = {
            username: profile.displayName,
            avatar: profile.photos[0].value,
            email: profile.emails[0].value,
          };
          const { data } = await AuthService.login(gUser);
          return done(null, data);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  const opts = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: JWT_SECRET,
  };

  passport.use(
    "jwt",
    new JwtStrategy(opts, async (payload, done) => {
      const { data } = await AuthService.getUser(payload.sub);
      if (data) return done(null, data);
      done(null, false);
    })
  );

  passport.serializeUser((user, done) => {
    return done(null, user);
  });

  passport.deserializeUser((user, done) => {
    return done(null, user);
  });
};

export default iniPassportStrategies;
