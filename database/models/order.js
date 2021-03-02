module.exports = function(sequelize, dataTypes) {
    const alias = "Order";

    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        date:{
            type: dataTypes.DATE
        },

        total:{
            type: dataTypes.INTEGER
        },

        user_id:{
            type: dataTypes.INTEGER
        }

    };

    const config = {
        
        tableName: "orders",
        timestamps: true

    };


    const order = sequelize.define(alias, cols, config);

    order.associate = function(models) {
        order.belongsTo (models.User, {
            as: "user",
            foreignKey: "user_id"
        });

        order.hasMany (models.Item, {
            as: "items",
            foreignKey: "order_id"
        });

        order.belongsToMany (models.Shipment, {
            as: "shipments",
            through: "order_shipment",
            foreignKey: "order_id",
            otherKey: "shipment_id",
            timestamps: true

        })
    
    };

    return order;

}