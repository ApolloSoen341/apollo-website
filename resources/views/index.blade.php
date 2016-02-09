<!DOCTYPE html>
<html ng-app="StarterApp">
    <head>
<!--        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>-->
        <title>Apollo</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <!-- Angular Material style sheet -->
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.css">
        <!-- Angular Material requires Angular.js Libraries -->

        <!--
        Your HTML content here
        -->
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>


        <script>
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

            app.config(['$routeProvider',
                function($routeProvider) {
                    $routeProvider.
                    when('/', {
                        templateUrl: '/resources/assests/angular/dashboard/dashboard.html',
                        controller: 'DashboardController'
                    });
                }]
            );
        </script>
        <!-- Angular Material Library -->
        <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.js"></script>
    </head>
    <body ng-controller="AppCtrl">

    <md-toolbar layout="row">
        <div class="md-toolbar-tools">
            <md-button>
                <md-icon aria-label="Menu" md-svg-icon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/68133/menu.svg"></md-icon>
            </md-button>
            <h1>Apollo</h1>
        </div>
    </md-toolbar>


        <div class="content">

        </div>
    </body>
</html>