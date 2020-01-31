'use strict';
module.exports = (sequelize, DataTypes) => {
  const itens = sequelize.define('itens', {
    id_product: DataTypes.INTEGER,
    id_orders: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    options: DataTypes.STRING,
    id_extras: DataTypes.INTEGER
  }, {});
  itens.associate = function(models) {
    // associations can be defined here
  };
  return itens;
};