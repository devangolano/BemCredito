// server.js

import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para parsear JSON

// Configuração do nodemailer com suas credenciais
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'albertoronny237@gmail.com',
        pass: 'rtejvezrjielymgf'
    }
});

// Endpoint para enviar e-mail
app.post("/api/send", (req, res) => {
    console.log("Requisição recebida para envio de e-mail.");

    const { from, to, subject, message } = req.body;

    const mailOptions = {
        from,  // Remetente do e-mail
        to,    // Destinatário
        subject, // Assunto
        html: message // Corpo do e-mail em formato HTML
    };

    // Envia o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Erro ao enviar e-mail:", error);
            return res.status(500).send({ success: false, error: error.message });
        }
        console.log("E-mail enviado com sucesso:", info.response);
        res.status(200).send({ success: true, message: "Email enviado com sucesso" });
    });
});

const port = 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));
