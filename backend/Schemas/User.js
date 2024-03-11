const mongoose = require('mongoose');


let UserSchemas = mongoose.Schema({
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
    // dateofbirth: {
    //     type: String,
    //     required: true
    // },
    // fathername: {
    //     type: String,
    //     required: true
    // },
    // mothername: {
    //     type: String,
    //     required: true
    // },
    gender: {
        type: String,
        required: true
    },
    // spousename: {
    //     type: String,
    //     required: false
    // },
    address: {
        type: String,
        required: true
    },
    mobile: [
        {
            type: String,
            required: false

        }
    ],
    aadhar_number: {
        type: String,
        required: false
    },
    pan_number: {
        type: String,
        required: false
    },
    // percentage_10th: {
    //     type: String,
    //     required: true
    // },
    // percentage_12th: {
    //     type: String,
    //     required: true
    // },
    // percentage_graduation: {
    //     type: String,
    //     required: true
    // },
    createdAt: {
        type: String,
        required: false
    },
    // percentage_postgraduation: {
    //     type: String,
    //     required: true
    // },
    // identity_proof: {
    //     type: String,
    //     required: false
    // },
    resume: {
        type: String,
        required: false

    },
    experience: {
        type: String,
        required: false
    },
    certificate_10th: {
        type: String,
        required: false
    },
    certificate_12th: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: false
    },
    reporting_manager: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    deactivate: {
        type: Boolean,
        required: false
    },
});

module.exports = UserSchemas = mongoose.model('user', UserSchemas);