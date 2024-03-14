const express = require("express");
const router = express.Router();
const procurementRequestController = require("../Controller/procurementRequestController");

// CRUD operations
router.get("/", procurementRequestController.getAll);
router.post("/", procurementRequestController.create);
router.get("/:id", procurementRequestController.getById);
router.put("/:id", procurementRequestController.update);
router.delete("/:id", procurementRequestController.delete);

module.exports = router;
