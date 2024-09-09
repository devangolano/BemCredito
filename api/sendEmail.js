const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, cef, whatsapp, amount, months } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail', // ou outro serviço de e-mail
      auth: {
        user: process.env.EMAIL_USER, // seu e-mail
        pass: process.env.EMAIL_PASS, // sua senha de aplicativo
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bempracredito@gmail.com', // email de destino
      subject: 'Nova solicitação de empréstimo',
      text: `
        Nome: ${name}
        Email: ${email}
        CPF: ${cef}
        WhatsApp: ${whatsapp}
        Valor do empréstimo: ${amount}
        Número de meses: ${months}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao enviar o email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
