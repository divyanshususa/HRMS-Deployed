const mongoose = require("mongoose");

const procurementRequestSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  requestedBy: {
    type: String,
    required: true,
  },
  sentTo: String,
  attachmentType: String,
  paymentDetails: {
    accountName: String,
    accountNo: String,
    bankName: String,
  },
  memoActivities: {
    initiatedBy: String,
    verifiedBy: String,
    approvedBy: String,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const ProcurementRequest = mongoose.model(
  "ProcurementRequest",
  procurementRequestSchema
);

module.exports = ProcurementRequest;
