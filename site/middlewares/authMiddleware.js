function autenticacion(req, res, next){
    if(req.session.usarioALogear != undefined){
        next()
    } else{
        res.redirect('./login');
    }

};

module.exports = autenticacion;