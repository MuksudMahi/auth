let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.diplayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET login page */
router.get('/login', indexController.displayLoginPage);

/* POST route to process login*/
router.post('/login', indexController.processLogin);

/* GET register page */
router.get('/register', indexController.displayRegisterPage);

/* POST route for processing user registration */
router.post('/register', indexController.processRegister);

/* GET to perform user logout */
router.get('/logout', indexController.processLogout);


module.exports = router;
