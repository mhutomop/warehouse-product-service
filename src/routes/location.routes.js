module.exports = (app) => {
  const express = require('express');
  const router = express.Router();
  const locations = require('../controllers/location.controller');

  /**
   * @swagger
   * /api/locations:
   *  get:
   *    summary: Get all locations.
   *    description: Get all locations by default.
   *    tags: ['locations']
   *    parameters:
   *      - in: query
   *        name: site
   *        schema:
   *          type: string
   *        required: false
   *        description: Filter locations by site.
   *        example: PT Len Industri (Persero)
   *      - in: query
   *        name: building
   *        schema:
   *          type: string
   *        required: false
   *        description: Filter locations by building.
   *        example: Gedung E
   *      - in: query
   *        name: floor
   *        schema:
   *          type: string
   *        required: false
   *        description: Filter locations by floor.
   *        example: 1
   *      - in: query
   *        name: room
   *        schema:
   *          type: string
   *        required: false
   *        description: Filter locations by room.
   *        example: Gudang
   *      - in: query
   *        name: rack
   *        schema:
   *          type: string
   *        required: false
   *        description: Filter locations by rack.
   *        example: A
   *    responses:
   *      200:
   *        description: Success get all locations.
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
   *                      - site
   *                      - building
   *                      - floor
   *                      - room
   *                      - rack
   *                      - rackLevel
   *                    properties:
   *                      id:
   *                        type: string
   *                        description: The location ID.
   *                        example: 64056ddac2c95ac1303b4b23
   *                      site:
   *                        type: string
   *                        description: The location site.
   *                        example: PT Len Industri (Persero)
   *                      building:
   *                        type: string
   *                        description: The location building.
   *                        example: Gedung E
   *                      floor:
   *                        type: string
   *                        description: The location floor.
   *                        example: 1
   *                      room:
   *                        type: string
   *                        description: The location room.
   *                        example: Gudang
   *                      rack:
   *                        type: string
   *                        description: The location rack.
   *                        example: A
   *                      rackLevel:
   *                        type: string
   *                        description: The location rack level.
   *                        example: 1
  */
  router.get('/api/locations', locations.find);

  app.use(router);
}