import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import path from "path";

// load .env configuration
dotenv.config();

// load all models in windows or linux
const model = path.join(__dirname, "..", "app", "models");

// sequelize database connection
export const sequelize = new Sequelize({
  username: process.env.DB_USERNAME || "db_username",
  password: process.env.DB_PASSWORD || "db_password",
  database: process.env.DB_NAME || "db_name",
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  dialect: "postgres",
  timezone: process.env.APP_TIMEZONE || "+07:00",
  pool: {
    min: process.env.DB_POOL_MIN ? parseInt(process.env.DB_POOL_MIN) : 0,
    max: process.env.DB_POOL_MAX ? parseInt(process.env.DB_POOL_MAX) : 1,
    idle: process.env.DB_POOL_IDLE ? parseInt(process.env.DB_POOL_IDLE) : 1000,
  },
  models: [`${model}/*.ts`],
});

export const connection = async (force?: boolean): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    /* Run This Function Automatically For Development Purpose */
    const mode = process.env.NODE_ENV;
    if (mode && mode === "development") {
      await sequelize.sync({ force: force });
      console.log("Success Sync Model Migration.");
    }
  } catch (e) {
    console.error(e);
  }
};
