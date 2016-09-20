var router = require('express').Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var jwt = require('jsonwebtoken');
var secret = require('../config/tokens').secret;

var artistsController = require('../controllers/artistsController');
var artworksController = require('../controllers/artworksController');
var usersController = require('../controllers/users');
var authenticationController = require('../controllers/authentication');


// custom JWT middleware
function secureRoute(req, res, next) {
    if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

    var token = req.headers.authorization.replace('Bearer ', '');

    jwt.verify(token, secret, function(err, user) {
    if(!user) return res.status(401).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
}

// users
router.route('/users')
    .get(secureRoute, usersController.index);

router.route('/users/:id')
    .all(secureRoute)
    .get(usersController.show)
    .put(usersController.update)
    .delete(usersController.delete);

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);



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
