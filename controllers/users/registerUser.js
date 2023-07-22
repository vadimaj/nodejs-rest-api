const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { HttpError, sendMail } = require("../../helpers");
const { User } = require("../../models/user");
const { nanoid } = require("nanoid");
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const verificationToken = nanoid();
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  const verificationEmail = {
    to: email,
    subject: "Verify Email",
    html: `<a target="_blank" href = "${BASE_URL}/api/users/verify/${verificationToken}">Click link to verify your email</a>`,
  };
  await sendMail(verificationEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};
module.exports = register;
