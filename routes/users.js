const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.get("/:id", usersController.get);
router.get("/", usersController.get);
router.post("/", usersController.create);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.remove);

module.exports = router;