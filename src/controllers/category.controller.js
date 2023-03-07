const db = require('../models/index')
const Category = db.categories;

exports.find = (req, res, next) => {
  Category.find()
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