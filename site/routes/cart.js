const express = require('express')
const router = express.Router();
const cart_controller = require('../controllers/cart_controller');
const authorization = require('../middlewares/authMiddleware');

//GET ROUTES FOR CART

router.get('/', authorization, cart_controller.show)

router.get('/shops', authorization, cart_controller.shops)

//POST ROUTES FOR CART

router.post('/addToCart/:id', authorization, cart_controller.addToCart)

router.post('/buyCart', authorization, cart_controller.buyCart)

//DELETE ROUTE FOR CART

router.delete('/delete/:id', authorization, cart_controller.deleteCartProduct)



module.exports = router;