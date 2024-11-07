const express = require("express");
const router = express.Router();
const taxOverviewController = require("../Controller/taxOverviewController");

router.post("/upload", taxOverviewController.uploadTaxOverview);
router.get("/getdata", taxOverviewController.getAggregateData);

module.exports = router;
