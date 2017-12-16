'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: {
     type: DataTypes.STRING,
     allowNull: false,
     unique: true
    },
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Profile);
        User.hasMany(models.Post);
      }
    }
  });
  return User;
};