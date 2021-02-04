const path = require('path'); 
const fs = require('fs');
const { json } = require('express');
const { search } = require('../routes');
const db = require('../database/models');




const indexController = {
    home: async function (req, res){

        const todos_los_productos = await db.Product.findAll({associate:[{include:"category"}]})

        const todasCategorias = await db.Category.findAll({ include: ['products'] });

        const categorias = todasCategorias.filter ((categoria) => {
            return categoria.category_offer == 0;
        });

        const categoriasOfertas = todasCategorias.filter ((categoria) => {
            return categoria.category_offer == 1;
        }); 

        res.render('index',{
            categoriasOfertas: categoriasOfertas,
            categorias: categorias
                        
        });

    },
   dash: function (req,res){
       res.render('dash')

   }


    
   
};

module.exports = indexController;