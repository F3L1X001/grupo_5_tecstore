module.exports = function(sequelize, dataTypes) {
    const alias = "Category";

    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name:{
            type: dataTypes.STRING
        },

        active:{
            type: dataTypes.INTEGER
        },

        category_offer:{
            type: dataTypes.INTEGER
        }

    };

    const config = {
        
        tableName: "categories",
        timestamps: true

    };


    const category = sequelize.define(alias, cols, config);

    category.associate = function(models) {
        category.hasMany (models.Product, {
            as: "products",
            foreignKey: "product_id"
        });

    };

    return category;

}