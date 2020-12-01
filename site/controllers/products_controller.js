const fs = require('fs');
const path = require('path');
const express = require('express');

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

function guardar_productos(ProductosAGuardar){
    const productos_ubicacion_BD = path.join(__dirname, '../data', 'datos-productos.json');
    const productosJson = JSON.stringify(ProductosAGuardar, null, " ");
    
    fs.writeFileSync(productos_ubicacion_BD, productosJson);
}

const productsController = {
    mostrar: (req, res)=>{
        res.render('productDetail');
    },

    crear: (req, res)=>{
        res.render('carga_producto')
        //res.sendFile(path.join(__dirname, '../views', '/login.html'));
    },

    crear_post: (req, res, next) => {
        const nuevo_producto = {
            id: generar_id_producto(),
            name: req.body.marca,
            price: req.body.precio,
            discount: req.body.descuento,
            category: req.body.categoria,
            description: req.body.descripcion,
            code: req.body.cod_prod,
            image: req.files[0].filename
        }

        const productos = todo_los_productos();
        const Productos_guardar = [...productos, nuevo_producto];

        guardar_productos(Productos_guardar);

        res.redirect('/products/create');
    },

    editar: (req, res) => {
        const productos = todo_los_productos();
        const id = req.params.id;
        const resultado = productos.find((producto) => producto.id == id);

        res.render('form_edicion_producto', {
            producto: resultado
        })
        //res.sendFile(path.join(__dirname, '../views', '/form_registro.html'));
    },

    editar_put: (req, res) => {
        const productos = todo_los_productos();
        const id = req.params.id;
        const producto_editado = productos.map((producto) =>{

            if (id == producto.id){
                
                producto.name = req.body.marca,
                producto.price = req.body.precio,
                producto.discount = req.body.descuento,
                producto.category = req.body.categoria,
                producto.description = req.body.descripcion,
                producto.code = req.body.cod_prod,
                producto.image = req.files[0] ? req.files[0].filename : product.image
            }

            return producto
        })

        guardar_productos(producto_editado);

        res.redirect('/') // hay que modificar el redirect cuando sea dinamica la seleccion de productos


    },

    carrito_compras: (req, res) =>{
        res.render('productCart')
    }
};

module.exports = productsController;