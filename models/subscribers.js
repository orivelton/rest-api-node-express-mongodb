const mongoose = require('mongoose');

const subscriberSchemas = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  subscriberToChanel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscriber', subscriberSchemas);
