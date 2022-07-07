import { Router } from 'express';
import registerRouter from './register';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', registerRouter);

// Export default.
export default baseRouter;
