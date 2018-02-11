const express = require("express");
const router = express.Router();
const drivers = require("./drivers");
const packages = require("./packages");
const trucks = require("./trucks");
const users = require("./users");

router.use("/drivers", drivers);
router.use("/packages", packages);
router.use("/trucks", trucks);
router.use("/users", users);

module.exports = router;