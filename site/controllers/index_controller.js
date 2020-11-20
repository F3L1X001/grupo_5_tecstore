const path = require('path'); 
const fs = require('fs');
const { json } = require('express');

function todo_los_productos() {
    const productos_ubicacion_BD = path.join(__dirname, '../data', 'datos-productos.json');
    const productos_BD = JSON.parse(fs.readFileSync(productos_ubicacion_BD, 'utf-8'));
    return productos_BD;
};


const indexController = {
    home: function (req, res){
        const productos = todo_los_productos();
        
        res.render('index',{
            productos: productos
        });
    }
  
};

module.exports = indexController;