const express = require("express");
const trucksController = require("../controllers/trucks");
const router = express.Router();

router.get("/:id", trucksController.get);
router.get("/", trucksController.get);
router.post("/", trucksController.create);
router.put("/:id", trucksController.update);
router.delete("/:id", trucksController.remove);

module.exports = router;