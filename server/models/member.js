'use strict';

// role
// 0 -> user
// 1 -> admin

module.exports = function(sequelize, DataTypes) {
  var member = sequelize.define('member', {
    handle: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    continent: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    socialHandles: DataTypes.JSON,
    picture: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    ienEmail: DataTypes.STRING,
    detail: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return member;
};
