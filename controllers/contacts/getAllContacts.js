const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite: favoriteValue } = req.query;
  const skip = (page - 1) * limit;
  if (favoriteValue) {
    const result = await Contact.find(
      { owner, favorite: favoriteValue },
      {},
      {
        skip,
        limit,
      }
    );
    res.json(result);
  } else {
    const result = await Contact.find(
      { owner },
      {},
      {
        skip,
        limit,
      }
    );
    res.json(result);
  }
};
module.exports = getAll;
