const mongoose = require("mongoose");

const memoTitleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sentFrom: {
    type: String,
    required: true,
  },
  sentTo: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  attachment: {
    type: Boolean,
    required: true,
  },
  attachmentType: {
    type: String,
    enum: ["Image", "Document", "PDF", "Other"],
  },
  amount: {
    type: Number,
  },
  subject: {
    type: String,
    required: true,
  },
});

const MemoTitle = mongoose.model("MemoTitle", memoTitleSchema);

module.exports = MemoTitle;
