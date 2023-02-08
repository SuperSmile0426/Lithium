// node_modules
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

// import constants
import { MESSAGES, ERRORS } from '../constants';

// import services
import { userService } from '../services';

// models
import { IUser } from "../models";

export const getMe = async (req: any, res: Response) => {
  try {
    const { id } = req.user;

    const me: IUser = await userService.getUserById(id);
    const users: IUser[] = await userService.getAllUsers();

    res.status(200).json({
      data: {
        me: me,
        users: users,
        "message": MESSAGES.GET_ME_SUCCESS
      }
    });
    console.log(MESSAGES.GET_ME_SUCCESS);
  } catch (error) {
    console.log(error);
    res.status(ERRORS.UNKNOWN_ERROR.status).json({
      message: MESSAGES.UNKNOWN_ERROR,
    });
    console.log(MESSAGES.UNKNOWN_ERROR);
  }
};

