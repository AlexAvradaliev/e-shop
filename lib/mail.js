// lib/mail.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const sendVerificationEmail = async (email, code) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Vérification de votre compte - Leclerc",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 25px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #005cbf; text-align: center;">Bienvenue chez Leclerc</h2>
        <p>Merci pour votre inscription ! Veuillez utiliser le code ci-dessous pour vérifier votre adresse e-mail :</p>
        <div style="font-size: 28px; font-weight: bold; background: #f3f4f6; color: #002d72; padding: 15px; text-align: center; letter-spacing: 6px; border-radius: 8px; margin: 24px 0;">
          ${code}
        </div>
        <p style="color: #6b7280; font-size: 13px;">Ce code est valable 15 minutes.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (email, token) => {
  const resetLink = `${APP_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Réinitialisation de votre mot de passe - Leclerc",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 25px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="color: #005cbf; text-align: center;">Réinitialisation de mot de passe</h2>
        <p>Cliquez sur le bouton ci-dessous pour créer un nouveau mot de passe :</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" style="background-color: #005cbf; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Changer mon mot de passe
          </a>
        </div>
        <p style="color: #6b7280; font-size: 13px;">Ce lien est valable 1 heure.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};