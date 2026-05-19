import { Router } from "express";
import URLS from "../helpers/Urls.js";
import authController from "../controllers/authController.js";
import { validate, registerSchema, loginSchema } from '../helpers/validators.js';



const router = Router();
const { auth } = URLS;  


router.post(auth.login, validate(loginSchema), authController.login);
router.post(auth.signup, validate(registerSchema), authController.register);

export default router;
