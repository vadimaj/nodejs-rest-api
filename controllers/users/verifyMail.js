const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const verifyMail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = User.findOne({ verificationToken });
  if (!user) {
    throw HttpError(401, "User not found (001)");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });
  res.json({
    message: "Verification successful",
  });
};

module.exports = verifyMail;
