const express = require("express");
const router = express.Router();
const budgetController = require("../Controller/budgetController");

router.get("/", budgetController.getAllBudgets);
router.post("/", budgetController.createBudget);
router.put("/:id", budgetController.updateBudget);
router.delete("/:id", budgetController.deleteBudget);

module.exports = router;
