const mongoose = require('mongoose');

const documentsSchema = new mongoose.Schema({
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'manager' },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'employees' },
    aadhar_number: {
        type: String,
        required: false
    },
    pan_number: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    },
    pan_card:
    {
        type: String,
        required: false
    },
    identity_proof:
    {
        type: String,
        required: false
    },
    resume:
    {
        type: String,
        required: false
    },
    certificate_10th:
    {
        type: String,
        required: false
    },
    certificate_12th:
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
});

const Documents = mongoose.model('Documents', documentsSchema);

module.exports = Documents;
