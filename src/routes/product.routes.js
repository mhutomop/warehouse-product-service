module.exports = (app) => {
  const express = require('express');
  const router = express.Router();
  const products = require('../controllers/product.controller');

  /**
   * @swagger
   * /api/products:
   *  get:
   *    summary: Get all products.
   *    description: Get all products by default.
   *    tags: ['products']
   *    parameters:
   *      - in: query
   *        name: type
   *        schema:
   *          type: string
   *        required: false
   *        description: Filter products by type.
   *        example: Pistol
   *    responses:
   *      200:
   *        description: Success get all products.
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
   *                      - categoryId
   *                      - categoryDetail
   *                      - type
   *                      - brand
   *                      - measurementId
   *                      - measurementDetail
   *                    properties:
   *                      id:
   *                        type: string
   *                        description: The product ID.
   *                        example: 64056f35c2c95ac1303b4b29
   *                      categoryId:
   *                        type: string
   *                        description: The category ID.
   *                        example: 64056dc7c2c95ac1303b4b21
   *                      categoryDetail:
   *                        type: object
   *                        required:
   *                          - name
   *                        properties:
   *                          name:
   *                            type: string
   *                            description: The category's name.
   *                            example: Senjata Api
   *                      type:
   *                        type: string
   *                        description: The product's type
   *                        example: Pistol
   *                      brand:
   *                        type: string
   *                        description: The product's brand
   *                        example: Pindad
   *                      measurementId:
   *                        type: string
   *                        description: The measurement ID.
   *                        example: 640594d7c2c95ac1303b4b2c
   *                      measurementDetail:
   *                        type: object
   *                        required:
   *                          - unit
   *                        properties:
   *                          unit:
   *                            type: string
   *                            description: The measurement's unit.
   *                            example: pc
  */
  router.get('/api/products', products.find);

  /**
   * @swagger
   * /api/products:
   *  post:
   *    summary: Create a new product.
   *    description: Get a new product with parameters.
   *    tags: ['products']
   *    requestBody:
   *      description: Body
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            required:
   *              - categoryId
   *              - type
   *              - brand
   *              - measurementId
   *              - locations
   *            properties:
   *              categoryId:
   *                type: string
   *                description: Category ID of new product.
   *                example: 64056dc7c2c95ac1303b4b21
   *              type:
   *                type: string
   *                description: Type of new product.
   *                example: Shotgun
   *              brand:
   *                type: string
   *                description: Brand of new product.
   *                example: Pindad
   *              measurementId:
   *                type: string
   *                description: Measurement ID of new product.
   *                example: 640594d7c2c95ac1303b4b2c
   *              locations:
   *                type: array
   *                items:
   *                  type: string
   *                  description: Location IDs of new product.
   *                  example: 64056ddac2c95ac1303b4b23
   *    responses:
   *      200:
   *        description: Success add new product.
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
   *                  type: object
   *                  required:
   *                    - id
   *                    - type
   *                  properties:
   *                    id:
   *                      type: string
   *                      description: ID of new created product.
   *                      example: 6405fb100e7ccd6206c41917
   *                    type:
   *                      type: string
   *                      description: Type of new created product.
   *                      example: Shotgun
  */
  router.post('/api/products', products.create);

  /**
   * @swagger
   * /api/products/{id}:
   *  get:
   *    summary: Get product's detail.
   *    description: Get product's detail by it's ID.
   *    tags: ['products']
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The product ID.
   *        example: 64056f35c2c95ac1303b4b29
   *    responses:
   *      200:
   *        description: Success get product's detail.
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
   *                  type: object
   *                  required:
   *                    - id
   *                    - categoryId
   *                    - categoryDetail
   *                    - type
   *                    - brand
   *                    - measurementId
   *                    - measurementDetail
   *                    - inventories
   *                  properties:
   *                    id:
   *                      type: string
   *                      description: The product ID.
   *                      example: 64056f35c2c95ac1303b4b29
   *                    categoryId:
   *                      type: string
   *                      description: The category ID.
   *                      example: 64056dc7c2c95ac1303b4b21
   *                    categoryDetail:
   *                      type: object
   *                      required:
   *                        - name
   *                      properties:
   *                        name:
   *                          type: string
   *                          description: The category's name.
   *                          example: Senjata Api
   *                    type:
   *                      type: string
   *                      description: The product's type
   *                      example: Pistol
   *                    brand:
   *                      type: string
   *                      description: The product's brand
   *                      example: Pindad
   *                    measurementId:
   *                      type: string
   *                      description: The measurement ID.
   *                      example: 640594d7c2c95ac1303b4b2c
   *                    measurementDetail:
   *                      type: object
   *                      required:
   *                        - unit
   *                      properties:
   *                        unit:
   *                          type: string
   *                          description: The measurement's unit.
   *                          example: pc
   *                    inventories:
   *                      type: array
   *                      items:
   *                        type: object
   *                        required:
   *                          - id
   *                          - locationId
   *                          - locationDetail
   *                          - quantity
   *                        properties:
   *                          id:
   *                            type: string
   *                            description: The inventory ID.
   *                            example: 6405fb100e7ccd6206c41918
   *                          locationId:
   *                            type: string
   *                            description: The location ID.
   *                            example: 64056ddac2c95ac1303b4b23
   *                          locationDetail:
   *                            type: object
   *                            required:
   *                              - site
   *                              - building
   *                              - floor
   *                              - room
   *                              - rack
   *                              - rackLevel
   *                            properties:
   *                              site:
   *                                type: string
   *                                description: The location site.
   *                                example: PT Len Industri (Persero)
   *                              building:
   *                                type: string
   *                                description: The location building.
   *                                example: Gedung E.
   *                              floor:
   *                                type: string
   *                                description: The location floor.
   *                                example: 1
   *                              room:
   *                                type: string
   *                                description: The location room.
   *                                example: Gudang
   *                              rack:
   *                                type: string
   *                                description: The location rack.
   *                                example: A
   *                              rackLevel:
   *                                type: string
   *                                description: The location rack level.
   *                                example: 1
   *                          quantity:
   *                            type: integer
   *                            description: Quantity of the product in the location.
   *                            example: 10  
  */
  router.get('/api/products/:id', products.findOne);

  /**
   * @swagger
   * /api/products/{id}:
   *  put:
   *    summary: Update a product.
   *    description: Update a product by it's ID.
   *    tags: ['products']
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The product ID.
   *        example: 64056f35c2c95ac1303b4b29
   *    requestBody:
   *      description: Body
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              categoryId:
   *                type: string
   *                description: New category ID of the product.
   *                example: 64069979c2c95ac1303b4b33
   *              type:
   *                type: string
   *                description: New type of the product.
   *                example: Bubuk Mesiu
   *              brand:
   *                type: string
   *                description: New brand of the product.
   *                example: Dahana
   *              measurementId:
   *                type: string
   *                description: New measurement ID of the product.
   *                example: 6406999fc2c95ac1303b4b34
   *              addLocationIds:
   *                type: array
   *                items:
   *                  type: string
   *                  description: New location IDs of the product.
   *                  example: 640699d1c2c95ac1303b4b35
   *              removeInventoryIds:
   *                type: array
   *                items:
   *                  type: string
   *                  description: Removed inventories IDs of the product.
   *                  example: 64069c92b6197fd750ed8161
   *    responses:
   *      200:
   *        description: Success update the product.
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
   *                  type: object
   *                  required:
   *                    - id
   *                    - type
   *                  properties:
   *                    id:
   *                      type: string
   *                      description: ID of updated product.
   *                      example: 6405fb100e7ccd6206c41917
   *                    type:
   *                      type: string
   *                      description: Type of updated product.
   *                      example: Shotgun
  */
  router.put('/api/products/:id', products.updateOne);

  /**
   * @swagger
   * /api/products/{id}:
   *  delete:
   *    summary: Delete a product.
   *    description: Delete a product by it's ID.
   *    tags: ['products']
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The product ID.
   *        example: 64056f35c2c95ac1303b4b29
   *    responses:
   *      200:
   *        description: Success delete the product.
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
   *                  type: object
   *                  required:
   *                    - acknowledged
   *                    - deletedCount
   *                  properties:
   *                    acknowledged:
   *                      type: boolean
   *                      description: Status product deletion.
   *                      example: true
   *                    deletedCount:
   *                      type: integer
   *                      description: Total deleted product.
   *                      example: 1
  */
  router.delete('/api/products/:id', products.deleteOne);

  app.use(router);
}