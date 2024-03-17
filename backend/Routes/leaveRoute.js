

const express = require('express');
const router = express.Router();
const leaveController = require('../Controller/leaveController');

router.post('/apply', leaveController.applyLeave);
router.get('/allLeaves', leaveController.allLeaves);
router.get('/empleave/:employeeId', leaveController.Empleave);
router.put('/approve', leaveController.approveLeave);
router.put('/reject', leaveController.rejectLeave);

module.exports = router;
