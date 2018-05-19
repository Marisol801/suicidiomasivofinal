'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Chats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
          allowNull:false,
      },
      type: {
        type: Sequelize.INTEGER,
          allowNull:false,
      },
      participants: {
        type: Sequelize.INTEGER,
          allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      chaT:{
          type: Sequelize.INTEGER,
          references:{
              model: 'Users',
              key: 'id',
          },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Chats');
  }
};