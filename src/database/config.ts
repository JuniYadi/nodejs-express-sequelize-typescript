import * as dotenv from "dotenv";
dotenv.config();

export const development = {
  username: process.env.DB_USERNAME || "db_username",
  password: process.env.DB_PASSWORD || "db_password",
  database: process.env.DB_NAME || "db_name",
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  dialect: "postgres",
  timezone: process.env.APP_TIMEZONE || "+07:00",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export const test = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: "127.0.0.1",
  port: 3306,
  dialect: "postgres",
  charset: "utf8mb4",
  dialectOptions: {
    bigNumberStrings: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export const production = {
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
};
