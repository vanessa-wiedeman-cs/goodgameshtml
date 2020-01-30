module.exports = function (sequelize, Datatypes) {
    var User = sequelize.define("User", {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_name: {
            type: Datatypes.STRING(100),
            allowNull: false
        },
        password: {
            type: Datatypes.STRING(100),
            allowNull: false
        }
    });
    User.associate = function (models) {
        /* User.belongsTo(models.UserList, {
             foreignKey: "user_name"
         });*/
    };
    return User;
};