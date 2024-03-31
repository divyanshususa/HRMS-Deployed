
const Leave = require('../Schemas/leaves');
const mongoose = require('mongoose');
const EmployeeSchemas= require('../Schemas/employee')

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
        allLeaves.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
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
          leaveRequests.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
          res.json(leaveRequests);
    } catch (error) {
        console.error('Error approving leave:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.approveLeave = async (req, res) => {
    try {
        const { leaveId } = req.query;

        const updatedLeave = await Leave.findByIdAndUpdate(leaveId, {$set:{status: 'Approved'} , reject_reason:"" }, { new: true });
        if (!updatedLeave) {
            return res.status(404).json({ error: 'Leave not found' });
        }
        // updatedLeave.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        const employeeId = updatedLeave.employee;

        // Find the employee by ID
        const employee = await EmployeeSchemas.findById(employeeId);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Deduct the number of days from the leave quota based on the leave type
        const { leaveType, numberOfDays } = updatedLeave;
        if (employee.leaveQuota.hasOwnProperty(leaveType)) {
            employee.leaveQuota[leaveType] -= numberOfDays;
            console.log(employee.leaveQuota)
        } else {
            return res.status(400).json({ error: 'Invalid leave type' });
        }

        // Save the updated employee data
        await employee.save();
        res.json(updatedLeave);
    } catch (error) {
        console.error('Error approving leave:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.rejectLeave = async (req, res) => {
    try {
        const { leaveId } = req.query;
        const updatedLeave = await Leave.findByIdAndUpdate(leaveId, {$set:{status: 'Rejected', reject_reason:req.body.reject_reason}  }, { new: true });
        if (!updatedLeave) {
            return res.status(404).json({ error: 'Leave not found' });
        }
        // updatedLeave.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        res.json(updatedLeave);
    } catch (error) {
        console.error('Error approving leave:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getPendingLeaves = async (req, res) => {
    try {
        const pending = await Leave.find({ status: 'Pending' });
        pending.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        res.json(pending);
    } catch (error) {
        console.error('Error fetching pending leaves:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getLeaveRequeststoManager = async (req, res) => {
    try {
        const { managerId } = req.params;

        // Find employees under the given manager
        const employees = await EmployeeSchemas.find({ reporting_manager: managerId }, '_id');

        // Extract employee IDs from the result
        const employeeIds = employees.map(employee => employee._id);

        // Find leave requests associated with these employees
        const leaveRequests = await Leave.find({ employee: { $in: employeeIds } }).populate('employee');
        leaveRequests.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        res.json(leaveRequests);
    } catch (error) {
        console.error('Error fetching leave requests by manager:', error);
        res.status(500).json({ error: 'Ienternal server error' });
    }}