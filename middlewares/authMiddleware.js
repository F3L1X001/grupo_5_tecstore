function autenticacion(req, res, next){
    if(req.session.usuarioALogear != undefined){
        next()
    } else{
        res.redirect('/users/login');
    }

};

module.exports = autenticacion;