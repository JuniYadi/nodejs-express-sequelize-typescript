import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { userIndex } from "../app/controllers/UserController";

const router = express.Router();

// all routes
router.get("/user", userIndex);

// Catch Error Not Found
router.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new Error(`Route Not Found: [${req.method}] ${req.path}`));
});

// Error Handle
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    code: 500,
    message: err.message,
  });
});

export default router;
