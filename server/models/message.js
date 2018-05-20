'use strict';
module.exports = (sequelize, DataTypes) => {
  var message = sequelize.define('message', {
    chatid: DataTypes.INTEGER,
    content: DataTypes.STRING,
    time: DataTypes.STRING
  }, {});
  message.associate = function(models) {
    // associations can be defined here
  };
  return message;
};