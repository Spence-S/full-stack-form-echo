const express = require('express');
const Card = require('../models');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('hello world');
});

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, address, company } = req.body;
    const card = new Card({
      firstName,
      lastName,
      address,
      company
    });
    const savedCard = await card.save();
    res.json(savedCard);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
