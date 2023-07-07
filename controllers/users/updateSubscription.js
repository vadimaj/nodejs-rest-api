const { HttpError } = require("../../helpers");

const { User } = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { _id: userId } = req.user;
  const data = req.body;

  const result = await User.findByIdAndUpdate(userId, data, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateSubscription;
