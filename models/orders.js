'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    clientName: DataTypes.STRING,
    id_tables: DataTypes.INTEGER,
    time: DataTypes.DATE,
    finalTime: DataTypes.DATE,
    totalPrice: DataTypes.DECIMAL(10,2),
    status: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    orders.hasMany(models.products)
    orders.belongsTo(models.tables)
  };
  return orders;
};