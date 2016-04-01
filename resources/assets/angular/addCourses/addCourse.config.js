/**
 * Created by fbouc_000 on 3/21/2016.
 */
/**
 * Created by matthew on 08/02/16.
 */
(function () {
    angular.module("StarterApp").config(function ($stateProvider) {
        $stateProvider

            .state('addCourse', {
                url: "/addCourses",
                templateUrl: "..\\resources\\assets\\angular\\addCourse\\addCourse.html",
                controller: "AddCourseController"
            });

    });
})();