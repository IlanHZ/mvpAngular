angular
    .module('Artbeat', ['ngResource', 'ui.router'])
    .config(function($httpProvider, $stateProvider, $urlRouterProvider){
      // // InterceptorConfig
      // $httpProvider.interceptors.push('AuthInterceptor');
      
      // Router config
      $stateProvider
          .state('lp', {
            url: '/',
            templateUrl: 'views/lp.html'
          })
          .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
          })
          .state('register', {
            url: '/register',
            templateUrl: 'views/register.html'
          })
          .state('aboutUs', {
            url: '/aboutUs',
            templateUrl: 'views/aboutUs.html'
          })
          .state('collection', {
            url: '/collection/:id',
            templateUrl: 'views/collection.html'
          })
          .state('exhibition', {
            url: '/exhibition/:id',
            templateUrl: 'views/exhibition.html'
          })
          .state('founders', {
            url: '/founders/:id',
            templateUrl: 'views/founders.html'
          })
          .state('myAccount', {
            url: '/myAccount/:id',
            templateUrl: 'views/myAccount.html'
          })

      // This sets the url to /#/
      $urlRouterProvider.otherwise('/');
    });
