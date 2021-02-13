const e = require('express');
const {User}= require('../database/models');

module.exports={
 
    async list (req,res){
       
       const {email}=req.query;
       console.log('soy el LOG '+ email);
         const user =await User.findAll({
             attributes:['email', 'id', 'name']
/*               where: {

                     email:email

              } */
         })
         res.json({
             meta:{
                 status:'ok!!!'
             },

             data :{
                user
             }

         })


    }


}