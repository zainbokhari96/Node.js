'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      // Payment hasOne Order
      'Orders',  // name of Target model
      'PaymentId',  // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Payments', // name of Source model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }  
    ).then(()=>{
      return queryInterface.addColumn(
         // Order hasMany Product
         'Products', // name of Target model
         'OrderId', // name of the key we're adding
         {
          type: Sequelize.INTEGER,
          references: {
            model: 'Orders', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
         }
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
     // remove Order belongsTo Customer
     return queryInterface.removeColumn(
      'Orders', // name of Source model
      'CustomerId' // key we want to remove
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Orders', // name of the Target model
          'PaymentId' // key we want to remove
        );
      })
      .then(() => {
        // remove Order hasMany Product
        return queryInterface.removeColumn(
          'Products', // name of the Target model
          'OrderId' // key we want to remove
        );
      });
  }
};
