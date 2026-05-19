import { Router } from 'express';
import authRoutes from './authRoutes.js';
import taskRoutes from './taskRoutes.js';

const rootRouter = Router();


rootRouter.use('/auth', authRoutes); 
rootRouter.use(taskRoutes);




export default rootRouter;