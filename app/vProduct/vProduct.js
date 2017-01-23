'use strict';

angular.module('smapp.vProduct', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vProduct/:id', {
    templateUrl: 'vProduct/vProduct.html',
    controller: 'VProductCtrl'
  });
}])

.controller('VProductCtrl', function($scope, $http, $routeParams)  {

    $http.defaults.headers.common['Authorization'] = 'Bearer IsZs01MiurjFPmCHuXG9b2dO7oSOgn14ZbsYtpDANfrYuVvglgX61cq2b6sY';

    $http.get('http://smapp.sorters.io/api/v1/products/'+$routeParams.id).
        then(function(response) {
            $scope.product = response.data;

            $http.get('http://smapp.sorters.io/api/v1/products/'+$routeParams.id+'/stock').
            then(function(response) {
                $scope.product.stock = response.data;
            });
            $http.get('http://smapp.sorters.io/api/v1/products/'+$routeParams.id+'/stocks').
            then(function(response) {
                if (response.data.stocks) {
                    $scope.product.stocks = response.data;
                } else {
                    $scope.product.stocks = "No stocks.";
                }
            });
        });

});