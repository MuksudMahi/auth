var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.User;


module.exports.displayHomePage = (req, res, next) => {
    res.render('portfolio/home', { title: 'Home' , id:'bg-home', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('portfolio/about', { title: 'About Me' , id:'bg-other', displayName: req.user ? req.user.displayName : ''});
}

module.exports.diplayProjectsPage = (req, res, next) => {
    res.render('portfolio/projects', { title: 'Projects' , id:'bg-other',  displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('portfolio/services', { title: 'Services' , id:'bg-other',  displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('portfolio/contact', { title: 'Contact Me' , id:'bg-other', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayLoginPage = (req, res, next) => {
    if(!req.User)
    {
        res.render('auth/login',
        {
            title: 'Login',
            id: '',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLogin = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        //server error
        if(err)
        {
            return next(err);
        }
        //user login error
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login')
        }
        req.login(user, (err) => {
            //server error
            if(err)
            {
                return next(err);
            }
            return res.redirect('/business_contact');
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req,res, next) => {
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            id: '',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegister = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log('Error: inserting new user');
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists'
                );
                console.log('Error: User Already Exists');
            }
            return res.render('auth/register',
            {
                title: 'Register',
                id:'',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/business_contact');
            });
        }
    });
}

module.exports.processLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}