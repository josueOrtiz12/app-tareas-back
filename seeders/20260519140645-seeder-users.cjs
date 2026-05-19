'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkInsert('users', [
      {
        user_id: '7d49eae1-9583-4962-a375-58ef093fcadf',
        user_name: 'DavidOrt',
        user_email: 'david.montoya@correo.com',
        user_password: 'password_david_123', // Cambiar por hash encriptado luego
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: '1ce7a161-bcef-4c47-8883-e34e172096eb',
        user_name: 'AnaGarcia',
        user_email: 'ana.garcia@correo.com',
        user_password: 'password_ana_123', // Cambiar por hash encriptado luego
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};