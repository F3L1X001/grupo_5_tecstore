const path = require('path'); 
const fs = require('fs');
const { json } = require('express');

function todos_los_usuarios() {
    const usuarios_ubicacion_BD = path.join(__dirname, '../data', 'datos-usuarios.json');
    const usuarios_parseados = JSON.parse(fs.readFileSync(usuarios_ubicacion_BD, 'utf-8'));
    if (usuarios_parseados == "")  {
        return primerUsuario = [{
            id: null,
            nombre: null,
            fecha_nacimiento: null,
            email: null,
            DNI: null,
            password: null,
            sexo: null,
            provincia: null,
            terminos: null
        }]
    } else {
        return usuarios_parseados;
    };

};

function generar_id_usuarios() {
    const usuarios = todos_los_usuarios();
    const nueva_id_usuario = usuarios != [] ? usuarios.pop().id +1 : usuarios.id = 1;
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
        const login_usuario = {
           email: req.body.email,
           password: req.body.password
        } 

    },

    registro: (req, res)=>{
        res.render('form_registro')
        
    },

    registro_send: (req, res) =>{
        const nuevo_usuario = {
            id: generar_id_usuarios(),
            nombre: req.body.nombre,
            fecha_nacimiento: req.body.fecha_nacimiento,
            email: req.body.mail,
            DNI: req.body.dni,
            password: req.body.password,
            sexo: req.body.sexo,
            provincia: req.body.provincia,
            terminos:req.body.terminos_ok
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