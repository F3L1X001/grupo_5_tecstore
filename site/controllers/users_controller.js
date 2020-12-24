const path = require('path'); 
const fs = require('fs');
const express = require('express');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const todos_los_usuarios = require('../helpers/users/allUsers');
const generar_id_usuarios = require('../helpers/users/usersId');
const guardar_usuarios = require('../helpers/users/saveUsers');


const usersControllers = {
    login: (req, res)=>{      
        res.render('login')
    },

    login_send: (req, res)=>{
        const results = validationResult(req);
        const usuarios = todos_los_usuarios();

        if(!results.isEmpty()){
            return res.render('login', {
                errors: results.errors,
                oldInfo: req.body
            });
        };

        const usuarioEncontrado = usuarios.find((usuario) => (usuario.email == req.body.email));
        
        if(usuarioEncontrado.email == req.body.email && bcrypt.compareSync(req.body.password, usuarioEncontrado.password)){
            
            req.session.usuarioALogear = usuarioEncontrado;
            
            if(req.body.recordame){
                res.cookie('Usuario', usuarioEncontrado.id ,{ maxAge: 6000000});
            }
            
        return res.redirect('/users/profile');

            } else {
            return res.render('form_registro', {
                errors: {msg: 'Email o Contraseña invalidos'}
        })};
        
    },

    registro: (req, res)=>{
        res.render('form_registro')
        
    },

    registro_send: (req, res) =>{

        const results = validationResult(req);
        
        if(!results.isEmpty()){
            return res.render('form_registro', {
                errors: results.errors,
                oldInfo: req.body
            });
        };

        const nuevo_usuario = {
            id: generar_id_usuarios(),
            nombre: req.body.nombre,
            email: req.body.email,
            DNI: req.body.dni,
            password: bcrypt.hashSync(req.body.password, 10),
            sexo: req.body.sexo, //ver si se quitaron en el nuevo formulario
            terminos: req.body.terminos_ok, //ver si se quitaron en el nuevo formulario
            imagen: req.files[0].filename
        }
        
        const usuarios = todos_los_usuarios();
        const usuarios_a_guardar = [...usuarios, nuevo_usuario];

        guardar_usuarios(usuarios_a_guardar);

        res.redirect('/')
    },

    recup_pass: (req, res) => {
        res.render('recuperar_pass')
    },

    profile: (req, res) => {
        res.render('profile');
    },

    logout: (req, res) =>{
        
        const usuarios = todos_los_usuarios();
        const usuarioEncontrado = usuarios.find((usuario) => (usuario.email == res.locals.email));

        console.log(res.locals)
        console.log('estos son los usuarios ' + usuarios)
        console.log('El usuario encontrado es ' + usuarioEncontrado)


        if(req.cookies.Usuario){
            req.cookie('Usuario', usuarioEncontrado.id, {expires: new Date(Date.now()-1000)});
        };
        
        req.session.destroy();
        // Do the magic
        return res.redirect('/')
    }
    

};

module.exports = usersControllers;