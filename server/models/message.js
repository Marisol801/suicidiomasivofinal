'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: {
        type: DataTypes.STRING
    },
    time: {
        type: DataTypes.STRING
    },
  });
  Message.associate = function(models) {
      Message.belongsTo(models.Chat,{
          foreignKey: 'chatId',
          onDelete: 'CASCADE',
      });

      Message.belongsTo(models.User, {
          foreignKey: 'senderid'
      })
  };
  return Message;
};