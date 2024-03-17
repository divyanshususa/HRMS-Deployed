const mongoose = require('mongoose');

const LeaveSchema = mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees'
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    reason:{
        type:String,
        required:false

    },
    numberOfDays:{
  type:Number,
  required: false
    }
    
});

module.exports = mongoose.model('Leave', LeaveSchema);
