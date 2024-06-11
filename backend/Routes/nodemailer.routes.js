import express from "express";
import sendMail from "../config/nodemailer.js";

const router = express.Router();

router.post("/enviar-correo", (req, res) => {
    try {
        const { nombre, email, mensaje } = req.body;
        if (!nombre || !email || !mensaje) {
            return res
                .status(400)
                .send(`Por favor llene todos los campos del formulario!`);
        }
        const result = sendMail(nombre, email, mensaje);
        res.send(result);
    } catch (error) {
        //console.error(error)
        res.status(500).send(`Error en el servidor`)
    }
});

export default router;
