const mongoose = require('mongoose');

let EmpRequestSchemas= mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile:{
        type:String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    aadhar_number: {
        type: String,
        required: false
    },
    pan_number: {
        type: String,
        required: false
    },
    resume:
    {
        type: String,
        required: false
    },
    offer_letter:
    {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    },
    education: {
        type: String,
        required: false
    },

})



module.exports = EmpRequestSchemas = mongoose.model('RequestForm', EmpRequestSchemas);