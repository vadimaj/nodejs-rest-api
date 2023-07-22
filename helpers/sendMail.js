const sendgridMail = require("@sendgrid/mail");
require("dotenv").config();
const { SENDGRID_KEY } = process.env;

sendgridMail.setApiKey(SENDGRID_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "hpu24@ukr.net" };
  await sendgridMail.send(email);
  return true;
};

// const email = {
//   to: "vadimajj@gmail.com",
//   subject: "Test mail",
//   html: "<p><strong>Test mail</strong>from localhost:3000</p>",
// };

module.exports = sendEmail;
