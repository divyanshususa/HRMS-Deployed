// taxOverviewSchema.js
const mongoose = require("mongoose");

const taxOverviewSchema = new mongoose.Schema(
  {
    EmployeeId: { type: String, required: true },
    Name: { type: String, required: true },
    Department: { type: String, required: true },
    CTC: { type: String, required: true },
    taxDetails: {
      type: Map,
      of: String, // 'P' or 'A' for presence or absence, or other tax-related values
    },
    grossPay: { type: Number },
    netPay: { type: Number },
    taxDeduction: { type: Number },
    EPF: { type: Number },
    ESI: { type: Number },
    paymentDate: { type: Date },
  },
  { timestamps: true }
); 
 


module.exports = mongoose.model("TaxOverview", taxOverviewSchema);
