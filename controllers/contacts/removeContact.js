const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const remove = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json({ result });
};

module.exports = remove;
