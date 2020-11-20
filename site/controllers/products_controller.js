const fs = require('fs');
const path = require('path');
const { json } = require('express');

function todo_los_productos() {
    const productos_ubicacion_BD = path.join(__dirname, '../data', 'datos-productos.json');
    const productos_BD = JSON.parse(fs.readFileSync(productos_ubicacion_BD, 'utf-8'));
    return productos_BD;
};

function generar_id_producto(){
    const productos = todo_los_productos();
    const nueva_id_producto = productos.pop().id + 1;
    return nueva_id_producto;
}

const productsController = {
    mostrar: (req, res)=>{
        res.render('productDetail');
    },

    crear: (req, res)=>{
        res.render('carga_producto')
        //res.sendFile(path.join(__dirname, '../views', '/login.html'));
    },

    editar: (req, res)=>{
        res.render('carga_producto')
        //res.sendFile(path.join(__dirname, '../views', '/form_registro.html'));
    },
    carrito_compras: (req, res) =>{
        res.render('productCart')
    }
};

module.exports = productsController;