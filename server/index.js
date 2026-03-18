import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: "https://bizfonalweb.vercel.app"
}));

app.use(express.json());

// ✅ Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, message } = req.body || {};

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'bizfonal.infotech@gmail.com',
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}`
    });

    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});