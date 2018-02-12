const express = require("express");
const driversController = require("../controllers/drivers");
const router = express.Router();

router.get("/:id", driversController.get);
router.get("/", driversController.get);
router.post("/", driversController.create);
router.put("/:id", driversController.update);
router.delete("/:id", driversController.remove);

module.exports = router;