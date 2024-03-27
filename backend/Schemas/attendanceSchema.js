const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        default: 'Absent'
    },
    remarks: {
        type: String,
        required: false
    },
    punchIn: {
        type: String,
        required: false
    },
    punchOut: {
        type: String,
        required: false
    },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
