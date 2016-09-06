var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var artworksController = require('../controllers/artworks');


// http://127.0.0.1:3000/artworks
router.route('/artworks')

  //GET all artworks
  .get(artworksController.getAll)

  //POST a new blob
  .post(artworksController.createArtwork);


router.route('/artworks/:id')

  // GET return specific candy
  .get(artworksController.getArtwork)

  // PATCH update existing candy
  .patch(artworksController.updateArtwork)

  // DELETE remove specific candy from DB
  .delete(artworksController.removeArtwork);


module.exports = router
