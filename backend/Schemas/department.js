const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name:{type: String, required: true},
    employees:[ { type: mongoose.Schema.Types.ObjectId, ref: 'employees' }],
   
});

const Deparments = mongoose.model('Deparments', departmentSchema);

module.exports = Deparments;
