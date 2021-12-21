"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.associate = (models) => {
        Customer.hasOne(models.Order);
      };
    }
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      age: {
        type: DataTypes.INTEGER,
        validate: {
          customValidator(value) {
            if (this.age >= 10) {
              throw new Error("Age can't be less than 10");
            }
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [5, 30],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      paranoid:true,  //For Soft Delete Use this
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
