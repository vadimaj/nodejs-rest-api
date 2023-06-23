const contacts = require("../models/contacts");
const { HttpError, ctrlWrap } = require("../helpers");

const getAll = async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res, next) => {
  console.log(req.params);
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res, next) => {
  const data = req.body;
  const result = await contacts.addContact(data);
  res.status(201).json({ result });
};

const remove = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json({ result });
};

const update = async (req, res, next) => {
  const data = req.body;
  const { contactId } = req.params;

  const result = await contacts.updateContact(contactId, data);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrap(getAll),
  getById: ctrlWrap(getById),
  add: ctrlWrap(add),
  remove: ctrlWrap(remove),
  update: ctrlWrap(update),
};
