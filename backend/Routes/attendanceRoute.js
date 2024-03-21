const express = require("express");
const router = express.Router();
const attendanceController= require('../Controller/attendanceController')
router.post('/mark-attendance',attendanceController.MarkAttendance )
router.get('/attendance-monthwise/:employeeId', attendanceController.MonthwiseAttendance)
module.exports = router;
