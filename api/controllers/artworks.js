var Artwork = require('../models/Artwork');

// GET
function getAll(request, response) {
  Artwork.find(function(error, artworks) {
    if(error) response.status(404).send(error);
    response.status(200).send(artworks);
  }).select('-__v');
}

// POST
function createArtwork(request, response) {
  var artwork = new Artwork(request.body);

  artwork.save(function(error) {
    if(error) response.status(500).send(error);
    response.status(201).send(artwork);
  });
}

// GET
function getArtwork(request, response) {
  var id = request.params.id;

  Artwork.findById({_id: id}, function(error, artwork) {
    if(error) response.status(404).send(error);
    response.status(200).send(artwork);
  }).select('-__v');
}

function updateArtwork(request, response) {
  var id = request.params.id;

  Artwork.findById({_id: id}, function(error, artwork) {
    if(error) response.status(404).send(error);

    if(request.body.name) artwork.name = request.body.name;
    if(request.body.location) artwork.location = request.body.location;
    if(request.body.status) artwork.status = request.body.status;

    artwork.save(function(error) {
      if(error) response.status(500).send(error);

      response.status(200).send(artwork);
    });
  }).select('-__v');
}

function removeArtwork(request, response) {
  var id = request.params.id;
  console.log("ID passed to removeArtwork: ", id);

  Artwork.remove({_id: id}, function(error) {
    if(error) response.status(404).send(error);

    response.status(204).send();
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createArtwork: createArtwork,
  getArtwork: getArtwork,
  updateArtwork: updateArtwork,
  removeArtwork: removeArtwork
};
