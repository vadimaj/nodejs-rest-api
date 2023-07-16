const { ctrlWrap } = require("../../helpers");
const registerUser = require("./registerUser");
const getCurrentUser = require("./getCurrentUser");
const logoutUser = require("./logoutUser");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");

const { loginUser, SECRET_KEY } = require("./loginUser");

module.exports = {
  register: ctrlWrap(registerUser),
  login: ctrlWrap(loginUser),
  getCurrent: getCurrentUser,
  logout: ctrlWrap(logoutUser),
  update: ctrlWrap(updateSubscription),
  updateAvatar: ctrlWrap(updateAvatar),
  SECRET_KEY: SECRET_KEY,
};
