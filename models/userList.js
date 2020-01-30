module.exports = function(sequelize, Datatypes) {
    var UserList = sequelize.define("UserList", {
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
        played: {
            type: Datatypes.BOOLEAN,
      allowNull: false
        }
    });
    UserList.associate = function(models){
        UserList.belongsTo(models.Game, {
            foreinKey: "game_name"
        });
    };
    return UserList;
};