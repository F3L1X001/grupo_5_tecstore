const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index_controller');
const autenticacion = require('../middlewares/authMiddleware');

/* GET home page. */
router.get('/', indexController.home);
router.get('/dash',autenticacion, indexController.dash);
router.get('/search', indexController.search);

//ContactPage
router.get('/contact', indexController.contactPage);


module.exports = router;
