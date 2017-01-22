'use strict';

angular.module('smapp.vStocks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vStocks', {
    templateUrl: 'vStocks/vStocks.html',
    controller: 'VStocksCtrl'
  });
}])

.controller('VStocksCtrl', [function() {

}]);