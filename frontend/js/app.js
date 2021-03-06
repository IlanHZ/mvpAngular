angular
    .module('Artbeat', ['ngResource', 'ui.router', 'angular-jwt'])
    .constant('API', 'http://localhost:3000')
    .config(function($httpProvider, $stateProvider, $urlRouterProvider){

      
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
            .state('artists', {
                url: '/artists/:id',
                templateUrl: 'views/artists.html'
            })
    
      // This sets the url to /#/
        $urlRouterProvider.otherwise('/');
    });


    InterceptorConfig.$inject = ['$httpProvider'];
    function InterceptorConfig($httpProvider) {
      // push it into the angular array
      $httpProvider.interceptors.push('Artbeat')
    }

