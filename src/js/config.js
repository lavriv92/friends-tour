function appConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .state('friends', {
      url: '/friends',
      templateUrl: 'templates/friends.html',
      controller: 'FriendsController'
    })
    .state('places', {
      url: '/places',
      templateUrl: 'templates/places.html'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'templates/map.html',
      controller: 'MapController'
    });
}

appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('App').config(appConfig);
