const mongoose = require('mongoose');

var DoctorSchema = new mongoose.Schema({
    firstName : {
        type: String, 
        required: true,
    },
    lastName : {
        type: String, 
        required: true,
    },
    phoneNo : {
        type: Number,
        validate: {
            validator: function(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }]
})