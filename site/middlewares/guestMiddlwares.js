function guest(req, res, next){
    if(req.session.userALogear == undefined){
        next()
    } else{
        res.redirect('./');
    }

};

module.exports = guest;