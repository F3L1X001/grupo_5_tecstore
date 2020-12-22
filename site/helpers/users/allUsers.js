const path = require('path'); 
const fs = require('fs');
const { json } = require('express');

function todos_los_usuarios() {
    const usuarios_ubicacion_BD = path.join(__dirname, '../../data', 'datos-usuarios.json');
    return usuarios_parseados = JSON.parse(fs.readFileSync(usuarios_ubicacion_BD, 'utf-8'));
};

module.exports = todos_los_usuarios;