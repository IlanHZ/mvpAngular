angular.module('Artbeat')
       .controller('ArtworksController', ArtworksController);

ArtworksController.$inject = ['Artwork'];
function ArtworksController(Artwork) {

  var self = this;

  this.showArtwork;

  // Initial View States
  this.showArtworksStatus = true;
  this.showArtworkStatus = false;
  this.showEditArtworkStatus = false;
  this.showCreateArtworkStatus = false;

  // Handle views
  this.showShowSection = Artwork.showShowSection;
  this.showAllArtworksSection = Artwork.showAllArtworksSection;
  this.showEditArtworkSection = Artwork.showEditArtworkSection;
  this.showCreateSection = Artwork.showCreateSection;

  // CRUD
  this.all = Artwork.resource.query();

  this.createArtwork = function(){
    Criminal.resource.save(self.newCriminal, function(res){
    self.all.push(res);
    });
  };

  this.updateArtwork = function(artwork){
    Artwork.resource.update(artwork, function(res){
    });
  }

  this.deleteArtwork = function(artwork){
    Artwork.resource.delete({ id: artwork._id }, function(res){
      self.all.filter(function( obj ) {
        if(obj._id === artwork._id) {
          self.all.splice((self.all.indexOf(obj)), 1);
        }
      });
    });
  }
}
