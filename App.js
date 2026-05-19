import express from "express";
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser'; // Ya lo tienes importado

dotenv.config({ path: './deploy/.env' });

import RouterInit from './src/routes/index.js';
import specs from "./config/swagger.js";

const app = express();
const PORT = process.env.PORT || 3000; 

// Middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Rutas
app.use("/api", RouterInit);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { parameterLimit: 10000 }));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});