angular.module('Artbeat')
    .controller('ArtworksController', ArtworksController);


ArtworksController.$inject = ['$http'];
function ArtworksController($http){
    var self = this;
    this.all = [];
    this.addArtwork = addArtwork;
    this.newArtwork = {};


  // GET
    function getArtwork() {
        $http
            .get('http://localhost:3000/artworks')
            .then(function(res) {
            self.all = res.data;
            console.log(self)
            });
    }

  // DELETE
    function deleteArtwork(artwork) {
        $http
            .delete('http://localhost:3000/artworks/' + artwork._id)
            .then(function() {
                self.all = self.all.filter(function(_artwork) {
                    return _artwork._id !== artwork._id
                });
            })
            .catch(function(err) {
            console.log(err);
            });
    }
    getArtwork();

    // ADD
    function addArtwork() {
        console.log(this.newArtwork);
        $http
            .post('http://localhost:3000/artworks', { artwork: this.newArtwork} )
            .then(function() {
                self.all.push(self.newArtwork);
                this.newArtwork = {};
            });
    }
}


