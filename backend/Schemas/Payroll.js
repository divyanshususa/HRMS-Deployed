const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema({
  grossSalaryThisMonth: {
    type: Number,
    required: true,
  },
  netSalaryThisMonth: {
    type: Number,
    required: true,
  },
  totalTaxThisMonth: {
    type: Number,
    required: true,
  },
  totalLoanThisMonth: {
    type: Number,
    required: true,
  },
});

const Payroll = mongoose.model("Payroll", payrollSchema);

module.exports = Payroll;
