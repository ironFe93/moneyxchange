const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./modules/mongoose');
require('./services/currency_service').persistInterval();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const api = require('./api');
app.use(api);

app.get('*', (req, res) => {
    res.status(404).send('404 Not found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res
        .status(500)
        .send({
            error: 'An error occured',
            message: err.message
        });
});

module.exports = app;