const { Contact } = require("../../models/contact");

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite: FavoriteValue } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find({ owner, favorite: FavoriteValue }, null, {
    skip,
    limit,
  });
  res.json(result);
};

module.exports = getAll;
