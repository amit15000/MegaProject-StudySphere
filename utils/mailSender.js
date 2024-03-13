const nodemail = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemail.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    let info = await transporter.sendMail({
      from: "StudySphere",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = mailSender;
