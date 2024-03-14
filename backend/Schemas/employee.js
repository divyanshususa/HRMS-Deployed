const mongoose = require('mongoose');


let EmployeeSchemas = mongoose.Schema({
    empId: {
        type: String,
        required: false,
        unique: true,
      },
    photo: {
        type: String,
        required: false
    },
    approved: {
        type: Boolean,
        required: false
    },
    role: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: false
    },

    gender: {
        type: String,
        required: true
    },
  
    address: {
        type: String,
        required: true
    },

  

    createdAt: {
        type: String,
        required: false
    },
   

    reporting_manager: {
        type: String,
        required: false
    },
    designation: {
        type: String,
        required: false
    },
  

    doj: {
        type: Date,
        required: false

    },
    otp:{
        type: String,
        required:false
    },

    resetToken: {
        type: String,
        required: false
    },
    mobile: [
        {
            mob1: {
                type: String,
                required: false,
            },
            mob2: {
                type: String,
                required: false,
            },
        },
    ],

    documents: { type: mongoose.Schema.Types.ObjectId, ref: 'Documents' },

});


EmployeeSchemas.pre('save', async function (next) {
    if (!this.empId) {
        try {
          const maxEmpId = await this.constructor.findOne({}, { empId: 1 }, { sort: { empId: -1 } });
          const lastEmpId = maxEmpId ? maxEmpId.empId : 'susa999'; // Default value if no document exists
          const newCounter = parseInt(lastEmpId.replace('susa', ''), 10) + 1;
          this.empId = `susa${newCounter}`;
          next();
        } catch (error) {
          next(error);
        }
      } else {
        next();
      }
    });


module.exports = EmployeeSchemas = mongoose.model('employees', EmployeeSchemas);