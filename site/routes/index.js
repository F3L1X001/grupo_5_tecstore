const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index_controller')

/* GET home page. */
router.get('/', indexController.home);

router.get('/login', indexController.login); 

router.get('/registro', indexController.registro);

router.get('/recup_pass', indexController.recup_pass);

module.exports = router;
