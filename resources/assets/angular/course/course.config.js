/**
 * Created by matthew on 08/02/16.
 */
(function () {
    angular.module("StarterApp").config(function ($stateProvider) {
        $stateProvider

            .state('course', {
                url: "/courses",
                templateUrl: "..\\resources\\assets\\angular\\course\\course.html",
                controller: "CourseController"
            });

    });
})();