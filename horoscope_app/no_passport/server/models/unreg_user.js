module.exports = function (sequelize, DataTypes) {
  var Unreg_User = sequelize.define('Unreg_User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zodiac: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
          associate: function(models) {
           // associations can be defined here
          },
    },
    instanceMethods: {
    }
  });
  return Unreg_User;
};