/**
 * Created by fbouc_000 on 2/6/2016.
 */
var app = angular.module('StarterApp', []);

app.controller('AppCtrl', ['$scope',
    function ($scope) {
        $scope.test = 'Francis is the best'
        $scope.true = true;
    }]);