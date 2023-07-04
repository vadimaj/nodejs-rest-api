const { ctrlWrap } = require("../../helpers");
const registerUser = require("./registerUser");

module.exports = {
  register: ctrlWrap(registerUser),
};
