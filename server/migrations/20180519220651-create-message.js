'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chatId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: 'Chats',
            key: 'id',
            as: 'chatId',
        }
      },
      senderid: {
          type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};