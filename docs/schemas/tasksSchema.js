/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *       type: object
 *       properties:
 *        title:
 *          type: string
 *          description: The title of the example
 *          example: Task 1
 *        description:
 *          type: string
 *          description: The description of the example
 *          example: Description 1
 *        status:
 *          type: string
 *          description: The status of the example
 *          example: PENDIENTE
 *        task_limit:
 *          type: string
 *          description: The limit date of the example
 *          example: 2023-12-31
 *       required:
 *         - title
 *         - description
 *         - status
 *         - task_limit
 *       example:
 *         title: Task 1
 *         description: Description 1
 *         status: PENDIENTE
 *         task_limit: 2023-12-31
 */