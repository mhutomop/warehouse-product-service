module.exports = (app) => {
  const express = require('express');
  const router = express.Router();
  const measurements = require('../controllers/measurement.controller');

  /**
   * @swagger
   * /api/measurements:
   *  get:
   *    summary: Get all measurements.
   *    description: Get all measurements by default.
   *    tags: ['measurements']
   *    responses:
   *      200:
   *        description: Success get all measurements.
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
   *                      - unit
   *                    properties:
   *                      id:
   *                        type: string
   *                        description: The measurement ID.
   *                        example: 6406999fc2c95ac1303b4b34
   *                      unit:
   *                        type: string
   *                        description: The measurement unit.
   *                        example: kg
  */
  router.get('/api/measurements', measurements.find);

  app.use(router);
}