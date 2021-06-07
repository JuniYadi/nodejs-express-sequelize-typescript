import * as express from "express";
import { Request, Response, NextFunction } from "express";
import {
  userDelete,
  userIndex,
  userShowById,
  userStore,
  userUpdate,
} from "../app/controllers/UserController";

const router = express.Router();

// all routes
router.get("/user", userIndex);
router.post("/user", userStore);
router.get("/user/:id", userShowById);
router.put("/user/:id", userUpdate);
router.delete("/user/:id", userDelete);

// Catch Error Not Found
router.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new Error(`Route Not Found: [${req.method}] ${req.path}`));
});

// Error Handle
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  let code = 500;
  let message = err.message;

  // check if message is stringfy json or not
  // if yes, using from message
  if (message.includes("code") && message.includes("message")) {
    const newMessage = JSON.parse(message);
    code = newMessage.code;
    message = newMessage.message;
  }

  // return error message
  return res.status(code).json({
    code: code,
    message: message,
  });
});

export default router;
