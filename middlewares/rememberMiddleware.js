const {User} = require('../database/models')

function rememberSession(req, res, next){

    if(req.cookies.recordarSesion != undefined && req.session.userALogear == undefined){
    
    User.findAll()
        .then((usuarios) =>{
           
            const usuarioEncontrado = usuarios.find((usuario) => (usuario.id == req.cookies.id));

            usuarioEncontrado = userALogear;
        })


    }   
    
    next();
}

module.exports = rememberSession;