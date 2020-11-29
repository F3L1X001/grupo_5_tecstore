const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller')


/* GET login form and send login form*/
router.get('/login', usersController.login);
router.post('/login', usersController.login_send);

/* GET regiter form and send register form*/
router.get('/registro', usersController.registro);
router.post('/registro', usersController.registro_send);

/* GET pass recovery form and send pass recovery form*/
router.get('/recup_pass', usersController.recup_pass);
//router.post('/recup_pass', usersController.recup_pass_send);

module.exports = router;
