/**
* @swagger
 * /tasks:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: Endpoint Get All Task.
 *     summary: Get all Task.
 *     tags: 
 *       - Tasks
 *     parameters:
 *       - in: query
 *         name: taskName
 *         schema:
 *           type: string
 *         description: Task name.
 *       - in: query
 *         name: taskDescription
 *         schema:
 *           type: string
 *         description: Task description.
 *       - in: query
 *         name: taskLimit
 *         schema:
 *           type: string
 *         description: Task limit date.
 *       - in: query
 *         name: taskStatus
 *         schema:
 *           type: string
 *         description: Task status.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page.
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Customer status.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Number of page.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 * 
 * @swagger
 * /tasks/me:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: Obtiene la información del perfil del cliente actualmente autenticado a través del token.
 *     summary: Obtener mi perfil.
 *     tags: 
 *       - Tasks
 *     responses:
 *       200:
 *         description: Perfil obtenido exitosamente.
 *         content: 
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *       401:
 *         description: No autorizado - Token faltante o inválido.
 *       404:
 *         description: No encontrado - El cliente no existe.
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * 
 * @swagger
 * /tasks/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: Endpoint Get Task.
 *     summary: Get Task.
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id  Task.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * 
 * 
 * @swagger
 * /tasks:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: Endpoint Post Task.
 *     summary: Post Task.
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Task created.
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * @swagger
 * /tasks/{id}:
 *   put:
 *     security:
 *     - bearerAuth: []
 *     summary: Put Task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Task updated.
 *       400:
 *         description: Bad Request.
 *       500:
 *         description: Error interno del servidor.
 * 
 *  @swagger
 * /tasks/{id}:
 *   delete:
 *     security:
 *     - bearerAuth: []
 *     description: Endpoint delete Task.
 *     summary: delete Task.
 *     tags:
 *       - Tasks
 *     parameters:
 *      - in: path
 *        name: id
 *        description: id Task.
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Task deleted.
 *       401:
 *         description: No autorizado.
 *       404:
 *         description: Bad Request.
 *       500:
 *         description: Error interno del servidor.
 * 
 */