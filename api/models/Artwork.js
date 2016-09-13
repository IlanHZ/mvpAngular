var mongoose = require("mongoose");

var artworkSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  github: String,
  website: String
});

module.exports = mongoose.model('Artwork', artworkSchema);