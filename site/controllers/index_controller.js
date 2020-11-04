const path = require('path'); //Esto es solo para que funcione el sendFile despues se elimina cuando pasemos a render con EJS

const indexController = {
    home: function (req, res){
        res.sendFile(path.join(__dirname, '../views', 'index.html'));
    },

    login: (req, res)=>{
        res.render('login')
        //res.sendFile(path.join(__dirname, '../views', '/login.html'));
    },

    registro: (req, res)=>{
        res.render('form_registro')
        //res.sendFile(path.join(__dirname, '../views', '/form_registro.html'));
    },

    recup_pass: (req, res)=>{
        res.render('recuperar_pass')
        //res.sendFile(path.join(__dirname, '../views', '/recuperar_pass.html'));
    }
};

module.exports = indexController;