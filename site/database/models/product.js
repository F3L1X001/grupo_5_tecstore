module.exports = function(sequelize, dataTypes) {
    const alias = "Product";

    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name:{
            type: dataTypes.STRING
        },

        price:{
            type: dataTypes.INTEGER
        },

        discount:{
            type: dataTypes.INTEGER
        },

        description:{
            type: dataTypes.STRING
        },

        code:{
            type: dataTypes.STRING
        },

        image:{
            type: dataTypes.STRING
        },

        stock:{
            type: dataTypes.INTEGER
        },

        category_id:{
            type: dataTypes.INTEGER
        }

    };

    const config = {
        
        tableName: "products",
        timestamps: true
        
    };


    const product = sequelize.define(alias, cols, config);

    product.associate = function(models) {
        product.hasMany (models.Item, {
            as: "items",
            foreignKey: "product_id"
        });

        product.belongsTo (models.Category, {
            as: "category",
            foreignKey: "category_id"
        });

    };

    return product;

}