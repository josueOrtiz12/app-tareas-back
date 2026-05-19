'use strict';
const crypto = require('crypto');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
    await queryInterface.bulkInsert('tasks', [
      // Tareas asignadas a David Montoya (user_id: 7d49eae1-9583-4962-a375-58ef093fcadf)
      {
        task_id: crypto.randomUUID(),
        user_id: '7d49eae1-9583-4962-a375-58ef093fcadf',
        task_name: 'Configurar entorno Docker',
        task_description: 'Levantar los contenedores de la aplicación y la base de datos MariaDB.',
        task_status: 'COMPLETADA',
        task_limit: new Date('2026-06-01'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        task_id: crypto.randomUUID(),
        user_id: '7d49eae1-9583-4962-a375-58ef093fcadf',
        task_name: 'Diseñar arquitectura del Backend',
        task_description: 'Estructurar carpetas, controladores y rutas principales de la API.',
        task_status: 'EN_PROGRESO',
        task_limit: new Date('2026-06-15'),
        created_at: new Date(),
        updated_at: new Date()
      },

      // Tareas asignadas a Ana García (user_id: 1ce7a161-bcef-4c47-8883-e34e172096eb)
      {
        task_id: crypto.randomUUID(),
        user_id: '1ce7a161-bcef-4c47-8883-e34e172096eb',
        task_name: 'Crear vistas de Autenticación',
        task_description: 'Diseñar las pantallas de Login y Registro de usuarios en el Frontend.',
        task_status: 'PENDIENTE',
        task_limit: new Date('2026-06-10'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        task_id: crypto.randomUUID(),
        user_id: '1ce7a161-bcef-4c47-8883-e34e172096eb',
        task_name: 'Validación de formularios',
        task_description: 'Implementar reglas de validación en el lado del cliente.',
        task_status: 'PENDIENTE',
        task_limit: new Date('2026-06-12'),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};