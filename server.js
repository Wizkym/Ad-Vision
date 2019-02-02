const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3085;

app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`App listen to port: ${PORT}`);
    }
});