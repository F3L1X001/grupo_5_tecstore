module.exports = function(sequelize, dataTypes) {
    const alias = "User";

    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name:{
            type: dataTypes.STRING
        },

        password:{
            type: dataTypes.STRING
        },

        email:{
            type: dataTypes.STRING
        },

        dni:{
            type: dataTypes.INTEGER
        },

        sex:{
            type: dataTypes.STRING
        },

        terms:{
            type: dataTypes.STRING
        },

        image:{
            type: dataTypes.STRING
        },
        
        typeuser_id:{
            type: dataTypes.INTEGER
        }

    };

    const config = {
        
        tableName: "users",
        timestamps: true

    };


    const user = sequelize.define(alias, cols, config);

    user.associate = function(models) {
        user.hasMany (models.Order, {
            as: "orders",
            foreignKey: "user_id"
        });

        user.belongsTo (models.Typeuser, {
            as: "typeuser",
            foreignKey: "typeuser_id"
        })

        user.hasMany (models.Item, {
            as: "items",
            foreignKey: "user_id"
        });


    };

    return user;

}