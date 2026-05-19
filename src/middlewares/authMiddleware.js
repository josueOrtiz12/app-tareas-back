import { verifyToken } from "../helpers/authHelper.js";

export const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "No autorizado: Token no encontrado" });
    }
    try {
        const decoded = verifyToken(token);
        req.user = decoded; 
        next(); 
    } catch (error) {
        return res.status(401).json({ message: "No autorizado: Token inválido" });
    }
};