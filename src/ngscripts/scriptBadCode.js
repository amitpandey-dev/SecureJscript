angular.module("badApp",[]).controller("badController", function ($scope) {
    //'use strict';
    $scope.CauseStatement = 'See me, I am using bad practice. I would die when minified without NG-annotate.';
    $scope.TemporrayFix = 'Thanks NG-annotate !!  you save me my life';
});
 