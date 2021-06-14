let express = require('express');
let router = express.Router();

let passport = require('passport');

//helper
function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())

    {
        return res.redirect('/login');
    }
    next();
}

//let Contact = require('../models/contact');

let contactController = require('../controllers/business_contact');

//Display contact list page
router.get('/',requireAuth, contactController.displayContactListPage);
//Display add contact page
router.get('/add',requireAuth, contactController.displayAddContactPage);
//Performing add operation
router.post('/add', requireAuth,contactController.addCOntact);
//display edit contact page
router.get('/edit/:id', requireAuth,contactController.displayEditPage);
//performing edit operation
router.post('/edit/:id', requireAuth, contactController.editConatct);
//perform delete contact operaton
router.get('/delete/:id', requireAuth, contactController.deleteContact);

module.exports = router;
