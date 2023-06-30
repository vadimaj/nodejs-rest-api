const contacts = require("../models/contacts");
const { Contact } = require("../models/contact");
const { HttpError, ctrlWrap } = require("../helpers");

const getAll = async (req, res, next) => {
  const result = await Contact.find();
  res.json(result);
};

const getById = async (req, res, next) => {
  console.log(req.params);
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res, next) => {
  const data = req.body;
  const result = await Contact.create(req.body);
  res.status(201).json({ result });
};

const remove = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json({ result });
};

const update = async (req, res, next) => {
  const data = req.body;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, data, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
const updateFavorite = async (req, res, next) => {
  const data = req.body;
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, data, {
    new: true,
  });
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
  updateFavorite: ctrlWrap(updateFavorite),
};
