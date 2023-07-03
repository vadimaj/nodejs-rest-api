const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

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

module.exports = updateFavorite;
