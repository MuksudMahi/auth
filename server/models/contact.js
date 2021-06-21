/*
*contact.js
*Muksud Hussain Mahi
*ID: 301155894
*June 20, 2021
*/

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