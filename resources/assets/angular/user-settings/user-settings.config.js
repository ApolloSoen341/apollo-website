/**
 * Created by matthew on 08/02/16.
 */
(function () {
    angular.module("StarterApp").config(function ($stateProvider) {
        $stateProvider

            .state('user-settings', {
                url: "/user-settings",
                templateUrl: "..\\resources\\assets\\angular\\user-settings\\user-settings.html",
                controller: "UserSettingsController"
            });

    });
})();