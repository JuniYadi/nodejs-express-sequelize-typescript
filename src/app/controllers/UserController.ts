import { Response, Request, NextFunction } from "express";
import { User } from "../models/User";
import { hash } from "bcrypt";

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

export const userStore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hashPassword = await hash("test1234", 10);

    const query = await User.create({
      name: "John Doe",
      email: "johndoe@test.com",
      password: hashPassword,
      role: "user",
    });

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

export const userShowById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const query = await User.findByPk(id);
    if (!query) {
      return next(
        new Error(JSON.stringify({ code: 404, message: `ID Not Found.` }))
      );
    }

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

export const userUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const query = await User.findByPk(id);
    if (!query) {
      return next(
        new Error(JSON.stringify({ code: 404, message: `ID Not Found.` }))
      );
    }

    const updateData = await query.update({
      name: name,
    });

    // return response
    return res.status(200).json({
      code: 200,
      message: "success",
      data: updateData,
    });
  } catch (e) {
    next(e);
  }
};

export const userDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const query = await User.findByPk(id);
    if (!query) {
      return next(
        new Error(JSON.stringify({ code: 404, message: `ID Not Found.` }))
      );
    }

    // delete data
    await query.destroy();

    // return response
    return res.status(200).json({
      code: 200,
      message: "success",
    });
  } catch (e) {
    next(e);
  }
};
