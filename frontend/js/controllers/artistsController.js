angular.module('Artbeat')
  .controller('ArtistsController', ArtistsController);


ArtistsController.$inject = ['$http'];
function ArtistsController($http){

  var self = this;
  this.all = [];
  this.addArtist = addArtist;
  this.deleteArtist = deleteArtist;
  this.updateArtist = updateArtist;
  this.newArtist = {};

// GET
  function getArtist() {
    $http
      .get('http://localhost:3000/artists')
      .then(function(res) {
        self.all = res.data;
        console.log(self)
      });
  }

// DELETE
  function deleteArtist(artist) {
    $http
      .delete('http://localhost:3000/artists/' + artist._id)
      .then(function() {
        self.all = self.all.filter(function(_artist) {
          return _artist._id !== artist._id
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

// UPDATE

function updateArtist(artist) {
  $http
    .patch('http://localhost:3000/artists/' + artist._id, artist)
    .then(function(res) {
      artist.isEditing = false;
    })
    .catch(function(err) {
      console.log(err);
    });
}



  getArtist();


// ADD
  function addArtist() {
    console.log("submit clicked")
    $http
      .post('http://localhost:3000/artists', { artist: this.newArtist} )
      .then(function() {
        self.all.push(self.newArtist);
        this.newArtist = {};
        
      });
  }
}





