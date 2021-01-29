const fs = require('fs');
const path = require('path');
const express = require('express');
const db = require('../database/models');


const productsController = {
    
    listar: (req, res)=> {

        db.Product.findAll()
            .then(productos=>{

                res.render('productList', { products: productos })

            })   

    },
    
    mostrar: async (req, res)=>{
       
        const todosProductos = await db.Product.findAll()

        const id = req.params.id;
		//const productos = todo_los_productos();
		const resultado = todosProductos.find((producto) => {
			return producto.id == id
		})
        
        res.render('productDetail', {
            product: resultado
        });
    },

    crear: (req, res)=>{
        res.render('carga_producto')
        //res.sendFile(path.join(__dirname, '../views', '/login.html'));
    },

    crear_post: async (req, res, next) => {
        const nuevo_producto = {
            //id: generar_id_producto(),
            name: req.body.marca,
            price: req.body.precio,
            discount: req.body.descuento,
            category: req.body.categoria,
            description: req.body.descripcion,
            code: req.body.cod_prod,
            image: req.files[0].filename
        }

        await db.Product.create(nuevo_producto)

       /*  const productos = todo_los_productos();
        const Productos_guardar = [...productos, nuevo_producto];

        guardar_productos(Productos_guardar); */

        res.redirect('/products/create');
    },

    editar: async (req, res) => {
        
        const resultado = await db.Product.findByPk(req.params.id);

        const categorias = await db.Category.findAll();
        
       /*  const id = req.params.id;

        
        const resultado = productos.find((producto) => producto.id == id); */
        

        res.render('form_edicion_producto', {
            producto: resultado,
            categoria: categorias
        })
        //res.sendFile(path.join(__dirname, '../views', '/form_registro.html'));
    },

    editar_put: (req, res) => {
     /*    const productos = todo_los_productos();
        const id = req.params.id;
        const producto_editado = productos.map((producto) =>{

            if (id == producto.id){
                
                producto.name = req.body.marca,
                producto.price = req.body.precio,
                producto.discount = req.body.descuento,
                producto.category = req.body.categoria,
                producto.description = req.body.descripcion,
                producto.code = req.body.cod_prod,
                producto.image = req.files[0] ? req.files[0].filename : producto.image
            }

            return producto
        }) 

        guardar_productos(producto_editado);*/

        db.Product.update ({
                
            name: req.body.marca,
            price: req.body.precio,
            discount: req.body.descuento,
            category_id: req.body.categoria,
            description: req.body.descripcion,
            code: req.body.cod_prod,
            image: req.files[0] ? req.files[0].filename : producto.image
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/') // hay que modificar el redirect cuando sea dinamica la seleccion de productos


    },

    borrar_producto: (req, res)=>{
        const productos =todo_los_productos();
        const id_producto_borrar = req.params.id;
        const producto_a_borrar = productos.find((product)=>{return product.id==id_producto_borrar});
        const ubicacion_producto = productos.indexOf(producto_a_borrar);
        productos.splice(ubicacion_producto, 1)
        
        guardar_productos(productos);

        res.redirect('/');
    },

    carrito_compras: (req, res) =>{
        res.render('productCart')
    }
};

module.exports = productsController;