const e = require('express');
const {User}= require('../database/models');

module.exports={
 
    async list (req,res){
       

       
        const users =await User.findAll({
            attributes:['email', 'id', 'name']

        })

        for (const user of users) {
            user.setDataValue('endpoint', 'https://localhost:3000/api/users/' + user.id)
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

    async detail(req, res){

        const id =req.params.id;
        const user = await User.findByPk(id, {
            attributes:['email','name', 'image']
        })
        res.json({
            meta:{
                status:'ok!!!'
            },

            data:{
                user
            }
        })

    }


}