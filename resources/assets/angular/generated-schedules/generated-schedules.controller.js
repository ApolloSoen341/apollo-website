/**
 * Created by fbouc_000 on 3/21/2016.
 */
(function()
    {
        var app = angular.module('StarterApp');

        app.controller('GeneratedSchedulesController', ['$scope', '$http', '$state', '$stateParams',
            function ($scope, $http, $state, $stateParams) {

                $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

                $scope.times = [];
                for(var i = 0; i<=16; i++){
                    for(var j = 0; j <= 4; j++){
                        var time = (8+ i) + ':' + (15 * j)
                        times.push(time);
                    }
                }

            }]
        );
    }
)
();