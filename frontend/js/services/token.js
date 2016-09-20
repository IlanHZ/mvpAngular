angular.module('Artbeat')
  // Attention to the naming convention: instance without capital / method with capital
  .service('tokenService', TokenService);


TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService($window, jwtHelper) {

  var self = this;

  // save the token in localstorage
  self.saveToken = function(token) {
    $window.localStorage.setItem('token', token);
  }

  // method to get the token
  self.getToken = function() {
    return $window.localStorage.getItem('token')
  }

  // method to remove the token
  self.removeToken = function() {
    return $window.localStorage.removeItem('token')
  }

  //
  self.getUser = function() {
    var token = self.getToken();
    // if we have a token decode, otherwise send back nothing
    return token ? jwtHelper.decodeToken(token) : null;
  }
}