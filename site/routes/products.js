const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products_controller')

/* GET home page. */
router.get('/', productsController.mostrar);

router.get('/create', productsController.crear); 

router.get('/edit', productsController.editar);


module.exports = router;