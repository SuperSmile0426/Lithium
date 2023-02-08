// import node moduels
import express from 'express';

import { checkAuth } from '../utils';

// import controllers
import { UserController } from '../controllers';

const userRouter = express.Router();

userRouter.get('/getme', checkAuth, UserController.getMe);

export default userRouter;