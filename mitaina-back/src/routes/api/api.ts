import { Router } from 'express';
import registerRouter from './register';
import signinRouter from './signin';
import authRouter from './auth';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/register', registerRouter);
baseRouter.use('/signin', signinRouter);
baseRouter.use('/auth', authRouter);
// Export default.
export default baseRouter;
