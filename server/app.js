const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const api = require('./routes');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

const mongoDb =
  `${process.env.MONGODB_URI}/full-stack-form-echo` ||
  'mongodb://localhost/full-stack-form-echo';

mongoose.connect(
  mongoDb,
  { useMongoClient: true },
  console.log('DB connected!')
);

app.use(logger('dev'));

app.use(helmet());
app.use(compression());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', api);

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = app;
