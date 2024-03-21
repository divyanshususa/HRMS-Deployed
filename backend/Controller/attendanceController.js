const Attendance = require('../Schemas/attendanceSchema');
const EmployeeSchemas = require('../Schemas/employee');

exports.MarkAttendance=async(req, res)=>{
    try {
        const { employeeId, action } = req.body;
        
        const employee = await EmployeeSchemas.findById(employeeId);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        
        const today = new Date().toISOString().split('T')[0];
        let attendance = await Attendance.findOne({ employee: employeeId, date: today });
        
        if (!attendance) {
            attendance = new Attendance({
                employee: employeeId,
                date: today
            });
        }
        
        if (action === 'punchIn') {
            if (attendance.punchIn) {
                return res.status(400).json({ error: 'Already punched in' });
            }
            attendance.punchIn = new Date();
            attendance.status="Present"
        } else if (action === 'punchOut') {
            if (!attendance.punchIn) {
                return res.status(400).json({ error: 'Cannot punch out without punching in' });
            }
            attendance.punchOut = new Date();
        } else {
            return res.status(400).json({ error: 'Invalid action' });
        }
        
        // Save the updated attendance record
        await attendance.save();
        
        res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.MonthwiseAttendance=async (req, res) => {
    try {
        const { employeeId } = req.params;
        const { year, month } = req.query;
        
        // const currentDate = new Date();
        // const currentYear = year || currentDate.getFullYear();
        // const currentMonth = month || currentDate.getMonth() + 1; // Month is zero-based
        
        // const attendanceRecords = await Attendance.find({
        //     employee: employeeId,
        //     date: { 
        //         $gte: new Date(currentYear, currentMonth - 1, 1), // Start of the month
        //         $lt: new Date(currentYear, currentMonth, 1) // End of the month
        //     }
        // });
        
        // const totalDaysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // Get the total days in the specified month
        // const totalDaysAttended = attendanceRecords.filter(record => record.status === 'Present').length;
        // const totalDaysAbsent = totalDaysInMonth - totalDaysAttended;
        // const attendancePercentage = (totalDaysAttended / totalDaysInMonth) * 100;


        
        const startDate = new Date(year, month - 1, 1); // First day of the month
        const endDate = new Date(year, month, 0); // Last day of the month

        const attendance = await Attendance.find({
            employee: employeeId,
            date: { $gte: startDate, $lte: endDate }
        });

        const totalDaysInMonth = endDate.getDate(); // Total days in the month

        // Calculate total working days (excluding Sundays)
        const workingDays = attendance.filter(day => day.date.getDay() !== 0);
        const totalWorkingDays = workingDays.length;
        console.log(workingDays)
        // Calculate total days attended
        const totalDaysAttended = attendance.filter(day => day.status === 'Present').length;

        // Calculate total days absent
        const totalDaysAbsent = totalWorkingDays - totalDaysAttended;

        // Calculate attendance percentage
        const attendancePercentage = totalDaysAttended / totalWorkingDays * 100;
        res.status(200).json({ 
            totalDaysAttended,
            totalDaysAbsent,
            totalDaysInMonth,
            attendancePercentage,
            totalWorkingDays
        });
    } catch (error) {
        console.error('Error fetching month-wise attendance:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}