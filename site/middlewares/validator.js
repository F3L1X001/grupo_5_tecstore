const express = require('express');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const db = require('../database/models');


module.exports = {
    register:[
        body('nombre')
            .notEmpty()
                .withMessage('El nombre no puede estar vacio')
                .bail()
            .isLength({min:2})
                .withMessage('El nombre debe tener minimo 2 caracteres'), 
        body('email')
            .notEmpty()
                .withMessage('El email no puede estar vacio')
                .bail()
            .isEmail()
                .withMessage('Debe tener formato Email')
                .bail()
            .custom(function(value){
                
                return db.User.findOne({
                        where: {
                            email: value
                        }
                }).then (user =>{
                    if(user){
                        return Promise.reject('El email ya existe')
                    }
                })}),
                
        body('password')
            .isLength({min:8})
                .withMessage('La contraseña debe tener minimo 8 caracteres.') 
                .bail()
            .custom(function(value, { req }){
                if(value == req.body.password1){
                    return true;
                } else { return false;}
                })
                .withMessage('Las passwords tiene que ser iguales')
                .bail()
            .isStrongPassword({minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})
                .withMessage('La contraseña debe tener min 8 caracteres, 1 Maysc, 1 Minsc, 1 numero y 1 caracter especial'),
        body('avatar')
            .custom(function (value, { req }){
                return req.files[0];
            })
                .withMessage('Debe cargar una imagen')
                .bail()
            .custom(function(value, { req }){
            const ext = path.extname(req.files[0].originalname);
            if( ext == '.jpg' || ext == '.png' || ext == '.jpeg' || ext == '.gif'){
                return true;
            }
                return false;
            })
                .withMessage('El archivo de imagen debe ser .jpg/.png/.jpeg/.gif')
    ],
    login: [
        body('email')
        .notEmpty()
            .withMessage('El email no puede estar vacio')
            .bail()
        .isEmail()
            .withMessage('Debe tener formato Email'),
        body('password')
        .notEmpty()
            .withMessage('La contraseña no puede estar vacia') // validado y existir en la BD
    ],
    createProduct: [
        /* Validar nombre obligatorio, minimo 5 caracteres.
        Descripcion validar con min 20 caracteres.
        Imagen validar con extensiones.*/
    ],
    editProduct: [
         /* Validar nombre obligatorio, minimo 5 caracteres.
        Descripcion validar con min 20 caracteres.
        Imagen validar con extensiones.*/
    ]    
}