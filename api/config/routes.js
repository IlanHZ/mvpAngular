var router = require('express').Router();
var bodyParser = require('body-parser'); //parses information from POST
// var methodOverride = require('method-override'); //used to manipulate POST
var jwt = require('jsonwebtoken');

var usersController = require('../controllers/users');
var artworksController = require('../controllers/artworks');
var authenticationController = require('../controllers/authentication');

// custom JWT middleware
function secureRoute(req, res, next) {
  if(!req.headers.authorization) {
    console.log("UNAUTHORIZED");
    console.log(req.headers.authorization)
    return res.status(401).json({ message: 'Unauthorized' });
  }

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, user) {
    if(!user) return res.status(401).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}


// USER
router.route('/users')
  .get(secureRoute, usersController.index);

router.route('/users/:id')
  .all(secureRoute)
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);



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
