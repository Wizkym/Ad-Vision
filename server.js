const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const app = express();
const routes = require('./routes');

// Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './src')));
app.use(routes);


const PORT = process.env.PORT || 3085;

// Start the API server
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`API Server now listening on PORT: ${PORT}`);
    }
});

