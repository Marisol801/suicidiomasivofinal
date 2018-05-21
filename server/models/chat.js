
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  });
  Chat.associate = function(models) {
      Chat.hasMany(models.Message,{
          foreignKey:'chatId',
          as:'messages',
      });
        Chat.hasMany(models.Participant,{
            foreignKey:'chatId',
            as:'users',
        })
    };
  return Chat;
};