const express = require('express');
const morgan = require('morgan');
const hedgehogRouter = require('./routes/hedgehogRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json()); // application/json
app.use(express.static('public'));
// www-urlencoded
// multipart/form-data <-> express.static

app.use('/api/hedgehogs', hedgehogRouter);

module.exports = app;
