
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
  });
  Chat.associate = function(models) {
    };
  return Chat;
};