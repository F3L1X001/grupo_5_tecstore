const todos_los_usuarios = require('../helpers/users/allUsers');

function rememberSession(req, res, next){

    if(req.cookies.recordarSesion != undefined && req.session.userALogear == undefined){
    
    const usuarios = todos_los_usuarios();
    const usuarioEncontrado = usuarios.find((usuario) => (usuario.id == req.cookies.id));

    usuarioEncontrado = userALogear;

    }   
    
    next();
}

module.exports = rememberSession;