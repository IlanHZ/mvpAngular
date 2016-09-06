var mongoose = require('mongoose');

var ArtworkSchema = mongoose.Schema({
	name: String,
  location: String,
	artist: String
});

module.exports = mongoose.model('Artwork', ArtworkSchema);

