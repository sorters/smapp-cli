'use strict';

angular.module('smapp.vStocks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vStocks', {
    templateUrl: 'vStocks/vStocks.html',
    controller: 'VStocksCtrl'
  });
}])

.controller('VStocksCtrl', function($scope, $http) {
	$http.defaults.headers.common['Authorization'] = 'Bearer IsZs01MiurjFPmCHuXG9b2dO7oSOgn14ZbsYtpDANfrYuVvglgX61cq2b6sY';

    $http.get('http://smapp.sorters.io/api/v1/stocks').
        then(function(response) {
            $scope.stocks = response.data;
        });

});