'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Participants', {
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
          },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
        userId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'Users',
                key: 'id',
                as: 'userId',
            },
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Participants');
  }
};