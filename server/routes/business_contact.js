let express = require('express');
let router = express.Router();

//let Contact = require('../models/contact');

let contactController = require('../controllers/business_contact');

//Display contact list page
router.get('/', contactController.displayContactListPage);
//Display add contact page
router.get('/add', contactController.displayAddContactPage);
//Performing add operation
router.post('/add', contactController.addCOntact);
//display edit contact page
router.get('/edit/:id', contactController.displayEditPage);
//performing edit operation
router.post('/edit/:id', contactController.editConatct);
//perform delete contact operaton
router.get('/delete/:id', contactController.deleteContact);

module.exports = router;
