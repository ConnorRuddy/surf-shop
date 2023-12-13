const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accessorySchema = new Schema ({
  image: {
    type: String,
    required: true,
  },
  brand: {
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
  },
  description: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('Accessory', accessorySchema);

