const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products_controller')
const images = require('../middlewares/images_products')



/* GET home page. */
router.get('/', productsController.listar);
router. get('/listar_admin',productsController.lisar_admin )

router.get('/detail/:id', productsController.mostrar);

router.get('/create', productsController.crear); 
router.post('/create', images.any(), productsController.crear_post);

router.get('/edit/:id', productsController.editar);
router.put('/edit/:id', images.any(), productsController.editar_put);

router.delete('/delete/:id', productsController.borrar_producto);

router.get('/sale', productsController.carrito_compras);


module.exports = router;