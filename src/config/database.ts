import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { User } from "../app/models";

// load .env configuration
dotenv.config();

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
});

// add model to sequelize
sequelize.addModels([User]);

// init connection to sequelize
export const connection = async () => {
  try {
    await sequelize.authenticate();
    /* eslint-disable */
    console.log("Connection has been established successfully.");
  } catch (e) {
    return e;
  }
};
