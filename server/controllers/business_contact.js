let express = require('express');
let mongoose = require('mongoose');

//connect to the contact model
let Contact = require('../models/contact');

module.exports.displayContactListPage = (req, res, next) => {
    Contact.find((err, contactList) =>
    {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business_contact/list', {title: 'Contact List', id:'', contactList: contactList, displayName: req.user ? req.user.displayName : ''});
        }
    }).sort({'name':1});
}

module.exports.displayAddContactPage = (req, res, next) => {
    res.render('business_contact/add', {title: "Add Contact", id:'', displayName: req.user ? req.user.displayName : ''});
}

module.exports.addCOntact = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "contact": req.body.contact,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/business_contact');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('business_contact/edit', {title: 'Edit Contact', id: '', contact: contactToEdit, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.editConatct = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "contact": req.body.contact,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/business_contact');
        }
    });
}

module.exports.deleteContact = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.redirect('/business_contact');
        }
    })
}

module

