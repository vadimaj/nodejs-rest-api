const { User } = require("../../models/user");
const { HttpError, sendMail } = require("../../helpers");
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = User.findOne({ email });
  if (!user) {
    throw HttpError(401, "User not found (002)");
  }
  if (user.verify) {
    throw HttpError(401, "Already verified");
  }
  const verificationEmail = {
    to: email,
    subject: "Verify Email",
    html: `<a target="_blank" href = "${BASE_URL}/api/users/verify/${user.verificationToken}">Click link to verify your email</a>`,
  };
  await sendMail(verificationEmail);

  res.json({
    message: "Verifying email sent",
  });
};

module.exports = resendVerifyEmail;
