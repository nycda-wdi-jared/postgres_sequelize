'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Post;
};