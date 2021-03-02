const path = require('path'); 
const fs = require('fs');
const { json } = require('express');

function guardar_usuarios (datos_usuarios){
    const usuarios_ubicacion_BD = path.join(__dirname, '../../data', 'datos-usuarios.json');
    const usuariosJson = JSON.stringify(datos_usuarios, null, " ");
    fs.writeFileSync(usuarios_ubicacion_BD, usuariosJson);
};

module.exports = guardar_usuarios;