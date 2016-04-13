var courseInfo ={}
var casper = require('casper').create({
    //verbose: true,
    logLevel: "debug",
    pageSettings: {
        loadImages:  false,         
        loadPlugins: false          
    },
})
var x = require('casper').selectXPath
var classnum = casper.cli.get("classnum")
casper.userAgent('Mozilla/5.0 (Windows NT 10.0; WOW64)')


casper.start('https://campus.concordia.ca/psc/pscsprd/EMPLOYEE/HRMS/c/CU_EXT.CU_CLASS_SEARCH.GBL', function(){
    

    this.fillSelectors('form#CU_CLASS_SEARCH', {
    'select[name="CLASS_SRCH_WRK2_STRM$35$"]': "2164"
}, true);
})
casper.wait(1000, function() {
    casper.capture('fallSelect.png')
    });
 casper.then(function(){
    

     this.fillSelectors('form#CU_CLASS_SEARCH', {
    'select[name="SSR_CLSRCH_WRK_ACAD_CAREER$0"]': 'UGRD',
    'input[name="SSR_CLSRCH_WRK_CLASS_NBR$10"]' : (classnum)
    
}, true);
casper.wait(1000, function() {
    casper.capture('undergraduateSelect.png')
    });

 })

casper.then(function () {
    casper.click(x('//*[@id="CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH"]'));
});
casper.wait(1000, function() {
    casper.capture('firstSearchClick.png')
    });
    casper.then(function () {
            if(this.exists(x('//*[@id="win0divDERIVED_CLSMSG_GROUP2"]/table'))){
         casper.click(x('//*[@id="CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH"]'));


 casper.wait(2000, function() {
        
        casper.capture('firstClickDidntWork.png')
     });
        }
    
    });

    
casper.then(function(){
    casper.capture('img365.png')
    if(this.exists(x('//*[@id="win0divDERIVED_CLSMSG_GROUP2"]/table'))){
    casper.wait(20, function() {
        
       casper.capture('errorbox?.png')
    });    
    console.log("ERROR NO CLASS FOUND")
        }else{
            casper.wait(20, function() {
        
       casper.capture('noErrorbox.png')
    });

    var classTitle = casper.fetchText(x('//*[@id="PSCENTER"]/table/tbody/tr/td'))
    var classTitleStart = "1 class section(s) found "
    classTitle = classTitle.split(classTitleStart)
    classTitle = classTitle.pop()
    classTitle = classTitle.split(' - ')
    
    
    var str = classTitle[0].split('  ')
    
    courseInfo.faculty = str[0]
    courseInfo.classNum = str[1]
    courseInfo.title = classTitle[1]
    
     var classSection = casper.fetchText(x('//*[@id="MTG_CLASSNAME$0"]'))
     var newclassSection = classSection.split('-')
     courseInfo.section = newclassSection[0]
     courseInfo.type = newclassSection[1].substring(0,3)
     
    var classDay = casper.fetchText(x('//*[@id="MTG_DAYTIME$0"]'))
    classDay = classDay.split(' ')
    courseInfo.day = classDay[0]
    
    classDay.splice(0, 1);
    
    
    courseInfo.timeBegin = classDay[0]
    courseInfo.timeEnd = classDay[2]
    
    var room = casper.fetchText(x('//*[@id="MTG_ROOM$0"]'))
    courseInfo.room = room
    
    var semester = casper.fetchText(x('//*[@id="SSR_CSTRMADM_VW_DESCR$0"]'))
    courseInfo.semester = semester
    courseInfo.classid = classnum;
    console.log(JSON.stringify(courseInfo))
    //  console.log('faculty = ' + courseInfo.faculty + ' title = ' + courseInfo.title + ' number = ' + courseInfo.classNum + ' section = ' + courseInfo.section + ' type = ' + courseInfo.type + ' day = ' + courseInfo.day + ' timeBegin = ' + courseInfo.timeBegin + ' timeEnd = ' + courseInfo.timeEnd + " room = " + courseInfo.room + ' semester = ' + courseInfo.semester) 
        }
})
     



casper.run()



