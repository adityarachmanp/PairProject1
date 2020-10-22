'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomerProduct.belongsTo(models.Customer,{foreignKey:"customer_id"})
      CustomerProduct.belongsTo(models.Product,{foreignKey:"product_id"})
    }
  };
  CustomerProduct.init({
    customer_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CustomerProduct',
  });
  return CustomerProduct;
};