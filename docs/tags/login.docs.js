/**
 * @swagger
 * /auth/login:
 *   post:
 *     description: Endpoint Post Login.
 *     summary: Post Login.
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login realizado.
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * @swagger
 * /auth/register:
 *   post:
 *     description: Endpoint Post register.
 *     summary: Post register.
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       200:
 *         description: Signup realizado.
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 * 
 */