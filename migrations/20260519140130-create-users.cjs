'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_email: { 
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true 
      },
      user_password: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      created_at: { 
        allowNull: false, 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.fn('NOW') 
      },
      updated_at: { 
        allowNull: false, 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.fn('NOW') 
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};