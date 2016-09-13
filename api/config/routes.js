var router = require('express').Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
// var jwt = require('jsonwebtoken');

var usersController = require('../controllers/usersController');
var artworksController = require('../controllers/artworksController');


// Users
router.route('/')
  .get(usersController.usersIndex)
 
router.route('/users')
  .get(usersController.usersIndex)
  .post(usersController.usersCreate)

router.route('/users/:id') 
  .get(usersController.usersShow)
  .patch(usersController.usersUpdate)
  .delete(usersController.usersDelete)

// Artworks  

router.route('/artworks')
  .get(artworksController.artworksIndex)
  .post(artworksController.artworksCreate)

router.route('/artworks/:id') 
  .get(artworksController.artworksShow)
  .patch(artworksController.artworksUpdate)
  .delete(artworksController.artworksDelete)


module.exports = router;
