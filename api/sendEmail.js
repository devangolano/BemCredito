const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, cef, whatsapp, amount, months } = req.body;

    // Configure o transportador de e-mail
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou use 'smtp' com host, port, etc., se for outro provedor
      auth: {
        user: process.env.EMAIL_USER, // variável de ambiente para o usuário do email
        pass: process.env.EMAIL_PASS, // variável de ambiente para a senha do app
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bempracredito@gmail.com', // substitua pelo email de destino real
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
      console.error('Erro ao enviar email:', error); // Log de erro mais detalhado
      res.status(500).json({ message: 'Erro ao enviar o email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
