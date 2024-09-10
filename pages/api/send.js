import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { from, to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_FROM,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    html: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email enviado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar e-mail', error: error.message });
  }
}
