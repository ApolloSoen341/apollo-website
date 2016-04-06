/**
 * Created by fbouc_000 on 3/20/2016.
 */

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

app.controller('ScheduleGeneratorController', ['$scope', '$http', '$state', '$stateParams', 'CourseService',
    function ($scope, $http, $state, $stateParams, CourseService) {


        $http({method: 'GET', url: 'http://apollo.matthewteolis.com/api/course', headers: {
            'Access-Control-Allow-Origin': '*'}
        }).then(function (res) {
            $scope.courses = res.data;
        });

        $scope.selectedCourses = [];

        $scope.search = "";

        $scope.addCourse = function(course) {
            for(i = 0; i < $scope.selectedCourses.length; i++){
                if (course.name == $scope.selectedCourses[i].name){
                    return;
                }
            }
                $scope.selectedCourses.push(course);
            CourseService.push(course)

        }

        $scope.courses = [
            {
                "id": 1,
                "name": "Introduction to Financial Accounting",
                "number": "230",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 2,
                "name": "Financial Reporting I",
                "number": "310",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 3,
                "name": "Financial Reporting II",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 4,
                "name": "Cost and Management Accounting",
                "number": "330",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 5,
                "name": "Income Taxation in Canada",
                "number": "340",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 6,
                "name": "Accounting and Information Technology",
                "number": "350",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 7,
                "name": "U.S. Federal Taxation",
                "number": "365",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 8,
                "name": "Accounting Theory",
                "number": "400",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 9,
                "name": "Financial Reporting III",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 10,
                "name": "FINANCIAL REPORTING IV",
                "number": "425",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 11,
                "name": "Advanced Management Accounting",
                "number": "430",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 12,
                "name": "STRAT ACCTNG CASE ANALYSIS",
                "number": "435",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 13,
                "name": "Advanced Taxation",
                "number": "440",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 14,
                "name": "Assurance Services",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 15,
                "name": "Fraud Prevention and Investigation",
                "number": "455",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 16,
                "name": "Advanced Assurance Services",
                "number": "465",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 1,
                    "name": "ACCO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 17,
                "name": "Mathematics of Finance",
                "number": "256",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 2,
                    "name": "ACTU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 18,
                "name": "Actuarial Mathematics II",
                "number": "357",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 2,
                    "name": "ACTU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 19,
                "name": "Credibility Theory",
                "number": "458",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 2,
                    "name": "ACTU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 20,
                "name": "Honours Project in Actuarial Mathematics",
                "number": "493",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 2,
                    "name": "ACTU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 21,
                "name": "Concepts and Principles of Adult Education",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 3,
                    "name": "ADED"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 22,
                "name": "Introduction to Administration (Administered by the Finance Department)",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 4,
                    "name": "ADMI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 23,
                "name": "Perspective on Canadian Business (Administered by the Finance Department)",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 4,
                    "name": "ADMI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 24,
                "name": "STNDRDS/REGUL N/CERTIF N",
                "number": "417",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 5,
                    "name": "AERO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 25,
                "name": "PRINCIPLES OF AEROELASTICITY",
                "number": "431",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 5,
                    "name": "AERO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 26,
                "name": "TURBOMACHINERY+PROPULSION",
                "number": "462",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 5,
                    "name": "AERO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 27,
                "name": "FLIGHT CONTROL SYSTEMS",
                "number": "480",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 5,
                    "name": "AERO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 28,
                "name": "AVIONIC NAVIGATION SYSTEMS",
                "number": "482",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 5,
                    "name": "AERO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 29,
                "name": "AIRCRAFT STRESS ANALYSIS",
                "number": "486",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 5,
                    "name": "AERO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 30,
                "name": "Historical Foundations of Leisure and Recreation",
                "number": "215",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 31,
                "name": "LIFESPAN GROWTH&DEVELOP.",
                "number": "220",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 32,
                "name": "Self-Managed Learning",
                "number": "225",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 33,
                "name": "Interpersonal Communication and Relationships",
                "number": "230",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 34,
                "name": "Working in Task Groups",
                "number": "232",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 35,
                "name": "Recreation and Leisure in Contemporary Society",
                "number": "241",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 36,
                "name": "Program Planning, Design and Evaluation",
                "number": "260",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 37,
                "name": "Introduction to Intervention in Human Systems",
                "number": "270",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 38,
                "name": "Introduction to Therapeutic Recreation",
                "number": "281",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 39,
                "name": "Respecting Diversity in Human Relations",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 40,
                "name": "Sexuality in Human Relations",
                "number": "312",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 41,
                "name": "Family Communication",
                "number": "313",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 42,
                "name": "Adolescence: Issues and Intervention",
                "number": "314",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 43,
                "name": "Interviewing",
                "number": "315",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 44,
                "name": "Older Adulthood: Issues and Intervention",
                "number": "319",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 45,
                "name": "Power and Conflict Resolution in Human Systems",
                "number": "335",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 46,
                "name": "Leisure Education",
                "number": "350",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 47,
                "name": "Play, Adult Learning and Development",
                "number": "360",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 48,
                "name": "Leisure Services Leadership",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 49,
                "name": "Quantitative Research Methods for Practitioners",
                "number": "380",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 50,
                "name": "Qualitative Research Methods for Practitioners",
                "number": "382",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 51,
                "name": "Therapeutic Recreation and Physical Disabilities",
                "number": "383",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 52,
                "name": "Organization Development I",
                "number": "423",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 53,
                "name": "Administration of Leisure Services",
                "number": "427",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 54,
                "name": "Leisure Sciences Seminar",
                "number": "431",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 55,
                "name": "Fieldwork Practice",
                "number": "435",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 56,
                "name": "Internship in Leisure Sciences",
                "number": "437",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 57,
                "name": "INTERNSHIP: THER. REC",
                "number": "438",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 58,
                "name": "Community Development I",
                "number": "443",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 59,
                "name": "Leisure Assessment and Counselling",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 60,
                "name": "Independent Study I",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 61,
                "name": "Independent Study II",
                "number": "491",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 62,
                "name": "Introduction to Culture",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 63,
                "name": "Comparative Culture",
                "number": "272",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 64,
                "name": "GENDER AND SOCIETY",
                "number": "276",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 65,
                "name": "INTRO TO LAW & SOCIETY",
                "number": "285",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 66,
                "name": "Social Construction of Sexualities",
                "number": "375",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 67,
                "name": "MATERIAL CULTURE",
                "number": "441",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 68,
                "name": "Food and Social Change",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 69,
                "name": "Art in Early Childhood I",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 70,
                "name": "Foundations of Art Education",
                "number": "220",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 71,
                "name": "Multidisciplinary Approaches to Art and Teaching",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 72,
                "name": "Light?Based Media",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 73,
                "name": "Time?Based Media",
                "number": "354",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 74,
                "name": "Art Education for Elementary School",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 75,
                "name": "Practicum in the Elementary School",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 76,
                "name": "Art Education in the Secondary School I",
                "number": "422",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 77,
                "name": "Practicum in the Secondary School I",
                "number": "423",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 78,
                "name": "Community Art Education: Theory and Practice",
                "number": "432",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 79,
                "name": "Aspects of the History of Photography",
                "number": "267",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 80,
                "name": "Introduction to Canadian Art",
                "number": "271",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 81,
                "name": "Technology and Contemporary Art",
                "number": "353",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 82,
                "name": "Studies in Near Eastern Art and Architecture",
                "number": "369",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 83,
                "name": "Art and the Viewer",
                "number": "386",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 84,
                "name": "INDEPENDENT STUDIES IN ARTH",
                "number": "401",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 85,
                "name": "INTERNSHIP",
                "number": "403",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 86,
                "name": "Professional Internship I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 10,
                    "name": "ARTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 87,
                "name": "Professional Internship II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 10,
                    "name": "ARTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 88,
                "name": "Independent Study I",
                "number": "491",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 11,
                    "name": "ARTX"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 89,
                "name": "Independent Study II",
                "number": "492",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 11,
                    "name": "ARTX"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 90,
                "name": "An Introduction to Art Therapy",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 12,
                    "name": "ATRP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 91,
                "name": "Structured Programming and Applications for Building and Civil Engineers",
                "number": "231",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 13,
                    "name": "BCEE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 92,
                "name": "Structural Analysis I",
                "number": "342",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 13,
                    "name": "BCEE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 93,
                "name": "Structural Design I",
                "number": "344",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 13,
                    "name": "BCEE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 94,
                "name": "Structural Design II",
                "number": "345",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 13,
                    "name": "BCEE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 95,
                "name": "Construction Engineering",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 13,
                    "name": "BCEE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 96,
                "name": "Matrix Analysis of Structures",
                "number": "452",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 13,
                    "name": "BCEE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 97,
                "name": "Project Cost Estimating",
                "number": "464",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 13,
                    "name": "BCEE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 98,
                "name": "Introductory Biology",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 99,
                "name": "General Biology",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 100,
                "name": "Fundamental Nutrition",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 101,
                "name": "Form and Function of Organisms",
                "number": "225",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 102,
                "name": "Biodiversity and Ecology",
                "number": "226",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 103,
                "name": "Laboratory Studies in Biodiversity",
                "number": "227",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 104,
                "name": "Molecular and General Genetics",
                "number": "261",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 105,
                "name": "Cell Biology",
                "number": "266",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 106,
                "name": "Biostatistics",
                "number": "322",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 107,
                "name": "Plant Biology",
                "number": "340",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 108,
                "name": "The Ecology of Individuals",
                "number": "350",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 109,
                "name": "Behavioural Ecology",
                "number": "354",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 110,
                "name": "Cell Physiology",
                "number": "364",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 111,
                "name": "Molecular Biology",
                "number": "367",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 112,
                "name": "Genetics and Cell Biology Laboratory",
                "number": "368",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 113,
                "name": "Microbiology",
                "number": "371",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 114,
                "name": "Comparative Animal Physiology",
                "number": "382",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 115,
                "name": "Immunology",
                "number": "462",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 116,
                "name": "ADV TOPICS-CELL+MOLEC BIOL",
                "number": "468",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 117,
                "name": "Structural Genomics",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 118,
                "name": "Independent Study",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 119,
                "name": "Building Engineering Drawing and Introduction to Design",
                "number": "212",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 120,
                "name": "Building Engineering Systems",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 121,
                "name": "Building Engineering Design Project",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 122,
                "name": "Building Envelope Design",
                "number": "463",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 123,
                "name": "HVAC System Design",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 124,
                "name": "Building Illumination and Daylighting",
                "number": "474",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 125,
                "name": "Thermal Analysis of Buildings",
                "number": "476",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 126,
                "name": "Project Management for Construction",
                "number": "478",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 127,
                "name": "Labour and Industrial Relations in Construction",
                "number": "491",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 128,
                "name": "STAT. MODELS-DATA ANALYSIS",
                "number": "378",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 16,
                    "name": "BSTA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 129,
                "name": "STAT SOFTWR/DATA MANA & ANAL",
                "number": "445",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 16,
                    "name": "BSTA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 130,
                "name": "FUNDMNTLS OF INFO TECHNOLOGY",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 17,
                    "name": "BTM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 131,
                "name": "Introduction to Business Application Development",
                "number": "380",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 17,
                    "name": "BTM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 132,
                "name": "Database Management",
                "number": "382",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 17,
                    "name": "BTM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 133,
                "name": "Information Systems Analysis",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 17,
                    "name": "BTM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 134,
                "name": "Information Systems Design and Implementation",
                "number": "495",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 17,
                    "name": "BTM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 135,
                "name": "Information Technology Strategy, Management, and Sourcing",
                "number": "496",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 17,
                    "name": "BTM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 136,
                "name": "Creative Computing and Network Culture",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 137,
                "name": "Visual Form and Communication",
                "number": "214",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 138,
                "name": "Creative Computation I",
                "number": "253",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 139,
                "name": "Digital Sound I: Theory and Practice of Real?Time Audio",
                "number": "346",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 140,
                "name": "Networks and Navigation",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 141,
                "name": "Tangible Media and Physical Computing",
                "number": "360",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 142,
                "name": "3D Digital Production I",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 143,
                "name": "Project Studio I",
                "number": "411",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 144,
                "name": "GAME STUDIO I",
                "number": "415",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 145,
                "name": "Professional Internship I",
                "number": "455",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 146,
                "name": "Professional Internship II",
                "number": "456",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 147,
                "name": "Independent Study I",
                "number": "457",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 148,
                "name": "Independent Study II",
                "number": "458",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 149,
                "name": "INDEPENDENT STUDY III",
                "number": "459",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 150,
                "name": "Emergency Care in Sport and Exercise",
                "number": "262",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 151,
                "name": "Assessment of the Upper and Lower Extremities",
                "number": "337",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 152,
                "name": "Rehabilitation of the Upper and Lower Extremities",
                "number": "339",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 153,
                "name": "Athletic Therapy Field Internship I",
                "number": "365",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 154,
                "name": "ATHL. THERAPY FIELD INTER.",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 155,
                "name": "Assessment of the Hip, Spine and Pelvis",
                "number": "437",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 156,
                "name": "Advanced Emergency Care",
                "number": "462",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 157,
                "name": "Athletic Therapy Clinical Internship I",
                "number": "475",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 158,
                "name": "ATHL THER. CLINICAL INTERN",
                "number": "480",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 159,
                "name": "ATHL THER FIELD INTERN II",
                "number": "485",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 160,
                "name": "ATHL THER CLINICAL INTERN II",
                "number": "495",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 19,
                    "name": "CATA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 161,
                "name": "Independent Study I",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 20,
                    "name": "CERA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 162,
                "name": "Independent Study II",
                "number": "452",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 20,
                    "name": "CERA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 163,
                "name": "General Chemistry I",
                "number": "205",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 164,
                "name": "General Chemistry II",
                "number": "206",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 165,
                "name": "Introductory Analytical Chemistry I",
                "number": "217",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 166,
                "name": "Introductory Organic Chemistry I",
                "number": "221",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 167,
                "name": "Introductory Organic Chemistry II",
                "number": "222",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 168,
                "name": "Physical Chemistry I: Thermodynamics",
                "number": "234",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 169,
                "name": "Physical Chemistry: Kinetics of Chemical Reactions",
                "number": "235",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 170,
                "name": "Inorganic Chemistry I: Introduction to Periodicity and Valence Theory",
                "number": "241",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 171,
                "name": "Biochemistry I",
                "number": "271",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 172,
                "name": "Intermediate Analytical Chemistry",
                "number": "312",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 173,
                "name": "Organic Chemistry III: Organic Reactions",
                "number": "324",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 174,
                "name": "Independent Study and Practicum",
                "number": "419",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 175,
                "name": "Research Project and Thesis",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 176,
                "name": "Advanced Laboratory in Biochemistry",
                "number": "477",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 177,
                "name": "Civil Engineering Drawing and Introduction to Design",
                "number": "212",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 178,
                "name": "Geology for Civil Engineers",
                "number": "231",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 179,
                "name": "Milton",
                "number": "319",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 180,
                "name": "Transportation Engineering",
                "number": "372",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 181,
                "name": "Hydraulics",
                "number": "381",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 182,
                "name": "Contemporary Canadian Fiction",
                "number": "377",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 183,
                "name": "Modern Canadian Poetry",
                "number": "378",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 184,
                "name": "African Literature",
                "number": "383",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 185,
                "name": "Gender and Sexuality in Literary Studies",
                "number": "393",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 186,
                "name": "Technical Writing",
                "number": "395",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 187,
                "name": "HONOURS ESSAY",
                "number": "474",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 188,
                "name": "Civil Engineering Design Project",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 189,
                "name": "Soil Mechanics",
                "number": "432",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 190,
                "name": "Engineering Industrial Experience Reflective Learning I",
                "number": "108",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 191,
                "name": "Design of Reinforced Concrete Structures",
                "number": "453",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 192,
                "name": "Water Pollution and Control",
                "number": "465",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 193,
                "name": "Engineering Aspects of Chemical and Biological Processes",
                "number": "466",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 194,
                "name": "Highway and Pavement Design",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 195,
                "name": "Greek Literature",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 196,
                "name": "Greek Mythology",
                "number": "261",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 197,
                "name": "The Heroic Epics of Greece and Rome",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 198,
                "name": "Intermediate Ancient Greek I",
                "number": "383",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 199,
                "name": "Reading Latin Prose",
                "number": "391",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 200,
                "name": "ADVANCED LATIN PROSE",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 201,
                "name": "Introduction to Discrete Mathematics",
                "number": "231",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 202,
                "name": "Programming Methodology I",
                "number": "243",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 203,
                "name": "Programming Methodology II",
                "number": "244",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 204,
                "name": "Computer Organization and Software",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 205,
                "name": "Microprocessor Systems",
                "number": "317",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 206,
                "name": "Introduction to Real?Time Systems",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 207,
                "name": "Data Structures and Algorithms",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 208,
                "name": "COMP. ENG. PROD DESIGN PROJ.",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 209,
                "name": "Communication Networks and Protocols",
                "number": "445",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 210,
                "name": "VLSI Circuit Design",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 211,
                "name": "Contemporary Business Thinking",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 212,
                "name": "Business Communication",
                "number": "212",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 213,
                "name": "Business Statistics",
                "number": "215",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 214,
                "name": "Financial Accounting",
                "number": "217",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 215,
                "name": "Analysis of Markets",
                "number": "220",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 216,
                "name": "Organizational Behaviour and Theory",
                "number": "222",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 217,
                "name": "Marketing Management I",
                "number": "223",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 218,
                "name": "Production and Operations Management",
                "number": "225",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 219,
                "name": "Business Technology Management",
                "number": "226",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 220,
                "name": "Managerial Accounting",
                "number": "305",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 221,
                "name": "Introduction to Finance",
                "number": "308",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 222,
                "name": "Business Law and Ethics",
                "number": "315",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 223,
                "name": "Entrepreneurship",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 224,
                "name": "Strategy and Competition",
                "number": "401",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 225,
                "name": "Computer Science Industrial Experience Reflective Learning I",
                "number": "108",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 226,
                "name": "Introduction to Computing",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 227,
                "name": "Computer Science Industrial Experience Reflective Learning II",
                "number": "208",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 228,
                "name": "Fundamentals of Programming",
                "number": "218",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 229,
                "name": "System Hardware",
                "number": "228",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 230,
                "name": "Mathematics for Computer Science",
                "number": "232",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 231,
                "name": "Probability and Statistics for Computer Science",
                "number": "233",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 232,
                "name": "Computer Architecture",
                "number": "326",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 233,
                "name": "Introduction to Theoretical Computer Science",
                "number": "335",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 234,
                "name": "COMBINATORICS",
                "number": "339",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 235,
                "name": "ADVANCED PROGRAM DESIGN, C++",
                "number": "345",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 236,
                "name": "Operating Systems",
                "number": "346",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 237,
                "name": "Principles of Programming Languages",
                "number": "348",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 238,
                "name": "Data Structures and Algorithms",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 239,
                "name": "Databases",
                "number": "353",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 240,
                "name": "Introduction to Software Engineering",
                "number": "354",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 241,
                "name": "Elementary Numerical Methods",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 242,
                "name": "Computer Graphics",
                "number": "371",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 243,
                "name": "Introduction to Game Development",
                "number": "376",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 244,
                "name": "Multicore Programming",
                "number": "426",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 245,
                "name": "Parallel Programming",
                "number": "428",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 246,
                "name": "Data Communication and Computer Networks",
                "number": "445",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 247,
                "name": "Design and Analysis of Algorithms",
                "number": "465",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 248,
                "name": "Artificial Intelligence",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 249,
                "name": "Pattern Recognition",
                "number": "473",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 250,
                "name": "Animation for Computer Games",
                "number": "477",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 251,
                "name": "Image Processing",
                "number": "478",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 252,
                "name": "Information Retrieval and Web Search",
                "number": "479",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 253,
                "name": "Computer Science Project I",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 254,
                "name": "Computer Science Project II",
                "number": "492",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 255,
                "name": "Honours Seminar",
                "number": "495",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 256,
                "name": "Media Criticism",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 257,
                "name": "History of Communication and Media",
                "number": "220",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 258,
                "name": "Media Institutions and Policies",
                "number": "225",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 259,
                "name": "Communication Theory",
                "number": "240",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 260,
                "name": "Communication Media: Intermedia I",
                "number": "274",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 261,
                "name": "Communication Media: Sound I",
                "number": "276",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 262,
                "name": "Communication Media: Film and Video I",
                "number": "284",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 263,
                "name": "Scriptwriting for Media",
                "number": "307",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 264,
                "name": "Approaches to Communication Research",
                "number": "325",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 265,
                "name": "Media and New Technology",
                "number": "355",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 266,
                "name": "Mass Communication",
                "number": "360",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 267,
                "name": "Media and Cultural Context",
                "number": "367",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 268,
                "name": "Media and Gender",
                "number": "368",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 269,
                "name": "Visual Communication and Culture",
                "number": "369",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 270,
                "name": "Topics in Media and Cultural History",
                "number": "373",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 271,
                "name": "Communication Studies Apprenticeship I",
                "number": "394",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 272,
                "name": "Communication Studies Apprenticeship II",
                "number": "395",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 273,
                "name": "Alternative Media",
                "number": "424",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 274,
                "name": "Advanced Seminar in Cultural Studies",
                "number": "425",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 275,
                "name": "Race, Ethnicity and Media",
                "number": "464",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 276,
                "name": "RHETORIC AND COMMUNICATION",
                "number": "465",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 277,
                "name": "Directed Study I",
                "number": "496",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 278,
                "name": "Directed Study II",
                "number": "497",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 279,
                "name": "COOP WORK TERM 2 (ENGR)",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 30,
                    "name": "CWTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 280,
                "name": "COOP WORK TERM 3 (ENGR)",
                "number": "300",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 30,
                    "name": "CWTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 281,
                "name": "COOP WORK TERM 4 (ENGR)",
                "number": "400",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 30,
                    "name": "CWTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 282,
                "name": "Thermodynamics I",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 283,
                "name": "INTRO. ENGR TEAM DESIGN PROJ",
                "number": "290",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 284,
                "name": "History of the Middle East",
                "number": "242",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 285,
                "name": "Engineering Management Principles and Economics",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 286,
                "name": "History of Africa",
                "number": "264",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 287,
                "name": "Tutorial Preparation for the Honours Essay",
                "number": "304",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 288,
                "name": "Medieval England",
                "number": "350",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 289,
                "name": "The Philosophy and Practice of History",
                "number": "402",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 290,
                "name": "Public History Internship",
                "number": "486",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 291,
                "name": "ADVANCED TOPICS IN HISTORY",
                "number": "493",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 292,
                "name": "Sound and Silence for the Dancer",
                "number": "260",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 32,
                    "name": "DANC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 293,
                "name": "Practical Anatomy for the Moving Body",
                "number": "350",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 32,
                    "name": "DANC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 294,
                "name": "Engineering Industrial Experience Reflective Learning III",
                "number": "308",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 295,
                "name": "Independent Study I",
                "number": "441",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 32,
                    "name": "DANC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 296,
                "name": "Independent Study II",
                "number": "442",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 32,
                    "name": "DANC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 297,
                "name": "Transform Calculus and Partial Differential Equations",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 298,
                "name": "VISUAL COMM. IN CONTEXT",
                "number": "221",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 299,
                "name": "INTRODUCT. TO DESIGN STUDIES",
                "number": "261",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 300,
                "name": "Undergraduate Aerospace Industry Project II",
                "number": "401",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 34,
                    "name": "IADI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 301,
                "name": "INTERNATIONAL FINANCIAL MGMT",
                "number": "370",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 35,
                    "name": "IBUS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 302,
                "name": "MGMT OF INT'L FINANCIAL INST",
                "number": "382",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 35,
                    "name": "IBUS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 303,
                "name": "Probability and Statistics in Engineering",
                "number": "371",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 304,
                "name": "(also listed as MARK 462) Environment of World Business",
                "number": "462",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 35,
                    "name": "IBUS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 305,
                "name": "PROCESS/MATERIALITY OBJECTS",
                "number": "291",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 306,
                "name": "3D Digital Concepts",
                "number": "380",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 307,
                "name": "(also listed as MARK 465) International Marketing Management",
                "number": "465",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 35,
                    "name": "IBUS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 308,
                "name": "DIGIT. MEDIA & MOVING IMAGES",
                "number": "381",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 309,
                "name": "MGMT. OF MULTINATIONAL CORPS",
                "number": "466",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 35,
                    "name": "IBUS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 310,
                "name": "SOC. CULT. RESEARCH/PRACTICE",
                "number": "391",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 311,
                "name": "Numerical Methods in Engineering",
                "number": "391",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 312,
                "name": "CROSS-CULTURAL COMMUN & MGMT",
                "number": "492",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 35,
                    "name": "IBUS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 313,
                "name": "INTERNATIONAL BUSINESS LAW",
                "number": "493",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 35,
                    "name": "IBUS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 314,
                "name": "THE FUTURE LIFE OF OBJECTS",
                "number": "447",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 315,
                "name": "Introduction to Video Production",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 316,
                "name": "The Language of the Web",
                "number": "449",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 317,
                "name": "Programming for Artists",
                "number": "221",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 318,
                "name": "INDEPENDENT STUDY I",
                "number": "461",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 319,
                "name": "Electronics for Artists",
                "number": "222",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 320,
                "name": "INDEPENDENT STUDY II",
                "number": "462",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 321,
                "name": "Performance Art",
                "number": "230",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 322,
                "name": "INDEPENDENT STUDY III",
                "number": "463",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 323,
                "name": "Professional Internship I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 324,
                "name": "PROFESSIONAL INTERNSHIP II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 325,
                "name": "Independent Study in Intermedia/Cyberarts I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 326,
                "name": "Impact of Technology on Society",
                "number": "392",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 327,
                "name": "Independent Study in Intermedia/Cyberarts II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 328,
                "name": "Discursive Design Research I",
                "number": "491",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 329,
                "name": "Professional Internship in Intermedia/Cyberarts I",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 330,
                "name": "Professional Internship in Intermedia/Cyberarts II",
                "number": "482",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 331,
                "name": "Special Technical Report",
                "number": "411",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 332,
                "name": "Design for Live Performance I",
                "number": "209",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 333,
                "name": "Independent Study I",
                "number": "305",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 334,
                "name": "Advanced Designer's Studio: Conception",
                "number": "401",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 335,
                "name": "DESIGN. STUDIO II:CONCEPTION",
                "number": "402",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 336,
                "name": "Independent Study I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 38,
                    "name": "DRAW"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 337,
                "name": "Independent Study II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 38,
                    "name": "DRAW"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 338,
                "name": "Digital Audio Editing",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 339,
                "name": "Theory/MIDIstration I",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 340,
                "name": "Intermediate Sound Recording I",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 341,
                "name": "Current Sound Practice Seminar",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 342,
                "name": "VIRTUAL MODULAR SYNTHESIS",
                "number": "362",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 343,
                "name": "Developing Academic English Language Skills",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 40,
                    "name": "ESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 344,
                "name": "Electroacoustic Composition Seminar/Workshop I",
                "number": "406",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 345,
                "name": "Advanced Recording I",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 346,
                "name": "Capstone Project Seminar I",
                "number": "461",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 347,
                "name": "Independent Study I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 348,
                "name": "Independent Study II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 349,
                "name": "Introduction to Microeconomics",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 350,
                "name": "Refining Academic English Language Skills",
                "number": "204",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 40,
                    "name": "ESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 351,
                "name": "Introduction to Macroeconomics",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 352,
                "name": "Statistical Methods I",
                "number": "221",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 353,
                "name": "Academic Oral Communication I",
                "number": "205",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 40,
                    "name": "ESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 354,
                "name": "Statistical Methods II",
                "number": "222",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 355,
                "name": "Economic History Prior to the Industrial Revolution",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 356,
                "name": "Intermediate Microeconomic Theory I",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 357,
                "name": "Intermediate Microeconomic Theory II",
                "number": "302",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 358,
                "name": "Introduction to Production and Manufacturing Systems",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 42,
                    "name": "INDU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 359,
                "name": "Intermediate Macroeconomic Theory I",
                "number": "303",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 360,
                "name": "Intermediate Macroeconomic Theory II",
                "number": "304",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 361,
                "name": "Canadian Economic Policy and Institutions",
                "number": "318",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 362,
                "name": "Simulation of Industrial Systems",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 42,
                    "name": "INDU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 363,
                "name": "International Economic Policy and Institutions",
                "number": "319",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 364,
                "name": "Economic Data Analysis",
                "number": "324",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 365,
                "name": "Mathematics for Economists I",
                "number": "325",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 366,
                "name": "Mathematics for Economists II",
                "number": "326",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 367,
                "name": "Production Engineering",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 42,
                    "name": "INDU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 368,
                "name": "Money and Banking",
                "number": "331",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 369,
                "name": "Operations Research II",
                "number": "324",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 42,
                    "name": "INDU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 370,
                "name": "Advanced Microeconomic Theory",
                "number": "401",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 371,
                "name": "Advanced Macroeconomic Theory",
                "number": "403",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 372,
                "name": "Engineering Management",
                "number": "330",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 42,
                    "name": "INDU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 373,
                "name": "Human Factors Engineering",
                "number": "412",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 42,
                    "name": "INDU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 374,
                "name": "Econometrics I",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 375,
                "name": "Mathematics for Advanced Study in Economics",
                "number": "425",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 376,
                "name": "Game Theory, Information, and Economic Modelling",
                "number": "464",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 377,
                "name": "Facilities Design and Material Handling Systems",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 42,
                    "name": "INDU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 378,
                "name": "Advanced Environmental Economics",
                "number": "491",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 379,
                "name": "ADVANCED TOPICS IN ECONOMICS",
                "number": "493",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 380,
                "name": "Inventory Control",
                "number": "423",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 42,
                    "name": "INDU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 381,
                "name": "Advanced Concepts in Quality Improvement",
                "number": "475",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 42,
                    "name": "INDU"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 382,
                "name": "The Body Human: Form and Function",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 383,
                "name": "Food for Sport",
                "number": "204",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 384,
                "name": "Introduction to Adapted and Therapeutic Physical Activity",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 385,
                "name": "Current Issues in Personal and Community Health",
                "number": "233",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 386,
                "name": "Research Methods",
                "number": "250",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 387,
                "name": "Fundamentals of Health and Physical Activity",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 388,
                "name": "Introduction to Physical Activity, Health and Fitness",
                "number": "252",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 389,
                "name": "English Exam for Teacher Certification",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 390,
                "name": "Child Development I",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 391,
                "name": "Introductory Information Literacy Skills",
                "number": "250",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 45,
                    "name": "INST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 392,
                "name": "(also listed as FASS 291) Introduction to Sexuality Research",
                "number": "275",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 46,
                    "name": "INTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 393,
                "name": "Exploring Movement with Children",
                "number": "222",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 394,
                "name": "Human Anatomy I: Musculoskeletal Anatomy",
                "number": "253",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 395,
                "name": "Introduction to Computer Usage and Document Design",
                "number": "290",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 46,
                    "name": "INTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 396,
                "name": "Computer Application Development",
                "number": "293",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 46,
                    "name": "INTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 397,
                "name": "Introduction to Philosophy of Education",
                "number": "230",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 398,
                "name": "Introduction to Training and Development",
                "number": "240",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 399,
                "name": "Introductory Information Literacy Skills in Education",
                "number": "250",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 400,
                "name": "Communication: Child, Parent and Teacher",
                "number": "264",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 401,
                "name": "Educational Communication",
                "number": "270",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 402,
                "name": "Internship I: Prekindergarten Teaching",
                "number": "295",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 403,
                "name": "Prekindergarten Teaching Seminar",
                "number": "296",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 404,
                "name": "Integrating Computers into the Elementary Classroom",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 405,
                "name": "Working in childhood Settings:  Leadership and Organizational Issues",
                "number": "302",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 406,
                "name": "Children, Families, and Social Policy",
                "number": "303",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 407,
                "name": "Child Studies Field Experience: Child and Youth Settings",
                "number": "374",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 408,
                "name": "Teaching Language Arts I",
                "number": "380",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 409,
                "name": "Teaching Science Concepts in the Elementary Classroom",
                "number": "382",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 410,
                "name": "Teaching Social Studies in Elementary Schools",
                "number": "384",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 411,
                "name": "Teaching Mathematics I",
                "number": "386",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 412,
                "name": "Internship III: Kindergarten Teaching",
                "number": "395",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 413,
                "name": "Statistics for Exercise Science",
                "number": "322",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 414,
                "name": "Research Experience in Exercise Science",
                "number": "323",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 415,
                "name": "Introduction to the Biomechanics of Human Movement",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 416,
                "name": "Kindergarten Teaching Seminar",
                "number": "396",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 417,
                "name": "Teaching Across the Curriculum",
                "number": "400",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 418,
                "name": "Essentials of Exercise Testing and Training in Athletic Populations",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 419,
                "name": "Educational Aspects of Physical Activity, Health and Wellness",
                "number": "406",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 420,
                "name": "Sociology of Education I",
                "number": "422",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 421,
                "name": "SEL TOPICS-COMPAR EDUC I",
                "number": "426",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 422,
                "name": "Education in Quebec",
                "number": "445",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 423,
                "name": "The Inclusive Classroom: Educating Exceptional Children",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 424,
                "name": "Human Physiology II: The Cardiovascular and Respiratory Systems",
                "number": "357",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 425,
                "name": "Diversity in the Classroom",
                "number": "454",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 426,
                "name": "The Exceptional Child I",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 427,
                "name": "Child Studies Field Experience: Adaptations and Accommodations in Special and Inclusive ",
                "number": "492",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 428,
                "name": "Adapted Physical Activity",
                "number": "380",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 429,
                "name": "Clinical Exercise Physiology Internship I",
                "number": "383",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 430,
                "name": "Pathophysiology in Clinical Exercise Science I",
                "number": "422",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 431,
                "name": "Honours Seminar I: Issues and Methods in Exercise Science",
                "number": "424",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 432,
                "name": "Nutrition in Exercise and Sport",
                "number": "445",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 433,
                "name": "Pharmacology for Sport and Exercise",
                "number": "461",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 434,
                "name": "Clinical Exercise Physiology Internship II",
                "number": "483",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 435,
                "name": "Basic Circuit Analysis",
                "number": "273",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 436,
                "name": "(also listed as INTE 275) Introduction to Sexuality Research",
                "number": "291",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 48,
                    "name": "FASS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 437,
                "name": "Paper: Surface and Object",
                "number": "371",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 49,
                    "name": "FBRS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 438,
                "name": "Independent Study I",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 49,
                    "name": "FBRS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 439,
                "name": "Independent Study II",
                "number": "452",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 49,
                    "name": "FBRS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 440,
                "name": "Principles of Electrical Engineering",
                "number": "275",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 441,
                "name": "Professional Internship I",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 49,
                    "name": "FBRS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 442,
                "name": "Professional Internship II",
                "number": "482",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 49,
                    "name": "FBRS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 443,
                "name": "Personal Finance",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 444,
                "name": "Introduction to Real Estate",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 445,
                "name": "INTERNATIONAL FINANCIAL MGMT",
                "number": "370",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 446,
                "name": "MGMT OF INT'L FINANCIAL INST",
                "number": "382",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 447,
                "name": "Theory of Finance I",
                "number": "385",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 448,
                "name": "Electronics I",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 449,
                "name": "Theory of Finance II",
                "number": "395",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 450,
                "name": "Electronics II",
                "number": "312",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 451,
                "name": "Electromagnetic Waves and Guiding Structures",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 452,
                "name": "Short-Term Financial Management",
                "number": "402",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 453,
                "name": "Cases in Finance",
                "number": "405",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 454,
                "name": "Investment Analysis",
                "number": "410",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 455,
                "name": "Portfolio Management",
                "number": "411",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 456,
                "name": "Options and Futures",
                "number": "412",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 457,
                "name": "Fundamentals of Control Systems",
                "number": "372",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 458,
                "name": "Mergers and Acquisitions",
                "number": "415",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 459,
                "name": "Behavioural Finance",
                "number": "416",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 460,
                "name": "Real Estate Investment and Finance",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 461,
                "name": "ELEC. ENG. PROD DESIGN PROJ.",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 462,
                "name": "International Finance",
                "number": "470",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 463,
                "name": "Solid State Devices",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 464,
                "name": "Management of Financial Institutions",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 465,
                "name": "Introduction aux textes littéraires",
                "number": "220",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 466,
                "name": "Littérature et culture québécoises de 1534 à 1900",
                "number": "303",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 467,
                "name": "TEXTES ETRÉSONANCES MÉDIA",
                "number": "456",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 468,
                "name": "Electrical Power Systems",
                "number": "431",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 469,
                "name": "Tutorat en littérature",
                "number": "494",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 470,
                "name": "Tutorat en littérature",
                "number": "495",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 471,
                "name": "Control of Electrical Power Conversion Systems",
                "number": "432",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 472,
                "name": "Power Electronics",
                "number": "433",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 473,
                "name": "Electromechanical Energy Conversion Systems",
                "number": "435",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 474,
                "name": "From Idea to Storyboard",
                "number": "315",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 52,
                    "name": "FMAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 475,
                "name": "Sound for Animated Film",
                "number": "340",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 52,
                    "name": "FMAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 476,
                "name": "Stop?Motion Animation",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 52,
                    "name": "FMAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 477,
                "name": "Microwave Engineering",
                "number": "453",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 478,
                "name": "Professional Internship I",
                "number": "446",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 52,
                    "name": "FMAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 479,
                "name": "Professional Internship II",
                "number": "447",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 52,
                    "name": "FMAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 480,
                "name": "Independent Study I",
                "number": "448",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 52,
                    "name": "FMAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 481,
                "name": "Independent Study II",
                "number": "449",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 52,
                    "name": "FMAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 482,
                "name": "Antennas",
                "number": "456",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 483,
                "name": "Image I",
                "number": "338",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 484,
                "name": "Sound I",
                "number": "340",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 485,
                "name": "Writing for Film I",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 486,
                "name": "Image II",
                "number": "438",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 487,
                "name": "Professional Internship I",
                "number": "446",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 488,
                "name": "Telecommunication Networks",
                "number": "463",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 489,
                "name": "Independent Study I",
                "number": "448",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 490,
                "name": "Introduction to Optical Communication Systems",
                "number": "466",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 491,
                "name": "Independent Study II",
                "number": "449",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 492,
                "name": "Advanced Project Internship I",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 493,
                "name": "Linear Systems",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 494,
                "name": "Advanced Project Internship II",
                "number": "452",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 495,
                "name": "METHODS IN FILM STUDIES",
                "number": "216",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 496,
                "name": "History of Animated Film",
                "number": "323",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 497,
                "name": "FILM DIRECTORS",
                "number": "331",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 498,
                "name": "Professional Internship I",
                "number": "426",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 499,
                "name": "Professional Internship II",
                "number": "427",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 500,
                "name": "Independent Study II",
                "number": "429",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 501,
                "name": "Introduction to First Peoples Studies",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 55,
                    "name": "FPST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 502,
                "name": "PROSEMINAR INDIGENOUS WAYS OF KNOWING",
                "number": "297",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 55,
                    "name": "FPST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 503,
                "name": "FIRST PEOPLES AND HEALTH",
                "number": "303",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 55,
                    "name": "FPST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 504,
                "name": "Introduction à la linguistique française I",
                "number": "400",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 56,
                    "name": "FRAA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 505,
                "name": "Histoire de la langue française au Québec",
                "number": "404",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 56,
                    "name": "FRAA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 506,
                "name": "Grammaire du français en contextes",
                "number": "410",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 56,
                    "name": "FRAA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 507,
                "name": "Grammaire de texte",
                "number": "412",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 56,
                    "name": "FRAA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 508,
                "name": "Composition and Argumentation for Engineers",
                "number": "272",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 57,
                    "name": "ENCS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 509,
                "name": "Rédaction I",
                "number": "413",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 56,
                    "name": "FRAA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 510,
                "name": "Rédaction II",
                "number": "423",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 56,
                    "name": "FRAA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 511,
                "name": "Écriture pour le Web",
                "number": "432",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 56,
                    "name": "FRAA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 512,
                "name": "Tutorat en langue, linguistique ou rédaction",
                "number": "491",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 56,
                    "name": "FRAA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 513,
                "name": "Technical Writing and Communication",
                "number": "282",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 57,
                    "name": "ENCS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 514,
                "name": "French Language: Elementary",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 515,
                "name": "French Language: Transitional Level",
                "number": "212",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 516,
                "name": "Social and Ethical Dimensions of Information and Communication Technologies",
                "number": "393",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 57,
                    "name": "ENCS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 517,
                "name": "INN.&CRITICL THKNG SCI&TECH",
                "number": "483",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 57,
                    "name": "ENCS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 518,
                "name": "Langue française : niveaux intermédiaires I et II",
                "number": "213",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 519,
                "name": "Langue française : niveau intermédiaire I",
                "number": "214",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 520,
                "name": "Fundamentals of Written Engli",
                "number": "206",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 521,
                "name": "Langue française : niveau intermédiaire II",
                "number": "215",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 522,
                "name": "Initiation au français oral",
                "number": "218",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 523,
                "name": "Initiation au français écrit",
                "number": "219",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 524,
                "name": "Correction phonétique",
                "number": "221",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 525,
                "name": "Fundamentals of Written Engli",
                "number": "207",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 526,
                "name": "Langue française : niveaux d'approfondissement I et II",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 527,
                "name": "Langue française : niveau d'approfondissement I",
                "number": "302",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 528,
                "name": "Introduction to Essay Writing",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 529,
                "name": "Communication orale",
                "number": "305",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 530,
                "name": "Communication écrite",
                "number": "306",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 531,
                "name": "English Compositi",
                "number": "212",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 532,
                "name": "Le français des affaires I",
                "number": "318",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 533,
                "name": "Le vocabulaire français",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 534,
                "name": "Grammaire fonctionnelle du français",
                "number": "321",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 58,
                    "name": "FRAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 535,
                "name": "Méthodologie de la traduction",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 536,
                "name": "English Compositi",
                "number": "213",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 537,
                "name": "Le français en contact avec l'anglais au Québec",
                "number": "204",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 538,
                "name": "Traduction littéraire de l'anglais au français",
                "number": "304",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 539,
                "name": "Grammar, Usage, and Style",
                "number": "214",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 540,
                "name": "Initiation à la traduction économique de l'anglais au français",
                "number": "306",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 541,
                "name": "Writing for Diverse Audiences",
                "number": "216",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 542,
                "name": "Initiation à la recherche documentaire et terminologique",
                "number": "310",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 543,
                "name": "The Creative Process",
                "number": "224",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 544,
                "name": "Traduction scientifique et technique du français à l'anglais",
                "number": "403",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 545,
                "name": "Traduction commerciale et juridique de l'anglais au français",
                "number": "406",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 546,
                "name": "Révision et correction en traduction",
                "number": "409",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 547,
                "name": "Révision et correction en traduction",
                "number": "410",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 548,
                "name": "Short Fiction",
                "number": "235",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 549,
                "name": "Quebec/Montreal Writing in English",
                "number": "244",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 550,
                "name": "Science Fiction",
                "number": "246",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 551,
                "name": "Informatique et traduction",
                "number": "416",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 552,
                "name": "Stage de formation : de l'anglais au français",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 553,
                "name": "Children's Literature",
                "number": "249",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 554,
                "name": "Stage de formation : du français à l'anglais",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 555,
                "name": "Forms of Popular Writing",
                "number": "250",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 556,
                "name": "Stage de formation : de l'anglais au français I",
                "number": "422",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 557,
                "name": "The Graphic Novel",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 558,
                "name": "Stage de formation : du français à l'anglais I",
                "number": "423",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 559,
                "name": "Stage de formation : de l'anglais au français II",
                "number": "424",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 560,
                "name": "Stage de formation : du français à l'anglais II",
                "number": "425",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 561,
                "name": "Gestion de projets",
                "number": "455",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 562,
                "name": "Introduction to Literary Study",
                "number": "260",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 563,
                "name": "Tutorat en traduction",
                "number": "492",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 564,
                "name": "British Literature to 1660",
                "number": "261",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 565,
                "name": "British Literature from 1660 to 1900",
                "number": "262",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 566,
                "name": "Professional Practice and Responsibility",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 567,
                "name": "Sustainable Development and Environmental Stewardship",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 568,
                "name": "Engineering Industrial Experience Reflective Learning II",
                "number": "208",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 569,
                "name": "Applied Ordinary Differential Equations",
                "number": "213",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 570,
                "name": "The Human Environment: Place, Space, and Identity",
                "number": "220",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 571,
                "name": "The Natural Environment: Air and Water",
                "number": "272",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 572,
                "name": "The Natural Environment: Land and Life",
                "number": "274",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 573,
                "name": "Urban Transportation",
                "number": "333",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 574,
                "name": "Research Design and Qualitative Methods",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 575,
                "name": "Geographic Information Systems",
                "number": "363",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 576,
                "name": "The Climate System",
                "number": "378",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 577,
                "name": "URB PLAN-DEVELOPING WORLD",
                "number": "431",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 578,
                "name": "Applied Advanced Calculus",
                "number": "233",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 579,
                "name": "Sustainable Forest Management",
                "number": "474",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 580,
                "name": "Water Resource Management",
                "number": "475",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 581,
                "name": "Statics",
                "number": "242",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 582,
                "name": "Introduction to the Earth",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 61,
                    "name": "GEOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 583,
                "name": "Introductory German: Intensive Course",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 62,
                    "name": "GERM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 584,
                "name": "Introductory German I",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 62,
                    "name": "GERM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 585,
                "name": "Introductory German II",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 62,
                    "name": "GERM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 586,
                "name": "Intermediate German I",
                "number": "241",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 62,
                    "name": "GERM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 587,
                "name": "Advanced Grammar and Composition I",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 62,
                    "name": "GERM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 588,
                "name": "Introduction to Recording I",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 589,
                "name": "Historical and Philosophical Foundations of Early Childhood and Elementary Education",
                "number": "260",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 590,
                "name": "Independent Study in Exercise Science",
                "number": "492",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 43,
                    "name": "EXCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 591,
                "name": "Littérature et culture françaises du Moyen Âge au XVIIe siècle",
                "number": "300",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 592,
                "name": "Independent Study I",
                "number": "428",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 593,
                "name": "Undergraduate Aerospace Industry Project I",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 34,
                    "name": "IADI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 594,
                "name": "Introduction to Canadian Irish Studies",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 63,
                    "name": "IRST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 595,
                "name": "IRISH PLAYS",
                "number": "344",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 63,
                    "name": "IRST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 596,
                "name": "Introductory Italian: Intensive Course",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 597,
                "name": "Introductory Italian I",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 598,
                "name": "Introductory Italian II",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 599,
                "name": "Italian for Heritage Speakers I",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 600,
                "name": "Intermediate Italian: Intensive Course",
                "number": "240",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 601,
                "name": "Intermediate Italian I",
                "number": "241",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 602,
                "name": "Advanced Grammar and Writing I",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 603,
                "name": "Honours Essay Tutorial",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 604,
                "name": "JAZZ AURAL PERCEPTION I",
                "number": "209",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 65,
                    "name": "JAZZ"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 605,
                "name": "JAZZ AURAL PERCEPTION III",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 65,
                    "name": "JAZZ"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 606,
                "name": "Independent Study I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 65,
                    "name": "JAZZ"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 607,
                "name": "Independent Study II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 65,
                    "name": "JAZZ"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 608,
                "name": "Principles of Journalistic Thought and Practice",
                "number": "205",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 609,
                "name": "Contemporary News Media",
                "number": "215",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 610,
                "name": "Research Methods for Journalism",
                "number": "302",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 611,
                "name": "Copy-Editing and Layout",
                "number": "309",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 612,
                "name": "Law and Ethics in Journalism",
                "number": "316",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 613,
                "name": "Video Journalism",
                "number": "321",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 614,
                "name": "Photojournalism",
                "number": "366",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 615,
                "name": "Magazine Writing",
                "number": "404",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 616,
                "name": "Advanced Television Journalism",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 617,
                "name": "Multi-Platform Journalism",
                "number": "428",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 618,
                "name": "Critical Approaches to Journalism",
                "number": "444",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 619,
                "name": "Journalism Practicum",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 620,
                "name": "Independent Study",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 621,
                "name": "Independent Study I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 67,
                    "name": "JPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 622,
                "name": "Independent Study II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 67,
                    "name": "JPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 623,
                "name": "Introduction to Linguistic Science",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 624,
                "name": "Language and Mind: The Chomskyan Program",
                "number": "222",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 625,
                "name": "Sociolinguistics",
                "number": "300",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 626,
                "name": "Semantics",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 627,
                "name": "Comparative Indo-European Linguistics",
                "number": "336",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 628,
                "name": "Phonological Analysis",
                "number": "373",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 629,
                "name": "Non-Indo-European Structures",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 630,
                "name": "ENV. ISSUES & ECO. JUSTICE",
                "number": "240",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 69,
                    "name": "LOYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 631,
                "name": "Biodiversity on Earth",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 69,
                    "name": "LOYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 632,
                "name": "Culture and Communication",
                "number": "340",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 69,
                    "name": "LOYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 633,
                "name": "Introduction to Business and Management",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 634,
                "name": "Human Behaviour in Organizations",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 635,
                "name": "Business Law",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 636,
                "name": "Entrepreneurship: Launching Your Business",
                "number": "300",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 637,
                "name": "Organization Theory and Design",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 638,
                "name": "Negotiation and Conflict Resolution",
                "number": "343",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 639,
                "name": "Human Resource Management",
                "number": "362",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 640,
                "name": "Industrial Relations and Collective Bargaining",
                "number": "366",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 641,
                "name": "Business and Sustainability",
                "number": "369",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 642,
                "name": "SUSTAINABLE MANAGEMENT",
                "number": "374",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 643,
                "name": "Management Research for Decision Making",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 644,
                "name": "Compensation and Benefits Management",
                "number": "443",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 645,
                "name": "Training and Development",
                "number": "444",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 646,
                "name": "Health and Safety Management",
                "number": "445",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 647,
                "name": "Workplace Planning and Staffing",
                "number": "446",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 648,
                "name": "Strategic Human Resource Management",
                "number": "463",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 649,
                "name": "MGMT. OF MULTINATIONAL CORPS",
                "number": "466",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 650,
                "name": "Entrepreneurial Company Law",
                "number": "478",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 651,
                "name": "Employment Law",
                "number": "479",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 652,
                "name": "Entrepreneurial Family Business",
                "number": "480",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 653,
                "name": "INTERNATIONAL BUSINESS LAW",
                "number": "493",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 654,
                "name": "Introduction to Marketing",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 655,
                "name": "Marketing Management II",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 656,
                "name": "Marketing Research",
                "number": "302",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 657,
                "name": "Consumer Behaviour",
                "number": "305",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 658,
                "name": "Marketing of Services",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 659,
                "name": "e-Marketing",
                "number": "452",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 660,
                "name": "Marketing Communications",
                "number": "453",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 661,
                "name": "Personal Selling",
                "number": "454",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 662,
                "name": "Marketing Channels",
                "number": "457",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 663,
                "name": "(also listed as IBUS 462) Environment of World Business",
                "number": "462",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 664,
                "name": "Retailing",
                "number": "463",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 665,
                "name": "(also listed as IBUS 465) International Marketing Management",
                "number": "465",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 666,
                "name": "Business-to-Business Marketing",
                "number": "485",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 667,
                "name": "Product Strategy and Innovation",
                "number": "486",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 668,
                "name": "CROSS-CULTURAL COMMUN & MGMT",
                "number": "492",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 669,
                "name": "Strategic Marketing Planning",
                "number": "495",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 670,
                "name": "Calculus and Linear Algebra",
                "number": "214",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 671,
                "name": "Introduction to Mathematical Thinking",
                "number": "217",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 672,
                "name": "Multivariable Calculus I",
                "number": "218",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 673,
                "name": "Multivariable Calculus II",
                "number": "219",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 674,
                "name": "Applied Probability",
                "number": "221",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 675,
                "name": "Mathematics with Computer Algebra",
                "number": "232",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 676,
                "name": "Linear Algebra and Applications I",
                "number": "234",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 677,
                "name": "Differential Equations",
                "number": "330",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 678,
                "name": "Mathematical Modelling",
                "number": "331",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 679,
                "name": "Numerical Analysis",
                "number": "334",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 72,
                    "name": "MAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 680,
                "name": "Fundamental Concepts of Algebra",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 681,
                "name": "Elementary Functions",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 682,
                "name": "College Algebra",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 683,
                "name": "Differential and Integral Calculus I",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 684,
                "name": "Vectors and Matrices",
                "number": "204",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 685,
                "name": "Differential and Integral Calculus II",
                "number": "205",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 686,
                "name": "Algebra and Functions",
                "number": "206",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 687,
                "name": "Fundamental Mathematics I",
                "number": "208",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 688,
                "name": "Fundamental Mathematics II",
                "number": "209",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 689,
                "name": "Linear Algebra I",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 690,
                "name": "Advanced Calculus I",
                "number": "264",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 691,
                "name": "Advanced Calculus II",
                "number": "265",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 692,
                "name": "COMBINATORICS",
                "number": "339",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 693,
                "name": "Numerical Analysis",
                "number": "354",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 694,
                "name": "Analysis I",
                "number": "364",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 695,
                "name": "Ordinary Differential Equations",
                "number": "370",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 696,
                "name": "Honours Project in Pure and Applied Mathematics",
                "number": "496",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 697,
                "name": "Introduction to Modern Chinese II",
                "number": "206",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 74,
                    "name": "MCHI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 698,
                "name": "INTERM. MDRN CHINESE I",
                "number": "240",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 74,
                    "name": "MCHI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 699,
                "name": "Introduction to Modern Chinese Literature",
                "number": "310",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 74,
                    "name": "MCHI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 700,
                "name": "Mechanical Engineering Drawing",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 701,
                "name": "Programming for Mechanical and Industrial Engineers",
                "number": "215",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 702,
                "name": "Materials Science",
                "number": "221",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 703,
                "name": "Manufacturing Processes",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 704,
                "name": "Machine Drawing and Design",
                "number": "313",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 705,
                "name": "Theory of Machines",
                "number": "343",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 706,
                "name": "Machine Element Design",
                "number": "344",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 707,
                "name": "Heat Transfer I",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 708,
                "name": "Fluid Mechanics II",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 709,
                "name": "Electronics for Mechanical Engineers",
                "number": "368",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 710,
                "name": "Modelling, Simulation and Control Systems",
                "number": "370",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 711,
                "name": "Analysis and Design of Control Systems",
                "number": "371",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 712,
                "name": "Mechanical Vibrations",
                "number": "375",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 713,
                "name": "Mechanical Engineering Design Project",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 714,
                "name": "Instrumentation and Measurements",
                "number": "411",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 715,
                "name": "Computer?Aided Mechanical Design",
                "number": "412",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 716,
                "name": "Advanced Programming for Mechanical and Industrial Engineers",
                "number": "415",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 717,
                "name": "Mechanical Behaviour of Polymer Composite Materials",
                "number": "422",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 718,
                "name": "Manufacturing of Composites",
                "number": "425",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 719,
                "name": "Fundamentals of Vehicle System Design",
                "number": "447",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 720,
                "name": "Gas Dynamics",
                "number": "461",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 721,
                "name": "Control System Design",
                "number": "473",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 75,
                    "name": "MECH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 722,
                "name": "MUSIC HISTORY TO 1800",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 76,
                    "name": "MHIS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 723,
                "name": "Independent Study I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 76,
                    "name": "MHIS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 724,
                "name": "Independent Study II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 76,
                    "name": "MHIS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 725,
                "name": "INDEPENDENT STUDY I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 77,
                    "name": "MPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 726,
                "name": "INDEPENDENT STUDY II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 77,
                    "name": "MPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 727,
                "name": "Aural Perception I",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 728,
                "name": "Harmony I",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 729,
                "name": "Music Composition I",
                "number": "261",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 730,
                "name": "Music Composition III",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 731,
                "name": "Music Composition V",
                "number": "461",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 732,
                "name": "INDEPENDENT STUDY I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 733,
                "name": "INDEPENDENT STUDY II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 734,
                "name": "Special Project in Music",
                "number": "491",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 735,
                "name": "Special Project in Music",
                "number": "492",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 736,
                "name": "Problems of Philosophy",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 737,
                "name": "Critical Thinking",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 738,
                "name": "Deductive Logic",
                "number": "214",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 739,
                "name": "Introduction to Ethics",
                "number": "232",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 740,
                "name": "Biomedical Ethics",
                "number": "235",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 741,
                "name": "Presocratics and Plato",
                "number": "260",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 742,
                "name": "Introduction to Epistemology",
                "number": "263",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 743,
                "name": "Introduction to Philosophy of Religion",
                "number": "266",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 744,
                "name": "Rationalism",
                "number": "360",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 745,
                "name": "Kant and 19th-Century Philosophy",
                "number": "374",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 746,
                "name": "Black?and?White Photography I",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 80,
                    "name": "PHOT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 747,
                "name": "Large Format Photography I",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 80,
                    "name": "PHOT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 748,
                "name": "Professional Internship I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 80,
                    "name": "PHOT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 749,
                "name": "Professional Internship II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 80,
                    "name": "PHOT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 750,
                "name": "Independent Study I",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 80,
                    "name": "PHOT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 751,
                "name": "Mechanics",
                "number": "204",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 752,
                "name": "Electricity and Magnetism",
                "number": "205",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 753,
                "name": "Waves and Modern Physics",
                "number": "206",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 754,
                "name": "Introductory Experimental Mechanics",
                "number": "224",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 755,
                "name": "Introductory Experimental Electricity",
                "number": "225",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 756,
                "name": "Introductory Experimental Waves and Modern Physics",
                "number": "226",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 757,
                "name": "Methods of Theoretical Physics I",
                "number": "232",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 758,
                "name": "Classical Mechanics",
                "number": "245",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 759,
                "name": "Electricity and Magnetism I",
                "number": "253",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 760,
                "name": "Experimental Electronics",
                "number": "290",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 761,
                "name": "Experimental Mechanics I",
                "number": "291",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 762,
                "name": "Experimental Electricity and Magnetism I",
                "number": "293",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 763,
                "name": "Thermodynamics",
                "number": "334",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 764,
                "name": "Advanced Classical Mechanics",
                "number": "345",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 765,
                "name": "Solid State Physics",
                "number": "358",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 766,
                "name": "Quantum Mechanics I",
                "number": "377",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 767,
                "name": "Experimental Atomic Physics",
                "number": "394",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 768,
                "name": "HONOURS RESEARCH PROJECT",
                "number": "496",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 769,
                "name": "Introduction to Comparative Politics",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 770,
                "name": "INTRO TO CANADIAN POLITICS",
                "number": "204",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 771,
                "name": "Introduction to International Relations",
                "number": "205",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 772,
                "name": "Introduction to Political Science Research",
                "number": "207",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 773,
                "name": "Governance and Organized Crime",
                "number": "219",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 774,
                "name": "INTRO TO LAW & SOCIETY",
                "number": "285",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 775,
                "name": "International Political Economy",
                "number": "305",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 776,
                "name": "Politics of the U.S.",
                "number": "310",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 777,
                "name": "Political Participation in Canada",
                "number": "334",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 778,
                "name": "(also listed as SCPA 339) Quebec Politics and Society/ La vie politique quebecoise",
                "number": "339",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 779,
                "name": "Late Modern Political Philosophy",
                "number": "373",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 780,
                "name": "Politics of Latin America",
                "number": "379",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 781,
                "name": "ADVANCED EMPIRICAL RESEARCH METHODS",
                "number": "393",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 782,
                "name": "Politics of the Middle East",
                "number": "395",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 783,
                "name": "AUTHORS OF POL IMAGINATION",
                "number": "414",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 784,
                "name": "Government and Business in Canada",
                "number": "463",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 785,
                "name": "Intaglio I",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 786,
                "name": "Screen Printing I",
                "number": "231",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 787,
                "name": "Screen Printing II",
                "number": "331",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 788,
                "name": "Screen Printing III",
                "number": "431",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 789,
                "name": "Independent Study in Print Media II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 790,
                "name": "Professional Internship",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 791,
                "name": "Introductory Psychology",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 792,
                "name": "Adolescence",
                "number": "233",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 793,
                "name": "Stress, Health, and Coping",
                "number": "241",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 794,
                "name": "Learning Disabilities",
                "number": "243",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 795,
                "name": "History and Systems",
                "number": "305",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 796,
                "name": "Research Methods and Designs I",
                "number": "310",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 797,
                "name": "Research Methods and Designs II",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 798,
                "name": "Statistical Analysis I",
                "number": "315",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 799,
                "name": "Statistical Analysis II",
                "number": "316",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 800,
                "name": "Fundamentals of Personality",
                "number": "321",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 801,
                "name": "Fundamentals of Social Psychology",
                "number": "325",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 802,
                "name": "Fundamentals of Lifespan Development",
                "number": "333",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 803,
                "name": "Fundamentals of Psychopathology",
                "number": "340",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 804,
                "name": "Fundamentals of Learning",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 805,
                "name": "Fundamentals of Behavioural Neurobiology",
                "number": "355",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 806,
                "name": "Fundamentals of Sensation and Perception",
                "number": "363",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 807,
                "name": "Fundamentals of Cognition",
                "number": "364",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 808,
                "name": "Directed Research in Psychology",
                "number": "387",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 809,
                "name": "The Self in Social Context",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 810,
                "name": "Emotion",
                "number": "423",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 811,
                "name": "Psychometrics and Individual Differences",
                "number": "426",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 812,
                "name": "Childhood Development",
                "number": "432",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 813,
                "name": "Adolescent Development",
                "number": "433",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 814,
                "name": "Developmental Psychopathology",
                "number": "435",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 815,
                "name": "Psychopathology: Behaviour Regulation Disorders",
                "number": "442",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 816,
                "name": "Hypnosis and Dissociation",
                "number": "444",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 817,
                "name": "Human Neuropsychology",
                "number": "445",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 818,
                "name": "Neurobiology of Drug Abuse and Addiction",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 819,
                "name": "Cognitive Development",
                "number": "466",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 820,
                "name": "Advanced Directed Research in Psychology",
                "number": "487",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 821,
                "name": "Honours Seminar Topics",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 822,
                "name": "Independent Study I",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 85,
                    "name": "PTNG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 823,
                "name": "Independent Study II",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 85,
                    "name": "PTNG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 824,
                "name": "Introduction to Judaism",
                "number": "220",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 825,
                "name": "Introduction to Christianity",
                "number": "223",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 826,
                "name": "Introduction to Islam",
                "number": "224",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 827,
                "name": "Introduction to Hinduism",
                "number": "225",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 828,
                "name": "History of Satan: Evil Personified in Judaism and Christianity",
                "number": "394",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 829,
                "name": "Honours Thesis",
                "number": "410",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 830,
                "name": "Directed and Independent Study I",
                "number": "290",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 87,
                    "name": "SCOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 831,
                "name": "Directed and Independent Study II",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 87,
                    "name": "SCOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 832,
                "name": "Directed and Independent Study III",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 87,
                    "name": "SCOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 833,
                "name": "Management Science Models for Operations Management",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 88,
                    "name": "SCOM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 834,
                "name": "Product Design and Business Process Re-Engineering",
                "number": "363",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 88,
                    "name": "SCOM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 835,
                "name": "Supply Chain Planning and Control",
                "number": "372",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 88,
                    "name": "SCOM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 836,
                "name": "Supply Chain Logistics",
                "number": "374",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 88,
                    "name": "SCOM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 837,
                "name": "Supply Chain Simulation",
                "number": "492",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 88,
                    "name": "SCOM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 838,
                "name": "Supply Chain Project",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 88,
                    "name": "SCOM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 839,
                "name": "Introduction to Public Policy and the Public Interest",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 89,
                    "name": "SCPA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 840,
                "name": "INTRO TO CANADIAN POLITICS",
                "number": "204",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 89,
                    "name": "SCPA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 841,
                "name": "Economics for Public Policy and Community Development",
                "number": "215",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 89,
                    "name": "SCPA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 842,
                "name": "Internship",
                "number": "411",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 89,
                    "name": "SCPA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 843,
                "name": "Neo-Liberal Globalization and the Global Justice Movement",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 89,
                    "name": "SCPA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 844,
                "name": "Digital Sculpture",
                "number": "396",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 90,
                    "name": "SCUL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 845,
                "name": "Independent Study I",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 90,
                    "name": "SCUL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 846,
                "name": "Independent Study II",
                "number": "452",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 90,
                    "name": "SCUL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 847,
                "name": "Statistics I",
                "number": "212",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 848,
                "name": "Statistics II",
                "number": "213",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 849,
                "name": "Sociology Through Film",
                "number": "225",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 850,
                "name": "Social Problems",
                "number": "261",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 851,
                "name": "Social Deviance",
                "number": "262",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 852,
                "name": "GENDER AND SOCIETY",
                "number": "276",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 853,
                "name": "Research Methods",
                "number": "310",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 854,
                "name": "ECONOMIC TRANSFORMATION IN CAPITALIST SOCIETY",
                "number": "323",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 855,
                "name": "Political Sociology",
                "number": "333",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 856,
                "name": "Sociology of the Media",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 857,
                "name": "The History and Sociology of Genocide to 1945",
                "number": "366",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 858,
                "name": "Social Construction of Sexualities",
                "number": "375",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 859,
                "name": "CONTEMPORARY SOCIOLOGICAL THEORY",
                "number": "402",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 860,
                "name": "Contemporary Cultural Theory",
                "number": "403",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 861,
                "name": "Sociology of Literature",
                "number": "404",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 862,
                "name": "MATERIAL CULTURE",
                "number": "441",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 863,
                "name": "Web Programming",
                "number": "287",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 92,
                    "name": "SOEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 864,
                "name": "Information Systems Security",
                "number": "321",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 92,
                    "name": "SOEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 865,
                "name": "Software Process",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 92,
                    "name": "SOEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 866,
                "name": "Software Requirements and Specifications",
                "number": "342",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 92,
                    "name": "SOEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 867,
                "name": "Software Architecture and Design I",
                "number": "343",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 92,
                    "name": "SOEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 868,
                "name": "Management, Measurement and Quality Control",
                "number": "384",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 92,
                    "name": "SOEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 869,
                "name": "Web-Based Enterprise Application Design",
                "number": "387",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 92,
                    "name": "SOEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 870,
                "name": "Embedded Systems and Software",
                "number": "422",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 92,
                    "name": "SOEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 871,
                "name": "Distributed Systems",
                "number": "423",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 92,
                    "name": "SOEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 872,
                "name": "Introductory Spanish: Intensive Course",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 873,
                "name": "Introductory Spanish I",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 874,
                "name": "Introductory Spanish II",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 875,
                "name": "Intermediate Spanish: Intensive Course",
                "number": "240",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 876,
                "name": "Intermediate Spanish I",
                "number": "241",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 877,
                "name": "Grammar and the Process of Writing I",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 878,
                "name": "Critical Reading of Hispanic Texts",
                "number": "303",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 879,
                "name": "Communicative Strategies and Oral Communication for Non-Native Speakers",
                "number": "305",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 880,
                "name": "Introduction to Translation",
                "number": "306",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 881,
                "name": "Conquest and Empire: Spanish Literature from the 12th to the 17th Centuries",
                "number": "310",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 882,
                "name": "Defining Difference in Spanish America: Literature from 1500 to 1880",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 883,
                "name": "The History of Spanish Culture",
                "number": "365",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 884,
                "name": "Probability I",
                "number": "249",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 94,
                    "name": "STAT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 885,
                "name": "Statistics",
                "number": "250",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 94,
                    "name": "STAT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 886,
                "name": "Probability II",
                "number": "349",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 94,
                    "name": "STAT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 887,
                "name": "Linear Models",
                "number": "360",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 94,
                    "name": "STAT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 888,
                "name": "Honours Project in Statistics",
                "number": "499",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 94,
                    "name": "STAT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 889,
                "name": "Modern English Grammar",
                "number": "231",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 890,
                "name": "English Grammar",
                "number": "232",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 891,
                "name": "Methodology I",
                "number": "324",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 892,
                "name": "TESL Pedagogy: General",
                "number": "326",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 893,
                "name": "Computers in Language Learning",
                "number": "330",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 894,
                "name": "Language Acquisition",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 895,
                "name": "PEDAGOGY: PRIMARY",
                "number": "426",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 896,
                "name": "Pedagogy: Secondary",
                "number": "427",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 897,
                "name": "Internship: Primary I",
                "number": "466",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 898,
                "name": "Internship: Secondary I",
                "number": "467",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 899,
                "name": "Teaching Language Arts: Secondary",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 900,
                "name": "Introduction to Theological Studies",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 901,
                "name": "Introduction to Biblical Studies",
                "number": "202",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 902,
                "name": "Introduction to Christian Origins",
                "number": "206",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 903,
                "name": "Theology and Myth",
                "number": "226",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 904,
                "name": "Theology in Film",
                "number": "238",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 905,
                "name": "HISTORY OF CHRISTIANITY: THE MEDIEVAL PERIOD",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 906,
                "name": "Honours Tutorial",
                "number": "410",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 907,
                "name": "Honours Essay",
                "number": "460",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 908,
                "name": "Planning",
                "number": "240",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 97,
                    "name": "URBS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 909,
                "name": "Geographic Information Systems",
                "number": "335",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 97,
                    "name": "URBS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 910,
                "name": "Urban Ecology",
                "number": "338",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 97,
                    "name": "URBS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 911,
                "name": "Reading the Urban Form",
                "number": "460",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 97,
                    "name": "URBS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 912,
                "name": "Impact Assessment",
                "number": "480",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 97,
                    "name": "URBS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 913,
                "name": "Introduction to Historical Perspectives in Women's Studies",
                "number": "290",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 98,
                    "name": "WSDB"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 914,
                "name": "Feminist Thought I",
                "number": "380",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 98,
                    "name": "WSDB"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 915,
                "name": "Professional Internship II",
                "number": "447",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 916,
                "name": "HONOURS PROJECT",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 917,
                "name": "Feminist Perspectives on Culture",
                "number": "491",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 98,
                    "name": "WSDB"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 918,
                "name": "TOPICS IN MEDIA/TECHNOLOGY",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 8,
                    "name": "ARTE"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 919,
                "name": "SPECIAL TOPICS IN CART",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 920,
                "name": "SPECIAL TOPICS IN DESIGN",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 921,
                "name": "SPECIAL TOPICS IN DANCE",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 32,
                    "name": "DANC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 922,
                "name": "PRIVATE STUDY I",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 77,
                    "name": "MPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 923,
                "name": "SPECIAL TOPICS IN FINE ARTS",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 99,
                    "name": "FFAR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 924,
                "name": "SPECIAL TOPICS IN CERAMICS",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 20,
                    "name": "CERA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 925,
                "name": "SPECIAL TOPICS IN PHOTO",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 80,
                    "name": "PHOT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 926,
                "name": "SPECIAL TOPICS IN SCULPTURE",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 90,
                    "name": "SCUL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 927,
                "name": "Introduction to Modern Chinese I",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 74,
                    "name": "MCHI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 928,
                "name": "Introduction to Modern Standard Arabic I",
                "number": "200",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 100,
                    "name": "MARA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 929,
                "name": "ADV.STUDIES CREATIVE WRITING",
                "number": "429",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 930,
                "name": "SEL TOPICS IN LOYC",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 69,
                    "name": "LOYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 931,
                "name": "SELECTED TOPICS IN ECONOMICS",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 932,
                "name": "ADVANCED TOPICS IN ECONOMICS",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 933,
                "name": "Literary Production:  Curating & Archiving the Literary Event",
                "number": "415",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 934,
                "name": "The Religious Imagination",
                "number": "209",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 935,
                "name": "Sanskrit",
                "number": "330",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 936,
                "name": "ADVANCED SYNTAX",
                "number": "415",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 937,
                "name": "History of Linguistics",
                "number": "475",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 938,
                "name": "Introduction to the Philosophy of Science",
                "number": "220",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 939,
                "name": "VIDEO GAMES AND/AS LITERATURE",
                "number": "255",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 940,
                "name": "FEMINIST PERSPECTIVES ON PEACE",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 98,
                    "name": "WSDB"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 941,
                "name": "Sociology of Health, Illness and Medicine",
                "number": "321",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 942,
                "name": "Public Affairs Strategies",
                "number": "321",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 89,
                    "name": "SCPA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 943,
                "name": "Traduction littéraire du français à l'anglais",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 944,
                "name": "Food and Sustainability",
                "number": "384",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 945,
                "name": "Food and Sustainability",
                "number": "384",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 946,
                "name": "SELECTED TOPICS IN ENGLISH",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 947,
                "name": "STUDIES IN IRISH LITERATURE",
                "number": "359",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 948,
                "name": "History of Anthropological Thought",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 949,
                "name": "SEMINAR COURSE",
                "number": "299",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 950,
                "name": "SEMINAR COURSE",
                "number": "499",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 27,
                    "name": "COMM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 951,
                "name": "SEMINAR IN FINANCE",
                "number": "455",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 952,
                "name": "Philosophy of Human Rights",
                "number": "241",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 953,
                "name": "JAZZ PRIVATE STUDY I",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 67,
                    "name": "JPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 954,
                "name": "JAZZ PRIVATE STUDY II",
                "number": "252",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 67,
                    "name": "JPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 955,
                "name": "JAZZ PRIVATE STUDY III",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 67,
                    "name": "JPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 956,
                "name": "Highlights of Irish Literature",
                "number": "209",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 63,
                    "name": "IRST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 957,
                "name": "JAZZ PRIVATE STUDY IV",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 67,
                    "name": "JPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 958,
                "name": "SPEC TOP/CDN IRISH STUDIES",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 63,
                    "name": "IRST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 959,
                "name": "JAZZ PRIVATE STUDY VI",
                "number": "452",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 67,
                    "name": "JPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 960,
                "name": "LAW AND SOCIETY",
                "number": "363",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 961,
                "name": "LAW AND SOCIETY",
                "number": "363",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 962,
                "name": "COMM. MEDIA: ADV. TOPICS",
                "number": "493",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 963,
                "name": "The Irish Short Story Tradition",
                "number": "356",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 964,
                "name": "ADVANCED TOPICS IN SOCIOLOGY & ANTHROPOLOGY",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 965,
                "name": "Digital Systems Design I",
                "number": "212",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 966,
                "name": "History of South Asia",
                "number": "261",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 967,
                "name": "PRIVATE STUDY II",
                "number": "252",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 77,
                    "name": "MPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 968,
                "name": "Computer Architecture and Design",
                "number": "316",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 969,
                "name": "JAZZ PRIVATE STUDY V",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 67,
                    "name": "JPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 970,
                "name": "PRIVATE STUDY III",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 77,
                    "name": "MPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 971,
                "name": "PRIVATE STUDY IV",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 77,
                    "name": "MPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 972,
                "name": "PRIVATE STUDY V",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 77,
                    "name": "MPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 973,
                "name": "PRIVATE STUDY VI",
                "number": "452",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 77,
                    "name": "MPER"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 974,
                "name": "First Peoples of Canada",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 55,
                    "name": "FPST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 975,
                "name": "Rise and Fall of Yugoslavia",
                "number": "344",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 976,
                "name": "Introductory Ancient Greek I",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 977,
                "name": "Introductory Latin I",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 978,
                "name": "Introduction to Greek Archaeology",
                "number": "260",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 979,
                "name": "Archaeology of Archaic Greece",
                "number": "363",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 980,
                "name": "Honours Thesis",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 981,
                "name": "Fundamentals of Applied Electromagnetics",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 982,
                "name": "GLOBALIZATION-INDIGE PEOPLES",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 55,
                    "name": "FPST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 983,
                "name": "First Peoples Contemporary Social Issues",
                "number": "402",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 55,
                    "name": "FPST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 984,
                "name": "International Institutions",
                "number": "404",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 985,
                "name": "Late Victorian and Edwardian Writing",
                "number": "336",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 986,
                "name": "Complex Analysis I",
                "number": "366",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 987,
                "name": "Abstract Algebra I",
                "number": "369",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 988,
                "name": "Real Analysis",
                "number": "464",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 989,
                "name": "INTRO TO LAW & SOCIETY",
                "number": "285",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 990,
                "name": "Nanochemistry",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 991,
                "name": "ALGONQUIAN PEOPLES",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 55,
                    "name": "FPST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 992,
                "name": "Fundamentals of Child- and Youth-Care Work",
                "number": "322",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 993,
                "name": "CREATIVE WRITING:PLAYWRITING",
                "number": "344",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 994,
                "name": "PARLIAMENT AND THE CHARTER",
                "number": "324",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 995,
                "name": "SPECIAL TOPICS IN COMP POLI:",
                "number": "313",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 996,
                "name": "Religious Pluralism in a Secular Culture",
                "number": "233",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 997,
                "name": "ADVANCED SEMINAR IN COMPARATIVE POLITICS",
                "number": "487",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 998,
                "name": "ADVANCED TOPICS IN PHIL",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 999,
                "name": "Mathematical and Computational Finance II",
                "number": "402",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 101,
                    "name": "MACF"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1000,
                "name": "(also listed as SOCI 366) The History and Sociology of Genocide to 1945",
                "number": "359",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1001,
                "name": "Marxism",
                "number": "385",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1002,
                "name": "Foundations of Animal Behaviour",
                "number": "457",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1003,
                "name": "ADVANCED TOPICS IN BIOLOGY",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1004,
                "name": "Field Ecology",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1005,
                "name": "HISTORY OF JAPAN",
                "number": "263",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1006,
                "name": "History of Russia 1694-1917",
                "number": "377",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1007,
                "name": "History of Haiti:  From Independence to Present",
                "number": "334",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1008,
                "name": "Elementary Number Theory",
                "number": "392",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1009,
                "name": "Global Environmental Issues",
                "number": "204",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1010,
                "name": "Social Inequalities",
                "number": "331",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1011,
                "name": "Resource Analysis and Management",
                "number": "355",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1012,
                "name": "Functional Genomics",
                "number": "482",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1013,
                "name": "SELECTED TOPICS IN HISTORY",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1014,
                "name": "Advanced Geographic Information Systems",
                "number": "463",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1015,
                "name": "History of the United States to the Civil War Era",
                "number": "251",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 102,
                    "name": "HISW"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1016,
                "name": "Urban Agriculture",
                "number": "337",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 97,
                    "name": "URBS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1017,
                "name": "History of Latin America:  The Colonial Period",
                "number": "276",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 102,
                    "name": "HISW"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1018,
                "name": "URB PLAN-DEVELOPING WORLD",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 97,
                    "name": "URBS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1019,
                "name": "Capstone Recording Project I",
                "number": "465",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1020,
                "name": "Studies in 20th?Century Art and Architecture",
                "number": "367",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1021,
                "name": "Issues in Contemporary Canadian Art",
                "number": "373",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1022,
                "name": "SPEC.TOPICS IN ART & SOCIETY",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1023,
                "name": "Advanced Seminar in Art Historical Method",
                "number": "400",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1024,
                "name": "Art History and Archaeology",
                "number": "290",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1025,
                "name": "Studies in Ancient Roman Art and Architecture",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1026,
                "name": "STUDIES/MATERIALS-PROCESSES",
                "number": "356",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1027,
                "name": "ADV. SEM. HIST. ART & ARCH.",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1028,
                "name": "Introduction to Digital Media and Electronic Arts",
                "number": "220",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1029,
                "name": "Electronic Arts Workshop",
                "number": "321",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1030,
                "name": "Intermedia and Interventionist Performance Practices",
                "number": "331",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 36,
                    "name": "IMCA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1031,
                "name": "Digital Photography II",
                "number": "332",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 80,
                    "name": "PHOT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1032,
                "name": "Processes in Digital Print Media I",
                "number": "241",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1033,
                "name": "The Artist`s Book as Object",
                "number": "365",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1034,
                "name": "Introduction to Contemporary Concerns in Women's Studies",
                "number": "291",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 98,
                    "name": "WSDB"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1035,
                "name": "SELECTED TOPICS IN POLI SCI:",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1036,
                "name": "Project Management",
                "number": "480",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 17,
                    "name": "BTM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1037,
                "name": "Introduction to Food Studies: We are What We Eat",
                "number": "254",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 99,
                    "name": "FFAR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1038,
                "name": "Quebec to 1867",
                "number": "209",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1039,
                "name": "Capstone Project Seminar II",
                "number": "462",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1040,
                "name": "Object-Oriented Programming I",
                "number": "248",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1041,
                "name": "Object-Oriented Programming II",
                "number": "249",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 28,
                    "name": "COMP"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1042,
                "name": "English-Canadian Film",
                "number": "214",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1043,
                "name": "ADV. SEMINAR IN ART & FILM",
                "number": "448",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1044,
                "name": "Fluid Mechanics I",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 24,
                    "name": "ENGR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1045,
                "name": "Testing, Evaluation and Course Design",
                "number": "415",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 95,
                    "name": "TESL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1046,
                "name": "EGYPTIAN ARCHAEOLOGY",
                "number": "264",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1047,
                "name": "Montage I",
                "number": "339",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1048,
                "name": "Internship IV: Primary Teaching",
                "number": "493",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1049,
                "name": "Primary Teaching Seminar",
                "number": "494",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1050,
                "name": "Internship II: Observation and Evaluation in Education",
                "number": "297",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1051,
                "name": "Critical Reading",
                "number": "233",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1052,
                "name": "Music Composition II",
                "number": "262",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1053,
                "name": "Music Composition IV",
                "number": "362",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1054,
                "name": "Music Composition VI",
                "number": "462",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1055,
                "name": "INTERNSHIP IN GEOGRAPHY",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1056,
                "name": "ENT RES PLNG&INFO TECH INTG",
                "number": "430",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 17,
                    "name": "BTM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1057,
                "name": "STUDIES IN GREEK LIT: PROSE",
                "number": "410",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1058,
                "name": "JAZZ STUDIES CAPSTONE SEMINAR AND PROJECT",
                "number": "400",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 65,
                    "name": "JAZZ"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1059,
                "name": "ADV TOPICS/URBAN STUDIES",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 97,
                    "name": "URBS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1060,
                "name": "TOPICS/PURE & APPLIED MATH",
                "number": "494",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1061,
                "name": "Littératures et cultures de la Francophonie",
                "number": "308",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1062,
                "name": "Le XIXe siècle I",
                "number": "318",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1063,
                "name": "XX E SIÈCLE I",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1064,
                "name": "SPECIAL TOPICS INT'L POLI",
                "number": "312",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1065,
                "name": "TOPICS/COMPUTER ENGINEERING",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 26,
                    "name": "COEN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1066,
                "name": "Discrete-Time Signals and Systems",
                "number": "342",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1067,
                "name": "Introduction to Digital Communications",
                "number": "367",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1068,
                "name": "History of the English Language",
                "number": "302",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1069,
                "name": "STUDIES IN 18TH C. BRIT LIT",
                "number": "326",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1070,
                "name": "STUDIES IN 19C BRITISH POETRY",
                "number": "333",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1071,
                "name": "STUDIES IN 19TH C. BR. PROSE",
                "number": "334",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1072,
                "name": "American Poetry",
                "number": "367",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1073,
                "name": "ADVANCED TOPICS IN PHYSICS",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1074,
                "name": "South Asian Literature",
                "number": "387",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1075,
                "name": "TRANSNATIONAL POLITICS",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1076,
                "name": "GENDER AND PUBLIC POLICY",
                "number": "411",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1077,
                "name": "COMPARATIVE ELECTORAL SYSTEM",
                "number": "405",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1078,
                "name": "ADV SEM INT'L REL THEORY",
                "number": "400",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1079,
                "name": "Religion and Politics",
                "number": "389",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1080,
                "name": "TOPICS IN ELECTR. ENG.",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1081,
                "name": "Introduction to Trans Studies",
                "number": "385",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 98,
                    "name": "WSDB"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1082,
                "name": "Religions of Asia",
                "number": "215",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1083,
                "name": "SELECTED TOPICS IN WS",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 98,
                    "name": "WSDB"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1084,
                "name": "Health Issues: Feminist Perspectives",
                "number": "391",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 98,
                    "name": "WSDB"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1085,
                "name": "Human Rights and International Justice",
                "number": "388",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1086,
                "name": "Politics of Africa",
                "number": "366",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1087,
                "name": "International Security",
                "number": "302",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1088,
                "name": "Biblical Studies I: The Hebrew Bible",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1089,
                "name": "Self and Other: Identity and Ethical Development",
                "number": "310",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1090,
                "name": "Religions of China",
                "number": "360",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1091,
                "name": "Religions of Tibet",
                "number": "362",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1092,
                "name": "WOMEN AND RELIGION: HINDUISM",
                "number": "384",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1093,
                "name": "Goddesses and Religious Images of Women",
                "number": "387",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1094,
                "name": "FOOD AND RELIGION",
                "number": "396",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1095,
                "name": "Seminar in Therapeutic Recreation",
                "number": "432",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1096,
                "name": "History and Ideology in Canadian Literature",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1097,
                "name": "IRISH TRD MUSIC:GLOBAL SOUND",
                "number": "270",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 63,
                    "name": "IRST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1098,
                "name": "Economic Growth and Fluctuations",
                "number": "413",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 41,
                    "name": "ECON"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1099,
                "name": "Environmental Ethics",
                "number": "236",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1100,
                "name": "Philosophy of Leisure",
                "number": "255",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1101,
                "name": "KINDS OF MINDS",
                "number": "327",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1102,
                "name": "Political Philosophy",
                "number": "342",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1103,
                "name": "ADV TOPICS/FEMINIST THEORY",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1104,
                "name": "TECHNIQUES IN ECOLOGY",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 14,
                    "name": "BIOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1105,
                "name": "HISTORY OF IRELAND",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 63,
                    "name": "IRST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1106,
                "name": "MULTIDISCIPLINARY STUDIES",
                "number": "360",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 87,
                    "name": "SCOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1107,
                "name": "SELECTED TOPICS IN ENGLISH",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1108,
                "name": "The Irish Revolution, 1913-1923",
                "number": "316",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 63,
                    "name": "IRST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1109,
                "name": "INDEPENDENT STUDIES",
                "number": "480",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1110,
                "name": "Littérature maghrébine",
                "number": "362",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 51,
                    "name": "FLIT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1111,
                "name": "THE BODY SOCIAL",
                "number": "474",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1112,
                "name": "THE BODY SOCIAL",
                "number": "474",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1113,
                "name": "Childhood and Youth",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1114,
                "name": "Introduction to German Culture",
                "number": "230",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 62,
                    "name": "GERM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1115,
                "name": "SOCIOLOGY OF EMOTIONS",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1116,
                "name": "Political Anthropology",
                "number": "423",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1117,
                "name": "SEL TOPICS IN THEO STUDIES",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1118,
                "name": "Themes in the Hebrew Bible",
                "number": "303",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1119,
                "name": "SELECTED TOPICS IN ITALIAN",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1120,
                "name": "Of German Witches, Ghosts, Daemons and Vampires",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 62,
                    "name": "GERM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1121,
                "name": "Gospels and Acts",
                "number": "315",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1122,
                "name": "SPECIAL TOPICS IN ARABIC",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 100,
                    "name": "MARA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1123,
                "name": "APPLIED SOCIAL STATISTICS",
                "number": "424",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1124,
                "name": "Art, Aesthetics, and Anthropology",
                "number": "302",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1125,
                "name": "SELECTED TOPICS IN SOCIOLOGY",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1126,
                "name": "International Indigenism",
                "number": "444",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1127,
                "name": "The History of Science: Early Modern to Contemporary",
                "number": "395",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 103,
                    "name": "LBCL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1128,
                "name": "SPEC/STUD:17C TO PRESENT",
                "number": "495",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 103,
                    "name": "LBCL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1129,
                "name": "Introduction to Christian Spirituality",
                "number": "205",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1130,
                "name": "Parent-Child Relations",
                "number": "465",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1131,
                "name": "Modern Spectroscopy",
                "number": "495",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1132,
                "name": "Haudenosaunee Peoples",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 55,
                    "name": "FPST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1133,
                "name": "(also listed as HIST 219) Ancient Near East",
                "number": "230",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1134,
                "name": "ANCIENT POLITICAL TEXTS",
                "number": "416",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1135,
                "name": "(also listed as HIST 223) Greek History from the Bronze Age to Alexander",
                "number": "240",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1136,
                "name": "Political and Social Theory and the City",
                "number": "349",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1137,
                "name": "History of Music: Ancient to Classical",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 103,
                    "name": "LBCL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1138,
                "name": "(also listed as HIST 225) History of the Roman Republic",
                "number": "242",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1139,
                "name": "(also listed as HIST 323) Greek History from Alexander to the Roman Conquest",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1140,
                "name": "Roman Art and Archaeology",
                "number": "369",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 25,
                    "name": "CLAS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1141,
                "name": "Classical Political Thought",
                "number": "306",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1142,
                "name": "ORGANOMETALLIC CHEMISTRY",
                "number": "443",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1143,
                "name": "Introduction to Western Political Theory",
                "number": "206",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1144,
                "name": "ADVANCED TOPICS IN CHEMISTRY",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1145,
                "name": "History of Canada, Pre-Confederation",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1146,
                "name": "TOPICS/BLDG ENGINEERING",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 15,
                    "name": "BLDG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1147,
                "name": "Experimental Film",
                "number": "318",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1148,
                "name": "Foreign Relations of the United States, 1945 to the Present",
                "number": "358",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1149,
                "name": "United States, 1877-1924",
                "number": "324",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1150,
                "name": "FILM & MOVING IMAGE CULTURES",
                "number": "316",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1151,
                "name": "ASPECTS OF NATIONAL CINEMAS",
                "number": "335",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1152,
                "name": "Ignatian Spirituality: Theory and Method",
                "number": "403",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1153,
                "name": "Sexual Representation in Cinema",
                "number": "391",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1154,
                "name": "Film Studies Specialization Seminar",
                "number": "450",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1155,
                "name": "Topics in Civil Engineering",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 22,
                    "name": "CIVI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1156,
                "name": "ADV. SEMINAR IN ART & FILM",
                "number": "448",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1157,
                "name": "Stories in Judaism",
                "number": "333",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1158,
                "name": "Syntactic Theory",
                "number": "315",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1159,
                "name": "LING & COGNITIVE SCIENCE",
                "number": "322",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1160,
                "name": "Introduction to Romance Linguistics",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1161,
                "name": "Morphology",
                "number": "380",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1162,
                "name": "Language Change",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1163,
                "name": "SELECTED TOPICS IN RELIGION",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1164,
                "name": "Organizational Leadership: A Human Systems Approach",
                "number": "475",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 6,
                    "name": "AHSC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1165,
                "name": "SELECTED TOPICS IN HISTORY",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1166,
                "name": "History and Public Policy",
                "number": "381",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1167,
                "name": "Introduction to Women and Religion",
                "number": "233",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1168,
                "name": "Human Rights: An Overview",
                "number": "214",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1169,
                "name": "20th-Century Continental Philosophy",
                "number": "377",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1170,
                "name": "Plato",
                "number": "480",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1171,
                "name": "Food in History",
                "number": "394",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1172,
                "name": "Cultures of Mexico, the Central American Region, and the Spanish Caribbean",
                "number": "362",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1173,
                "name": "Translation for Specific Fields",
                "number": "474",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1174,
                "name": "ADVANCED TOPICS IN ITALIAN",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1175,
                "name": "Philosophy of Language",
                "number": "416",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 79,
                    "name": "PHIL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1176,
                "name": "Introductions to Academic Writing in Italiian",
                "number": "303",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 64,
                    "name": "ITAL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1177,
                "name": "ADV STUDY IN CANADIAN HIST",
                "number": "412",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1178,
                "name": "Introduction to Chinese Cultural Traditions",
                "number": "365",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 74,
                    "name": "MCHI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1179,
                "name": "ADV STUDY IN EUROPEAN HIST",
                "number": "437",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1180,
                "name": "ADVANCED TOPICS IN HISTORY",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1181,
                "name": "Introduction to Society",
                "number": "203",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1182,
                "name": "SELECTED TOPICS IN COMS",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1183,
                "name": "Studies in Documentary",
                "number": "309",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1184,
                "name": "ADVANCED TOPICS IN RELIGION",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1185,
                "name": "Archaic Latin and the Italic Dialects",
                "number": "457",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1186,
                "name": "Spanish-American Testimonio Discourse",
                "number": "470",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1187,
                "name": "Discourses of Discovery, Colonization, and Resistance in Spain and Spanish America",
                "number": "472",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 93,
                    "name": "SPAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1188,
                "name": "Honours Seminar",
                "number": "496",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1189,
                "name": "History of Violence: Middle East 1798 to Present",
                "number": "348",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1190,
                "name": "The Scientific Revolution",
                "number": "328",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1191,
                "name": "THE HOLOCAUST",
                "number": "235",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1192,
                "name": "CULTS AND NEW RELIGIOUS MOVEMENTS IN NORTH AMERICA",
                "number": "300",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1193,
                "name": "SHIITE ISLAM",
                "number": "318",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1194,
                "name": "The Making of Christianity",
                "number": "320",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1195,
                "name": "Modern Judaism",
                "number": "328",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1196,
                "name": "Forensic Psychology",
                "number": "342",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1197,
                "name": "Vision",
                "number": "460",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1198,
                "name": "RECEPTION STUDIES",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1199,
                "name": "Communication, Culture, and Popular Art",
                "number": "462",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1200,
                "name": "Communication Analysis of Environment",
                "number": "324",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1201,
                "name": "Sociology of Culture",
                "number": "250",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1202,
                "name": "HOLOCAUST HISTORICAL CIRCUMS",
                "number": "338",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 86,
                    "name": "RELI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1203,
                "name": "Convex and Non-Linear Analysis",
                "number": "479",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 73,
                    "name": "MATH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1204,
                "name": "(also listed as IRST 211) History of Ireland",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1205,
                "name": "Religion and Politics",
                "number": "343",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1206,
                "name": "Cultures of Production",
                "number": "413",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1207,
                "name": "History of Sound Recording",
                "number": "365",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1208,
                "name": "PERSPECTIVE ON INFO. SOCIETY",
                "number": "422",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1209,
                "name": "FILM CRITICISM",
                "number": "416",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1210,
                "name": "SEL. TOP. IN FILM STUDIES",
                "number": "304",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 29,
                    "name": "COMS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1211,
                "name": "Statistical Data Analysis",
                "number": "480",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 94,
                    "name": "STAT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1212,
                "name": "INTRODUCTION TO REPORTING",
                "number": "206",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1213,
                "name": "SEL TOP IN LEARN+MOTIVA A",
                "number": "230",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1214,
                "name": "FUNCTIONAL NEUROANATOMY",
                "number": "456",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 84,
                    "name": "PSYC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1215,
                "name": "Introduction to Christian Ethics",
                "number": "204",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1216,
                "name": "INITIATION AU SOUS-TIRAGE",
                "number": "438",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1217,
                "name": "THE ICON: THEOLOGY IN COLOUR",
                "number": "291",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1218,
                "name": "GENDER, DIVERSITY AND JOURNALISM",
                "number": "420",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1219,
                "name": "Théories de la traduction",
                "number": "412",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1220,
                "name": "INTRODUCTION TO MULTIMEDIA",
                "number": "207",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 66,
                    "name": "JOUR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1221,
                "name": "ADVANCED TOPICS ANTHROPOLOGY",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 7,
                    "name": "ANTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1222,
                "name": "Sociology of Cyberspace",
                "number": "221",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1223,
                "name": "(also listed as CLAS 341) Greek History from Alexander to the Roman Conquest",
                "number": "323",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1224,
                "name": "EARLY MODERN EUROPE",
                "number": "207",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 102,
                    "name": "HISW"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1225,
                "name": "(also listed as CLAS 240) Greek History from the Bronze Age to Alexander",
                "number": "223",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1226,
                "name": "(also listed as CLAS 242) History of the Roman Republic",
                "number": "225",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1227,
                "name": "(also listed as SCPA 339) Quebec Politics and Society/ La vie politique quebecoise",
                "number": "339",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 89,
                    "name": "SCPA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1228,
                "name": "(also listed as CLAS 230) Ancient Near East",
                "number": "219",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 31,
                    "name": "HIST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1229,
                "name": "Children's Play in Childhood Settings",
                "number": "304",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1230,
                "name": "INTERGRATING DIGITAL TECH & SOCIAL MEDIA IN LEARNING ENV",
                "number": "307",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1231,
                "name": "Child Studies Field Experience:  Child and Youth Settings",
                "number": "460",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1232,
                "name": "Child Studies Seminar:  Child and Youth Settings",
                "number": "461",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1233,
                "name": "Inclusive Practices in Early Childhood Settings",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1234,
                "name": "A World of Food",
                "number": "321",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1235,
                "name": "URBAN AGRICULTURE",
                "number": "323",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1236,
                "name": "PLANT ECOLOGY",
                "number": "374",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1237,
                "name": "Analytical Methods in Urban Studies",
                "number": "260",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 97,
                    "name": "URBS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1238,
                "name": "Icons of Architectural History",
                "number": "270",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1239,
                "name": "The Life and Work of",
                "number": "283",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1240,
                "name": "Studies in the History of Fibre Art",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1241,
                "name": "Studies in Canadian Art",
                "number": "370",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1242,
                "name": "Topics in Amerindian and Inuit Art",
                "number": "376",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1243,
                "name": "Issues in Ethnocultural Art Histories",
                "number": "389",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1244,
                "name": "GENDER ISSUES IN ART & ARTH",
                "number": "392",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1245,
                "name": "Studies in Renaissance Art and Architecture",
                "number": "364",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1246,
                "name": "Acting and Directing Acting for the Screen I",
                "number": "335",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1247,
                "name": "Sound II",
                "number": "440",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1248,
                "name": "SPECIAL TOPICS IN FMPR",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1249,
                "name": "Introduction to Game Design",
                "number": "215",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 18,
                    "name": "CART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1250,
                "name": "SPECIAL TOPICS IN DESIGN",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 33,
                    "name": "DART"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1251,
                "name": "Analysis",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1252,
                "name": "SONGWRITING II",
                "number": "363",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1253,
                "name": "JAZZ ANALYSIS",
                "number": "352",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 65,
                    "name": "JAZZ"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1254,
                "name": "Advanced Recording II",
                "number": "452",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1255,
                "name": "JAZZ HARMONY I",
                "number": "252",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 65,
                    "name": "JAZZ"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1256,
                "name": "JAZZ ARRANGING I",
                "number": "303",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 65,
                    "name": "JAZZ"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1257,
                "name": "JAZZ HISTORY",
                "number": "314",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 104,
                    "name": "JHIS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1258,
                "name": "JAZZ HISTORY",
                "number": "314",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 76,
                    "name": "MHIS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1259,
                "name": "AESTHETICS AND MUSICAL STYLE",
                "number": "331",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 76,
                    "name": "MHIS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1260,
                "name": "Research in Music",
                "number": "421",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1261,
                "name": "Drama",
                "number": "240",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 23,
                    "name": "ENGL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1262,
                "name": "Contemporary Political Philosophy",
                "number": "345",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1263,
                "name": "PEACE STUDIES&GLOB GOVERNANC",
                "number": "423",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1264,
                "name": "Media, Technology and Politics",
                "number": "368",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1265,
                "name": "ADV SEM/CDN & QUE POLITICS",
                "number": "488",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1266,
                "name": "Introduction to Financial Management",
                "number": "230",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 50,
                    "name": "FINA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1267,
                "name": "TOPICS IN GENRE STUDIES",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 9,
                    "name": "ARTH"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1268,
                "name": "Middle East & Global Conflict",
                "number": "391",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1269,
                "name": "HONOURS TUTORIAL",
                "number": "490",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 68,
                    "name": "LING"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1270,
                "name": "Capstone Recording Project II",
                "number": "466",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 39,
                    "name": "EAST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1271,
                "name": "Introduction to Management Consulting",
                "number": "481",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 70,
                    "name": "MANA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1272,
                "name": "Introduction to Creative Arts Therapies",
                "number": "210",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 105,
                    "name": "CATS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1273,
                "name": "Intermediate Fibre Structures",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 49,
                    "name": "FBRS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1274,
                "name": "INTERM. TEXT.PRINTING/DYEING",
                "number": "361",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 49,
                    "name": "FBRS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1275,
                "name": "SPECIAL TOPICS IN PHOTO",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 80,
                    "name": "PHOT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1276,
                "name": "Contemporary Relief and Woodcut II",
                "number": "391",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1277,
                "name": "Advanced Projects in Print Media I",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1278,
                "name": "Special Topics in Print Media",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 83,
                    "name": "PRIN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1279,
                "name": "The Engaged Theatre Artist",
                "number": "209",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1280,
                "name": "Voice and Movement Foundation",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1281,
                "name": "Movement for the Stage",
                "number": "321",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1282,
                "name": "Voice for the Stage",
                "number": "325",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1283,
                "name": "Intensive Movement Studio",
                "number": "358",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1284,
                "name": "Ensemble II",
                "number": "360",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1285,
                "name": "Special Topics in Acting",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1286,
                "name": "Special Topics in Acting",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1287,
                "name": "Drawing for the Theatre",
                "number": "211",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1288,
                "name": "Introduction to Designer's Studio: Conception",
                "number": "301",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1289,
                "name": "Lighting Design",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1290,
                "name": "Set Design Realization",
                "number": "335",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1291,
                "name": "Introduction to Public Performance Design",
                "number": "350",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1292,
                "name": "Introduction to Public Performance Design",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1293,
                "name": "Advanced Public Performance Design",
                "number": "451",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1294,
                "name": "Introduction to Elements of Production",
                "number": "370",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1295,
                "name": "Introduction to Elements of Production",
                "number": "371",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1296,
                "name": "Advanced Elements of Production",
                "number": "470",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1297,
                "name": "Advanced Elements of Production",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 37,
                    "name": "DFTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1298,
                "name": "Theatre History and Theory, 1800 to Present",
                "number": "306",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1299,
                "name": "EUROPEAN POLITICS&GOV T.",
                "number": "319",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1300,
                "name": "COLLECTIVE ACTION",
                "number": "336",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1301,
                "name": "Crime and Justice",
                "number": "362",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 91,
                    "name": "SOCI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1302,
                "name": "ADVANCED SEMINAR IN PUBLIC POLICY",
                "number": "489",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1303,
                "name": "Introduction to Film Producing",
                "number": "336",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 53,
                    "name": "FMPR"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1304,
                "name": "SPECIAL TOPICS IN FMST",
                "number": "498",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1305,
                "name": "Principles of 3D Digital Film Animation",
                "number": "353",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 52,
                    "name": "FMAN"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1306,
                "name": "The Engaged Theatre Artist",
                "number": "209",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1307,
                "name": "Dramaturgy I",
                "number": "212",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1308,
                "name": "Directing I",
                "number": "311",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1309,
                "name": "Dramaturgy II",
                "number": "312",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1310,
                "name": "Playwriting I",
                "number": "318",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1311,
                "name": "Post-Colonial Theory and Practice",
                "number": "323",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1312,
                "name": "Community Arts: The Art of Engagement",
                "number": "351",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1313,
                "name": "Storytelling and Oral Histories",
                "number": "353",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1314,
                "name": "Collective Creation",
                "number": "384",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1315,
                "name": "Interdisciplinary Approaches to Performance Creation",
                "number": "386",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1316,
                "name": "Performance Creation Studio",
                "number": "390",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1317,
                "name": "Special Topics in Performance Creation",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1318,
                "name": "Independent Study I",
                "number": "405",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1319,
                "name": "Supervised Internship I",
                "number": "408",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1320,
                "name": "Supervised Internship II",
                "number": "409",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1321,
                "name": "Independent Study II",
                "number": "415",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1322,
                "name": "Directing II",
                "number": "471",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1323,
                "name": "The Artist-in-Residence",
                "number": "482",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 107,
                    "name": "PERC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1324,
                "name": "Digital Signal Processing",
                "number": "442",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1325,
                "name": "LBCL SELECTED TOPICS",
                "number": "298",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 103,
                    "name": "LBCL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1326,
                "name": "The Christian Understanding of God",
                "number": "331",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1327,
                "name": "Geographies of Postcolonialism",
                "number": "418",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 60,
                    "name": "GEOG"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1328,
                "name": "Earthquakes, Volcanoes, and Plate Tectonics",
                "number": "206",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 61,
                    "name": "GEOL"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1329,
                "name": "Acting Studio",
                "number": "436",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1330,
                "name": "Chemistry in Our Lives",
                "number": "208",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1331,
                "name": "Functional Keyboard Skills",
                "number": "241",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 78,
                    "name": "MUSI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1332,
                "name": "GLOBAL ECOPOL. ANALYSIS",
                "number": "403",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1333,
                "name": "SEMINAR IN FILM NARRATIVE",
                "number": "424",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 54,
                    "name": "FMST"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1334,
                "name": "Terminologie et mondialisation",
                "number": "411",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 59,
                    "name": "FTRA"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1335,
                "name": "Numerical Analysis in Physics",
                "number": "236",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 81,
                    "name": "PHYS"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1336,
                "name": "The Marketing of Food",
                "number": "458",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 71,
                    "name": "MARK"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1337,
                "name": "Inorganic Chemistry III: The Transition Metals",
                "number": "341",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 21,
                    "name": "CHEM"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1338,
                "name": "TECHNOLOGY FOR EDUC CHANGE",
                "number": "305",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1339,
                "name": "PRCTM. PASTORAL MINISTRY",
                "number": "404",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 96,
                    "name": "THEO"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1340,
                "name": "Introduction to Acting I",
                "number": "201",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 106,
                    "name": "ACTT"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1341,
                "name": "Diversity Issues in Childhood",
                "number": "402",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1342,
                "name": "Introduction to Inclusive Practices",
                "number": "360",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1343,
                "name": "Child Studies Seminar: Inclusive Practices in Childhood Settings",
                "number": "463",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 44,
                    "name": "EDUC"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1344,
                "name": "SELECTED TOPICS/POLI SC",
                "number": "398",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 82,
                    "name": "POLI"
                },
                "prerequisites": [],
                "corequisites": []
            },
            {
                "id": 1345,
                "name": "Controlled Electric Drives",
                "number": "440",
                "credits": "3.00",
                "description": "No description of the course.",
                "faculty": {
                    "id": 47,
                    "name": "ELEC"
                },
                "prerequisites": [],
                "corequisites": []
            }
        ]


    }]
)

