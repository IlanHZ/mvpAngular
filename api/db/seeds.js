var mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
var databaseURL = 'mongodb://localhost:27017/artbeat';
mongoose.Promise = global.Promise;
mongoose.connect(databaseURL);

var Artwork = require("../models/artwork");
var Artist    = require("../models/artist");

// Artists

var artist1 = new Artist({
    name: "Chaya Hazan",
    image: "chayaPic.jpg",
    artwork: "floorView.jpg"
    // projects:""
})

artist1.save(function(err, artist) {
    if (err) return console.log(err);
    console.log("Artist saved! ", artist);
})

var artist2 = new Artist({
    name: "Chaya Hazan",
    image: "chayaPic.jpg",
    artwork: "floorView.jpg"
    // projects:""
})

artist2.save(function(err, artist) {
    if (err) return console.log(err);
    console.log("Artist saved! ", artist);
})


// Artwork

var artwork1 = new Artwork({
    title: 'Filles',
    image: 'MOLET_Pauline_filles.jpg',
    artist: 'Pauline Molet',
    date: "2015",
    size: '50X50',
    description: 'lorem ipsum'
})


artwork1.save(function(err, artwork) {
    if (err) return console.log(err);
    console.log("Artwork saved! ", artwork);
})

var artwork2 = new Artwork({
    title: 'Fakir',
    image: 'NB-Fakir1.jpg',
    artist: 'Pauline Molet',
    date: 11/02/2016,
    size: '50X50',
    description: 'lorem ipsum'
})


artwork2.save(function(err, artwork) {
    if (err) return console.log(err);
    console.log("Artwork saved! ", artwork);
})


