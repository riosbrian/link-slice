import { config as dotenv_config } from "dotenv";

const ENV_PATH = "./.env";
dotenv_config({ path: ENV_PATH });

export default {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  APP_URL: process.env.APP_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  GH_CLIENT_ID: process.env.GH_CLIENT_ID,
  GH_CLIENT_SECRET: process.env.GH_CLIENT_SECRET,
  GB_CALLBACK_URL: process.env.GB_CALLBACK_URL,
  G_CLIENT_ID: process.env.G_CLIENT_ID,
  G_CLIENT_SECRET: process.env.G_CLIENT_SECRET,
  G_CALLBACK_URL: process.env.G_CALLBACK_URL,
};
