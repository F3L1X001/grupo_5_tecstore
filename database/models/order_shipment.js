module.exports = function(sequelize, dataTypes) {
    const alias = "oder_shipment";

    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        order_id:{
            type: dataTypes.INTEGER
        },

        shipment_id:{
            type: dataTypes.INTEGER
        }

    };

    const config = {
        
        tableName: "oder_shipment",
        timestamps: true

    };


    const orderShipment = sequelize.define(alias, cols, config);

    return orderShipment;

}