const { ctrlWrap } = require("../../helpers");
const registerUser = require("./registerUser");
const getCurrentUser = require("./getCurrentUser");
const logoutUser = require("./logoutUser");
const updateSubscription = require("./updateSubscription");
const { loginUser, SECRET_KEY } = require("./loginUser");

module.exports = {
  register: ctrlWrap(registerUser),
  login: ctrlWrap(loginUser),
  getCurrent: getCurrentUser,
  logout: ctrlWrap(logoutUser),
  update: ctrlWrap(updateSubscription),
  SECRET_KEY: SECRET_KEY,
};
