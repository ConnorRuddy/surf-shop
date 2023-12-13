const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wetsuitSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String, 
    required: true,
  },
  model: {
    type: String, 
    required: true,
  },
  size: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Wetsuit', wetsuitSchema);

