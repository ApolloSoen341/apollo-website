<!DOCTYPE html>
<html ng-app="StarterApp">
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
        <script src="\resources\views\app.js"></script>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>
    </head>
    <body ng-controller="AppCtrl">
        <div class="container">
            <div class="content">
                <div class="title">Laravel 5 </div>
                <h1>{{test}}</h1>
            </div>
        </div>
    </body>
</html>