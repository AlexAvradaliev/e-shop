import nodemailer from "nodemailer";



// ========================================
// TRANSPORTER
// ========================================

export const transporter =
  nodemailer.createTransport({

    host: process.env.SMTP_HOST,

    port: Number(
      process.env.SMTP_PORT
    ),

    secure:
      process.env.SMTP_SECURE === "true",

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });



// ========================================
// BASE TEMPLATE
// ========================================

function baseTemplate(content) {

  return `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: auto;
      padding: 20px;
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #eee;
    ">

      <h2 style="
        color: #002d72;
        text-align: center;
      ">
        E-Magasin
      </h2>

      ${content}

      <p style="
        margin-top: 30px;
        font-size: 12px;
        color: #888;
        text-align: center;
      ">
        © ${new Date().getFullYear()}
        E-Magasin
      </p>

    </div>
  `;
}



// ========================================
// SEND MAIL
// ========================================

export async function sendMail({
  to,
  subject,
  html
}) {

  await transporter.sendMail({

    from:
      process.env.SMTP_FROM,

    to,

    subject,

    html:
      baseTemplate(html),
  });
}



// ========================================
// VERIFICATION EMAIL
// ========================================

export async function sendVerificationEmail(
  email,
  code
) {

  await sendMail({

    to: email,

    subject:
      "Code de vérification",

    html: `
      <p>
        Bonjour,
      </p>

      <p>
        Voici votre code de vérification :
      </p>

      <div style="
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 6px;
        text-align: center;
        margin: 30px 0;
        color: #002d72;
      ">
        ${code}
      </div>

      <p>
        Ce code expire dans 15 minutes.
      </p>
    `,
  });
}



// ========================================
// RESET PASSWORD EMAIL
// ========================================

export async function sendPasswordResetEmail(
  email,
  token
) {

  const resetUrl =
    `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;

  await sendMail({

    to: email,

    subject:
      "Réinitialisation du mot de passe",

    html: `
      <p>
        Bonjour,
      </p>

      <p>
        Cliquez sur le bouton ci-dessous
        pour réinitialiser votre mot de passe.
      </p>

      <div style="
        text-align: center;
        margin: 30px 0;
      ">

        <a
          href="${resetUrl}"
          style="
            background: #002d72;
            color: white;
            padding: 14px 24px;
            border-radius: 6px;
            text-decoration: none;
            display: inline-block;
            font-weight: bold;
          "
        >
          Réinitialiser
        </a>

      </div>

      <p>
        Ce lien expire dans 1 heure.
      </p>
    `,
  });
}