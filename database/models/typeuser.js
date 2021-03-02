module.exports = function(sequelize, dataTypes) {
    const alias = "Typeuser";

    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        coustomer:{
            type: dataTypes.INTEGER
        },

        admin:{
            type: dataTypes.INTEGER
        },

        superadmin:{
            type: dataTypes.INTEGER
        }

    };

    const config = {
        
        tableName: "Typeusers",
        timestamps: true

    };


    const typeuser = sequelize.define(alias, cols, config);

    typeuser.associate = function(models) {

        typeuser.belongsTo (models.User, {
            as: "user",
            foreignKey: "typeuser_id"
        });
    };

    return typeuser;

}