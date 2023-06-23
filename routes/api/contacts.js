const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/contacts.js");
const schemas = require("../../schemas/contacts");
const { validateBody } = require("../../middlewares");

router.get("/", controllers.getAll);

router.get("/:contactId", controllers.getById);

router.post("/", validateBody(schemas.addSchema), controllers.add);

router.delete("/:contactId", controllers.remove);

router.put("/:contactId", validateBody(schemas.addSchema), controllers.update);

module.exports = router;
