// angular
//   .module('artbeat')
//   .controller('usersController', UsersController);


// UsersController.$inject = ['User', 'tokenService'];

// function UsersController(User, tokenService){
//   var self = this;
//   self.currentUser = tokenService.getUser();
//   self.all = [];

//   // Handle login function
//   function handleLogin(res){
//     console.log("Handlelogin fired");
//     var token = res.token ? res.token : null;

//     if(token){
//       self.getUsers();

//       self.currentUser = tokenService.getUser();
//       console.log(res);
//     }

//     // add self.message = res.message;

//   }

//   // Login function
//   self.login = function(){
//     console.log("currentUser: ", self.currentUser);
//     User.login(self.currentUser, handleLogin);
//   }

//   // Register function
//   self.register = function(){
//     User.register(self.currentUser, handleLogin);
//   }

//   // Logout function
//   self.logout = function(){
//     console.log("clicked")
//     tokenService.removeToken();
//     self.all = [];
//     self.currentUser = null;
//   }

//   // Get users function
//   self.getUsers = function(){
//     self.all = User.query();
//   }

//   self.isLoggedIn = function(){
//     return !!tokenService.getToken();
//   }

//   if(self.isLoggedIn()) self.getUsers();

//   return self;

// }
