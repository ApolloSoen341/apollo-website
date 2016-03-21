<!DOCTYPE html>
<html ng-app="StarterApp">
    <head>

        <title>Apollo</title>

        <link href="https://fonts.googleapis.com/css?family=Roboto:400" rel="stylesheet" type="text/css">

        <!-- Angular Material style sheet -->
        <link rel="stylesheet" href="..\bower_components\angular-material\angular-material.css">
        <!-- Angular Material requires Angular.js Libraries -->

        <!--
        Your HTML content here
        -->
        <script src="..\bower_components\angular\angular.js"></script>
        <script src="..\bower_components\angular-animate\angular-animate.min.js"></script>
        <script src="..\bower_components\angular-aria\angular-aria.min.js"></script>
        <script src="..\bower_components\angular-messages\angular-messages.min.js"></script>
        <script src="..\bower_components\angular-ui-router\release\angular-ui-router.min.js"></script>

        <!-- Angular Material Library -->
        <script src="..\bower_components\angular-material\angular-material.min.js"></script>
        <script src="..\resources\views\app.js"></script>
        <script src="..\resources\assets\angular\course\course.config.js"></script>
        <script src="..\resources\assets\angular\user-settings\user-settings.config.js"></script>
        <script src="..\resources\assets\angular\user-settings\user-settings.controller.js"></script>
        <script src="..\resources\assets\angular\schedule-generator\schedule-generator.config.js"></script>
        <script src="..\resources\assets\angular\schedule-generator\schedule-generator.controller.js"></script>


    </head>
    <body ng-controller="AppCtrl" layout="column">

    <md-toolbar layout="row">
        <div class="md-toolbar-tools">
            <md-button ng-click="openLeftMenu()">
                <md-icon aria-label="Menu" md-svg-icon="..\imgs\ic_menu_white_24px.svg"></md-icon>
            </md-button>
            <a href="/public"><h1>Apollo</h1></a>
        </div>
    </md-toolbar>
    <md-content layout="row" flex>
    <md-content layout="row" flex>

        <md-sidenav class="md-sidenav-left md-whiteframe-z2" layout="column" md-component-id="left" md-is-open="open" flex>
            <div flex="5"></div>
            <div flex="30">
                <div layout="column" layout-align="center center">
                        <div>
                            <user-avatar></user-avatar>
                        </div>
                        <div>Firstname Lastname</div>
                        <div>email@domainname.com</div>
                </div>
            </div>
            <md-divider></md-divider>
            <md-list class="md-dense" ng-cloak>
                <md-list-item ng-href="/public">
                    <p>Home</p>
                </md-list-item>
                <md-list-item ng-href="/public/#/courses">
                    <p>View Courses</p>
                </md-list-item>
                <md-list-item class="secondary-button-padding" ng-href="/public/#/schedule-generator">
                    <p>Schedule Generator</p>
                </md-list-item>
                <md-list-item ng-href="/public/#/academics">
                    <p>View My Academics</p>
                </md-list-item>
                <md-list-item class="secondary-button-padding" ng-href="/public/#/currentschedule">
                    <p>View My Current Schedule</p>
                </md-list-item>
                <md-list-item class="secondary-button-padding" ng-href="/public/#/sequence">
                    <p>View Sequences</p>
                </md-list-item>
                <md-list-item class="secondary-button-padding" ng-href="/public/#/user-settings">
                    <p>User Settings</p>
                </md-list-item>
            </md-list>
        </md-sidenav>
        {{--<div flex="20"></div>--}}
        <div class="content" ui-view flex>
            <!-- CONTENT GOES HERE -->
        </div>
    </md-content>
    </md-content>




    </body>
</html>
