import express from "express";
import path from "path"; // Importa el módulo path de Node.js
import { fileURLToPath } from "url"; // Importa el método para obtener la ruta del archivo actual
import 'dotenv/config';
import router from "./Routes/nodemailer.routes.js";
import cors from 'cors';

// Obtener el directorio actual cuando se usa ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware para CORS
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Middlewares
app.use(express.json());

// Routes
app.use("/api", router);

// Archivos estaticos desde React frontend app
app.use(express.static(path.join(__dirname, "../frontend/dist", "index.html")));

// Redirige todas las demás rutas al archivo index.html del frontend
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});
