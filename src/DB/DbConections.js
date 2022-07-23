const mongodb = require('mongodb');
const mongoose = require('mongoose')

const ActSchema = new mongoose.Schema({

    user: {
        type: String,
        required: true
    },

    puesto: {
        type: String,
        required: true
    },

    historic: {
    type: Array,
    required: true,
}

});


module.exports = mongoose.model('ActSchema', ActSchema);