const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Configuration du transporteur SMTP Gmail
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // ✅ true pour le port 465 (SSL)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ✅ Vérifie la connexion SMTP au démarrage
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Erreur de connexion SMTP :', error);
  } else {
    console.log('✅ Serveur SMTP Gmail prêt à envoyer des emails !');
  }
});

// ✅ Route principale pour envoyer un email
app.post('/send-email', async (req, res) => {
  const { to, subject, text, html } = req.body;

  // Validation basique des champs requis
  if (!to || !subject || !text) {
    return res.status(400).json({ error: "Les champs 'to', 'subject' et 'text' sont requis." });
  }

  try {
    // ✅ Envoi du mail
    const info = await transporter.sendMail({
      from: `"Y3 Audit & Conseils" <${process.env.SMTP_USER}>`, // expéditeur (ton Gmail)
      to, // destinataire (ex: hello@ycubeac.com)
      cc: process.env.SMTP_USER, // ✅ copie à ton Gmail pour archivage
      subject,
      text,
      html,
    });

    console.log('📧 Email envoyé avec succès :', info.messageId);
    res.status(200).json({
      success: true,
      message: 'Email envoyé avec succès ✅',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('❌ Erreur Nodemailer :', error);
    res.status(500).json({
      success: false,
      error: error.message || "Erreur lors de l'envoi de l'email ❌",
    });
  }
});

// ✅ Lancer le backend
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Nodemailer lancé sur http://localhost:${PORT}`);
});
