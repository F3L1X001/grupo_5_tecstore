module.exports = function(sequelize, dataTypes) {
    const alias = "Shipment";

    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        date:{
            type: dataTypes.DATE
        },

    };

    const config = {
        
        tableName: "shipments",
        timestamps: true

    };


    const shipment = sequelize.define(alias, cols, config);

    shipment.associate = function(models) {
        
        shipment.belongsToMany (models.Order, {
            as: "orders",
            through: "order_shipment",
            foreignKey: "shipment_id",
            otherKey: "order_id",
            timestamps: true

        })
    
    };

    return shipment;

}