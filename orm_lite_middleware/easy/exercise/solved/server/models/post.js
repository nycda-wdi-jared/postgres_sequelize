'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    nickname: {
      type: DataTypes.STRING,
      defaultValue: 'Guest',
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user_id',
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.User)
      }
    }
  });
  return Post;
};