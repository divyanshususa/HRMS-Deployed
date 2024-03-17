const express = require("express");
const router = express.Router();
const LogisticController = require("../Controller/LogisticController");

router.get("/getAllLogistics", LogisticController.getAllLogistic);
router.post("/create", LogisticController.createLogistic);
router.put("/:id", LogisticController.updateLogistic);
router.delete("/:id", LogisticController.deleteLogistic);

module.exports = router;
