var Artwork = require("../models/artwork");
var User = require("../models/user");

function artworksIndex(req, res){
  Artwork.find({}, function(err, artworks) {
    if (err) return res.status(400).send(err);
    res.status(200).send(artworks);
  });
}

function artworksCreate(req, res){
  var artwork = new Artwork(req.body.artwork);
  artwork.save(function(err){
    if (err) return res.status(500).send(err);
    var name = req.body.artwork.user;
    User.findOne({ name: name }, function(err, user){
      user.artworks.push(artwork);
      user.save(function(err, user) {
        res.status(201).send(artwork);
      });
    });
  });
}

function artworksShow(req, res){
  var id = req.params.id;

  Artwork.findById({ _id: id }, function(err, artwork) {
    if (err) return res.status(500).send(err);
    if (!artwork) return res.status(404).send(err);
    res.status(200).send(artwork);
  });
}

function artworksUpdate(req, res){
  var id = req.params.id;

  Artwork.findByIdAndUpdate({ _id: id }, req.body.artwork, function(err, artwork){
    if (err) return res.status(500).send(err);
    if (!artwork) return res.status(404).send(err);
    res.status(200).send(artwork);
  });
}

function artworksDelete(req, res){
  var id = req.params.id;

  Artwork.remove({ _id: id }, function(err) {
    if (err) return res.status(500).send(err);
    res.status(200);
  });
}

module.exports = {
  artworksIndex:  artworksIndex,
  artworksCreate: artworksCreate,
  artworksShow:   artworksShow,
  artworksUpdate: artworksUpdate,
  artworksDelete: artworksDelete
}
