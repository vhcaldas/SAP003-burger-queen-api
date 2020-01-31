'use strict';
module.exports = (sequelize, DataTypes) => {
  const tables = sequelize.define('tables', {
    number: DataTypes.INTEGER
  }, {});
  tables.associate = function(models) {
    tables.hasMany(models.orders);
  };
  return tables;
};