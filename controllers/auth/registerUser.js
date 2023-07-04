const { User } = require("../../models/user");

const register = async (req, res) => {
  const newUser = await User.create(req.body);
  console.log(req.body);
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};
module.exports = register;
