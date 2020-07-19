const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');


router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', (req, res) => {
  res.send(req.params.id)
});

router.post('/', async (req, res) => {
  const {body: { name, subscribedToChanel }} = req;

  const subscriber = new Subscriber({
    name,
    subscribedToChanel
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

router.patch('/', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
