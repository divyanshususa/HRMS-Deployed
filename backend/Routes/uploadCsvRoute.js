const express = require("express");
const upload = require("../middleware/multerMiddleware");
const router = express.Router();
const  CsvController= require('../Controller/CsvUploadController')

router.post('/upload-stockCsv', upload.single('file'),CsvController.uploadStockCsv )


module.exports = router;