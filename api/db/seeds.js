var mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
var databaseURL = 'mongodb://localhost:27017/artbeat';
mongoose.Promise = global.Promise;
mongoose.connect(databaseURL);

var Artwork = require("../models/artwork");
var User    = require("../models/user");

// Users

var user1 = new User({
  name: "Vince Lynch",
  github: "error25",
  bio: "Derren Brown got nothing on me",
  portfolio: "http://www.vincelynch.com",
})

user1.save(function(err, user) {
 if (err) return console.log(err);
 console.log("User saved! ", user);
})


// Artwork

var artwork1 = new Artwork({
  title: "Third Act",
  description: "description of the project",
  github: "thirdAct",
  website: "http://www.thirdAct.com"
})


artwork1.save(function(err, artwork) {
 if (err) return console.log(err);
 console.log("Artwork saved! ", artwork);
})