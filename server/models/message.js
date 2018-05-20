'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    senderid: {
        type: DataTypes.INTEGER
    },
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
  };
  return Message;
};