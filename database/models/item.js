module.exports = function(sequelize, dataTypes) {
    const alias = "Item";

    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name:{
            type: dataTypes.STRING
        },

        unit_price:{
            type: dataTypes.INTEGER
        },

        quantity:{
            type: dataTypes.INTEGER
        },

        subtotal:{
            type: dataTypes.INTEGER
        },
        
        image:{
            type: dataTypes.STRING
        },

        order_id:{
            type: dataTypes.INTEGER
        },

        product_id:{
            type: dataTypes.INTEGER
        },

        user_id:{
            type: dataTypes.INTEGER
        }

    };

    const config = {
        
        tableName: "items",
        timestamps: true

    };


    const item = sequelize.define(alias, cols, config);

    item.associate = function(models) {
        item.belongsTo (models.Product, {
            as: "product",
            foreignKey: "product_id"
        });

        item.belongsTo (models.User, {
            as: "user",
            foreignKey: "user_id"
        });

        item.belongsTo (models.Order, {
            as: "order",
            foreignKey: "order_id"
        })

    };

    return item;

}