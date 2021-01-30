const path = require('path'); 
const fs = require('fs');
const { json } = require('express');
const { search } = require('../routes');

function todo_los_productos() {
    const productos_ubicacion_BD = path.join(__dirname, '../data', 'datos-productos.json');
    const productos_BD = JSON.parse(fs.readFileSync(productos_ubicacion_BD, 'utf-8'));
    return productos_BD;
};


const indexController = {
    home: function (req, res){

        const destacProduct = todo_los_productos().filter ((product) => {
            return product.category == 'destacados';
        });

        const ultProduct = todo_los_productos().filter ((product) => {
            return product.category == 'ultimos';
        });

        res.render('index',{
            productosDestacados:destacProduct,
            ultimosProductos: ultProduct
            
        });

    },
   dash: function (req,res){
       res.render('dash')

   }


    
   
};

module.exports = indexController;