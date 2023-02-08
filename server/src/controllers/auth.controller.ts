// node_modules
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

// import constants
import { MESSAGES, ERRORS } from '../constants';

// import services
import { userService } from '../services';

// config
import { JWT_TOKEN, EXPIRATION_TIME } from '../config';

// models
import { IUser } from "../models";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(ERRORS.INPUT_DATA_MISSING.status).json({
        message: MESSAGES.INPUT_DATA_MISSING,
      });
      console.log(MESSAGES.INPUT_DATA_MISSING);
      return;
    }

    const user: IUser = await userService.getUser(email);

    if (user) {
      // TODO
      const passwordCorrect: boolean = await bcrypt.compare(
        password,
        user.password,
      );

      if (passwordCorrect) {
        const token: string = jwt.sign({
          id: user.id,
        }, JWT_TOKEN, {
          expiresIn: EXPIRATION_TIME,
        });
        res.status(200).json({
          userId: user.id,
          token,
          expirationTime: EXPIRATION_TIME,
        });
        console.log(MESSAGES.SIGNIN_SUCCESS);
      } else {
        res.status(ERRORS.PASSWORD_NOT_CORRECT.status).json({
          message: MESSAGES.PASSWORD_NOT_CORRECT,
        });
        console.log(MESSAGES.PASSWORD_NOT_CORRECT);
      }
    } else {
      res.status(ERRORS.USER_NOT_EXIST.status).json({
        message: MESSAGES.USER_NOT_EXIST,
      });
      console.log(MESSAGES.USER_NOT_EXIST);
    }
  } catch (error) {
    console.log(error);
    res.status(ERRORS.UNKNOWN_ERROR.status).json({
      message: MESSAGES.UNKNOWN_ERROR,
    });
    console.log(MESSAGES.UNKNOWN_ERROR);
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(ERRORS.INPUT_DATA_MISSING.status).json({
        message: MESSAGES.INPUT_DATA_MISSING,
      });
      console.log(MESSAGES.INPUT_DATA_MISSING);
      return;
    }
    const user: IUser = await userService.getUser(email);

    if (!user) {
      // TODO
      const hashPassword: string = await bcrypt.hash(password, 8);
      const users: IUser[] = await userService.getAllUsers();

      const newUser: IUser = {
        id: users.length,
        email: email,
        password: hashPassword
      };

      await userService.signUp(newUser);

      res.status(200).json({
        data: {
          userId: users.length,
        }
      });
      console.log(MESSAGES.SIGNIN_SUCCESS);

    } else {
      res.status(ERRORS.USER_NOT_EXIST.status).json({
        message: MESSAGES.DUPLICATED_USER,
      });
      console.log(MESSAGES.DUPLICATED_USER);
    }
  } catch (error) {
    console.log(error);
    res.status(ERRORS.UNKNOWN_ERROR.status).json({
      message: MESSAGES.UNKNOWN_ERROR,
    });
    console.log(MESSAGES.UNKNOWN_ERROR);
  }
};