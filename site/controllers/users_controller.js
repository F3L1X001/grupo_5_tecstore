const path = require('path'); 
const fs = require('fs');
const { json } = require('express');
const bcrypt = require('bcrypt');

function todos_los_usuarios() {
    const usuarios_ubicacion_BD = path.join(__dirname, '../data', 'datos-usuarios.json');
    return usuarios_parseados = JSON.parse(fs.readFileSync(usuarios_ubicacion_BD, 'utf-8'));
};

function generar_id_usuarios() {
    const usuarios = todos_los_usuarios();
    const nueva_id_usuario = usuarios.pop().id + 1;
    return nueva_id_usuario;
};

function guardar_usuarios (datos_usuarios){
    const usuarios_ubicacion_BD = path.join(__dirname, '../data', 'datos-usuarios.json');
    const usuariosJson = JSON.stringify(datos_usuarios, null, " ");
    fs.writeFileSync(usuarios_ubicacion_BD, usuariosJson);
};

const usersControllers = {
    login: (req, res)=>{      
        res.render('login')
    },

    login_send: (req, res)=>{
        const ubicacion_usuarios = path.join(__dirname, '../data', 'datos-usuarios.json');
        let usuarios;
        if(ubicacion_usuarios != ""){
            usuarios = JSON.parse(fs.readFileSync(ubicacion_usuarios, 'utf-8'));
        }else{
            usuarios = [];
        };

        console.log('que pasa aca' + usuarios);
        
        for (let i=0; i < usuarios.length; i++) {
            if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)){
                console.log ('usuario logueado')
                res.send('estas logueado'); //ver que vista tiene que renderizar una vez logueado
            } else {
                res.send('Error en logueo') // ver de devolver los campos que falta para loguearse
            };
        };
    },

    registro: (req, res)=>{
        res.render('form_registro')
        
    },

    registro_send: (req, res) =>{
        const nuevo_usuario = {
            id: generar_id_usuarios(),
            nombre: req.body.nombre,
            fecha_nacimiento: req.body.fecha_nacimiento, //ver si se quitaron en el nuevo formulario
            email: req.body.email,
            DNI: req.body.dni,
            password: bcrypt.hashSync(req.body.password, 10),
            sexo: req.body.sexo, //ver si se quitaron en el nuevo formulario
            provincia: req.body.provincia, //ver si se quitaron en el nuevo formulario
            terminos: req.body.terminos_ok //ver si se quitaron en el nuevo formulario
        }
        
        const usuarios = todos_los_usuarios();
        const usuarios_a_guardar = [...usuarios, nuevo_usuario];

        guardar_usuarios(usuarios_a_guardar);

        res.redirect('/')
    },

    recup_pass: (req, res) => {
        res.render('recuperar_pass')
    }

};

module.exports = usersControllers;