const express = require("express");
const router = express.Router();
const TaxDefinitionController = require("../Controller/TaxDefinitionController");

router.get("/", TaxDefinitionController.getAllTaxDefinitions);
router.post("/", TaxDefinitionController.createTaxDefinition);
router.put("/:id", TaxDefinitionController.updateTaxDefinition);
router.delete("/:id", TaxDefinitionController.deleteTaxDefinition);

module.exports = router;
