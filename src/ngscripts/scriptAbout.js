angular.module('aboutApp', [])
    .controller('detailController', ['$scope', function ($scope) {
        'use strict';
        $scope.phone = '01-654-2276';
        $scope.email = 'amitpandey.void@example.com';
    }]);   