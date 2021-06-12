var express = require('express');
var router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('portfolio/home', { title: 'Home' , id:'bg-home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('portfolio/about', { title: 'About Me' , id:'bg-other'});
}

module.exports.diplayProjectsPage = (req, res, next) => {
    res.render('portfolio/projects', { title: 'Projects' , id:'bg-other'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('portfolio/services', { title: 'Services' , id:'bg-other'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('portfolio/contact', { title: 'Contact Me' , id:'bg-other'});
}