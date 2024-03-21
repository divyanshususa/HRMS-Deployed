const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    date: {
        type: Date,
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
        type: Date,
        required: false
    },
    punchOut: {
        type: Date,
        required: false
    },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;