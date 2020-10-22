'use strict';
const bcrypt = require('bcryptjs')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasMany(models.CustomerProduct,{foreignKey:"customer_id"})
    }
  };
  Customer.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  Customer.beforeCreate((inst, opt) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(inst.password, salt);
    inst.password = hash
  }) 
  return Customer;
};