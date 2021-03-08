const { Product, User, Item, Order} = require('../database/models')

module.exports = {

    async show(req, res){

        const items = await Item.findAll({

            where:{
                user_id: req.session.usuarioALogear.id,
                order_id: null
            }

        });

        const total = items.reduce((acum, currentValue)=>{

            return acum += currentValue.subtotal

        }, 0);

        const impuestos = total*0.21;

        const totalEImpuestos = total + impuestos;

        return res.render('productCart', {items, total, impuestos, totalEImpuestos} )

    },

    async addToCart(req, res){

        const product = await Product.findByPk(req.params.id)
        
        const price = product.price * (1 - (product.discount/100));

        let item = await Item.create({

            name: product.name,
            price: price,
            image: product.image,
            quantity: req.body.cantidad,
            subtotal: price * req.body.cantidad,
            user_id: req.session.usuarioALogear.id,

        })
        
        res.redirect('/cart');

    },

    async deleteCartProduct(req ,res){

        const id = req.params.id;

        await Item.destroy({

            where:{
                
                id:id

            }

        });

        return res.redirect('/cart');

    },

    async buyCart(req, res){

        const cartItems = await Item.findAll({
            where:{
                user_id: req.session.usuarioALogear.id,
                order_id: null
            }

        });

        const total = cartItems.reduce((acum, currentValue)=>{

            return acum += currentValue.subtotal

        }, 0);

        const impuestos = total*0.21;

        const totalEImpuestos = total + impuestos;

        const order = await Order.create({
            
            total: totalEImpuestos,
            user_id: req.session.usuarioALogear.id,
            date: Date.now()

        })

        await Item.update({
            order_id: order.id
        },{
            where:{
                user_id: req.session.usuarioALogear.id,
                order_id: null
            }
        });

        return res.redirect('/cart')
    },

    async shops(req, res){

        const user = await User.findByPk(req.session.usuarioALogear.id, {
            include:{
                all: true,
                nested: true
            }

        })

        return res.render('shops', {user})
    }


}