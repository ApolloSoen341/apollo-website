var exec = require('child_process').execSync;
var mysql = require('mysql')
var fs = require('fs')
var classNum = 6425
// var connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'root',
//     password: 'soen331',
//     database: 'artemis',
//     connectTimeout: 600000000
// });

for (var i = 0; i < 9000; i++) {
    var x = 0
    while (x < 1) {
        try {
            var output = ''
            while (output.length == 0) {
                var child = exec('casperjs casperScrape.js --classnum=' + (classNum + i))

                output = child.toString("utf-8")
                if (output.length != 0) {
                    console.log(output)

                    if (output.indexOf("ERROR NO CLASS FOUND") != (-1)) {
                        fs.appendFileSync('errorCourse.txt', (classNum + i) + ',');
                        console.log("No class found at " + (classNum + i))
                    } 
                    else {
                        console.log(classNum + i)
                        fs.appendFileSync('coursesWinter2017.json', output + ', \n');
                    }
                }
            }
        }
        catch (error) {
            console.log(error)
        }
        if (output.indexOf("Command failed") != (-1)) {
                        continue;
                    }
        x++;
    }
}

/*
connection.query({ sql: "INSERT INTO artemis.courses (faculty, title, classnum, section, type, day, timebegin, timeend, room, semester, classid) VALUES ('" + courses.faculty + "','" + courses.title + "', " + courses.classNum + ", '" + courses.section + "', '" + courses.type + "', '" + courses.day + "', '" + courses.timeBegin + "', '" + courses.timeEnd + "', '" + courses.room + "', '" + courses.semester + "', '" + courses.classid + "');", timeout: 6000000 }, function(err, rows, fields) {
                if (err) throw err;
            });
 * 
 */