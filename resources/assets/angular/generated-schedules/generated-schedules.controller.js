/**
 * Created by fbouc_000 on 3/21/2016.
 */

        var app = angular.module('StarterApp');

        app.controller('GeneratedSchedulesController', ['$scope', '$http', '$state', '$stateParams', 'CourseService', 'SchedulerService',
            function ($scope, $http, $state, $stateParams, CourseService, SchedulerService) {

                $scope.courseList = [
                    [
                    {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"PPPC","type":"TUT","day":"Thursday","timeBegin":"8:30PM","timeEnd":"10:15PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":8651},
                    {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"D","type":"LEC","day":"Monday","timeBegin":"2:45PM","timeEnd":"6:00PM","room":"H 420 SGW","semester":"Fall 2016","classid":7469}
                    ]
                ]

                $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
                $scope.times = [];
                for(var i = 0; i<=16; i++){
                    for(var j = 0; j <= 3; j++){
                        var time = (8+ i) + ':' + (15 * j)
                        if(j == 0){
                            time = time + '0'
                        }
                        $scope.times.push(time);
                    }
                }

                //converts 12h time to 24h time AND rounds the minutes to the clsoest 15 min interval
                function convert12hTo24h(time){
                    var time12 = time.split(':')
                    var hour12 = Number(time12[0])
                    if((time12[1].indexOf("PM") != -1) && hour12 != 12){
                        var hour24 = hour12 + 12
                    }
                    else{
                        var hour24 = hour12
                    }
                    //round minutes to the nearest 15 minute increment
                    var minutes12 = Number(time12[1].slice(0,2))
                    if((minutes12 > 0) && (minutes12 < 15)){
                        minutes12 = 0
                    }
                    if((minutes12 > 15) && (minutes12 < 30)){
                        minutes12 = 15
                    }
                    if((minutes12 > 30) && (minutes12 < 45)){
                        minutes12 = 30
                    }
                    if(minutes12 >= 45){
                        minutes12 = 45
                    }
                    var time24 = hour24 + ":" + minutes12
                    if(minutes12 == 0){
                        time24 = time24 + '0'
                    }
                    return time24
                }

                $scope.classBeginAt = function(courseList ,time, day){
                    var daySliced = day.slice(0, 2)
                    for(var i = 0; i<courseList.length; i++){
                        if((time == convert12hTo24h(courseList[i].timeBegin)) && (courseList[i].day.indexOf(daySliced) > -1) ){
                            return i;
                        }
                    }
                    return -1
                }


                $scope.duration = function(courseList, courseIndex){
                    if(courseIndex == -1){
                        return 1
                    }
                    var timeBegin = courseList[courseIndex].timeBegin
                    var timeEnd = courseList[courseIndex].timeEnd
                    timeBegin = convert12hTo24h(timeBegin)
                    timeEnd = convert12hTo24h(timeEnd)
                    var hours = Number(timeEnd.split(':')[0]) - Number(timeBegin.split(':')[0])
                    var minutes = Number(timeEnd.split(':')[1]) - Number(timeBegin.split(':')[1])
                    return ((hours*4) + (minutes/15) + 1)
                }

                $scope.classAt = function(courseList, time, day){
                    var daySliced = day.slice(0, 2)
                    for(var i = 0; i<courseList.length; i++){
                        if(courseList[i].day.indexOf(daySliced) > -1){
                            var courseHourBegin = Number(convert12hTo24h(courseList[i].timeBegin).split(':')[0])
                            var courseHourEnd = Number(convert12hTo24h(courseList[i].timeEnd).split(':')[0])
                            var timeHour = Number(time.split(':')[0])
                            //check for the hour
                            if((courseHourBegin <= timeHour) && (timeHour <= courseHourEnd)){
                                if((courseHourBegin != timeHour) && (courseHourEnd != timeHour)){
                                    return true
                                }
                                //check for the minutes
                                var courseMinuteBegin = Number(convert12hTo24h(courseList[i].timeBegin).split(':')[1])
                                var courseMinuteEnd = Number(convert12hTo24h(courseList[i].timeEnd).split(':')[1])
                                var timeMinutes = Number(time.split(':')[1])
                                if((courseHourBegin == timeHour) && (courseMinuteBegin <= timeMinutes)){
                                    return true
                                }
                                if((courseHourEnd == timeHour) && (courseMinuteEnd >= timeMinutes)){
                                    return true
                                }
                            }
                        }
                    }
                    return false
                }

                getTimeSlots = function(courses){
                    for(var i = 0; i<courses.length;i++){
                        var times = []
                        var course ={}
                        course.name
                    }
                }
//{"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"PPPC","type":"TUT","day":"Thursday","timeBegin":"8:30PM","timeEnd":"10:15PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":8651},

            }]
        );
