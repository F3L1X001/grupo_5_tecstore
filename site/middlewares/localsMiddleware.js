const { localsName } = require("ejs")

function localsMiddleware (req, res, next){

    if (req.session.usuarioALogear){
        res.locals.usuarioSesion = req.session.usuarioALogear;
    } else {
        res.locals.usuarioSesion = false;
    }

    next();
}

module.exports = localsMiddleware;