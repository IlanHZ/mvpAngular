var mongoose = require("mongoose");

var artworkSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  artist: String,
  date: String,
  size: String,
  description: String
});

module.exports = mongoose.model('Artwork', artworkSchema);