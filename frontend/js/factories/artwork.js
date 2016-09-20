// angular.module('Artbeat')
//   .factory('Artwork', Artwork);

// // Inject ng resource
// Artwork.$inject = ['$resource'];

// // Create criminal factory
// function Artwork($resource){

//   var artworkFactory = {};

//   artworkFactory.resource = $resource('http://localhost:3000/artworks/:id', { id: '@_id' }, {
//     update: { method: "PATCH" }
//   });

//   artworkFactory.showShowSection = function(){
//     console.log("Show section show");
//     this.showArtworksStatus = false;
//     this.showArtworkStatus = true;
//     this.showEditArtworkStatus = false;
//     this.showCreateArtworkStatus = false;
//   }

//   artworkFactory.showCreateSection = function(){
//     console.log("Create section show");
//     this.showArtworksStatus = false;
//     this.showArtworkStatus = false;
//     this.showEditArtworkStatus = false;
//     this.showCreateArtworkStatus = true;
//   }

//   artworkFactory.showAllArtworksSection = function(){
//     console.log("All section show");
//     this.showArtworksStatus = true;
//     this.showArtworkStatus = false;
//     this.showEditArtworkStatus = false;
//     this.showCreateArtworkStatus = false;
//   }

//   artworkFactory.showEditArtworkSection = function(){
//     console.log("All section show");
//     this.showArtworksStatus = false;
//     this.showArtworkStatus = false;
//     this.showEditArtworkStatus = true;
//     this.showCreateArtworkStatus = false;
//   }

//   return artworkFactory;
// }
