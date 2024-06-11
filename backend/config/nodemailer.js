import nodemailer from "nodemailer";
import 'dotenv/config';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "lucasberardi.18@gmail.com",
        pass: process.env.PASSWORD_EMAIL,
        authMethod: "LOGIN",
    },
});

const sendMail = (nombre, email, mensaje) => {
    return new Promise((resolve, reject) => {
        let mailOptions = {
            from: email,
            to: "lucasberardi.18@gmail.com",
            subject: "Mensaje de contacto desde tu sitio web",
            text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                //console.log(error);
                reject("Error al enviar el mensaje");
            } else {
                //console.log("Correo electrónico enviado: " + info.response);
                resolve("Mensaje enviado correctamente");
            }
        });
    });
};

export default sendMail;
