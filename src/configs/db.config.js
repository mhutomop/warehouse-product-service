require('dotenv').config();
const { DB_URL } = process.env;

module.exports = {
  url: DB_URL
};