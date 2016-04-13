var app = angular.module('StarterApp');

app.factory('SchedulerService', function() {

    /*
     ****************************************************************
     *
     * HELPER FUNCTIONS
     * Used by getSchedules, typically shouldn't be used on their own
     *
     ****************************************************************
     */

    /**
     * Generate all possible combinations of sections (lectures, labs, tutorials) of a course
     *
     * @param selectedCourse
     * @returns {Array}
     */
    function getSectionCombinations(selectedCourse) {
        var combinations = [];
        var lecs = [];
        var tuts = [];
        var labs = [];


        // group sections by type
        for (var i = 0; i < selectedCourse.length; i++) {
            if (selectedCourse[i].type == "LEC") {
                var lec = {};
                lec.course = selectedCourse[i].faculty + selectedCourse[i].classNum;
                lec.title = selectedCourse[i].title;
                lec.section = selectedCourse[i].section;
                lec.timeBegin = selectedCourse[i].timeBegin;
                lec.timeEnd = selectedCourse[i].timeEnd;
                lec.day = selectedCourse[i].day;
                lecs.push(lec);
            } else if (selectedCourse[i].type == "TUT") {
                var tut = {};
                tut.course = selectedCourse[i].faculty + selectedCourse[i].classNum;
                tut.title = selectedCourse[i].title;
                tut.section = selectedCourse[i].section;
                tut.timeBegin = selectedCourse[i].timeBegin;
                tut.timeEnd = selectedCourse[i].timeEnd;
                tut.day = selectedCourse[i].day;
                tuts.push(tut);
            } else {
                var lab = {};
                lab.course = selectedCourse[i].faculty + selectedCourse[i].classNum;
                lab.title = selectedCourse[i].title;
                lab.section = selectedCourse[i].section;
                lab.timeBegin = selectedCourse[i].timeBegin;
                lab.timeEnd = selectedCourse[i].timeEnd;
                lab.day = selectedCourse[i].day;
                labs.push(lab);
            }
        }

        for (var i = 0; i < lecs.length; i++) {
            if (tuts.length <= 0) {
                var course = {};
                course.lec = lecs[i];
                combinations.push(course);
            }
            for (var j = 0; j < tuts.length; j++) {
                if (tuts[j].section.charAt(0) == lecs[i].section.charAt(0)) {
                    if (labs.length <= 0) {
                        var course = {};
                        course.lec = lecs[i];
                        course.tut = tuts[j];
                        combinations.push(course);
                    } else {
                        for (var k = 0; k < labs.length; k++) {
                            if (labs[k].section.charAt(0) == lecs[i].section.charAt(0)) {
                                var course = {};
                                course.lec = lecs[i];
                                course.tut = tuts[j];
                                course.lab = labs[k];
                                combinations.push(course);
                            }
                        }
                    }
                }
            }
        }
        return combinations;
    }


///////////////////////////////////////////////////

    /**
     * groupCombinations returns array of sections grouped by same time and day
     * Example of a groupedSection: "D - D DA - DI or E - E EA - EI or E - E EA - EJ"
     * @param courseCombinations
     * @returns {Array}
     */

    function groupCombinations(courseCombinations) {
        var temp = courseCombinations;
        var groupedSections = [];
        var hasTutorials = (temp[0] && temp[0].tut != null);
        var hasLabs = (temp[0] && temp[0].lab != null);


        //groupedSectionsIndex
        var x = 0;

        //Iterate through the combinations and group them
        while (temp.length != 0) {

            var group = {};
            var removeGroup = [];
            var hasGroupSections = false;

            for (var i = 1; i < temp.length; i++) {
                var lec = {};
                var tut = {};
                var lab = {};

                //To accomodate if a course does not have a lab or tut,
                //these variables are first initialized to true:
                var hasSameLecTime = true;
                var hasSameTutTime = true;
                var hasSameLabTime = true;

                //Check lecture times
                //Check tutorial times if course has tutorials
                //Check lab times if course has labs
                var hasSameLecTime = (temp[0].lec.timeBegin == temp[i].lec.timeBegin) && (temp[0].lec.timeEnd == temp[i].lec.timeEnd) && (temp[0].lec.day == temp[i].lec.day);
                if (hasTutorials) {
                    hasSameTutTime = (temp[0].tut.timeBegin == temp[i].tut.timeBegin) && (temp[0].tut.timeEnd == temp[i].tut.timeEnd) && (temp[0].tut.day == temp[i].tut.day);
                }
                if (hasLabs) {
                    hasSameLabTime = (temp[0].lab.timeBegin == temp[i].lab.timeBegin) && (temp[0].lab.timeEnd == temp[i].lab.timeEnd) && (temp[0].lab.day == temp[i].lab.day);
                }

                //Add courses with matching times to groupedSections
                if (hasSameLecTime && hasSameTutTime && hasSameLabTime) {
                    hasGroupSections = true;

                    //Add the first matching pair to groupedSections
                    if (groupedSections[x] == null) {
                        //Get course name and course title
                        group.course = temp[0].lec.course;
                        group.title = temp[0].lec.title;

                        //Get section titles
                        if (hasTutorials && hasLabs) {
                            var sectionA = temp[0].lec.section + "-" + temp[0].tut.section + "-" + temp[0].lab.section;
                            var sectionB = temp[i].lec.section + "-" + temp[i].tut.section + "-" + temp[i].lab.section;
                            group.name = sectionA + " or " + sectionB;
                        } else if (hasTutorials) {
                            var sectionA = temp[0].lec.section + "-" + temp[0].tut.section;
                            var sectionB = temp[i].lec.section + "-" + temp[i].tut.section;
                            group.name = sectionA + " or " + sectionB;
                        } else if (hasLabs) {
                            var sectionA = temp[0].lec.section + "-" + temp[0].lab.section;
                            var sectionB = temp[i].lec.section + "-" + temp[i].lab.section;
                            group.name = sectionA + " or " + sectionB;
                        } else {
                            var sectionA = temp[0].lec.section;
                            var sectionB = temp[i].lec.section;
                            group.name = sectionA + " or " + sectionB;
                        }

                        //Get lec time
                        lec.timeBegin = temp[0].lec.timeBegin;
                        lec.timeEnd = temp[0].lec.timeEnd;
                        lec.day = temp[0].lec.day;
                        group.lec = lec;


                        //Get tut time
                        if (hasTutorials) {
                            tut.timeBegin = temp[0].tut.timeBegin;
                            tut.timeEnd = temp[0].tut.timeEnd;
                            tut.day = temp[0].tut.day;
                            group.tut = tut;
                        }

                        //Get lab time
                        if (hasLabs) {
                            lab.timeBegin = temp[0].lab.timeBegin;
                            lab.timeEnd = temp[0].lab.timeEnd;
                            lab.day = temp[0].lab.day;
                            group.lab = lab;
                        }

                        //Save indices to remove
                        removeGroup.push(0);
                        removeGroup.push(i)

                        groupedSections.push(group);

                    } else {
                        //Add another section to a group in groupedSections

                        //Get section titles
                        if (hasTutorials && hasLabs) {
                            var sectionB = temp[i].lec.section + "-" + temp[i].tut.section + "-" + temp[i].lab.section;
                            groupedSections[x].name = groupedSections[x].name + " or " + sectionB;
                        } else if (hasTutorials) {
                            var sectionB = temp[i].lec.section + "-" + temp[i].tut.section;
                            groupedSections[x].name = groupedSections[x].name + " or " + sectionB;
                        } else if (hasLabs) {
                            var sectionB = temp[i].lec.section + "-" + temp[i].lab.section;
                            groupedSections[x].name = groupedSections[x].name + " or " + sectionB;
                        } else {
                            var sectionB = temp[i].lec.section;
                            groupedSections[x].name = groupedSections[x].name + " or " + sectionB;
                        }

                        //Save index to remove
                        removeGroup.push(i);

                    }
                }


            }

            if (!hasGroupSections) {
                //If none have same times with the a section,
                //then push the single section

                //Get course name and course title
                group.course = temp[0].lec.course;
                group.title = temp[0].lec.title;

                //Get section title
                if (hasTutorials && hasLabs) {
                    group.name = temp[0].lec.section + "-" + temp[0].tut.section + "-" + temp[0].lab.section;
                } else if (hasTutorials) {
                    group.name = temp[0].lec.section + "-" + temp[0].tut.section;
                } else if (hasLabs) {
                    group.name = temp[0].lec.section + "-" + temp[0].lab.section;
                } else {
                    group.name = temp[0].lec.section;
                }

                //Get lec time
                lec.timeBegin = temp[0].lec.timeBegin;
                lec.timeEnd = temp[0].lec.timeEnd;
                lec.day = temp[0].lec.day;
                group.lec = lec;

                //Get tut time
                if (hasTutorials) {
                    tut.timeBegin = temp[0].tut.timeBegin;
                    tut.timeEnd = temp[0].tut.timeEnd;
                    tut.day = temp[0].tut.day;
                    group.tut = tut;
                }

                //Get lab time
                if (hasLabs) {
                    lab.timeBegin = temp[0].lab.timeBegin;
                    lab.timeEnd = temp[0].lab.timeEnd;
                    lab.day = temp[0].lab.day;
                    group.lab = lab;
                }

                //Save indices to remove
                removeGroup.push(0);

                groupedSections.push(group);
            }

            //Remove all indices in temp that were pushed to groupedSections
            for (var i = (removeGroup.length - 1); i >= 0; i--) {
                var location = removeGroup[i];
                temp.splice(location, 1);
            }


            //Increment groupedSections tail index
            x++;

        }

        return groupedSections;

    }


///////////////////////////////////////////////////


    var timeA = "8:45AM";
    var timeB = "1:00PM";
    var test = convertTimeFormat(timeB);

    /**
     * convertTimeFormat converts AMPM time to 24H time
     * @param t
     * @returns {number}
     */
    function convertTimeFormat(t) {
        //Get time digits and convert to integer number
        var timeMatch = t.match(/\d+/g);
        var timeStr = "";
        for (var i = 0; i < timeMatch.length; i++) {
            timeStr = timeStr + timeMatch[i];
        }
        var timeInt = Number(timeStr);

        //Get AMPM and convert to string
        var AMPMMatch = t.match(/(AM|PM)$/g);
        var AMPMStr = AMPMMatch[0];

        //Convert to 24H range
        if (AMPMStr == "PM" && timeInt < 1200) {
            timeInt = timeInt + 1200;
        }
        if (AMPMStr == "AM" && timeInt == 1200) {
            timeInt = timeInt - 1200;
        }
        return timeInt;

    }


///////////////////////////////////////////////////

    /**
     * Cartesian Product recursive algorithm
     * returns conflict-free course combinations
     *
     * @param selectedCourses
     * @returns {Array}
     */
    function getCourseCombinations(selectedCourses) {
        var firstCourse, combination = [];

        //base case
        if (!selectedCourses || selectedCourses.length == 0) {
            return selectedCourses;
        }

        //recursive case
        firstCourse = selectedCourses.splice(0, 1)[0];
        selectedCourses = getCourseCombinations(selectedCourses);

        for (var i = 0; i < firstCourse.length; i++) {
            if (selectedCourses && selectedCourses.length > 0) {
                for (var j = 0; j < selectedCourses.length; j++) {
                    var add = true;
                    for (var k = 0; k < selectedCourses[j].length; k++) {
                        if (isConflict(firstCourse[i].lec, selectedCourses[j][k].lec) ||
                            selectedCourses[j][k].tut && isConflict(firstCourse[i].lec, selectedCourses[j][k].tut) ||
                            selectedCourses[j][k].lab && isConflict(firstCourse[i].lec, selectedCourses[j][k].lab)) {
                            add = false;
                            break;
                        }
                        if (firstCourse[i].tut) {
                            if (isConflict(firstCourse[i].tut, selectedCourses[j][k].lec) ||
                                selectedCourses[j][k].tut && isConflict(firstCourse[i].tut, selectedCourses[j][k].tut) ||
                                selectedCourses[j][k].lab && isConflict(firstCourse[i].tut, selectedCourses[j][k].lab)) {
                                add = false;
                                break;
                            }
                        }
                        if (firstCourse[i].lab) {
                            if (isConflict(firstCourse[i].lab, selectedCourses[j][k].lec) ||
                                selectedCourses[j][k].tut && isConflict(firstCourse[i].lab, selectedCourses[j][k].tut) ||
                                selectedCourses[j][k].lab && isConflict(firstCourse[i].lab, selectedCourses[j][k].lab)) {
                                add = false;
                                break;
                            }
                        }
                    }
                    if (add) {
                        combination.push([firstCourse[i]].concat(selectedCourses[j]));
                    }
                }
            }
            else {
                combination.push(firstCourse[i]);
            }
        }

        return combination;
    }

    /**
     * Check if two sections (could be lecture/lab/tutorial) conflict
     *
     * @param block1
     * @param block2
     * @returns {boolean}
     */
    function isConflict(block1, block2) {
        var begin1 = convertTimeFormat(block1.timeBegin);
        var begin2 = convertTimeFormat(block1.timeEnd);
        var end1 = convertTimeFormat(block2.timeBegin);
        var end2 = convertTimeFormat(block2.timeEnd);
        if ((block1.day.indexOf(block2.day) > -1) || (block2.day.indexOf(block1.day) > -1)) {
            if ((begin1 >= begin2 && begin1 < end2) || (end1 > begin2 && end1 <= end2)) {
                return true;
            }
        }
        return false;
    }


    function updateSchedules(schedules, preferences) {
        var updatedSchedules = [];

        for (var s=0; s<schedules.length; s++) {
            for(var t=0; t<schedules[s].length; t++) {
                var add = true;
                for (var p=0; p<preferences.length; p++) {
                    if(schedules[s][t].day.indexOf(preferences[p].day) > -1) {
                        //console.log(schedules[s][t].day + " " + preferences[p].time);
                        switch (preferences[p].time) {
                            case "am":
                                if (convertTimeFormat(schedules[s][t].timeBegin) >= 1200) {
                                    add = false;
                                }
                                break;
                            case "mid":
                                if (convertTimeFormat(schedules[s][t].timeBegin) < 1200 || convertTimeFormat(schedules[s][t].timeBegin) >= 1800) {
                                    add = false;
                                }
                                break;
                            case "pm":
                                if (convertTimeFormat(schedules[s][t].timeBegin) < 1800) {
                                    add = false;
                                }
                                break;
                            case "ammid":
                                if (convertTimeFormat(schedules[s][t].timeBegin) >= 1800) {
                                    add = false;
                                }
                                break;
                            case "pmmid":
                                if (convertTimeFormat(schedules[s][t].timeBegin) < 1200) {
                                    add = false;
                                }
                                break;
                            case "ampm":
                                if (convertTimeFormat(schedules[s][t].timeBegin) >= 1200 && convertTimeFormat(schedules[s][t].timeBegin) < 1800) {
                                    add = false;
                                }
                                break;
                            case "none":
                                add = false;
                                break;
                            case "all":
                                break; //stays add=true
                        }
                        if (!add) {
                            break;
                        }
                    }
                }
                if (!add) {
                    break;
                }
            }
            if (add) {
                updatedSchedules.push(schedules[s]);
            }
        }

        return updatedSchedules;
    }


    return {
        /**
         * Main function to generate schedules from an array of selected courses
         * @param selectedCourses
         */
        getSchedules: function (selectedCourses) {
            var groupedCourses = [];
            for (var i = 0; i < selectedCourses.length; i++) {
                var course = getSectionCombinations(selectedCourses[i]);
                var grouped = groupCombinations(course);
                groupedCourses.push(grouped);
            }
            var combinations = getCourseCombinations(groupedCourses);
                var schedules = [];

                for (var i = 0; i < combinations.length; i++) {
                    var timeSlots = [];
                    for (var j = 0; j <combinations[i].length; j++) {
                        var lec = {};
                        lec.course = combinations[i][j].course;
                        lec.title = combinations[i][j].title;
                        lec.name = combinations[i][j].name;
                        lec.type = "LEC";
                        lec.day = combinations[i][j].lec.day;
                        lec.timeBegin = combinations[i][j].lec.timeBegin;
                        lec.timeEnd = combinations[i][j].lec.timeEnd;
                        timeSlots.push(lec);
                        if (combinations[i][j].tut) {
                            var tut = {};
                            tut.course = combinations[i][j].course;
                            tut.title = combinations[i][j].title;
                            tut.name = combinations[i][j].name;
                            tut.type = "TUT";
                            tut.day = combinations[i][j].tut.day;
                            tut.timeBegin = combinations[i][j].tut.timeBegin;
                            tut.timeEnd = combinations[i][j].tut.timeEnd;
                            timeSlots.push(tut);
                        }
                        if (combinations[i][j].lab) {
                            var lab = {};
                            lab.course = combinations[i][j].course;
                            lab.title = combinations[i][j].title;
                            lab.name = combinations[i][j].name;
                            lab.type = "LAB";
                            lab.day = combinations[i][j].lab.day;
                            lab.timeBegin = combinations[i][j].lab.timeBegin;
                            lab.timeEnd = combinations[i][j].lab.timeEnd;
                            timeSlots.push(lab);
                        }
                    }
                    schedules.push(timeSlots);
                }
            return schedules;
        }
    }

})