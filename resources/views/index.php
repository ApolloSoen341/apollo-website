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

        <script>
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
        </script>
        <!-- Angular Material Library -->
        <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.js"></script>
    </head>
    <body ng-controller="AppCtrl">
    <div class="container">
        <div class="content">
            <!-- Put content here -->

            <div ng-cloak>
                <md-content>
                    <br>
                    <md-toolbar>
                        <div class="md-toolbar-tools">
                            <md-button class="md-icon-button" aria-label="Settings">
                            </md-button>
                            <h2>
                                <span>Toolbar with Icon Buttons</span>
                            </h2>
                            <span flex></span>
                            <md-button class="md-icon-button" aria-label="Favorite">
                            </md-button>
                            <md-button class="md-icon-button" aria-label="More">
                                <md-icon class="menu"></md-icon>
                            </md-button>
                        </div>
                    </md-toolbar>

            </div>
        </div>
    </body>
</html>