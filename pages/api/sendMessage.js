'use client';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false, // STARTTLS will upgrade this
    auth: {
      user: process.env.ICLOUD_EMAIL,
      pass: process.env.ICLOUD_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${process.env.ICLOUD_EMAIL}>`,
    to: process.env.ICLOUD_EMAIL, // you're sending it to yourself
    subject: `New Message: ${subject}`,
    text: `
You received a message from:

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
