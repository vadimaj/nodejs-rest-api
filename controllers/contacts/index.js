const { ctrlWrap } = require("../../helpers");
const addContact = require("./addContact");
const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const updateContact = require("./updateContact");
const updateContactsFavorite = require("./updateContactsFavorite");

module.exports = {
  getAll: ctrlWrap(getAllContacts),
  getById: ctrlWrap(getContactById),
  add: ctrlWrap(addContact),
  remove: ctrlWrap(removeContact),
  update: ctrlWrap(updateContact),
  updateFavorite: ctrlWrap(updateContactsFavorite),
};
