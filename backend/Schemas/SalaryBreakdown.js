const mongoose = require("mongoose");

const salaryBreakdownSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  basicSalary: {
    type: Number,
    required: true,
  },
  allowance: {
    type: Number,
    required: true,
  },
  grossSalary: {
    type: Number,
    required: true,
  },
  deductions: {
    type: Number,
    required: true,
  },
  netSalary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("SalaryBreakdown", salaryBreakdownSchema);
