const db = require('../models/index')
const Product = db.products;

exports.find = (req, res, next) => {
  const type = req.query.type ? req.query.type : '';
  Product.aggregate()
    .match({
      type: { $regex: type, $options: "i" }
    })
    .addFields({
      id: "$_id"
    })
    .project({
      _id: 0,
      __v: 0,
      inventories: 0,
    })
    .lookup({
      from: "categories",
      localField: "categoryId",
      foreignField: "_id",
      as: "categoryDetail",
      pipeline: [{
        $project: {
          _id: 0
        }
      }]
    })
    .unwind({
      path: '$categoryDetail'
    })
    .lookup({
      from: "measurements",
      localField: "measurementId",
      foreignField: "_id",
      as: "measurementDetail",
      pipeline: [{
        $project: {
          _id: 0
        }
      }]
    })
    .unwind({
      path: "$measurementDetail"
    })
    .then((result) => {
      res.send({
        success: true,
        data: result
      });
    })
    .catch((err) => {
      next(err);
    })
}

exports.create = (req, res, next) => {
  console.log(req.body)
  const locations = req.body.locations;
  const inventories = [];
  for (let location of locations) {
    inventories.push({
      locationId: new db.mongoose.Types.ObjectId(location),
      quantity: 0
    })
  }
  const product = new Product({
    categoryId: new db.mongoose.Types.ObjectId(req.body.categoryId),
    type: req.body.type,
    brand: req.body.brand,
    measurementId: new db.mongoose.Types.ObjectId(req.body.measurementId),
    inventories: inventories
  })

  product.save()
    .then((result) => {
      res.send({
        success: true,
        data: {
          id: result.id,
          type: result.type
        }
      });
    })
    .catch((err) => {
      next(err);
    })
}

exports.findOne = (req, res, next) => {
  const id = new db.mongoose.Types.ObjectId(req.params.id);
  Product.aggregate()
    .match({
      _id: id
    })
    .unwind({
      path: "$inventories"
    })
    .lookup({
      from: "locations",
      localField: "inventories.locationId",
      foreignField: "_id",
      as: "inventories.locationDetail",
      pipeline: [{
        $project: {
          _id: 0
        }
      }]
    })
    .unwind({
      path: "$inventories.locationDetail"
    })
    .addFields({
      "inventories.id": "$inventories._id"
    })
    .project({
      "inventories._id": 0
    })
    .group({
      _id: "$_id",
      inventories: {
        $push: "$inventories"
      }
    })
    .lookup({
      from: "products",
      localField: "_id",
      foreignField: "_id",
      as: "products",
      pipeline: [
        {
          $addFields: {
            id: "$_id"
          }
        }, {
          $project: {
            _id: 0,
            __v: 0
          }
        }
      ]
    })
    .unwind({
      path: "$products"
    })
    .addFields({
      "products.inventories": "$inventories"
    })
    .replaceRoot('$products')
    .lookup({
      from: 'categories',
      localField: 'categoryId',
      foreignField: '_id',
      as: 'categoryDetail',
      pipeline: [{
        $project: {
          _id: 0
        }
      }]
    })
    .unwind({
      path: '$categoryDetail'
    })
    .lookup({
      from: 'measurements',
      localField: 'measurementId',
      foreignField: '_id',
      as: 'measurementDetail',
      pipeline: [{
        $project: {
          _id: 0
        }
      }]
    })
    .unwind({
      path: '$measurementDetail'
    })
    .then((result) => {
      res.send({
        success: true,
        data: result[0]
      });
    })
    .catch((err) => {
      next(err);
    })
  }

exports.updateOne = async (req, res, next) => {
  const id = new db.mongoose.Types.ObjectId(req.params.id);
  const update = req.body;
  const product = await Product.findOne({ _id: id }).exec();
  for (let inventoryId of update.removeInventoryIds) {
    product.inventories.pull({
      _id: new db.mongoose.Types.ObjectId(inventoryId)
    })
  }
  for (let locationId of update.addLocationIds) {
    product.inventories.push({
      locationId: new db.mongoose.Types.ObjectId(locationId),
      quantity: 0
    })
  }
  for (let field in update) {
    product[field] = update[field];
  }

  product.save()
    .then((result) => {
      res.send({
        success: true,
        data: result
      });
    })
    .catch((err) => {
      next(err);
    })
}

exports.deleteOne = (req, res, next) => {
  const id = new db.mongoose.Types.ObjectId(req.params.id);
  Product.deleteOne({ _id: id })
    .then((result) => {
      res.send({
        success: true,
        data: result
      });
    })
    .catch((err) => {
      next(err);
    })
}