module.exports = (app) => {
  const express = require('express');
  const router = express.Router();
  const categories = require('../controllers/category.controller');

  /**
   * @swagger
   * /api/categories:
   *  get:
   *    summary: Get all categories.
   *    description: Get all categories by default.
   *    tags: ['categories']
   *    responses:
   *      200:
   *        description: Success get all categories.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - success
   *                - data
   *              properties:
   *                success:
   *                  type: boolean
   *                  description: Success true/false.
   *                  example: true
   *                data:
   *                  type: array
   *                  items:
   *                    type: object
   *                    required:
   *                      - id
   *                      - name
   *                    properties:
   *                      id:
   *                        type: string
   *                        description: The category ID.
   *                        example: 64056f35c2c95ac1303b4b29
   *                      name:
   *                        type: string
   *                        description: The category name.
   *                        example: Senjata Api
  */
  router.get('/api/categories', categories.find);

  app.use(router);
}