const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: String,
  company: String
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
