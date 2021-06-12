let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();


//create a model class
let contactModel = mongoose.Schema({
    name: String,
    contact: String,
    email: String
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('Contact', contactModel);