//Swagger
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const options = {
    definition: {
        components: {},
        openapi: "3.0.0",
        info: {
            title: "Express API with Swagger",
            version: "1.0.0",
            description: "Documentation for Express API with Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "Development Server",
                port: 3000
            },
        ],
        security: {
            bearerAuth: [],
        },
    },
    
    apis: [
        //Define los esquemas de swagger
        path.join(__dirname, "../docs/schemas/*.js"),
        //Define la ruta de este proyecto para leer swagger
        path.join(__dirname, "../docs/tags/*.docs.js"),
    ],
}

const specs = swaggerJSDoc(options);

export default specs