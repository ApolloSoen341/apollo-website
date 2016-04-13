describe("Schedule generator function unit tests", function(){
    it("returns the duration of the class in 15 minute increments", function(){
        var course = [{
            "faculty": "COMP",
            "classNum": "348",
            "title": "Principles of Programming Languages ",
            "section": "DDDB",
            "type": "TUT",
            "day": "Th",
            "timeBegin": "2:45PM",
            "timeEnd": "6:00PM",
            "room": "TBA",
            "semester": "Fall 2016",
            "classid": 1833
        }];
        //2:45 PM to 6:00 PM is 3 hours and 15 minutes, which is 13 X 15 minutes.
        expect($scope.duration[0].toEqual(13))

    }),
    it("adds a chip when the addcourse function os called with a course as an argument", function(){
        var course = {
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
        };
        $scope.addCourse(course)

        expect($scope.selectedCourses[0]).toEqual(course)
    })
})