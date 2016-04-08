(function () {
    angular.module("StarterApp").config(function ($stateProvider) {
        $stateProvider

            .state('homepage', {
                url: "/#/homepage",
                templateUrl: "..\\resources\\views\\homepage.html",
                controller: "HomepageController"
            });

    });
})();