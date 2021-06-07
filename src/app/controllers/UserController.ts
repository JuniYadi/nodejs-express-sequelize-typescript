import { Response, Request, NextFunction } from "express";
import { User } from "../models/User";
import { sequelize } from "../../config";

export const userIndex = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = await User.findAll({ limit: 15 });

    // return response
    return res.status(200).json({
      code: 200,
      message: "success",
      data: query,
    });
  } catch (e) {
    next(e);
  }
};
