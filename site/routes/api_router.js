

var express = require('express');

var router = express.Router(); 

const api_controller=require('../controllers/api_controller');

router.get('/users', api_controller.list);

module.exports=router;