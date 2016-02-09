<!DOCTYPE html>
<html ng-app="StarterApp">
    <head>
        <title>Apollo</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <!-- Angular Material style sheet -->
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.css">
        <!-- Angular Material requires Angular.js Libraries -->
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
        <!-- Angular Material Library -->
        <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.js"></script>

        <!-- Apollo Scripts -->
        <script src="js/app.js"></script>
    </head>
    <body ng-controller="AppCtrl">
        <div ui-view></div>


        <!--
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
        -->
    </body>
</html>