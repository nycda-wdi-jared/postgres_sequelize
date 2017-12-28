'use strict';
module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define('Friend', {
    id: {
      type: DataTypes.INTEGER(20),
      primaryKey: true,
      autoIncrement: true
    },
    user_id_1: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user_id_1',
      allowNull: false,
      unique: 'compositeIndex'
    },
    user_id_2: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user_id_2',
      allowNull: false,
      unique: 'compositeIndex'
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Friend;
};