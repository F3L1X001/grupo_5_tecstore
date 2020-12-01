const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products_controller')
const images = require('../middlewares/images_products')
const multer = require('multer');
const path = require('path');


/* GET home page. */
router.get('/', productsController.mostrar);

router.get('/create', productsController.crear); 
router.post('/create', images.any(), productsController.crear_post);

router.get('/edit/:id', productsController.editar);
router.put('/edit/:id', images.any(), productsController.editar_put);

router.get('/sale', productsController.carrito_compras);


module.exports = router;