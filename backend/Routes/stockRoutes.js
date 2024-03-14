// routes/stockRoutes.js
const express = require("express");
const router = express.Router();
const stockController = require("../Controller/stockController");

// CRUD routes
router.get("/", stockController.getAllStocks);
router.post("/", stockController.createStock);
router.get("/:id", stockController.getStockById);
router.put("/:id", stockController.updateStock);
router.delete("/:id", stockController.deleteStock);

module.exports = router;
