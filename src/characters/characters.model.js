const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  user: { type: String },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = Character = mongoose.model('character', characterSchema);
