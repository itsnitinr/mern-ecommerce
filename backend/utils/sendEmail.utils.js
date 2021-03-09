const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const email = await transporter.sendMail({
    from: 'The Firm',
    to: options.toEmail,
    subject: options.subject,
    html: options.html,
  });

  await transporter.sendMail(email);
};

module.exports = sendEmail;
