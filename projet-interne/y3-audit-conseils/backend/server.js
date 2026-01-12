const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

// ✅ Créer l'application Express AVANT d'utiliser app.use
const app = express();

// ✅ Autoriser le frontend à communiquer avec ce backend
app.use(cors({ origin: "http://localhost:3000" }));

// ✅ Pour recevoir les requêtes JSON
app.use(express.json());

// ✅ Configurer multer pour lire les fichiers dans la mémoire
const upload = multer({ storage: multer.memoryStorage() });

// ✅ Configuration du transporteur SMTP Gmail ou domaine
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true pour le port 465
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
    console.log('✅ Serveur SMTP prêt à envoyer des emails !');
  }
});


// ==============================
// ✅ Route pour envoyer un email avec pièce jointe (CV)
// ==============================
app.post('/send-email-with-attachment', upload.single('cv'), async (req, res) => {
  try {
    const { subject, text, html, candidatEmail, candidatNom } = req.body;

    if (!subject || !text || !candidatEmail || !candidatNom) {
      return res.status(400).json({ error: "Tous les champs requis ne sont pas remplis." });
    }

    // 1️⃣ Envoi de la candidature UNIQUEMENT à recrutement@ycubeac.com
    const mailOptionsRH = {
      from: `"Y3 Audit & Conseils" <${process.env.SMTP_USER}>`,
      to: 'recrutement@ycubeac.com',
      subject,
      text,
      html,
      attachments: req.file ? [{
        filename: req.file.originalname,
        content: req.file.buffer,
      }] : [],
    };

    const infoRH = await transporter.sendMail(mailOptionsRH);
    console.log('📨 Candidature envoyée à recrutement@ycubeac.com :', infoRH.messageId);

    // 2️⃣ Email de confirmation au candidat
    const confirmationText = `
Bonjour ${candidatNom},

Nous avons bien reçu votre candidature pour le poste "${subject}".
Notre équipe RH l'examinera et vous contactera si votre profil correspond à nos besoins.

Merci de votre intérêt pour Y3 Audit & Conseils !

Cordialement,
L'équipe RH
    `;
    const confirmationHtml = confirmationText.replace(/\n/g, '<br>');

    const mailOptionsCandidat = {
      from: `"Y3 Audit & Conseils" <${process.env.SMTP_USER}>`,
      to: candidatEmail,
      subject: `Confirmation de réception de votre candidature`,
      text: confirmationText,
      html: confirmationHtml,
    };

    const infoCandidat = await transporter.sendMail(mailOptionsCandidat);
    console.log('✅ Email de confirmation envoyé au candidat :', infoCandidat.messageId);

    res.status(200).json({
      success: true,
      message: 'Candidature envoyée à recrutement@ycubeac.com et confirmation envoyée au candidat ✅',
      infoRH: infoRH.messageId,
      infoCandidat: infoCandidat.messageId,
    });

  } catch (error) {
    console.error('❌ Erreur lors de l’envoi de la candidature :', error);
    res.status(500).json({
      success: false,
      error: error.message || "Erreur lors de l'envoi de la candidature ❌",
    });
  }
});


// ==============================
// ✅ Route pour envoyer un email de rendez-vous
// ==============================
app.post('/send-email', async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;

    if (!to || !subject || !text) {
      return res.status(400).json({ error: "Données manquantes pour le rendez-vous" });
    }

    const info = await transporter.sendMail({
      from: `"Y3 Audit & Conseils" <${process.env.SMTP_USER}>`,
      to, // depuis le frontend
      subject,
      text,
      html,
    });

    console.log("📨 Rendez-vous envoyé :", info.messageId);
    res.status(200).json({ success: true, message: "Rendez-vous envoyé", info: info.messageId });

  } catch (error) {
    console.error("❌ Erreur lors de l'envoi du rendez-vous :", error);
    res.status(500).json({ success: false, error: error.message });
  }
});


// ==============================
// ✅ Lancer le serveur
// ==============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Nodemailer lancé sur http://localhost:${PORT}`);
});
