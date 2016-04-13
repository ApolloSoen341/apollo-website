(function () {
    angular.module("StarterApp").config(function ($stateProvider) {
        $stateProvider

            .state('homepage', {
                url: "/",
                templateUrl: "..\\resources\\views\\homepage.html",
                controller: "HomepageController"
            });

    });
})();