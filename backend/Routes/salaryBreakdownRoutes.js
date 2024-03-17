const express = require("express");
const router = express.Router();
const salaryBreakdownController = require("../Controller/SalaryBreakdownController");

router.post("/create", salaryBreakdownController.createSalaryBreakdown);
router.get("/getsalarybreakdown", salaryBreakdownController.getAllSalaryBreakdowns);
router.get("/:id", salaryBreakdownController.getSalaryBreakdownById);
router.put("/:id", salaryBreakdownController.updateSalaryBreakdown);
router.delete("/:id", salaryBreakdownController.deleteSalaryBreakdown);

module.exports = router;
