/**
 * Created by fbouc_000 on 3/20/2016.
 */

var app = angular.module('StarterApp');

app.controller('ScheduleGeneratorController', ['$scope', '$http', '$state', '$stateParams',
    function ($scope, $http, $state, $stateParams) {

        $scope.courses;
        $http({method: 'GET', url: 'http://apollo.matthew.172.31.98.213.xip.io/api/course', headers: {
            'Access-Control-Allow-Origin': '*'}
        }).then(function (res) {
            $scope.courses = res.data;
        });



        $scope.selectedCourses = [];
        //$scope.courses = [
        //    {//stub
        //        code: "SOEN 341",
        //        name: "Software Process",
        //        prerequisites: ["COMP 352", "SOEN 287", "COMP 248"],
        //        corequisites: "",
        //        credits: 3,
        //        faculty: "Engineering",
        //        description: "Basic principles of software engineering. Introduction to software process models. Activities in each phase, including review activities. Working in teams: organization; stages of formation; roles; conflict resolution. Notations used in software documentation. How to review, revise, and improve software documentation. Lectures: three hours per week. Tutorial: one hour per week."
        //
        //    },
        //    {
        //        code: "SOEN 348",
        //        name: "Principals of Prog. Languages",
        //        prerequisites: ["COMP 352", "SOEN 287", "COMP 248"],
        //        corequisites: "",
        //        credits: 3,
        //        faculty: "Engineering",
        //        description: "This course teaches the principles of programming languages and basic skills needed to understand analyze and develop algorithms for problem solving using different paradigms. Examples from mathematics and data structures will be given and discussed. The following programming paradigms will be covered: logic, functional, procedural, imperative, and object-oriented programming."
        //
        //    }
        //];
        $scope.search = "";

        $scope.addCourse = function(course) {
            for(i = 0; i < $scope.selectedCourses.length; i++){
                if (course.name == $scope.selectedCourses[i].name){
                    return;
                }
            }
                $scope.selectedCourses.push(course);


        }



    }]
)

