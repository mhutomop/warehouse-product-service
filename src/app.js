'use strict';

// Database connection
const db = require('./models/index');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    directConnection: true
  })
  .then(() => {
    console.log('Database connected!');
  })
  .catch((err) => {
    console.log(`Can't connect to database!`, err);
    process.exit(1);
  })

// App declaration
const express = require('express');
require('dotenv').config();
const { HOST, PORT } = process.env;

const app = express();

// CORS
const cors = require('cors');
app.use(cors());

// Swagger Documentation
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require('./configs/swagger.config');
const swaggerDocs = swaggerJsDoc(swaggerConfig);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: "4MB" }));

// Middleware
const auth = require('./middlewares/auth.middleware');
app.use(auth);

// Routing
require('./routes/product.routes')(app);
require('./routes/category.routes')(app);
require('./routes/measurement.routes')(app);
require('./routes/location.routes')(app);

// Error handler
const errorConfig = require('./configs/error.config');

// URL not found handler
app.use('', (req, res) => {
	res.status(404).send(errorConfig.message[404]);
});

// Internal server error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(errorConfig.message[500]);
});

// Running app
app.listen(PORT, HOST, ()=> {
  console.log(`Running on http://${HOST}:${PORT}.`);
});