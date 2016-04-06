var app = angular.module('StarterApp');

app.factory('CourseService', function(){

    var courses = [];

    return {
        courses: function(){
            return courses;
        },
        addCourse: function(course){
            courses.push(course)
        }
    };
})