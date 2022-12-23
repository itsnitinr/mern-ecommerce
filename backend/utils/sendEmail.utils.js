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

  await transporter.sendMail({
    from: 'support@pcbcupid.com',
    to: options.toEmail,
    subject: options.subject,
    message: options.message,
    html: options.html,
  });
};

module.exports = sendEmail;
