const todos_los_usuarios = require('../users/allUsers')

function generar_id_usuarios() {
    const usuarios = todos_los_usuarios();
    const nueva_id_usuario = usuarios.pop().id + 1;
    return nueva_id_usuario;
};

module.exports = generar_id_usuarios;