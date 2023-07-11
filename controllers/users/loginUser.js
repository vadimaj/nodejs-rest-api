const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const SECRET_KEY = "[zqJo#nyjx75P)v9JA.<fL6$=Iz%,L";

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });
  res.status(201).json({
    token,
    user: {
      email,
      subscription: user.subscription,
    },
  });
};

exports.loginUser = login;
exports.SECRET_KEY = SECRET_KEY;
