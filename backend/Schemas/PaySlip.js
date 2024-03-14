const mongoose = require("mongoose");

const paySlipSchema = new mongoose.Schema({
  staffName: { type: String, required: true },
  title: { type: String, required: true },
  level: { type: String, required: true },
  salaryStructure: {
    basicSalary: { type: Number, required: true },
    houseAllowance: { type: Number, required: true },
    transportAllowance: { type: Number, required: true },
    utilityAllowance: { type: Number, required: true },
    productivityAllowance: { type: Number, required: true },
    communicationAllowance: { type: Number, required: true },
    inconvenienceAllowance: { type: Number, required: true },
  },
  deductions: {
    tax: { type: Number, required: true },
    employeePension: { type: Number, required: true },
    totalDeduction: { type: Number, required: true },
  },
  netSalary: { type: Number, required: true },
});

const PaySlip = mongoose.model("PaySlip", paySlipSchema);

module.exports = PaySlip;
