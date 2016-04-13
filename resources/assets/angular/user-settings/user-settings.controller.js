var app = angular.module('StarterApp');

app.controller('UserSettingsController', ['$scope', '$http', '$state', '$stateParams',
    function ($scope, $http, $state, $stateParams) {
        $scope.data = {};
        //DEFAULT PREFERENCES
        $scope.data.monAll = true;
        $scope.data.monAm = false;
        $scope.data.monDay = false;
        $scope.data.monPm = false;

        $scope.data.tuesAll = true;
        $scope.data.tuesAm = false;
        $scope.data.tuesDay = false;
        $scope.data.tuesPm = false;

        $scope.data.wedAll = true;
        $scope.data.wedAm = false;
        $scope.data.wedDay = false;
        $scope.data.wedPm = false;

        $scope.data.thursAll = true;
        $scope.data.thursAm = false;
        $scope.data.thursDay = false;
        $scope.data.thursPm = false;

        $scope.data.friAll = true;
        $scope.data.friAm = false;
        $scope.data.friDay = false;
        $scope.data.friPm = false;


    var req = {
        method: 'POST',
        url: 'http://apollo.matthewteolis.com/api/preference',
        header: {
            'Authorization': "Basic c29lbjozNDE="
        },
        data: {
            test: 'test'
        }
    }

        function sendpref() {
            $http(req).success(function (data, status) {
                if (status == 200) {
                    console.log("Success");
                }
            })
        }
    }]
)
