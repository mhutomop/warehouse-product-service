const db = require('../models/index')
const Location = db.locations;

exports.find = (req, res, next) => {
  const filter = {};
  if (req.query.site) filter.site = req.query.site;
  if (req.query.building) filter.building = req.query.building;
  if (req.query.floor) filter.floor = req.query.floor;
  if (req.query.room) filter.room = req.query.room;
  if (req.query.rack) filter.rack = req.query.rack;
  Location.find(filter)
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