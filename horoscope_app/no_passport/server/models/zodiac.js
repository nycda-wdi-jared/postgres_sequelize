module.exports = function (sequelize, DataTypes) {
  var Zodiac = sequelize.define('Zodiac', {
    zodiac: {
      type: DataTypes.STRING,
      allowNull: false
    },
    todays_horoscope: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_range: {
      type: DataTypes.STRING,
      allowNull: false
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
  return Zodiac;
};