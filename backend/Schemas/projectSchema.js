const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    projectStatus: {
        type:String,
        default :'Pending'
    },
    tickets: {
        type: [{
            ticketId: Number,
            title: String,
            status: String
        }],
        required: false
    },
    teamAssign: {
        type: Object,
        required: true
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId, // Assuming manager is referenced by their ID
        ref: 'employees',
        required: true
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
