const express = require('express')
const router = express.Router();
const cart_controller = require('../controllers/cart_controller')

//GET ROUTES FOR CART

router.get('/', cart_controller.show)

router.get('/shops', cart_controller.shops)

//POST ROUTES FOR CART

router.post('/addToCart/:id', cart_controller.addToCart)

router.post('/buyCart', cart_controller.buyCart)

//DELETE ROUTE FOR CART

router.delete('/delete/:id', cart_controller.deleteCartProduct)



module.exports = router;