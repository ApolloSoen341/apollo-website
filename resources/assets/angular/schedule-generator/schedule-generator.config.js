/**
 * Created by fbouc_000 on 3/20/2016.
 */
(function () {
    angular.module("StarterApp").config(function ($stateProvider) {
        $stateProvider

            .state('schedule-generator', {
                url: "/schedule-generator",
                templateUrl: "..\\resources\\assets\\angular\\schedule-generator\\schedule-generator.html",
                controller: "ScheduleGeneratorController"
            });

    });
})();