import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const hashPassword = async (password) => {
    if (!password) return null;
    const cleanPassword = password.toString().trim();
    return await bcrypt.hash(cleanPassword, 10);
};

export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};