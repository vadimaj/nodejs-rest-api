const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/contacts");
const { schemas } = require("../../models/contact");
const { validateBody, authenticate } = require("../../middlewares");
const { isValidId } = require("../../middlewares");

router.get("/", authenticate, controllers.getAll);

router.get("/:contactId", authenticate, isValidId, controllers.getById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.add
);

router.delete("/:contactId", authenticate, isValidId, controllers.remove);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  controllers.update
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.patchFavoriteSchema),
  controllers.updateFavorite
);

router.get("/");
module.exports = router;
