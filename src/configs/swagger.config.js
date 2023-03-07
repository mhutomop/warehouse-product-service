module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product Service API",
      description: "Product Service API information.",
      version: "1.0.0",
      contact: {
        name: "Muhammad Hutomo Padmanaba"
      }
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "WMS Product Service Server"
      }
    ]
  },
  apis: [`${__dirname}/../routes/*.js`]
}