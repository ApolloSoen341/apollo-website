
/**
 * Created by fbouc_000 on 2/9/2016.
 */
var app = angular
    .module('StarterApp', ['ngMaterial', 'ui.router']);

    app.config(function($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider){



        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('amber');

        $stateProvider
        .state('homepage', {
            url: "/",
            templateUrl: "..\\resources\\views\\homepage.html",
            controller: "AppCtrl"
        });




    });

app.controller('AppCtrl', ['$scope', '$mdSidenav',
    function ($scope, $mdSidenav) {
        $scope.openLeftMenu = function() {
            $scope.open = !$scope.open;
        };

    }]);
