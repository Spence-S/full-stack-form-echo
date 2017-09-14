const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const api = require('./routes');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();

mongoose.connect(
  'mongodb://localhost/full-stack-form-echo',
  { useMongoClient: true },
  console.log('DB connected!')
);

app.use(logger('dev'));

app.use(helmet());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', api);

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = app;
