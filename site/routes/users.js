const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
const validator = require('../middlewares/validator');
const userImages = require('../middlewares/images_users');
const authorization = require('../middlewares/authMiddleware');
const guest = require('../middlewares/guestMiddlwares')
const rememberSession = require('../middlewares/rememberMiddleware')


/* GET login form and send login form*/
router.get('/login', guest, usersController.login);
router.post('/login', guest, validator.login, rememberSession, usersController.login_send);

/* GET regiter form and send register form*/
router.get('/registro', guest, usersController.registro);
router.post('/registro', guest, userImages.any(), validator.register, usersController.registro_send);

/* GET pass recovery form and send pass recovery form*/
router.get('/recup_pass', guest, usersController.recup_pass);

/* GET user profile page */
router.get('/profile', authorization, usersController.profile);

/* GET edit user data */
router.get('/profile/edit/:id', authorization, usersController.profile_edit)
router.put('/profile/edit/:id/data', authorization, userImages.any(), validator.userDataEdit, usersController.profile_data_edited)
router.put('/profile/edit/:id/pwd', authorization, userImages.any(), validator.userPwdEdit, usersController.profile_pwd_edited)



/* GET user logout */
router.get('/logout', authorization, usersController.logout)

module.exports = router;
