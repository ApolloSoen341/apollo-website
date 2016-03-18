var app = angular
    .module('StarterApp', ['ngMaterial', 'ngRoute'])

    .config(function($mdThemingProvider, $mdIconProvider){

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('yellow');
    });

app.controller('AppCtrl', ['$scope',
    function ($scope) {
        $scope.test = 'Francis is the best';
        $scope.true = true;
    }]);