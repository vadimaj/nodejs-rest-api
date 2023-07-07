const { ctrlWrap } = require("../../helpers");
const registerUser = require("./registerUser");
const getCurrentUser = require("./getCurrentUser");
const logoutUser = require("./logoutUser");
const { loginUser, SECRET_KEY } = require("./loginUser");

module.exports = {
  register: ctrlWrap(registerUser),
  login: ctrlWrap(loginUser),
  getCurrent: getCurrentUser,
  logout: ctrlWrap(logoutUser),
  SECRET_KEY: SECRET_KEY,
};
