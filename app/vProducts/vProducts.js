'use strict';

angular.module('smapp.vProducts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vProducts', {
    templateUrl: 'vProducts/vProducts.html',
    controller: 'VProductsCtrl'
  });
}])

.controller('VProductsCtrl', function($scope, $http)  {

    $http.defaults.headers.common['Authorization'] = 'Bearer IsZs01MiurjFPmCHuXG9b2dO7oSOgn14ZbsYtpDANfrYuVvglgX61cq2b6sY';

    $http.get('http://smapp.sorters.io/api/v1/products').
        then(function(response) {
            $scope.products = response.data;
        });

    $scope.increase = function(pid) {
        $http.post('http://smapp.sorters.io/api/v1/products/'+pid+'/refill/1', $scope.product);
    }

});