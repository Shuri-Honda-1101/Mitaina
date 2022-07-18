import { Router } from 'express';
import registerRouter from './register';
import signinRouter from './signin';
import authRouter from './auth';
import signoutRouter from './signout';
import roomRouter from './room';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/register', registerRouter);
baseRouter.use('/signin', signinRouter);
baseRouter.use('/signout', signoutRouter);
baseRouter.use('/auth', authRouter);
baseRouter.use('/room', roomRouter);
// Export default.
export default baseRouter;
