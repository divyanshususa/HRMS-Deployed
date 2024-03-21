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
    },

    reject_reason:{
        type:String,
        required: false
    }
   
},
{
    timestamps: true // Add timestamps
});

module.exports = mongoose.model('Leave', LeaveSchema);
