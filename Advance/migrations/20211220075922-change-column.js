"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.changeColumn(
      "Customers",
      "password",
      {
        type: Sequelize.STRING,
        validate: {
          len: [5, 30],
        },
      },
      "email",
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      }
    ).then(()=>{
      return queryInterface.addColumn(
        "Customers",
        'age', {
          type: Sequelize.INTEGER,
          validate: {
            customValidator(value) {
              if (this.age >= 10) {
                throw new Error("Age can't be less than 10");
              }
            },
          },
        },
      )
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
