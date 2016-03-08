angular.module('MeanLoginOauth')
  .config(function ($routeProvider) {
    $routeProvider
	  .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
	   .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
	   .when('/editProfile', {
        templateUrl: 'views/signon.html',
        controller: 'editProfileCtrl'
      })
	  .when('/signon', {
        templateUrl: 'views/signon.html',
        controller: 'signonCtrl'
      })
	  .otherwise({
        redirectTo: '/'
      });
  });