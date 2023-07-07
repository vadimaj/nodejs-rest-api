const { User } = require("../../models/user");

const logoutUser = async (req, res) => {
  console.log(req.user);
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.json({ message: "Success" });
};

module.exports = logoutUser;
