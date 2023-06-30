const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/contacts.js");
const { schemas } = require("../../models/contact");
const { validateBody } = require("../../middlewares");
const { isValidId } = require("../../middlewares");

router.get("/", controllers.getAll);

router.get("/:contactId", isValidId, controllers.getById);

router.post("/", validateBody(schemas.addSchema), controllers.add);

router.delete("/:contactId", isValidId, controllers.remove);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  controllers.update
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.patchFavoriteSchema),
  controllers.updateFavorite
);
module.exports = router;
