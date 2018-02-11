const express = require("express");
const packagesController = require("../controllers/packages");
const router = express.Router();

router.get("/:id", packagesController.get);
router.get("/", packagesController.get);
router.post("/", packagesController.create);
router.put("/:id", packagesController.update);
router.delete("/:id", packagesController.remove);

module.exports = router;