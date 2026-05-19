import AppError from "../helpers/AppError.js";
import { User } from "../models/user.js";
import { hashPassword } from "../helpers/authHelper.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const authServices = {
    login: async ({ email, password }) => {
        const authError = new AppError('Credenciales inválidas', 401, 'Invalid credentials');
        try {
            const user = await User.findOne({ where: { user_email: email } });

            if (!user) {
                await bcrypt.compare(password, "$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgNI7PPrb1LPTSZ0oT.p87Fj4C0W");
                throw new AppError(authError, 401, "UNAUTHORIZED");
            }

            const passwordMatch = await bcrypt.compare(password, user.user_password);

            if (!passwordMatch) {
                throw new AppError(authError, 401);
            }

            const token = jwt.sign(
                {
                    id: user.user_id,
                    email: user.user_email,
                },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );


            return { token, user: { id: user.user_id, email: user.user_email } };
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Error en el servicio de autenticación", 500);
        }
    },
    validateToken: async (userId) => {
        const user = await User.findByPk(userId, {
            attributes: ['user_id', 'user_email', 'user_name']
        });
        if (!user) {
            throw new AppError('Usuario no encontrado', 404);
        }
        return { id: user.user_id, email: user.user_email, name: user.user_name };
    },
    registerUser: async (data) => {
        try {
            const { email, password, user_name } = data;


            const existingUser = await User.findOne({ where: { user_email: email } });

            if (existingUser) {
                throw new AppError('El email ya está registrado', 400, 'Email already registered');
            }


            const existingUsername = await User.findOne({ where: { user_name: user_name } });

            if (existingUsername) {
                throw new AppError('El nombre de usuario ya está registrado', 400, 'Username already registered');
            }

            const hashcreatePassword = await hashPassword(password);

            const newUser = await User.create({
                user_name: user_name,
                user_email: email,
                user_password: hashcreatePassword,
            });

            return newUser;

        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(error.message, 500, error.message);
        }
    }
}

export default authServices;    