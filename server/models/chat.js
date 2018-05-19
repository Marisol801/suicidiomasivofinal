
module.exports = (sequelize, DataTypes) => {
  var Chat = sequelize.define('Chat', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    participants: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  });
  Chat.associate = function(models) {

    Chat.belongsToMany(models.User,{
        through:'user_chat',
        foreignKey:'userId',
        })
  };
  return Chat;
};