
const Leave = require('../Schemas/leaves');
const mongoose = require('mongoose');

exports.applyLeave = async (req, res) => {
    try {
        const { employeeId } = req.body;
        //  console.log(employeeId)
        const newLeave = new Leave({
            ...req.body,
            employee: employeeId,
          
        }); 

        console.log(newLeave)

        const leave = await newLeave.save();
        res.status(201).json(leave);
    } catch (error) {
        console.error('Error applying for leave:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.allLeaves = async (req, res) => {
    try {
        
        const allLeaves = await Leave.find().populate('employee');
        if (!allLeaves) {
            return res.status(404).json({ error: 'Leave not found' });
        }
        res.json(allLeaves);
    } catch (error) {
        console.error('Error approving leave:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.Empleave = async (req, res) => {
    try {
        const { employeeId } = req.params;
      
          const leaveRequests = await Leave.find({ employee: employeeId }).populate('employee');
          if (!leaveRequests || leaveRequests.length === 0) {
              return res.status(404).json({ error: 'Leave requests not found for the employee' });
          }
          res.json(leaveRequests);
    } catch (error) {
        console.error('Error approving leave:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.approveLeave = async (req, res) => {
    try {
        const { leaveId } = req.query;

        const updatedLeave = await Leave.findByIdAndUpdate(leaveId, {$set:{status: 'Approved'}  }, { new: true });
        if (!updatedLeave) {
            return res.status(404).json({ error: 'Leave not found' });
        }
        res.json(updatedLeave);
    } catch (error) {
        console.error('Error approving leave:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.rejectLeave = async (req, res) => {
    try {
        const { leaveId } = req.query;

        const updatedLeave = await Leave.findByIdAndUpdate(leaveId, {$set:{status: 'Rejected'}  }, { new: true });
        if (!updatedLeave) {
            return res.status(404).json({ error: 'Leave not found' });
        }
        res.json(updatedLeave);
    } catch (error) {
        console.error('Error approving leave:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getPendingLeaves = async (req, res) => {
    try {
        const pending = await Leave.find({ status: 'Pending' });
        res.json(pending);
    } catch (error) {
        console.error('Error fetching pending leaves:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
