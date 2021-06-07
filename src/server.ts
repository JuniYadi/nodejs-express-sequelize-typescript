import * as express from "express";
import { NextFunction, Request, Response } from "express";
import * as cors from "cors";
import { connection } from "./config";

// init connection to database
connection()
  .then()
  .catch((err) => console.error(err));

// init express app
const app = express.default();

/* Middleware */
app.use(cors.default());

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({ message: "success" });
  } catch (e) {
    next(e);
  }
});

app.listen(3000, () => {
  /* eslint-disable */
  console.log("Server Running in Port 3000");
});
