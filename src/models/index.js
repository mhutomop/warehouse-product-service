const dbConfig = require('../configs/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.products = require('./product.model')(mongoose);
db.categories = require('./category.model')(mongoose);
db.locations = require('./location.model')(mongoose);

module.exports = db;