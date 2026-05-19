/**
 * @swagger
 * /auth/logout:
 *   post:
 *     description: Endpoint Post Logout.
 *     summary: Post Logout.
 *     tags:
 *       - Login
 *     responses:
 *       200:
 *         description: Sesión cerrada exitosamente.
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Internal Server Error
 * 
 * 
 * @swagger
 * /auth/validate-token:
 *   get:
 *     description: Endpoint Get Validate Token.
 *     summary: Get Validate Token.
 *     tags:
 *       - Login
 *     responses:
 *       200:
 *         description: Token válido.
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Internal Server Error
 * 
 */
