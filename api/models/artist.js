var mongoose = require("mongoose");

var artistSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  bio: String,
  projects: [{ type: mongoose.Schema.ObjectId, ref: 'Artwork' }]
});

module.exports = mongoose.model('Artist', artistSchema);