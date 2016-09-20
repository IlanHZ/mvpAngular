var mongoose = require("mongoose");

var artistSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: String,
    bio: String,
    artwork: String
    // artworks: [{ type: mongoose.Schema.ObjectId, ref: 'Artwork' }]
});

module.exports = mongoose.model('Artist', artistSchema);