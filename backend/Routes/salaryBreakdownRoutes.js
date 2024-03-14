const express = require("express");
const router = express.Router();
const salaryBreakdownController = require("../Controller/SalaryBreakdownController");

router.post("/", salaryBreakdownController.createSalaryBreakdown);
router.get("/", salaryBreakdownController.getAllSalaryBreakdowns);
router.get("/:id", salaryBreakdownController.getSalaryBreakdownById);
router.put("/:id", salaryBreakdownController.updateSalaryBreakdown);
router.delete("/:id", salaryBreakdownController.deleteSalaryBreakdown);

module.exports = router;
