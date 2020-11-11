const productsController = {
    mostrar: (req, res)=>{
        res.render('productDetail');
    },

    crear: (req, res)=>{
        res.render('carga_producto')
        //res.sendFile(path.join(__dirname, '../views', '/login.html'));
    },

    editar: (req, res)=>{
        res.render('carga_producto')
        //res.sendFile(path.join(__dirname, '../views', '/form_registro.html'));
    }
};

module.exports = productsController;