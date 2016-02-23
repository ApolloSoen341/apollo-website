/**
 * Created by fbouc_000 on 2/6/2016.
 */
var app = angular.module('StarterApp', [], function($interpolateProvider){
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});

app.controller('AppCtrl', ['$scope',
    function ($scope) {
        $scope.test = 'test'
        $scope.true = true;
    }]);