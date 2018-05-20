module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    User.associate = function(models) {
        User.hasMany(models.Participant, {
            foreignKey: 'userId',
            as: 'chats',
        })
    };
    return User;
};