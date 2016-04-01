/**
 * Created by fbouc_000 on 3/21/2016.
 */
(function () {
    angular.module("StarterApp").config(function ($stateProvider) {
        $stateProvider

            .state('generated-schedules', {
                url: "/generated-schedules",
                templateUrl: "..\\resources\\assets\\angular\\generated-schedules\\generated-schedules.html",
                controller: "GeneratedScheduelsController"
            });

    });
})();