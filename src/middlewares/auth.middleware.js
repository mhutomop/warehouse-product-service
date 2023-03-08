const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;
const errorConfig = require('../configs/error.config');

module.exports = (req, res, next) => {
  try {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cq-uoLxOu3V4RjxnbUAFZ36aSZ24BXiAH8RFDYVA6XU';
    jwt.verify(token, SECRET_KEY);
    next();
  } catch {
    res.status(401).send(errorConfig.message[401]);
  }
}