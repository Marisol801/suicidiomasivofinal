const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
//require('./server/routes')(app);

require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
<<<<<<< HEAD
=======
// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
// }));

>>>>>>> 576aaed3d88e32a132dd60be65a18a38028bf1a1



module.exports = app;