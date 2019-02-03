const fs = require('fs');
//const https = require('https');
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

// Port Number
const PORT = process.env.PORT || 3085;

// Certificate configs
const certOptions = {
    key: fs.readFileSync(path.resolve('src/utils/certoptions/server.key')),
    cert: fs.readFileSync(path.resolve('src/utils/certoptions/server.crt'))
};

/* Start the API server
const server = https.createServer(certOptions, app).listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`API Server now listening on PORT: ${PORT}`);
    }
});*/

// Start the API server
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`API Server now listening on PORT: ${PORT}`);
    }
});

