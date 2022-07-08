import { Router } from 'express';
import registerRouter from './register';
import signinRouter from './signin';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/register', registerRouter);
baseRouter.use('/signin', signinRouter);

// Export default.
export default baseRouter;
