const db = require('../models/index')
const Measurement = db.measurements;

exports.find = (req, res, next) => {
  Measurement.find()
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