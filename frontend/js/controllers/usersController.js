angular.module('Artbeat')
  .controller('UsersController', UsersController)


UsersController.$inject = ['$http'];
function UsersController($http){

  var self = this;
  this.all = [];
  this.addUser = addUser;
  this.deleteUser = deleteUser;
  this.updateUser = updateUser;
  this.newUser = {};

// GET
  function getUser() {
    $http
      .get('http://localhost:3000/users')
      .then(function(res) {
        self.all = res.data;
        console.log(self)
      });
  }

// DELETE
  function deleteUser(user) {
    $http
      .delete('http://localhost:3000/users/' + user._id)
      .then(function() {
        self.all = self.all.filter(function(_user) {
          return _user._id !== user._id
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

// UPDATE

function updateUser(user) {
  $http
    .patch('http://localhost:3000/users/' + user._id, user)
    .then(function(res) {
      user.isEditing = false;
    })
    .catch(function(err) {
      console.log(err);
    });
}



  getUser();

// ADD
  function addUser() {
    console.log("submit clicked")
    $http
      .post('http://localhost:3000/users', { user: this.newUser} )
      .then(function() {
        self.all.push(self.newUser);
        this.newUser = {};
        
      });
  }

}





