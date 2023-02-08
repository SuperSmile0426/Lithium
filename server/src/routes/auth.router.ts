// import node moduels
import express from 'express';

import { checkAuth } from '../utils';

// import controllers
import { AuthController } from '../controllers';

const authRouter = express.Router();

authRouter.post('/signup', AuthController.signUp);
authRouter.post('/signin', AuthController.signIn);

export default authRouter;
