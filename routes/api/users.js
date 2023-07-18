const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/users");
const { schemas } = require("../../models/user");
const { validateBody, authenticate, upload } = require("../../middlewares");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controllers.register
);

router.post("/login", validateBody(schemas.loginSchema), controllers.login);
router.get("/current", authenticate, controllers.getCurrent);
router.post("/logout", authenticate, controllers.logout);
router.patch(
  "/subscription",
  validateBody(schemas.patchSubscriptionSchema),
  authenticate,
  controllers.update
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
