const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { SECRET_KEY } = require("../controllers/users");
const { User } = require("../models/user");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorized1"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not authorized2"));
    }
    req.user = user;
    next();
  } catch {
    next(HttpError(401, "Not authorized3"));
  }
};

module.exports = authenticate;

//
