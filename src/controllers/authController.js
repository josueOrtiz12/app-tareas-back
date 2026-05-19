import authServices from "../services/authServices.js";
import { generateToken } from "../helpers/authHelper.js";


const authController = {
    login: async (req, res) => {
        try {
            const email = req.validatedData ? req.validatedData.email : req.body.email;
            const password = req.validatedData ? req.validatedData.password : req.body.password;

            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    message: 'Email y contraseña son requeridos'
                });
            }

            const {token, user} = await authServices.login({ email, password });
            res.cookie("token", token, {
                httpOnly: true,
                // secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 1000 * 60 * 60 * 24 
            });
            res.status(200).json({
                message: "Autenticación exitosa",
                status: 200,
                token: token,
                data: user
            });

        } catch (error) {
            res.status(401).json({
                success: false,
                message: 'Credenciales inválidas'
            });
        }
    },
    register: async (req, res, next) => { 
        try {
            const userData = req.validatedData || req.body;
            const newUser = await authServices.registerUser(userData);

            const token = generateToken({ id: newUser.user_id });

            res.cookie("token", token, {
                httpOnly: true,
                sameSite: "lax",
                maxAge: 1000 * 60 * 60 * 24 
            });
            
            res.status(201).json({ 
                success: true,
                message: "Usuario registrado exitosamente",
                data: newUser 
            });
        } catch (error) {
            next(error);  
        }
    }
};

export default authController