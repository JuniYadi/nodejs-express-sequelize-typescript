import * as express from "express";
import * as cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connection } from "./config";
import router from "./routes";

// init connection to database
connection()
  .then()
  .catch((err) => {
    /* eslint-disable */
    console.error(err);
  });

// init express app
const app = express.default();

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors.default());
app.use(helmet());

/* Only Use Morgan in Development */
if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
}

/* Default Route */
app.use(router);

/* Default Port ExpressJS */
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`Server Running in Port: ${PORT}`);
});
