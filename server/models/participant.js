module.exports = (sequelize, DataTypes) => {
  const participant = sequelize.define('Participant', {
   // users: {
   //   type: DataTypes.INTEGER,}
   //   ,
    chat: {
      type: DataTypes.INTEGER,
    },
  });
  participant.associate = function(models) {
    participant.belongsTo(models.User,{
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
  };
  return participant;
};