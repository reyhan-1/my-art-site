// /pages/api/sendMessage.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, subject, message } = req.body;

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use a different service if you want
      auth: {
        user: 'your-email@gmail.com', // Replace with your email (Gmail for example)
        pass: 'your-email-password', // Replace with your email password or an app password
      },
    });

    // Email message setup
    const mailOptions = {
      from: 'your-email@gmail.com', // Replace with your email
      to: 'reyhanuyanik@icloud.com', // Your email address
      subject: `New Message from ${firstName} ${lastName}`,
      text: `
        You have received a new message from ${firstName} ${lastName}:

        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    // Handle other HTTP methods (if any)
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
