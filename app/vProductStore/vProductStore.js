'use strict';

angular.module('smapp.vProductStore', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vProducts/new', {
    templateUrl: 'vProductStore/vProductStore.html',
    controller: 'VProductStoreCtrl'
  });
  $routeProvider.when('/vProducts/edit/:id', {
    templateUrl: 'vProductStore/vProductStore.html',
    controller: 'VProductStoreCtrl'
  });
}])

.controller('VProductStoreCtrl', function($scope, $http, $routeParams, $location)  {

    $http.defaults.headers.common['Authorization'] = 'Bearer IsZs01MiurjFPmCHuXG9b2dO7oSOgn14ZbsYtpDANfrYuVvglgX61cq2b6sY';

    if ($routeParams.id) {
        $http.get('http://smapp.sorters.io/api/v1/products/'+$routeParams.id).
        then(function(response) {
            if (response.data.id != null) {
                $scope.product = response.data;
            } 
        });
    }

    $scope.submit = function() {
        $http.post('http://smapp.sorters.io/api/v1/products', $scope.product).
        success(function(response) {
            return $location.path('/vProducts');
        });
    }

});