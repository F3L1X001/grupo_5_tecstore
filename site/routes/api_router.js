

var express = require('express');

var router = express.Router(); 

const api_controller=require('../controllers/api_controller');

router.get('/users', api_controller.userList);

router.get('/users/:id', api_controller.userDetail);

router.get('/products', api_controller.productList);

router.get('/categories', api_controller.categoryList);

router.get('/products/:id', api_controller.productDetail);


module.exports=router;