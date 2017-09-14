const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const api = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://localhost/full-stack-form-echo',
  { useMongoClient: true },
  console.log('DB connected!')
);

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', api);

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = app;
