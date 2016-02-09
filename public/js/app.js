/**
 * Created by fbouc_000 on 2/6/2016.
 */
var app = angular
    .module('StarterApp', ['ngMaterial'])

    .config(function($mdThemingProvider, $mdIconProvider){

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('yellow');
    });

app.controller('AppCtrl', ['$scope',
    function ($scope) {
        $scope.test = 'Francis is the best'
        $scope.true = true;
    }]);