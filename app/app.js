'use strict';

// Declare app level module which depends on views, and components
angular.module('smapp', [
  'ngRoute',
  'smapp.vProducts',
  'smapp.vProduct',
  'smapp.vProductStore',
  'smapp.vStocks'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/vProducts'});
}]);
