var router = require('express').Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
// var jwt = require('jsonwebtoken');

var artistsController = require('../controllers/artistsController');
var artworksController = require('../controllers/artworksController');


// artists
router.route('/')
  .get(artistsController.artistsIndex)
 
router.route('/artists')
  .get(artistsController.artistsIndex)
  .post(artistsController.artistsCreate)

router.route('/artists/:id') 
  .get(artistsController.artistsShow)
  .patch(artistsController.artistsUpdate)
  .delete(artistsController.artistsDelete)

// Artworks  

router.route('/artworks')
  .get(artworksController.artworksIndex)
  .post(artworksController.artworksCreate)

router.route('/artworks/:id') 
  .get(artworksController.artworksShow)
  .patch(artworksController.artworksUpdate)
  .delete(artworksController.artworksDelete)


module.exports = router;
