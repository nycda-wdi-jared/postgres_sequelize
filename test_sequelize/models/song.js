'use strict';
module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    lyrics: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Song;
};