const path = require("path");
const Jimp = require("jimp");
const fs = require("fs/promises");
const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id: userId } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const filename = `${userId}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  console.log(req.file);
  Jimp.read(tempUpload)
    .then((avatar) => {
      return avatar.resize(250, 250).write(resultUpload);
    })
    .catch((err) => {
      console.error(err);
    });

  //await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(userId, { avatarURL });
  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
