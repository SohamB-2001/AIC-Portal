const mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
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
    age: {
        type: Number,
    },
    weight: {
        type: Number, 
    },
    isReferred: {
        type: Boolean,
    },
    isVaccinated: {
        type: Boolean,
    },
    isImmuno: {
        type: Boolean,
    },
    immunoType: {
        type: String,
        enum: ['eRIG','mRIG',' HRIG']
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }
})