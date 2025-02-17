const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Binance Smart Chain API',
      version: '1.0.0',
      description: 'API documentation for your Node.js application',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Update this to your server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
