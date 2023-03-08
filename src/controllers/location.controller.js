const db = require('../models/index')
const Location = db.locations;

exports.find = (req, res, next) => {
  Location.find()
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