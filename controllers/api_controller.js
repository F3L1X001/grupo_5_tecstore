const e = require('express');
const {User, Product, Category, Order, Item}= require('../database/models');

module.exports={
 
    async userList (req,res){
       

       
        const users =await User.findAll({
            attributes:['email', 'id', 'name']

        })

        for (const user of users) {
            user.setDataValue('endpoint', 'https://localhost:3000/api/users/' + user.id)
            user.setDataValue('image', 'https://localhost:3000/public/images/users_details/' + user.image)
        }   
        res.json({
            meta:{
                status:'ok!!!',
                count: users.length
            },

            data :{
                users
            }

        })

    },

    async userDetail(req, res){

        const id =req.params.id;
        const user = await User.findByPk(id, {
            attributes:['email','name', 'image']
        })

        user.setDataValue('image', 'https://localhost:3000/public/images/users_details/' + user.image)

        res.json({
            meta:{
                status:'ok!!!'
            },

            data:{
                user
            }
        })

    },

    async productList(req, res){

        
        const products =await Product.findAll({
            attributes:['name', 'id', 'description', 'code', 'image', 'category_id', 'price'],
            include:["category"]})

        const categories = await Category.findAll({
            attributes:['name'],
            include:["products"]
        })

        const categoriesMaped = categories.map(category =>{
           return {
                name: category.name,
                count: category.products.length,
                id: category.id
            }
        })

        for (const product of products) {
            product.setDataValue('endpoint', 'https://localhost:3000/api/products/' + product.id)
            product.setDataValue('image', 'https://localhost:3000/public/images/product_details/' + product.image)
        }   
        res.json({
            meta:{
                status:'ok!!!',
                count: products.length,
                countByCategory: categoriesMaped  
            },

            data :{
                products
            }

        })

    },

    async productDetail(req, res){

        const id =req.params.id;
        const product = await Product.findByPk(id, {
            attributes:['name', 'image', 'price', 'category_id', 'code', 'description']
        })

        product.setDataValue('image', 'https://localhost:3000/public/images/product_details/' + product.image )
        res.json({
            meta:{
                status:'ok!!!'
            },

            data:{
                product
            }
        })

    },

    async categoryList(req, res){

        
        const category =await Category.findAll({
            attributes:['name', 'id', 'active']})

        res.json({
            meta:{
                status:'ok!!!',
                count: category.length, 
            },

            data :{
                category
            }

        })

    },

    async ordersList(req, res){

        
        const orders =await Order.findAll({
            attributes:['date', 'total', 'id'],
             include:["items"]})
        const items = await Item.findAll({ 
             attributes:['name', 'quantity', 'subtotal','createdAt' ],
             order: [
                       ['createdAt', 'DESC'],
                    ],
             include:["order"]
        })
        res.json({
            meta:{
                status:'ok!!!',
                count: orders.length, 
            },

            data :{
                orders,items
                
            }

        })

    },


}