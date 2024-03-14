const express = require("express");
const router = express.Router();
const PaySlipController = require("../Controller/PaySlipController");

router.get("/", PaySlipController.getAllPaySlips);
router.post("/", PaySlipController.createPaySlip);
router.put("/:id", PaySlipController.updatePaySlip);
router.delete("/:id", PaySlipController.deletePaySlip);

module.exports = router;
