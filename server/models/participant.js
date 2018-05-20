module.exports = (sequelize, DataTypes) => {
  const participant = sequelize.define('Participant', {

  });
  participant.associate = function(models) {
    participant.belongsTo(models.User,{
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      participant.belongsTo(models.Chat,{
          foreignKey: 'chatId',
          onDelete: 'CASCADE',
      });
  };
  return participant;
};