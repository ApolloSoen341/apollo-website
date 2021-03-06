var app = angular.module('StarterApp');

app.factory('CourseService', function(){

    var courses = [];

    var courseList = [{
        "faculty": "ACCO",
        "classNum": "230",
        "title": "Introduction to Financial Accounting ",
        "section": "A",
        "type": "LEC",
        "day": "TuTh",
        "timeBegin": "10:15AM",
        "timeEnd": "11:30AM",
        "room": "MB 3.210 SGW",
        "semester": "Fall 2016",
        "classid": 1002
    },
        {
            "faculty": "ACCO",
            "classNum": "230",
            "title": "Introduction to Financial Accounting ",
            "section": "AA",
            "type": "LEC",
            "day": "Mo",
            "timeBegin": "5:45PM",
            "timeEnd": "8:15PM",
            "room": "MB 3.270 SGW",
            "semester": "Fall 2016",
            "classid": 1003
        },
        {
            "faculty": "ACCO",
            "classNum": "310",
            "title": "Financial Reporting I ",
            "section": "A",
            "type": "LEC",
            "day": "TuTh",
            "timeBegin": "10:15AM",
            "timeEnd": "11:30AM",
            "room": "MB 5.265 SGW",
            "semester": "Fall 2016",
            "classid": 1004
        },
        {
            "faculty": "ACCO",
            "classNum": "310",
            "title": "Financial Reporting I ",
            "section": "D",
            "type": "LEC",
            "day": "TuTh",
            "timeBegin": "2:45PM",
            "timeEnd": "4:00PM",
            "room": "MB S2.330 SGW",
            "semester": "Fall 2016",
            "classid": 1005
        },
        {
            "faculty": "ACCO",
            "classNum": "310",
            "title": "Financial Reporting I ",
            "section": "C",
            "type": "LEC",
            "day": "TuTh",
            "timeBegin": "1:15PM",
            "timeEnd": "2:30PM",
            "room": "MB S1.430 SGW",
            "semester": "Fall 2016",
            "classid": 1006
        },
        {
            "faculty": "ACCO",
            "classNum": "310",
            "title": "Financial Reporting I ",
            "section": "AA",
            "type": "LEC",
            "day": "Tu",
            "timeBegin": "5:45PM",
            "timeEnd": "8:15PM",
            "room": "H 433 SGW",
            "semester": "Fall 2016",
            "classid": 1008
        },
        {
            "faculty": "ACCO",
            "classNum": "310",
            "title": "Financial Reporting I ",
            "section": "B",
            "type": "LEC",
            "day": "TuTh",
            "timeBegin": "11:45AM",
            "timeEnd": "1:00PM",
            "room": "H 433 SGW",
            "semester": "Fall 2016",
            "classid": 1009
        },
        {
            "faculty": "ACCO",
            "classNum": "320",
            "title": "Financial Reporting II ",
            "section": "A",
            "type": "LEC",
            "day": "TuTh",
            "timeBegin": "10:15AM",
            "timeEnd": "11:30AM",
            "room": "MB 5.275 SGW",
            "semester": "Fall 2016",
            "classid": 1010
        },
        {"faculty":"ACCO","classNum":"320","title":"Financial Reporting II ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 521 SGW","semester":"Fall 2016","classid":1011}
        ,
        {"faculty":"ACCO","classNum":"320","title":"Financial Reporting II ","section":"CC","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 539 SGW","semester":"Fall 2016","classid":1013}
        ,
        {"faculty":"ACCO","classNum":"330","title":"Cost and Management Accounting ","section":"C","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 3.430 SGW","semester":"Fall 2016","classid":1014}
        ,
        {"faculty":"ACCO","classNum":"330","title":"Cost and Management Accounting ","section":"D","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":1015}
        ,
        {"faculty":"ACCO","classNum":"330","title":"Cost and Management Accounting ","section":"B","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1016}
        ,
        {"faculty":"ACCO","classNum":"330","title":"Cost and Management Accounting ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 539 SGW","semester":"Fall 2016","classid":1017}
        ,
        {"faculty":"ACCO","classNum":"330","title":"Cost and Management Accounting ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":1018}
        ,
        {"faculty":"ACCO","classNum":"340","title":"Income Taxation in Canada ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 3.445 SGW","semester":"Fall 2016","classid":1019}
        ,
        {"faculty":"ACCO","classNum":"340","title":"Income Taxation in Canada ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 433 SGW","semester":"Fall 2016","classid":1020}
        ,
        {"faculty":"ACCO","classNum":"340","title":"Income Taxation in Canada ","section":"B","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":1021}
        ,
        {"faculty":"ACCO","classNum":"340","title":"Income Taxation in Canada ","section":"D","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":1022}
        ,
        {"faculty":"ACCO","classNum":"340","title":"Income Taxation in Canada ","section":"C","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 521 SGW","semester":"Fall 2016","classid":1023}
        ,
        {"faculty":"ACCO","classNum":"350","title":"Accounting and Information Technology ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":1024}
        ,
        {"faculty":"ACCO","classNum":"365","title":"U.S. Federal Taxation ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 565 SGW","semester":"Fall 2016","classid":1025}
        ,
        {"faculty":"ACCO","classNum":"400","title":"Accounting Theory ","section":"BB","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 423 SGW","semester":"Fall 2016","classid":1026}
        ,
        {"faculty":"ACCO","classNum":"400","title":"Accounting Theory ","section":"B","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 423 SGW","semester":"Fall 2016","classid":1027}
        ,
        {"faculty":"ACCO","classNum":"400","title":"Accounting Theory ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 423 SGW","semester":"Fall 2016","classid":1028}
        ,
        {"faculty":"ACCO","classNum":"400","title":"Accounting Theory ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 423 SGW","semester":"Fall 2016","classid":1029}
        ,
        {"faculty":"ACCO","classNum":"420","title":"Financial Reporting III ","section":"B","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":1031}
        ,
        {"faculty":"ACCO","classNum":"420","title":"Financial Reporting III ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 411 SGW","semester":"Fall 2016","classid":1032}
        ,
        {"faculty":"ACCO","classNum":"420","title":"Financial Reporting III ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":1033}
        ,
        {"faculty":"ACCO","classNum":"420","title":"Financial Reporting III ","section":"C","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":1034}
        ,
        {"faculty":"ACCO","classNum":"425","title":"FINANCIAL REPORTING IV ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 565 SGW","semester":"Fall 2016","classid":1035}
        ,
        {"faculty":"ACCO","classNum":"425","title":"FINANCIAL REPORTING IV ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":1036}
        ,
        {"faculty":"ACCO","classNum":"430","title":"Advanced Management Accounting ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 565 SGW","semester":"Fall 2016","classid":1037}
        ,
        {"faculty":"ACCO","classNum":"435","title":"STRAT ACCTNG CASE ANALYSIS ","section":"A","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 633 SGW","semester":"Fall 2016","classid":1038}
        ,
        {"faculty":"ACCO","classNum":"435","title":"STRAT ACCTNG CASE ANALYSIS ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 629 SGW","semester":"Fall 2016","classid":1039}
        ,
        {"faculty":"ACCO","classNum":"435","title":"STRAT ACCTNG CASE ANALYSIS ","section":"BB","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 633 SGW","semester":"Fall 2016","classid":1040}
        ,
        {"faculty":"ACCO","classNum":"440","title":"Advanced Taxation ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":1041}
        ,
        {"faculty":"ACCO","classNum":"440","title":"Advanced Taxation ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":1042}
        ,
        {"faculty":"ACCO","classNum":"440","title":"Advanced Taxation ","section":"BB","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 605 SGW","semester":"Fall 2016","classid":1043}
        ,
        {"faculty":"ACCO","classNum":"450","title":"Assurance Services ","section":"C","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":1044}
        ,
        {"faculty":"ACCO","classNum":"450","title":"Assurance Services ","section":"B","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 420 SGW","semester":"Fall 2016","classid":1045}
        ,
        {"faculty":"ACCO","classNum":"450","title":"Assurance Services ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 431 SGW","semester":"Fall 2016","classid":1046}
        ,
        {"faculty":"ACCO","classNum":"450","title":"Assurance Services ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":1047}
        ,
        {"faculty":"ACCO","classNum":"455","title":"Fraud Prevention and Investigation ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":1048}
        ,
        {"faculty":"ACCO","classNum":"465","title":"Advanced Assurance Services ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 407 SGW","semester":"Fall 2016","classid":1049}
        ,
        {"faculty":"ACCO","classNum":"465","title":"Advanced Assurance Services ","section":"A","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 415 SGW","semester":"Fall 2016","classid":1050}
        ,
        {"faculty":"ACTU","classNum":"256","title":"Mathematics of Finance ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 531 SGW","semester":"Fall 2016","classid":1055}
        ,
        {"faculty":"ACTU","classNum":"357","title":"Actuarial Mathematics II ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 620 SGW","semester":"Fall 2016","classid":1056}
        ,
        {"faculty":"ACTU","classNum":"458","title":"Credibility Theory ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":1057}
        ,
        {"faculty":"ACTU","classNum":"493","title":"Honours Project in Actuarial Mathematics ","section":"01","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1058}
        ,
        {"faculty":"ADED","classNum":"201","title":"Concepts and Principles of Adult Education ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":1059}
        ,
        {"faculty":"ADMI","classNum":"201","title":"Introduction to Administration (Administered by the Finance Department) ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1066}
        ,
        {"faculty":"ADMI","classNum":"202","title":"Perspective on Canadian Business (Administered by the Finance Department) ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":1067}
        ,
        {"faculty":"ADMI","classNum":"202","title":"Perspective on Canadian Business (Administered by the Finance Department) ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":1068}
        ,
        {"faculty":"AERO","classNum":"417","title":"STNDRDS/REGUL N/CERTIF N ","section":"MM","type":"LEC","day":"Fr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG C080 SGW","semester":"Fall 2016","classid":1070}
        ,
        {"faculty":"AERO","classNum":"431","title":"PRINCIPLES OF AEROELASTICITY ","section":"X","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":1071}
        ,
        {"faculty":"AERO","classNum":"462","title":"TURBOMACHINERY+PROPULSION ","section":"MM","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 407 SGW","semester":"Fall 2016","classid":1072}
        ,
        {"faculty":"AERO","classNum":"462","title":"TURBOMACHINERY+PROPULSION ","section":"MMMA","type":"TUT","day":"Tu","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"H 433 SGW","semester":"Fall 2016","classid":1073}
        ,
        {"faculty":"AERO","classNum":"480","title":"FLIGHT CONTROL SYSTEMS ","section":"XXXI","type":"LAB","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:35PM\nMo","room":"H 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW","semester":"Fall 2016","classid":1074}
        ,
        {"faculty":"AERO","classNum":"480","title":"FLIGHT CONTROL SYSTEMS ","section":"XX","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B030 SGW","semester":"Fall 2016","classid":1075}
        ,
        {"faculty":"AERO","classNum":"480","title":"FLIGHT CONTROL SYSTEMS ","section":"XXXJ","type":"LAB","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:35PM\nMo","room":"H 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW","semester":"Fall 2016","classid":1076}
        ,
        {"faculty":"AERO","classNum":"480","title":"FLIGHT CONTROL SYSTEMS ","section":"XXXO","type":"LAB","day":"We","timeBegin":"2:45PM","timeEnd":"4:35PM\nWe","room":"H 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW","semester":"Fall 2016","classid":1077}
        ,
        {"faculty":"AERO","classNum":"480","title":"FLIGHT CONTROL SYSTEMS ","section":"XXXK","type":"LAB","day":"We","timeBegin":"12:05PM","timeEnd":"1:55PM\nWe","room":"H 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW","semester":"Fall 2016","classid":1078}
        ,
        {"faculty":"AERO","classNum":"480","title":"FLIGHT CONTROL SYSTEMS ","section":"XXXL","type":"LAB","day":"We","timeBegin":"12:05PM","timeEnd":"1:55PM\nWe","room":"H 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW","semester":"Fall 2016","classid":1079}
        ,
        {"faculty":"AERO","classNum":"480","title":"FLIGHT CONTROL SYSTEMS ","section":"XXXM","type":"LAB","day":"We","timeBegin":"9:45AM","timeEnd":"11:35AM\nWe","room":"H 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW","semester":"Fall 2016","classid":1080}
        ,
        {"faculty":"AERO","classNum":"480","title":"FLIGHT CONTROL SYSTEMS ","section":"XXXN","type":"LAB","day":"We","timeBegin":"9:45AM","timeEnd":"11:35AM\nWe","room":"H 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW\nH 0011 SGW","semester":"Fall 2016","classid":1081}
        ,
        {"faculty":"AERO","classNum":"482","title":"AVIONIC NAVIGATION SYSTEMS ","section":"X","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:45PM","room":"H 820 SGW","semester":"Fall 2016","classid":1082}
        ,
        {"faculty":"AERO","classNum":"486","title":"AIRCRAFT STRESS ANALYSIS ","section":"TT","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B055 SGW","semester":"Fall 2016","classid":1083}
        ,
        {"faculty":"AHSC","classNum":"215","title":"Historical Foundations of Leisure and Recreation ","section":"01","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1084}
        ,
        {"faculty":"AHSC","classNum":"220","title":"LIFESPAN GROWTH&DEVELOP. ","section":"51","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"SP S110 LOY","semester":"Fall 2016","classid":1085}
        ,
        {"faculty":"AHSC","classNum":"220","title":"LIFESPAN GROWTH&DEVELOP. ","section":"01","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"SP S110 LOY","semester":"Fall 2016","classid":1086}
        ,
        {"faculty":"AHSC","classNum":"225","title":"Self-Managed Learning ","section":"01","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CC 119 LOY","semester":"Fall 2016","classid":1087}
        ,
        {"faculty":"AHSC","classNum":"230","title":"Interpersonal Communication and Relationships ","section":"51","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"VE 326 LOY","semester":"Fall 2016","classid":1088}
        ,
        {"faculty":"AHSC","classNum":"230","title":"Interpersonal Communication and Relationships ","section":"52","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"VE 326 LOY","semester":"Fall 2016","classid":1089}
        ,
        {"faculty":"AHSC","classNum":"230","title":"Interpersonal Communication and Relationships ","section":"02","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":1090}
        ,
        {"faculty":"AHSC","classNum":"230","title":"Interpersonal Communication and Relationships ","section":"04","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"VE 226 LOY","semester":"Fall 2016","classid":1091}
        ,
        {"faculty":"AHSC","classNum":"230","title":"Interpersonal Communication and Relationships ","section":"03","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"VE 226 LOY","semester":"Fall 2016","classid":1092}
        ,
        {"faculty":"AHSC","classNum":"230","title":"Interpersonal Communication and Relationships ","section":"01","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CC 119 LOY","semester":"Fall 2016","classid":1093}
        ,
        {"faculty":"AHSC","classNum":"232","title":"Working in Task Groups ","section":"01","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"VE 326 LOY","semester":"Fall 2016","classid":1094}
        ,
        {"faculty":"AHSC","classNum":"241","title":"Recreation and Leisure in Contemporary Society ","section":"01","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"VE 226 LOY","semester":"Fall 2016","classid":1095}
        ,
        {"faculty":"AHSC","classNum":"260","title":"Program Planning, Design and Evaluation ","section":"51","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"VE 326 LOY","semester":"Fall 2016","classid":1097}
        ,
        {"faculty":"AHSC","classNum":"260","title":"Program Planning, Design and Evaluation ","section":"03","type":"LEC","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":1099}
        ,
        {"faculty":"AHSC","classNum":"260","title":"Program Planning, Design and Evaluation ","section":"02","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1100}
        ,
        {"faculty":"AHSC","classNum":"260","title":"Program Planning, Design and Evaluation ","section":"01","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":1101}
        ,
        {"faculty":"AHSC","classNum":"270","title":"Introduction to Intervention in Human Systems ","section":"51","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"SP S110 LOY","semester":"Fall 2016","classid":1102}
        ,
        {"faculty":"AHSC","classNum":"281","title":"Introduction to Therapeutic Recreation ","section":"01","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"VE 326 LOY","semester":"Fall 2016","classid":1103}
        ,
        {"faculty":"AHSC","classNum":"311","title":"Respecting Diversity in Human Relations ","section":"01","type":"LEC","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1104}
        ,
        {"faculty":"AHSC","classNum":"311","title":"Respecting Diversity in Human Relations ","section":"51","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":1105}
        ,
        {"faculty":"AHSC","classNum":"312","title":"Sexuality in Human Relations ","section":"01","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1106}
        ,
        {"faculty":"AHSC","classNum":"312","title":"Sexuality in Human Relations ","section":"51","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1107}
        ,
        {"faculty":"AHSC","classNum":"313","title":"Family Communication ","section":"01","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1108}
        ,
        {"faculty":"AHSC","classNum":"314","title":"Adolescence: Issues and Intervention ","section":"51","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1109}
        ,
        {"faculty":"AHSC","classNum":"315","title":"Interviewing ","section":"51","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":1110}
        ,
        {"faculty":"AHSC","classNum":"319","title":"Older Adulthood: Issues and Intervention ","section":"01","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":1111}
        ,
        {"faculty":"AHSC","classNum":"335","title":"Power and Conflict Resolution in Human Systems ","section":"01","type":"LEC","day":"Th","timeBegin":"4:15PM","timeEnd":"7:00PM","room":"HC 155 LOY","semester":"Fall 2016","classid":1112}
        ,
        {"faculty":"AHSC","classNum":"350","title":"Leisure Education ","section":"01","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":1113}
        ,
        {"faculty":"AHSC","classNum":"360","title":"Play, Adult Learning and Development ","section":"1","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"VE 326 LOY","semester":"Fall 2016","classid":1114}
        ,
        {"faculty":"AHSC","classNum":"361","title":"Leisure Services Leadership ","section":"01","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1115}
        ,
        {"faculty":"AHSC","classNum":"380","title":"Quantitative Research Methods for Practitioners ","section":"01","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"VE 326 LOY","semester":"Fall 2016","classid":1117}
        ,
        {"faculty":"AHSC","classNum":"382","title":"Qualitative Research Methods for Practitioners ","section":"01","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1118}
        ,
        {"faculty":"AHSC","classNum":"383","title":"Therapeutic Recreation and Physical Disabilities ","section":"0151","type":"LAB","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"CC 314 LOY","semester":"Fall 2016","classid":1119}
        ,
        {"faculty":"AHSC","classNum":"383","title":"Therapeutic Recreation and Physical Disabilities ","section":"01","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"VE 326 LOY","semester":"Fall 2016","classid":1120}
        ,
        {"faculty":"AHSC","classNum":"423","title":"Organization Development I ","section":"51","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":1121}
        ,
        {"faculty":"AHSC","classNum":"423","title":"Organization Development I ","section":"01","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CC 119 LOY","semester":"Fall 2016","classid":1122}
        ,
        {"faculty":"AHSC","classNum":"427","title":"Administration of Leisure Services ","section":"01","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"VE 226 LOY","semester":"Fall 2016","classid":1123}
        ,
        {"faculty":"AHSC","classNum":"431","title":"Leisure Sciences Seminar ","section":"01","type":"SEM","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"VE 317 LOY","semester":"Fall 2016","classid":1124}
        ,
        {"faculty":"AHSC","classNum":"435","title":"Fieldwork Practice ","section":"01","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"VE 317 LOY","semester":"Fall 2016","classid":1125}
        ,
        {"faculty":"AHSC","classNum":"435","title":"Fieldwork Practice ","section":"51","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"VE 317 LOY","semester":"Fall 2016","classid":1126}
        ,
        {"faculty":"AHSC","classNum":"435","title":"Fieldwork Practice ","section":"52","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"VE 317 LOY","semester":"Fall 2016","classid":1127}
        ,
        {"faculty":"AHSC","classNum":"437","title":"Internship in Leisure Sciences ","section":"01","type":"SEM","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"VE 317 LOY","semester":"Fall 2016","classid":1128}
        ,
        {"faculty":"AHSC","classNum":"438","title":"INTERNSHIP: THER. REC ","section":"51","type":"SEM","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"VE 317 LOY","semester":"Fall 2016","classid":1129}
        ,
        {"faculty":"AHSC","classNum":"443","title":"Community Development I ","section":"01","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1130}
        ,
        {"faculty":"AHSC","classNum":"443","title":"Community Development I ","section":"51","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":1131}
        ,
        {"faculty":"AHSC","classNum":"450","title":"Leisure Assessment and Counselling ","section":"01","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"VE 326 LOY","semester":"Fall 2016","classid":1132}
        ,
        {"faculty":"AHSC","classNum":"490","title":"Independent Study I ","section":"51","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1133}
        ,
        {"faculty":"AHSC","classNum":"491","title":"Independent Study II ","section":"51","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1134}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":1141}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":1142}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"A H","type":"TUT","day":"We","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":1143}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"A G","type":"TUT","day":"We","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":1144}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"A F","type":"TUT","day":"We","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":1145}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"A E","type":"TUT","day":"We","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":1146}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"A D","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":1147}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"A C","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":1148}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"A A","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":1149}
        ,
        {"faculty":"ANTH","classNum":"202","title":"Introduction to Culture ","section":"A B","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":1150}
        ,
        {"faculty":"ANTH","classNum":"272","title":"Comparative Culture ","section":"A","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 557 SGW","semester":"Fall 2016","classid":1152}
        ,
        {"faculty":"ANTH","classNum":"276","title":"GENDER AND SOCIETY ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B050 SGW","semester":"Fall 2016","classid":1153}
        ,
        {"faculty":"ANTH","classNum":"285","title":"INTRO TO LAW & SOCIETY ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 420 SGW","semester":"Fall 2016","classid":1154}
        ,
        {"faculty":"ANTH","classNum":"375","title":"Social Construction of Sexualities ","section":"A","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":1157}
        ,
        {"faculty":"ANTH","classNum":"441","title":"MATERIAL CULTURE ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":1159}
        ,
        {"faculty":"ANTH","classNum":"471","title":"Food and Social Change ","section":"A","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 427 SGW","semester":"Fall 2016","classid":1160}
        ,
        {"faculty":"ARTE","classNum":"201","title":"Art in Early Childhood I ","section":"A","type":"STU","day":"Fr","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":1174}
        ,
        {"faculty":"ARTE","classNum":"220","title":"Foundations of Art Education ","section":"AA","type":"STU","day":"Tu","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":1175}
        ,
        {"faculty":"ARTE","classNum":"220","title":"Foundations of Art Education ","section":"A","type":"STU","day":"Mo","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":1176}
        ,
        {"faculty":"ARTE","classNum":"320","title":"Multidisciplinary Approaches to Art and Teaching ","section":"A","type":"STU","day":"Th","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":1177}
        ,
        {"faculty":"ARTE","classNum":"320","title":"Multidisciplinary Approaches to Art and Teaching ","section":"AA","type":"STU","day":"We","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":1178}
        ,
        {"faculty":"ARTE","classNum":"352","title":"Light?Based Media ","section":"A","type":"STU","day":"Tu","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":1179}
        ,
        {"faculty":"ARTE","classNum":"354","title":"Time?Based Media ","section":"AA","type":"STU","day":"Th","timeBegin":"5:30PM","timeEnd":"9:30PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":1180}
        ,
        {"faculty":"ARTE","classNum":"420","title":"Art Education for Elementary School ","section":"A","type":"STU","day":"Mo","timeBegin":"1:30PM","timeEnd":"3:30PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":1181}
        ,
        {"faculty":"ARTE","classNum":"421","title":"Practicum in the Elementary School ","section":"A","type":"PRA","day":"TuFr","timeBegin":"9:00AM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":1182}
        ,
        {"faculty":"ARTE","classNum":"422","title":"Art Education in the Secondary School I ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:00PM","timeEnd":"3:00PM","room":"EV 6.735 SGW","semester":"Fall 2016","classid":1183}
        ,
        {"faculty":"ARTE","classNum":"423","title":"Practicum in the Secondary School I ","section":"A","type":"PRA","day":"TuTh","timeBegin":"9:00AM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":1184}
        ,
        {"faculty":"ARTE","classNum":"432","title":"Community Art Education: Theory and Practice ","section":"A","type":"STU","day":"We","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":1185}
        ,
        {"faculty":"ARTH","classNum":"267","title":"Aspects of the History of Photography ","section":"A","type":"LEC","day":"Tu","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":1209}
        ,
        {"faculty":"ARTH","classNum":"271","title":"Introduction to Canadian Art ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":1210}
        ,
        {"faculty":"ARTH","classNum":"353","title":"Technology and Contemporary Art ","section":"A","type":"LEC","day":"Mo","timeBegin":"12:15PM","timeEnd":"2:45PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":1212}
        ,
        {"faculty":"ARTH","classNum":"369","title":"Studies in Near Eastern Art and Architecture ","section":"A","type":"LEC","day":"Th","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":1215}
        ,
        {"faculty":"ARTH","classNum":"386","title":"Art and the Viewer ","section":"A","type":"LEC","day":"We","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":1217}
        ,
        {"faculty":"ARTH","classNum":"401","title":"INDEPENDENT STUDIES IN ARTH ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1218}
        ,
        {"faculty":"ARTH","classNum":"403","title":"INTERNSHIP ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1219}
        ,
        {"faculty":"ARTT","classNum":"471","title":"Professional Internship I ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1229}
        ,
        {"faculty":"ARTT","classNum":"472","title":"Professional Internship II ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1230}
        ,
        {"faculty":"ARTX","classNum":"491","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1231}
        ,
        {"faculty":"ARTX","classNum":"492","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1232}
        ,
        {"faculty":"ATRP","classNum":"301","title":"An Introduction to Art Therapy ","section":"A","type":"LEC","day":"We","timeBegin":"12:30PM","timeEnd":"3:00PM","room":"VA 215 SGW","semester":"Fall 2016","classid":1233}
        ,
        {"faculty":"BCEE","classNum":"231","title":"Structured Programming and Applications for Building and Civil Engineers ","section":"M MC","type":"TUT","day":"Mo","timeBegin":"5:15PM","timeEnd":"6:05PM","room":"TBA","semester":"Fall 2016","classid":1243}
        ,
        {"faculty":"BCEE","classNum":"231","title":"Structured Programming and Applications for Building and Civil Engineers ","section":"M MB","type":"TUT","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":1244}
        ,
        {"faculty":"BCEE","classNum":"231","title":"Structured Programming and Applications for Building and Civil Engineers ","section":"M MA","type":"TUT","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":1245}
        ,
        {"faculty":"BCEE","classNum":"231","title":"Structured Programming and Applications for Building and Civil Engineers ","section":"M","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 407 SGW","semester":"Fall 2016","classid":1246}
        ,
        {"faculty":"BCEE","classNum":"231","title":"Structured Programming and Applications for Building and Civil Engineers ","section":"L LC","type":"TUT","day":"Fr","timeBegin":"4:40PM","timeEnd":"5:30PM","room":"TBA","semester":"Fall 2016","classid":1247}
        ,
        {"faculty":"BCEE","classNum":"231","title":"Structured Programming and Applications for Building and Civil Engineers ","section":"L LB","type":"TUT","day":"Fr","timeBegin":"12:15PM","timeEnd":"1:05PM","room":"TBA","semester":"Fall 2016","classid":1248}
        ,
        {"faculty":"BCEE","classNum":"231","title":"Structured Programming and Applications for Building and Civil Engineers ","section":"L LA","type":"TUT","day":"Fr","timeBegin":"4:40PM","timeEnd":"5:30PM","room":"TBA","semester":"Fall 2016","classid":1249}
        ,
        {"faculty":"BCEE","classNum":"231","title":"Structured Programming and Applications for Building and Civil Engineers ","section":"L","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":1250}
        ,
        {"faculty":"BCEE","classNum":"342","title":"Structural Analysis I ","section":"L","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 435 SGW","semester":"Fall 2016","classid":1251}
        ,
        {"faculty":"BCEE","classNum":"342","title":"Structural Analysis I ","section":"X XA","type":"TUT","day":"Tu","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"H 407 SGW","semester":"Fall 2016","classid":1252}
        ,
        {"faculty":"BCEE","classNum":"342","title":"Structural Analysis I ","section":"X","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 431 SGW","semester":"Fall 2016","classid":1253}
        ,
        {"faculty":"BCEE","classNum":"342","title":"Structural Analysis I ","section":"L LA","type":"TUT","day":"Th","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"H 407 SGW","semester":"Fall 2016","classid":1254}
        ,
        {"faculty":"BCEE","classNum":"344","title":"Structural Design I ","section":"L LJ","type":"TUT","day":"Tu","timeBegin":"11:45AM","timeEnd":"1:35PM","room":"FG B080 SGW","semester":"Fall 2016","classid":1255}
        ,
        {"faculty":"BCEE","classNum":"344","title":"Structural Design I ","section":"L","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 411 SGW","semester":"Fall 2016","classid":1256}
        ,
        {"faculty":"BCEE","classNum":"344","title":"Structural Design I ","section":"L LI","type":"TUT","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"FG B080 SGW","semester":"Fall 2016","classid":1257}
        ,
        {"faculty":"BCEE","classNum":"344","title":"Structural Design I ","section":"V VB","type":"TUT","day":"Th","timeBegin":"11:45AM","timeEnd":"1:35PM","room":"FG B055 SGW","semester":"Fall 2016","classid":1258}
        ,
        {"faculty":"BCEE","classNum":"344","title":"Structural Design I ","section":"V","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 553 SGW","semester":"Fall 2016","classid":1259}
        ,
        {"faculty":"BCEE","classNum":"344","title":"Structural Design I ","section":"V VA","type":"TUT","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"FG B080 SGW","semester":"Fall 2016","classid":1260}
        ,
        {"faculty":"BCEE","classNum":"345","title":"Structural Design II ","section":"X","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB S2.285 SGW","semester":"Fall 2016","classid":1261}
        ,
        {"faculty":"BCEE","classNum":"345","title":"Structural Design II ","section":"X XI","type":"TUT","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"H 403 SGW","semester":"Fall 2016","classid":1262}
        ,
        {"faculty":"BCEE","classNum":"451","title":"Construction Engineering ","section":"LL","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG C070 SGW","semester":"Fall 2016","classid":1263}
        ,
        {"faculty":"BCEE","classNum":"452","title":"Matrix Analysis of Structures ","section":"LL","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 535 SGW","semester":"Fall 2016","classid":1264}
        ,
        {"faculty":"BCEE","classNum":"464","title":"Project Cost Estimating ","section":"V","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 415 SGW","semester":"Fall 2016","classid":1265}
        ,
        {"faculty":"BIOL","classNum":"201","title":"Introductory Biology ","section":"04L","type":"LAB","day":"Fr","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 380-2 LOY","semester":"Fall 2016","classid":1267}
        ,
        {"faculty":"BIOL","classNum":"201","title":"Introductory Biology ","section":"02","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 310 LOY","semester":"Fall 2016","classid":1268}
        ,
        {"faculty":"BIOL","classNum":"201","title":"Introductory Biology ","section":"03L","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 380-2 LOY","semester":"Fall 2016","classid":1269}
        ,
        {"faculty":"BIOL","classNum":"201","title":"Introductory Biology ","section":"02L","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 380-2 LOY","semester":"Fall 2016","classid":1270}
        ,
        {"faculty":"BIOL","classNum":"201","title":"Introductory Biology ","section":"01L","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 380-2 LOY","semester":"Fall 2016","classid":1271}
        ,
        {"faculty":"BIOL","classNum":"201","title":"Introductory Biology ","section":"01","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":1272}
        ,
        {"faculty":"BIOL","classNum":"202","title":"General Biology ","section":"02","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"SP S110 LOY","semester":"Fall 2016","classid":1273}
        ,
        {"faculty":"BIOL","classNum":"202","title":"General Biology ","section":"01","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"SP S110 LOY","semester":"Fall 2016","classid":1274}
        ,
        {"faculty":"BIOL","classNum":"203","title":"Fundamental Nutrition ","section":"A","type":"LEC","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 937 SGW","semester":"Fall 2016","classid":1275}
        ,
        {"faculty":"BIOL","classNum":"225","title":"Form and Function of Organisms ","section":"01","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"SP S110 LOY","semester":"Fall 2016","classid":1276}
        ,
        {"faculty":"BIOL","classNum":"226","title":"Biodiversity and Ecology ","section":"01","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"SP S110 LOY","semester":"Fall 2016","classid":1277}
        ,
        {"faculty":"BIOL","classNum":"227","title":"Laboratory Studies in Biodiversity ","section":"0101","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 380-19 LOY","semester":"Fall 2016","classid":1278}
        ,
        {"faculty":"BIOL","classNum":"227","title":"Laboratory Studies in Biodiversity ","section":"0103","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 380-19 LOY","semester":"Fall 2016","classid":1279}
        ,
        {"faculty":"BIOL","classNum":"227","title":"Laboratory Studies in Biodiversity ","section":"01","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"HC 155 LOY","semester":"Fall 2016","classid":1280}
        ,
        {"faculty":"BIOL","classNum":"227","title":"Laboratory Studies in Biodiversity ","section":"0102","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 380-19 LOY","semester":"Fall 2016","classid":1281}
        ,
        {"faculty":"BIOL","classNum":"261","title":"Molecular and General Genetics ","section":"0108","type":"TUT","day":"Th","timeBegin":"3:30PM","timeEnd":"5:30PM","room":"CC 305 LOY","semester":"Fall 2016","classid":1282}
        ,
        {"faculty":"BIOL","classNum":"261","title":"Molecular and General Genetics ","section":"0107","type":"TUT","day":"Th","timeBegin":"1:30PM","timeEnd":"3:30PM","room":"CC 305 LOY","semester":"Fall 2016","classid":1283}
        ,
        {"faculty":"BIOL","classNum":"261","title":"Molecular and General Genetics ","section":"0105","type":"TUT","day":"We","timeBegin":"1:30PM","timeEnd":"3:30PM","room":"CC 305 LOY","semester":"Fall 2016","classid":1284}
        ,
        {"faculty":"BIOL","classNum":"261","title":"Molecular and General Genetics ","section":"0104","type":"TUT","day":"Tu","timeBegin":"3:30PM","timeEnd":"5:30PM","room":"CC 314 LOY","semester":"Fall 2016","classid":1285}
        ,
        {"faculty":"BIOL","classNum":"261","title":"Molecular and General Genetics ","section":"0103","type":"TUT","day":"Tu","timeBegin":"1:30PM","timeEnd":"3:30PM","room":"CC 314 LOY","semester":"Fall 2016","classid":1286}
        ,
        {"faculty":"BIOL","classNum":"261","title":"Molecular and General Genetics ","section":"0102","type":"TUT","day":"Tu","timeBegin":"3:30PM","timeEnd":"5:30PM","room":"CC 305 LOY","semester":"Fall 2016","classid":1287}
        ,
        {"faculty":"BIOL","classNum":"261","title":"Molecular and General Genetics ","section":"0101","type":"TUT","day":"Tu","timeBegin":"1:30PM","timeEnd":"3:30PM","room":"CC 305 LOY","semester":"Fall 2016","classid":1288}
        ,
        {"faculty":"BIOL","classNum":"261","title":"Molecular and General Genetics ","section":"01","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"SP S110 LOY","semester":"Fall 2016","classid":1289}
        ,
        {"faculty":"BIOL","classNum":"261","title":"Molecular and General Genetics ","section":"0106","type":"TUT","day":"We","timeBegin":"3:30PM","timeEnd":"5:30PM","room":"CC 305 LOY","semester":"Fall 2016","classid":1290}
        ,
        {"faculty":"BIOL","classNum":"266","title":"Cell Biology ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"SP S110 LOY","semester":"Fall 2016","classid":1291}
        ,
        {"faculty":"BIOL","classNum":"266","title":"Cell Biology ","section":"02","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"SI H01 LOY","semester":"Fall 2016","classid":1292}
        ,
        {"faculty":"BIOL","classNum":"322","title":"Biostatistics ","section":"0101","type":"LAB","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CC 203 LOY","semester":"Fall 2016","classid":1293}
        ,
        {"faculty":"BIOL","classNum":"322","title":"Biostatistics ","section":"0103","type":"LAB","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CC 203 LOY","semester":"Fall 2016","classid":1294}
        ,
        {"faculty":"BIOL","classNum":"322","title":"Biostatistics ","section":"0104","type":"LAB","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CC 203 LOY","semester":"Fall 2016","classid":1295}
        ,
        {"faculty":"BIOL","classNum":"322","title":"Biostatistics ","section":"0105","type":"LAB","day":"We","timeBegin":"4:15PM","timeEnd":"7:00PM","room":"CC 203 LOY","semester":"Fall 2016","classid":1296}
        ,
        {"faculty":"BIOL","classNum":"322","title":"Biostatistics ","section":"0102","type":"LAB","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CC 203 LOY","semester":"Fall 2016","classid":1297}
        ,
        {"faculty":"BIOL","classNum":"322","title":"Biostatistics ","section":"01","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"SP S110 LOY","semester":"Fall 2016","classid":1298}
        ,
        {"faculty":"BIOL","classNum":"340","title":"Plant Biology ","section":"01","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 112 LOY","semester":"Fall 2016","classid":1299}
        ,
        {"faculty":"BIOL","classNum":"340","title":"Plant Biology ","section":"0101","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM\nWe","room":"SP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY","semester":"Fall 2016","classid":1300}
        ,
        {"faculty":"BIOL","classNum":"350","title":"The Ecology of Individuals ","section":"01","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"CC 310 LOY","semester":"Fall 2016","classid":1301}
        ,
        {"faculty":"BIOL","classNum":"354","title":"Behavioural Ecology ","section":"0101","type":"TUT","day":"We","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 314 LOY","semester":"Fall 2016","classid":1302}
        ,
        {"faculty":"BIOL","classNum":"354","title":"Behavioural Ecology ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"Academic scheduling use only","semester":"Fall 2016","classid":1303}
        ,
        {"faculty":"BIOL","classNum":"354","title":"Behavioural Ecology ","section":"0102","type":"TUT","day":"Th","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 314 LOY","semester":"Fall 2016","classid":1304}
        ,
        {"faculty":"BIOL","classNum":"364","title":"Cell Physiology ","section":"01","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"HC 157 LOY","semester":"Fall 2016","classid":1305}
        ,
        {"faculty":"BIOL","classNum":"367","title":"Molecular Biology ","section":"01","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"HC 155 LOY","semester":"Fall 2016","classid":1306}
        ,
        {"faculty":"BIOL","classNum":"367","title":"Molecular Biology ","section":"0102","type":"TUT","day":"We","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 112 LOY","semester":"Fall 2016","classid":1307}
        ,
        {"faculty":"BIOL","classNum":"367","title":"Molecular Biology ","section":"0101","type":"TUT","day":"Tu","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 321 LOY","semester":"Fall 2016","classid":1308}
        ,
        {"faculty":"BIOL","classNum":"368","title":"Genetics and Cell Biology Laboratory ","section":"0103","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 385-9 LOY","semester":"Fall 2016","classid":1309}
        ,
        {"faculty":"BIOL","classNum":"368","title":"Genetics and Cell Biology Laboratory ","section":"0102","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 385-9 LOY","semester":"Fall 2016","classid":1310}
        ,
        {"faculty":"BIOL","classNum":"368","title":"Genetics and Cell Biology Laboratory ","section":"0101","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 385-9 LOY","semester":"Fall 2016","classid":1311}
        ,
        {"faculty":"BIOL","classNum":"368","title":"Genetics and Cell Biology Laboratory ","section":"01","type":"LEC","day":"Fr","timeBegin":"2:30PM","timeEnd":"4:00PM","room":"CC 115 LOY","semester":"Fall 2016","classid":1312}
        ,
        {"faculty":"BIOL","classNum":"371","title":"Microbiology ","section":"01","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"SI H01 LOY","semester":"Fall 2016","classid":1313}
        ,
        {"faculty":"BIOL","classNum":"382","title":"Comparative Animal Physiology ","section":"0102","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM\nTh","room":"SP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY","semester":"Fall 2016","classid":1314}
        ,
        {"faculty":"BIOL","classNum":"382","title":"Comparative Animal Physiology ","section":"0101","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM\nWe","room":"SP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY","semester":"Fall 2016","classid":1315}
        ,
        {"faculty":"BIOL","classNum":"382","title":"Comparative Animal Physiology ","section":"01","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 301 LOY","semester":"Fall 2016","classid":1316}
        ,
        {"faculty":"BIOL","classNum":"462","title":"Immunology ","section":"51","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"CC 314 LOY","semester":"Fall 2016","classid":1317}
        ,
        {"faculty":"BIOL","classNum":"468","title":"ADV TOPICS-CELL+MOLEC BIOL ","section":"01","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 305 LOY","semester":"Fall 2016","classid":1319}
        ,
        {"faculty":"BIOL","classNum":"481","title":"Structural Genomics ","section":"01","type":"LEC","day":"WeFr","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"CC 405 LOY","semester":"Fall 2016","classid":1320}
        ,
        {"faculty":"BIOL","classNum":"490","title":"Independent Study ","section":"01","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1321}
        ,
        {"faculty":"BLDG","classNum":"212","title":"Building Engineering Drawing and Introduction to Design ","section":"L","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 531 SGW","semester":"Fall 2016","classid":1332}
        ,
        {"faculty":"BLDG","classNum":"212","title":"Building Engineering Drawing and Introduction to Design ","section":"L LA","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":1333}
        ,
        {"faculty":"BLDG","classNum":"212","title":"Building Engineering Drawing and Introduction to Design ","section":"L LB","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":1334}
        ,
        {"faculty":"BLDG","classNum":"212","title":"Building Engineering Drawing and Introduction to Design ","section":"L LC","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":1335}
        ,
        {"faculty":"BLDG","classNum":"341","title":"Building Engineering Systems ","section":"L","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG B060 SGW","semester":"Fall 2016","classid":1336}
        ,
        {"faculty":"BLDG","classNum":"390","title":"Building Engineering Design Project ","section":"VVVC","type":"LAB","day":"We","timeBegin":"8:30PM","timeEnd":"10:30PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1337}
        ,
        {"faculty":"BLDG","classNum":"390","title":"Building Engineering Design Project ","section":"VVVB","type":"LAB","day":"Th","timeBegin":"8:30PM","timeEnd":"10:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1338}
        ,
        {"faculty":"BLDG","classNum":"390","title":"Building Engineering Design Project ","section":"VVVA","type":"LAB","day":"Th","timeBegin":"8:30PM","timeEnd":"10:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1339}
        ,
        {"faculty":"BLDG","classNum":"390","title":"Building Engineering Design Project ","section":"VV","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 937 SGW","semester":"Fall 2016","classid":1340}
        ,
        {"faculty":"BLDG","classNum":"463","title":"Building Envelope Design ","section":"LL","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 920 SGW","semester":"Fall 2016","classid":1341}
        ,
        {"faculty":"BLDG","classNum":"471","title":"HVAC System Design ","section":"L LJ","type":"LAB","day":"We","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":1342}
        ,
        {"faculty":"BLDG","classNum":"471","title":"HVAC System Design ","section":"L LN","type":"LAB","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"TBA","semester":"Fall 2016","classid":1343}
        ,
        {"faculty":"BLDG","classNum":"471","title":"HVAC System Design ","section":"L LM","type":"LAB","day":"Fr","timeBegin":"3:30PM","timeEnd":"5:20PM","room":"TBA","semester":"Fall 2016","classid":1344}
        ,
        {"faculty":"BLDG","classNum":"471","title":"HVAC System Design ","section":"L LL","type":"LAB","day":"Fr","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":1345}
        ,
        {"faculty":"BLDG","classNum":"471","title":"HVAC System Design ","section":"L LK","type":"LAB","day":"Fr","timeBegin":"9:30AM","timeEnd":"11:20AM","room":"TBA","semester":"Fall 2016","classid":1346}
        ,
        {"faculty":"BLDG","classNum":"471","title":"HVAC System Design ","section":"L","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 521 SGW","semester":"Fall 2016","classid":1347}
        ,
        {"faculty":"BLDG","classNum":"471","title":"HVAC System Design ","section":"L LI","type":"LAB","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":1348}
        ,
        {"faculty":"BLDG","classNum":"474","title":"Building Illumination and Daylighting ","section":"VV","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":1349}
        ,
        {"faculty":"BLDG","classNum":"476","title":"Thermal Analysis of Buildings ","section":"L LB","type":"TUT","day":"Th","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":1350}
        ,
        {"faculty":"BLDG","classNum":"476","title":"Thermal Analysis of Buildings ","section":"L","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 920 SGW","semester":"Fall 2016","classid":1351}
        ,
        {"faculty":"BLDG","classNum":"476","title":"Thermal Analysis of Buildings ","section":"L LA","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"H 537 SGW","semester":"Fall 2016","classid":1352}
        ,
        {"faculty":"BLDG","classNum":"478","title":"Project Management for Construction ","section":"VV","type":"LEC","day":"Fr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 411 SGW","semester":"Fall 2016","classid":1353}
        ,
        {"faculty":"BLDG","classNum":"491","title":"Labour and Industrial Relations in Construction ","section":"LL","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 509 SGW","semester":"Fall 2016","classid":1354}
        ,
        {"faculty":"BSTA","classNum":"378","title":"STAT. MODELS-DATA ANALYSIS ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 423 SGW","semester":"Fall 2016","classid":1365}
        ,
        {"faculty":"BSTA","classNum":"445","title":"STAT SOFTWR/DATA MANA & ANAL ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 523 SGW","semester":"Fall 2016","classid":1366}
        ,
        {"faculty":"BTM","classNum":"200","title":"FUNDMNTLS OF INFO TECHNOLOGY ","section":"X","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":1367}
        ,
        {"faculty":"BTM","classNum":"380","title":"Introduction to Business Application Development ","section":"A","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 631 SGW","semester":"Fall 2016","classid":1368}
        ,
        {"faculty":"BTM","classNum":"382","title":"Database Management ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":1369}
        ,
        {"faculty":"BTM","classNum":"481","title":"Information Systems Analysis ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":1371}
        ,
        {"faculty":"BTM","classNum":"495","title":"Information Systems Design and Implementation ","section":"A","type":"LEC","day":"Fr","timeBegin":"5:30PM","timeEnd":"8:15PM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":1372}
        ,
        {"faculty":"BTM","classNum":"496","title":"Information Technology Strategy, Management, and Sourcing ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":1373}
        ,
        {"faculty":"CART","classNum":"211","title":"Creative Computing and Network Culture ","section":"A","type":"STU","day":"Th","timeBegin":"8:30AM","timeEnd":"10:30AM\nTh","room":"EV 5.615 SGW\nEV 5.635 SGW","semester":"Fall 2016","classid":1374}
        ,
        {"faculty":"CART","classNum":"211","title":"Creative Computing and Network Culture ","section":"B","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"3:30PM\nTh","room":"EV 5.615 SGW\nEV 5.635 SGW","semester":"Fall 2016","classid":1376}
        ,
        {"faculty":"CART","classNum":"214","title":"Visual Form and Communication ","section":"AA","type":"STU","day":"We","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":1377}
        ,
        {"faculty":"CART","classNum":"253","title":"Creative Computation I ","section":"B","type":"STU","day":"Tu","timeBegin":"1:30PM","timeEnd":"3:30PM\nTu","room":"EV 5.615 SGW\nEV 5.815 SGW","semester":"Fall 2016","classid":1378}
        ,
        {"faculty":"CART","classNum":"253","title":"Creative Computation I ","section":"A","type":"STU","day":"Mo","timeBegin":"8:30AM","timeEnd":"10:30AM\nMo","room":"EV 5.615 SGW\nEV 5.815 SGW","semester":"Fall 2016","classid":1379}
        ,
        {"faculty":"CART","classNum":"346","title":"Digital Sound I: Theory and Practice of Real?Time Audio ","section":"AA","type":"STU","day":"Tu","timeBegin":"6:30PM","timeEnd":"8:30PM\nTu","room":"EV 5.615 SGW\nEV 5.815 SGW","semester":"Fall 2016","classid":1380}
        ,
        {"faculty":"CART","classNum":"351","title":"Networks and Navigation ","section":"AA","type":"STU","day":"Mo","timeBegin":"6:30PM","timeEnd":"8:30PM\nWe","room":"EV 7.735 SGW\nEV 5.709 SGW","semester":"Fall 2016","classid":1381}
        ,
        {"faculty":"CART","classNum":"351","title":"Networks and Navigation ","section":"A","type":"STU","day":"We","timeBegin":"8:30AM","timeEnd":"10:30AM\nWe","room":"EV 5.615 SGW\nEV 5.709 SGW","semester":"Fall 2016","classid":1382}
        ,
        {"faculty":"CART","classNum":"360","title":"Tangible Media and Physical Computing ","section":"AA","type":"STU","day":"Th","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 7.765 SGW","semester":"Fall 2016","classid":1383}
        ,
        {"faculty":"CART","classNum":"361","title":"3D Digital Production I ","section":"A","type":"STU","day":"Fr","timeBegin":"8:30AM","timeEnd":"10:30AM\nFr","room":"EV 5.615 SGW\nEV 5.635 SGW","semester":"Fall 2016","classid":1384}
        ,
        {"faculty":"CART","classNum":"411","title":"Project Studio I ","section":"A","type":"STU","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 7.735 SGW","semester":"Fall 2016","classid":1385}
        ,
        {"faculty":"CART","classNum":"411","title":"Project Studio I ","section":"B","type":"STU","day":"Fr","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 7.735 SGW","semester":"Fall 2016","classid":1386}
        ,
        {"faculty":"CART","classNum":"415","title":"GAME STUDIO I ","section":"AA","type":"STU","day":"We","timeBegin":"6:30PM","timeEnd":"8:30PM\nWe","room":"EV 7.745 SGW\nEV 5.815 SGW","semester":"Fall 2016","classid":1387}
        ,
        {"faculty":"CART","classNum":"455","title":"Professional Internship I ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1388}
        ,
        {"faculty":"CART","classNum":"456","title":"Professional Internship II ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1389}
        ,
        {"faculty":"CART","classNum":"457","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1390}
        ,
        {"faculty":"CART","classNum":"458","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1391}
        ,
        {"faculty":"CART","classNum":"459","title":"INDEPENDENT STUDY III ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1392}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0103","type":"LAB","day":"We","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-01 LOY","semester":"Fall 2016","classid":1393}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"01","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"Academic scheduling use only","semester":"Fall 2016","classid":1394}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0101","type":"LAB","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-01 LOY","semester":"Fall 2016","classid":1395}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0102","type":"LAB","day":"Tu","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-01 LOY","semester":"Fall 2016","classid":1396}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0105","type":"LAB","day":"Fr","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-01 LOY","semester":"Fall 2016","classid":1397}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0104","type":"LAB","day":"Th","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-01 LOY","semester":"Fall 2016","classid":1398}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0204","type":"LAB","day":"Th","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-07 LOY","semester":"Fall 2016","classid":1399}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0203","type":"LAB","day":"We","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-07 LOY","semester":"Fall 2016","classid":1400}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0202","type":"LAB","day":"Tu","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-07 LOY","semester":"Fall 2016","classid":1401}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0201","type":"LAB","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-07 LOY","semester":"Fall 2016","classid":1402}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"02","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"HC 157 LOY","semester":"Fall 2016","classid":1403}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0205","type":"LAB","day":"Fr","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"SP S165-07 LOY","semester":"Fall 2016","classid":1404}
        ,
        {"faculty":"CATA","classNum":"337","title":"Assessment of the Upper and Lower Extremities ","section":"0104","type":"LAB","day":"Th","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1405}
        ,
        {"faculty":"CATA","classNum":"337","title":"Assessment of the Upper and Lower Extremities ","section":"0103","type":"LAB","day":"We","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1406}
        ,
        {"faculty":"CATA","classNum":"337","title":"Assessment of the Upper and Lower Extremities ","section":"0102","type":"LAB","day":"Tu","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1407}
        ,
        {"faculty":"CATA","classNum":"337","title":"Assessment of the Upper and Lower Extremities ","section":"0101","type":"LAB","day":"Mo","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1408}
        ,
        {"faculty":"CATA","classNum":"337","title":"Assessment of the Upper and Lower Extremities ","section":"01","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"CC 320 LOY","semester":"Fall 2016","classid":1409}
        ,
        {"faculty":"CATA","classNum":"339","title":"Rehabilitation of the Upper and Lower Extremities ","section":"0101","type":"LAB","day":"Mo","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1411}
        ,
        {"faculty":"CATA","classNum":"339","title":"Rehabilitation of the Upper and Lower Extremities ","section":"0102","type":"LAB","day":"Tu","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1412}
        ,
        {"faculty":"CATA","classNum":"339","title":"Rehabilitation of the Upper and Lower Extremities ","section":"0103","type":"LAB","day":"We","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1413}
        ,
        {"faculty":"CATA","classNum":"339","title":"Rehabilitation of the Upper and Lower Extremities ","section":"0104","type":"LAB","day":"Th","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1414}
        ,
        {"faculty":"CATA","classNum":"339","title":"Rehabilitation of the Upper and Lower Extremities ","section":"01","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"CC 310 LOY","semester":"Fall 2016","classid":1416}
        ,
        {"faculty":"CATA","classNum":"365","title":"Athletic Therapy Field Internship I ","section":"01","type":"PRA","day":"Fr","timeBegin":"9:00AM","timeEnd":"10:00AM","room":"CC 106 LOY","semester":"Fall 2016","classid":1417}
        ,
        {"faculty":"CATA","classNum":"390","title":"ATHL. THERAPY FIELD INTER. ","section":"01","type":"PRA","day":"Fr","timeBegin":"9:00AM","timeEnd":"10:00AM","room":"CC 305 LOY","semester":"Fall 2016","classid":1418}
        ,
        {"faculty":"CATA","classNum":"437","title":"Assessment of the Hip, Spine and Pelvis ","section":"01","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"CC 106 LOY","semester":"Fall 2016","classid":1419}
        ,
        {"faculty":"CATA","classNum":"437","title":"Assessment of the Hip, Spine and Pelvis ","section":"0104","type":"LAB","day":"Th","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"TBA","semester":"Fall 2016","classid":1420}
        ,
        {"faculty":"CATA","classNum":"437","title":"Assessment of the Hip, Spine and Pelvis ","section":"0103","type":"LAB","day":"We","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"TBA","semester":"Fall 2016","classid":1421}
        ,
        {"faculty":"CATA","classNum":"437","title":"Assessment of the Hip, Spine and Pelvis ","section":"0102","type":"LAB","day":"Tu","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"TBA","semester":"Fall 2016","classid":1422}
        ,
        {"faculty":"CATA","classNum":"437","title":"Assessment of the Hip, Spine and Pelvis ","section":"0101","type":"LAB","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:30PM","room":"TBA","semester":"Fall 2016","classid":1423}
        ,
        {"faculty":"CATA","classNum":"462","title":"Advanced Emergency Care ","section":"01","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"CC 308 LOY","semester":"Fall 2016","classid":1425}
        ,
        {"faculty":"CATA","classNum":"462","title":"Advanced Emergency Care ","section":"5101","type":"LAB","day":"Mo","timeBegin":"8:30AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1426}
        ,
        {"faculty":"CATA","classNum":"462","title":"Advanced Emergency Care ","section":"5102","type":"LAB","day":"We","timeBegin":"8:30AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1427}
        ,
        {"faculty":"CATA","classNum":"462","title":"Advanced Emergency Care ","section":"5103","type":"LAB","day":"Fr","timeBegin":"8:30AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":1428}
        ,
        {"faculty":"CATA","classNum":"475","title":"Athletic Therapy Clinical Internship I ","section":"01","type":"PRA","day":"Fr","timeBegin":"10:00AM","timeEnd":"11:00AM","room":"CJ 1.125 LOY","semester":"Fall 2016","classid":1430}
        ,
        {"faculty":"CATA","classNum":"480","title":"ATHL THER. CLINICAL INTERN ","section":"01","type":"PRA","day":"Fr","timeBegin":"10:00AM","timeEnd":"11:00AM","room":"CC 301 LOY","semester":"Fall 2016","classid":1431}
        ,
        {"faculty":"CATA","classNum":"485","title":"ATHL THER FIELD INTERN II ","section":"01","type":"PRA","day":"Fr","timeBegin":"9:00AM","timeEnd":"10:00AM","room":"CC 305 LOY","semester":"Fall 2016","classid":1432}
        ,
        {"faculty":"CATA","classNum":"495","title":"ATHL THER CLINICAL INTERN II ","section":"01","type":"PRA","day":"Fr","timeBegin":"10:00AM","timeEnd":"11:00AM","room":"CC 305 LOY","semester":"Fall 2016","classid":1433}
        ,
        {"faculty":"CERA","classNum":"451","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1443}
        ,
        {"faculty":"CERA","classNum":"452","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1444}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"02","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"SP S110 LOY","semester":"Fall 2016","classid":1445}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"HC 157 LOY","semester":"Fall 2016","classid":1446}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"01","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"HC 155 LOY","semester":"Fall 2016","classid":1447}
        ,
        {"faculty":"CHEM","classNum":"206","title":"General Chemistry II ","section":"51","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"HC 157 LOY","semester":"Fall 2016","classid":1448}
        ,
        {"faculty":"CHEM","classNum":"217","title":"Introductory Analytical Chemistry I ","section":"01","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"SI H01 LOY","semester":"Fall 2016","classid":1450}
        ,
        {"faculty":"CHEM","classNum":"217","title":"Introductory Analytical Chemistry I ","section":"02L","type":"LAB","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 210 LOY","semester":"Fall 2016","classid":1451}
        ,
        {"faculty":"CHEM","classNum":"217","title":"Introductory Analytical Chemistry I ","section":"03L","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 210 LOY","semester":"Fall 2016","classid":1452}
        ,
        {"faculty":"CHEM","classNum":"217","title":"Introductory Analytical Chemistry I ","section":"04L","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 210 LOY","semester":"Fall 2016","classid":1453}
        ,
        {"faculty":"CHEM","classNum":"217","title":"Introductory Analytical Chemistry I ","section":"51L","type":"LAB","day":"Mo","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 210 LOY","semester":"Fall 2016","classid":1454}
        ,
        {"faculty":"CHEM","classNum":"217","title":"Introductory Analytical Chemistry I ","section":"52L","type":"LAB","day":"Th","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 210 LOY","semester":"Fall 2016","classid":1455}
        ,
        {"faculty":"CHEM","classNum":"217","title":"Introductory Analytical Chemistry I ","section":"56L","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1456}
        ,
        {"faculty":"CHEM","classNum":"217","title":"Introductory Analytical Chemistry I ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 310 LOY","semester":"Fall 2016","classid":1457}
        ,
        {"faculty":"CHEM","classNum":"217","title":"Introductory Analytical Chemistry I ","section":"01L","type":"LAB","day":"Mo","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"SP 210 LOY","semester":"Fall 2016","classid":1458}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"HC 157 LOY","semester":"Fall 2016","classid":1459}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"01L","type":"LAB","day":"Mo","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"SP 116 LOY","semester":"Fall 2016","classid":1460}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"02L","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 116 LOY","semester":"Fall 2016","classid":1461}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"03L","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 116 LOY","semester":"Fall 2016","classid":1462}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"04L","type":"LAB","day":"Fr","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 116 LOY","semester":"Fall 2016","classid":1463}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"51","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"HC 157 LOY","semester":"Fall 2016","classid":1464}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"56L","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1465}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"52L","type":"LAB","day":"We","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 116 LOY","semester":"Fall 2016","classid":1466}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"51L","type":"LAB","day":"Tu","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 116 LOY","semester":"Fall 2016","classid":1467}
        ,
        {"faculty":"CHEM","classNum":"221","title":"Introductory Organic Chemistry I ","section":"05L","type":"LAB","day":"Fr","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"SP 116 LOY","semester":"Fall 2016","classid":1468}
        ,
        {"faculty":"CHEM","classNum":"222","title":"Introductory Organic Chemistry II ","section":"56L","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1469}
        ,
        {"faculty":"CHEM","classNum":"222","title":"Introductory Organic Chemistry II ","section":"01L","type":"LAB","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 116 LOY","semester":"Fall 2016","classid":1470}
        ,
        {"faculty":"CHEM","classNum":"222","title":"Introductory Organic Chemistry II ","section":"02L","type":"LAB","day":"Mo","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"SP 112 LOY","semester":"Fall 2016","classid":1471}
        ,
        {"faculty":"CHEM","classNum":"222","title":"Introductory Organic Chemistry II ","section":"03L","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 116 LOY","semester":"Fall 2016","classid":1472}
        ,
        {"faculty":"CHEM","classNum":"222","title":"Introductory Organic Chemistry II ","section":"04L","type":"LAB","day":"Fr","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 112 LOY","semester":"Fall 2016","classid":1473}
        ,
        {"faculty":"CHEM","classNum":"222","title":"Introductory Organic Chemistry II ","section":"51L","type":"LAB","day":"Tu","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 112 LOY","semester":"Fall 2016","classid":1474}
        ,
        {"faculty":"CHEM","classNum":"222","title":"Introductory Organic Chemistry II ","section":"52L","type":"LAB","day":"We","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 112 LOY","semester":"Fall 2016","classid":1475}
        ,
        {"faculty":"CHEM","classNum":"222","title":"Introductory Organic Chemistry II ","section":"02","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 310 LOY","semester":"Fall 2016","classid":1476}
        ,
        {"faculty":"CHEM","classNum":"222","title":"Introductory Organic Chemistry II ","section":"01","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"HC 157 LOY","semester":"Fall 2016","classid":1477}
        ,
        {"faculty":"CHEM","classNum":"234","title":"Physical Chemistry I: Thermodynamics ","section":"51","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 305 LOY","semester":"Fall 2016","classid":1478}
        ,
        {"faculty":"CHEM","classNum":"234","title":"Physical Chemistry I: Thermodynamics ","section":"01","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"HC 157 LOY","semester":"Fall 2016","classid":1479}
        ,
        {"faculty":"CHEM","classNum":"235","title":"Physical Chemistry: Kinetics of Chemical Reactions ","section":"01","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 312 LOY","semester":"Fall 2016","classid":1480}
        ,
        {"faculty":"CHEM","classNum":"235","title":"Physical Chemistry: Kinetics of Chemical Reactions ","section":"0101","type":"LAB","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 220 LOY","semester":"Fall 2016","classid":1481}
        ,
        {"faculty":"CHEM","classNum":"235","title":"Physical Chemistry: Kinetics of Chemical Reactions ","section":"0151","type":"LAB","day":"Th","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 220 LOY","semester":"Fall 2016","classid":1482}
        ,
        {"faculty":"CHEM","classNum":"235","title":"Physical Chemistry: Kinetics of Chemical Reactions ","section":"0156","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1483}
        ,
        {"faculty":"CHEM","classNum":"241","title":"Inorganic Chemistry I: Introduction to Periodicity and Valence Theory ","section":"0156","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1484}
        ,
        {"faculty":"CHEM","classNum":"241","title":"Inorganic Chemistry I: Introduction to Periodicity and Valence Theory ","section":"0102","type":"LAB","day":"Fr","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 210 LOY","semester":"Fall 2016","classid":1485}
        ,
        {"faculty":"CHEM","classNum":"241","title":"Inorganic Chemistry I: Introduction to Periodicity and Valence Theory ","section":"0101","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 210 LOY","semester":"Fall 2016","classid":1486}
        ,
        {"faculty":"CHEM","classNum":"241","title":"Inorganic Chemistry I: Introduction to Periodicity and Valence Theory ","section":"01","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"HC 155 LOY","semester":"Fall 2016","classid":1487}
        ,
        {"faculty":"CHEM","classNum":"271","title":"Biochemistry I ","section":"01","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"SP S110 LOY","semester":"Fall 2016","classid":1488}
        ,
        {"faculty":"CHEM","classNum":"312","title":"Intermediate Analytical Chemistry ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 204 LOY","semester":"Fall 2016","classid":1489}
        ,
        {"faculty":"CHEM","classNum":"312","title":"Intermediate Analytical Chemistry ","section":"0101","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 320 LOY","semester":"Fall 2016","classid":1490}
        ,
        {"faculty":"CHEM","classNum":"312","title":"Intermediate Analytical Chemistry ","section":"0102","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 320 LOY","semester":"Fall 2016","classid":1491}
        ,
        {"faculty":"CHEM","classNum":"312","title":"Intermediate Analytical Chemistry ","section":"0151","type":"LAB","day":"Mo","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 320 LOY","semester":"Fall 2016","classid":1492}
        ,
        {"faculty":"CHEM","classNum":"312","title":"Intermediate Analytical Chemistry ","section":"0156","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1493}
        ,
        {"faculty":"CHEM","classNum":"324","title":"Organic Chemistry III: Organic Reactions ","section":"5103","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 112 LOY","semester":"Fall 2016","classid":1494}
        ,
        {"faculty":"CHEM","classNum":"324","title":"Organic Chemistry III: Organic Reactions ","section":"5104","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 112 LOY","semester":"Fall 2016","classid":1495}
        ,
        {"faculty":"CHEM","classNum":"324","title":"Organic Chemistry III: Organic Reactions ","section":"5151","type":"LAB","day":"Mo","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 112 LOY","semester":"Fall 2016","classid":1496}
        ,
        {"faculty":"CHEM","classNum":"324","title":"Organic Chemistry III: Organic Reactions ","section":"5156","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1497}
        ,
        {"faculty":"CHEM","classNum":"324","title":"Organic Chemistry III: Organic Reactions ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"HC 155 LOY","semester":"Fall 2016","classid":1498}
        ,
        {"faculty":"CHEM","classNum":"324","title":"Organic Chemistry III: Organic Reactions ","section":"5101","type":"LAB","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 112 LOY","semester":"Fall 2016","classid":1499}
        ,
        {"faculty":"CHEM","classNum":"324","title":"Organic Chemistry III: Organic Reactions ","section":"5102","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 112 LOY","semester":"Fall 2016","classid":1500}
        ,
        {"faculty":"CHEM","classNum":"419","title":"Independent Study and Practicum ","section":"02","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1504}
        ,
        {"faculty":"CHEM","classNum":"450","title":"Research Project and Thesis ","section":"02","type":"THE","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1505}
        ,
        {"faculty":"CHEM","classNum":"477","title":"Advanced Laboratory in Biochemistry ","section":"02","type":"TUT","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:45PM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":1506}
        ,
        {"faculty":"CHEM","classNum":"477","title":"Advanced Laboratory in Biochemistry ","section":"04","type":"LAB","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 310 LOY","semester":"Fall 2016","classid":1507}
        ,
        {"faculty":"CHEM","classNum":"477","title":"Advanced Laboratory in Biochemistry ","section":"01","type":"TUT","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:45PM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":1508}
        ,
        {"faculty":"CHEM","classNum":"477","title":"Advanced Laboratory in Biochemistry ","section":"51","type":"TUT","day":"We","timeBegin":"6:00PM","timeEnd":"7:30PM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":1509}
        ,
        {"faculty":"CHEM","classNum":"477","title":"Advanced Laboratory in Biochemistry ","section":"03","type":"TUT","day":"Th","timeBegin":"4:15PM","timeEnd":"5:45PM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":1510}
        ,
        {"faculty":"CIVI","classNum":"212","title":"Civil Engineering Drawing and Introduction to Design ","section":"L LB","type":"TUT","day":"We","timeBegin":"3:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":1524}
        ,
        {"faculty":"CIVI","classNum":"212","title":"Civil Engineering Drawing and Introduction to Design ","section":"L LA","type":"TUT","day":"Tu","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":1525}
        ,
        {"faculty":"CIVI","classNum":"212","title":"Civil Engineering Drawing and Introduction to Design ","section":"L LG","type":"TUT","day":"Mo","timeBegin":"3:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":1526}
        ,
        {"faculty":"CIVI","classNum":"212","title":"Civil Engineering Drawing and Introduction to Design ","section":"L LF","type":"TUT","day":"We","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":1527}
        ,
        {"faculty":"CIVI","classNum":"212","title":"Civil Engineering Drawing and Introduction to Design ","section":"L LE","type":"TUT","day":"We","timeBegin":"3:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":1528}
        ,
        {"faculty":"CIVI","classNum":"212","title":"Civil Engineering Drawing and Introduction to Design ","section":"L LD","type":"TUT","day":"We","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"TBA","semester":"Fall 2016","classid":1529}
        ,
        {"faculty":"CIVI","classNum":"212","title":"Civil Engineering Drawing and Introduction to Design ","section":"L LC","type":"TUT","day":"Tu","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":1530}
        ,
        {"faculty":"CIVI","classNum":"212","title":"Civil Engineering Drawing and Introduction to Design ","section":"L","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 937 SGW","semester":"Fall 2016","classid":1531}
        ,
        {"faculty":"CIVI","classNum":"231","title":"Geology for Civil Engineers ","section":"LLLC","type":"TUT","day":"We","timeBegin":"7:30PM","timeEnd":"8:30PM","room":"FG B080 SGW","semester":"Fall 2016","classid":1532}
        ,
        {"faculty":"CIVI","classNum":"231","title":"Geology for Civil Engineers ","section":"LLLA","type":"TUT","day":"Mo","timeBegin":"8:30PM","timeEnd":"9:30PM","room":"H 629 SGW","semester":"Fall 2016","classid":1533}
        ,
        {"faculty":"CIVI","classNum":"231","title":"Geology for Civil Engineers ","section":"LL","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 937 SGW","semester":"Fall 2016","classid":1534}
        ,
        {"faculty":"CIVI","classNum":"231","title":"Geology for Civil Engineers ","section":"LLLB","type":"TUT","day":"Tu","timeBegin":"6:30PM","timeEnd":"7:30PM","room":"H 629 SGW","semester":"Fall 2016","classid":1535}
        ,
        {"faculty":"ENGL","classNum":"319","title":"Milton ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 501 SGW","semester":"Fall 2016","classid":2501}
        ,
        {"faculty":"CIVI","classNum":"372","title":"Transportation Engineering ","section":"L LB","type":"TUT","day":"Th","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"FG B040 SGW","semester":"Fall 2016","classid":1536}
        ,
        {"faculty":"CIVI","classNum":"372","title":"Transportation Engineering ","section":"L","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 435 SGW","semester":"Fall 2016","classid":1537}
        ,
        {"faculty":"CIVI","classNum":"372","title":"Transportation Engineering ","section":"L LA","type":"TUT","day":"Th","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 1070 SGW","semester":"Fall 2016","classid":1538}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LP","type":"X","day":"Tu","timeBegin":"2:45PM","timeEnd":"4:35PM\nTu","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1539}
        ,
        {"faculty":"ENGL","classNum":"377","title":"Contemporary Canadian Fiction ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 459 SGW","semester":"Fall 2016","classid":2504}
        ,
        {"faculty":"ENGL","classNum":"378","title":"Modern Canadian Poetry ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 633 SGW","semester":"Fall 2016","classid":2505}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LO","type":"X","day":"Tu","timeBegin":"2:45PM","timeEnd":"4:35PM\nTu","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1540}
        ,
        {"faculty":"ENGL","classNum":"383","title":"African Literature ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 501 SGW","semester":"Fall 2016","classid":2506}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LN","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM\nTh","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1541}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LM","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM\nTh","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1542}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LQ","type":"X","day":"Mo","timeBegin":"11:05AM","timeEnd":"12:55PM\nMo","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1543}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LR","type":"X","day":"Mo","timeBegin":"11:05AM","timeEnd":"12:55PM\nMo","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1544}
        ,
        {"faculty":"ENGL","classNum":"393","title":"Gender and Sexuality in Literary Studies ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 633 SGW","semester":"Fall 2016","classid":2509}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LS","type":"X","day":"Tu","timeBegin":"11:05AM","timeEnd":"12:55PM\nTu","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1545}
        ,
        {"faculty":"ENGL","classNum":"395","title":"Technical Writing ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 529 SGW","semester":"Fall 2016","classid":2510}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LT","type":"X","day":"Tu","timeBegin":"11:05AM","timeEnd":"12:55PM\nTu","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1546}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LL","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM\nTu","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1547}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LK","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM\nTu","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1548}
        ,
        {"faculty":"ENGL","classNum":"474","title":"HONOURS ESSAY ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2512}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LJ","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1549}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"LI","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"H 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW\nH 009 SGW","semester":"Fall 2016","classid":1550}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"L LA","type":"TUT","day":"We","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"H 520 SGW","semester":"Fall 2016","classid":1551}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"L","type":"LEC","day":"WeFr","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"FG C080 SGW","semester":"Fall 2016","classid":1552}
        ,
        {"faculty":"CIVI","classNum":"381","title":"Hydraulics ","section":"L LB","type":"TUT","day":"We","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"H 920 SGW","semester":"Fall 2016","classid":1553}
        ,
        {"faculty":"CIVI","classNum":"390","title":"Civil Engineering Design Project ","section":"V","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 820 SGW","semester":"Fall 2016","classid":1554}
        ,
        {"faculty":"CIVI","classNum":"390","title":"Civil Engineering Design Project ","section":"V VA","type":"LAB","day":"We","timeBegin":"6:30PM","timeEnd":"8:20PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1555}
        ,
        {"faculty":"CIVI","classNum":"390","title":"Civil Engineering Design Project ","section":"V VB","type":"LAB","day":"We","timeBegin":"6:30PM","timeEnd":"8:20PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1556}
        ,
        {"faculty":"CIVI","classNum":"390","title":"Civil Engineering Design Project ","section":"V VC","type":"LAB","day":"Tu","timeBegin":"6:35PM","timeEnd":"8:25PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1557}
        ,
        {"faculty":"CIVI","classNum":"390","title":"Civil Engineering Design Project ","section":"V VD","type":"LAB","day":"Tu","timeBegin":"6:35PM","timeEnd":"8:25PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1558}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"L LC","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":1559}
        ,
        {"faculty":"ENGR","classNum":"108","title":"Engineering Industrial Experience Reflective Learning I ","section":"IE","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2522}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LP","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:35PM\nMo","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1560}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LO","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:35PM\nMo","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1561}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LN","type":"X","day":"Mo","timeBegin":"9:00AM","timeEnd":"10:50AM\nMo","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1562}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LM","type":"X","day":"Mo","timeBegin":"9:00AM","timeEnd":"10:50AM\nMo","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1563}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"L LB","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 565 SGW","semester":"Fall 2016","classid":1564}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LL","type":"X","day":"Mo","timeBegin":"5:15PM","timeEnd":"7:05PM\nMo","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1565}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LK","type":"X","day":"We","timeBegin":"5:45PM","timeEnd":"7:35PM\nWe","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1566}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LJ","type":"X","day":"We","timeBegin":"8:10AM","timeEnd":"10:00AM\nWe","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1567}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LI","type":"X","day":"We","timeBegin":"8:10AM","timeEnd":"10:00AM\nWe","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1568}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"L LA","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 539 SGW","semester":"Fall 2016","classid":1569}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"L","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 110 SGW","semester":"Fall 2016","classid":1570}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LR","type":"X","day":"Th","timeBegin":"11:05AM","timeEnd":"12:55PM\nTh","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1571}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LS","type":"X","day":"Fr","timeBegin":"4:15PM","timeEnd":"6:05PM\nFr","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1572}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LT","type":"X","day":"Fr","timeBegin":"4:15PM","timeEnd":"6:05PM\nFr","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1573}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"L LD","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":1574}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LU","type":"X","day":"Fr","timeBegin":"8:10AM","timeEnd":"10:00AM\nFr","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1575}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LQ","type":"X","day":"Th","timeBegin":"11:05AM","timeEnd":"12:55PM\nTh","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1576}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LX","type":"X","day":"We","timeBegin":"5:15PM","timeEnd":"7:05PM\nWe","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1577}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LV","type":"X","day":"Fr","timeBegin":"8:10AM","timeEnd":"10:00AM\nFr","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":1578}
        ,
        {"faculty":"CIVI","classNum":"453","title":"Design of Reinforced Concrete Structures ","section":"L LA","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 615 SGW","semester":"Fall 2016","classid":1579}
        ,
        {"faculty":"CIVI","classNum":"453","title":"Design of Reinforced Concrete Structures ","section":"L","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 509 SGW","semester":"Fall 2016","classid":1580}
        ,
        {"faculty":"CIVI","classNum":"453","title":"Design of Reinforced Concrete Structures ","section":"LI","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:35PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1581}
        ,
        {"faculty":"CIVI","classNum":"453","title":"Design of Reinforced Concrete Structures ","section":"LJ","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:35PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1582}
        ,
        {"faculty":"CIVI","classNum":"453","title":"Design of Reinforced Concrete Structures ","section":"LK","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:35PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1583}
        ,
        {"faculty":"CIVI","classNum":"465","title":"Water Pollution and Control ","section":"VV","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 507 SGW","semester":"Fall 2016","classid":1589}
        ,
        {"faculty":"CIVI","classNum":"465","title":"Water Pollution and Control ","section":"VVVI","type":"LAB","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM\nTu","room":"H 003 SGW\nH 003 SGW\nH 003 SGW\nH 003 SGW\nH 003 SGW\nH 003 SGW","semester":"Fall 2016","classid":1590}
        ,
        {"faculty":"CIVI","classNum":"466","title":"Engineering Aspects of Chemical and Biological Processes ","section":"VV","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 621 SGW","semester":"Fall 2016","classid":1591}
        ,
        {"faculty":"CIVI","classNum":"471","title":"Highway and Pavement Design ","section":"VV","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 603 SGW","semester":"Fall 2016","classid":1592}
        ,
        {"faculty":"CIVI","classNum":"471","title":"Highway and Pavement Design ","section":"VVVA","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":1593}
        ,
        {"faculty":"CIVI","classNum":"471","title":"Highway and Pavement Design ","section":"VVVB","type":"TUT","day":"Fr","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":1594}
        ,
        {"faculty":"CLAS","classNum":"211","title":"Greek Literature ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":1605}
        ,
        {"faculty":"CLAS","classNum":"261","title":"Greek Mythology ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 507 SGW","semester":"Fall 2016","classid":1606}
        ,
        {"faculty":"CLAS","classNum":"320","title":"The Heroic Epics of Greece and Rome ","section":"A","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":1607}
        ,
        {"faculty":"CLAS","classNum":"383","title":"Intermediate Ancient Greek I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 937-1 SGW","semester":"Fall 2016","classid":1609}
        ,
        {"faculty":"CLAS","classNum":"391","title":"Reading Latin Prose ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":1610}
        ,
        {"faculty":"CLAS","classNum":"420","title":"ADVANCED LATIN PROSE ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 457 SGW","semester":"Fall 2016","classid":1611}
        ,
        {"faculty":"COEN","classNum":"231","title":"Introduction to Discrete Mathematics ","section":"D","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 920 SGW","semester":"Fall 2016","classid":1612}
        ,
        {"faculty":"COEN","classNum":"231","title":"Introduction to Discrete Mathematics ","section":"D DA","type":"TUT","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"H 523 SGW","semester":"Fall 2016","classid":1613}
        ,
        {"faculty":"COEN","classNum":"231","title":"Introduction to Discrete Mathematics ","section":"D DB","type":"TUT","day":"Fr","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"H 523 SGW","semester":"Fall 2016","classid":1614}
        ,
        {"faculty":"COEN","classNum":"243","title":"Programming Methodology I ","section":"U UB","type":"TUT","day":"Tu","timeBegin":"11:45AM","timeEnd":"1:25PM","room":"TBA","semester":"Fall 2016","classid":1615}
        ,
        {"faculty":"COEN","classNum":"243","title":"Programming Methodology I ","section":"U UA","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:25PM","room":"TBA","semester":"Fall 2016","classid":1616}
        ,
        {"faculty":"COEN","classNum":"243","title":"Programming Methodology I ","section":"U","type":"LEC","day":"WeFr","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 561 SGW","semester":"Fall 2016","classid":1617}
        ,
        {"faculty":"COEN","classNum":"244","title":"Programming Methodology II ","section":"U","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 1070 SGW","semester":"Fall 2016","classid":1618}
        ,
        {"faculty":"COEN","classNum":"244","title":"Programming Methodology II ","section":"U UB","type":"TUT","day":"We","timeBegin":"2:15PM","timeEnd":"3:55PM","room":"TBA","semester":"Fall 2016","classid":1619}
        ,
        {"faculty":"COEN","classNum":"244","title":"Programming Methodology II ","section":"U UA","type":"TUT","day":"We","timeBegin":"2:15PM","timeEnd":"3:55PM","room":"TBA","semester":"Fall 2016","classid":1620}
        ,
        {"faculty":"COEN","classNum":"311","title":"Computer Organization and Software ","section":"Q QA","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"H 423 SGW","semester":"Fall 2016","classid":1621}
        ,
        {"faculty":"COEN","classNum":"311","title":"Computer Organization and Software ","section":"QI","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM\nMo","room":"H 813 SGW\nH 813 SGW\nH 813 SGW\nH 813 SGW\nH 813 SGW\nH 813 SGW","semester":"Fall 2016","classid":1622}
        ,
        {"faculty":"COEN","classNum":"311","title":"Computer Organization and Software ","section":"QJ","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM\nMo","room":"H 813 SGW\nH 813 SGW\nH 813 SGW\nH 813 SGW\nH 813 SGW\nH 813 SGW","semester":"Fall 2016","classid":1623}
        ,
        {"faculty":"COEN","classNum":"311","title":"Computer Organization and Software ","section":"QK","type":"X","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM\nWe","room":"H 813 SGW\nH 813 SGW\nH 813 SGW\nH 813 SGW\nH 813 SGW\nH 813 SGW","semester":"Fall 2016","classid":1624}
        ,
        {"faculty":"COEN","classNum":"311","title":"Computer Organization and Software ","section":"Q","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 629 SGW","semester":"Fall 2016","classid":1625}
        ,
        {"faculty":"COEN","classNum":"317","title":"Microprocessor Systems ","section":"U","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 401 SGW","semester":"Fall 2016","classid":1633}
        ,
        {"faculty":"COEN","classNum":"317","title":"Microprocessor Systems ","section":"U UL","type":"LAB","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM\nTu","room":"H 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW","semester":"Fall 2016","classid":1634}
        ,
        {"faculty":"COEN","classNum":"317","title":"Microprocessor Systems ","section":"U UK","type":"LAB","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM\nTu","room":"H 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW","semester":"Fall 2016","classid":1635}
        ,
        {"faculty":"COEN","classNum":"317","title":"Microprocessor Systems ","section":"U UI","type":"LAB","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM\nMo","room":"H 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW","semester":"Fall 2016","classid":1636}
        ,
        {"faculty":"COEN","classNum":"317","title":"Microprocessor Systems ","section":"U UJ","type":"LAB","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM\nMo","room":"H 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW\nH 913 SGW","semester":"Fall 2016","classid":1637}
        ,
        {"faculty":"COEN","classNum":"320","title":"Introduction to Real?Time Systems ","section":"S","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":1638}
        ,
        {"faculty":"COEN","classNum":"320","title":"Introduction to Real?Time Systems ","section":"S SA","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 540 SGW","semester":"Fall 2016","classid":1639}
        ,
        {"faculty":"COEN","classNum":"352","title":"Data Structures and Algorithms ","section":"H HA","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"FG B070 SGW","semester":"Fall 2016","classid":1640}
        ,
        {"faculty":"COEN","classNum":"352","title":"Data Structures and Algorithms ","section":"H","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":1641}
        ,
        {"faculty":"COEN","classNum":"390","title":"COMP. ENG. PROD DESIGN PROJ. ","section":"H","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B070 SGW","semester":"Fall 2016","classid":1642}
        ,
        {"faculty":"COEN","classNum":"390","title":"COMP. ENG. PROD DESIGN PROJ. ","section":"H HA","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"FG B070 SGW","semester":"Fall 2016","classid":1643}
        ,
        {"faculty":"COEN","classNum":"445","title":"Communication Networks and Protocols ","section":"Q QI","type":"LAB","day":"Tu","timeBegin":"7:45PM","timeEnd":"10:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":1644}
        ,
        {"faculty":"COEN","classNum":"445","title":"Communication Networks and Protocols ","section":"Q","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 633-1 SGW","semester":"Fall 2016","classid":1645}
        ,
        {"faculty":"COEN","classNum":"451","title":"VLSI Circuit Design ","section":"U","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":1646}
        ,
        {"faculty":"COEN","classNum":"451","title":"VLSI Circuit Design ","section":"U UI","type":"LAB","day":"We","timeBegin":"5:45PM","timeEnd":"7:45PM","room":"TBA","semester":"Fall 2016","classid":1647}
        ,
        {"faculty":"COEN","classNum":"451","title":"VLSI Circuit Design ","section":"U UJ","type":"LAB","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:45PM","room":"TBA","semester":"Fall 2016","classid":1648}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"L","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":1653}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"K","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":1654}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"N","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":1655}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"O","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":1656}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"P","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1657}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"R","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":1658}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"S","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":1659}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"A","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":1662}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":1663}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"B","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":1664}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"BB","type":"LEC","day":"Mo","timeBegin":"8:30PM","timeEnd":"11:00PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":1665}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"C","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":1666}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"CC","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":1667}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"D","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":1668}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"E","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":1669}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"DD","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":1670}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"F","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":1671}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"G","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":1672}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"H","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 5.255 SGW","semester":"Fall 2016","classid":1673}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"J","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":1674}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"M","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1675}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"L","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":1676}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"M","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1677}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"N","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":1678}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"O","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":1679}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"P","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":1680}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"Q","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":1681}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"R","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":1682}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"S","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1683}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"T","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1684}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"U","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":1685}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"A","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":1686}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":1687}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"B","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1688}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"BB","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":1689}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"C","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":1690}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"CC","type":"LEC","day":"Fr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1691}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"D","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":1692}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"E","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":1693}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"F","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":1694}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"G","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":1695}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"H","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":1696}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"I","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":1697}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"J","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":1698}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"K","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":1699}
        ,
        {"faculty":"COMM","classNum":"215","title":"Business Statistics ","section":"E","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":1700}
        ,
        {"faculty":"COMM","classNum":"215","title":"Business Statistics ","section":"D","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":1701}
        ,
        {"faculty":"COMM","classNum":"215","title":"Business Statistics ","section":"C","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":1702}
        ,
        {"faculty":"COMM","classNum":"215","title":"Business Statistics ","section":"BB","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":1703}
        ,
        {"faculty":"COMM","classNum":"215","title":"Business Statistics ","section":"J","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1704}
        ,
        {"faculty":"COMM","classNum":"215","title":"Business Statistics ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":1705}
        ,
        {"faculty":"COMM","classNum":"215","title":"Business Statistics ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":1706}
        ,
        {"faculty":"COMM","classNum":"215","title":"Business Statistics ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":1707}
        ,
        {"faculty":"COMM","classNum":"215","title":"Business Statistics ","section":"B","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":1708}
        ,
        {"faculty":"COMM","classNum":"217","title":"Financial Accounting ","section":"C","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1709}
        ,
        {"faculty":"COMM","classNum":"217","title":"Financial Accounting ","section":"E","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":1710}
        ,
        {"faculty":"COMM","classNum":"217","title":"Financial Accounting ","section":"D","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 531 SGW","semester":"Fall 2016","classid":1711}
        ,
        {"faculty":"COMM","classNum":"217","title":"Financial Accounting ","section":"CC","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 531 SGW","semester":"Fall 2016","classid":1712}
        ,
        {"faculty":"COMM","classNum":"217","title":"Financial Accounting ","section":"BB","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 531 SGW","semester":"Fall 2016","classid":1713}
        ,
        {"faculty":"COMM","classNum":"217","title":"Financial Accounting ","section":"B","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":1714}
        ,
        {"faculty":"COMM","classNum":"217","title":"Financial Accounting ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 535 SGW","semester":"Fall 2016","classid":1715}
        ,
        {"faculty":"COMM","classNum":"217","title":"Financial Accounting ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1716}
        ,
        {"faculty":"COMM","classNum":"220","title":"Analysis of Markets ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":1717}
        ,
        {"faculty":"COMM","classNum":"220","title":"Analysis of Markets ","section":"C","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":1718}
        ,
        {"faculty":"COMM","classNum":"220","title":"Analysis of Markets ","section":"BB","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":1719}
        ,
        {"faculty":"COMM","classNum":"220","title":"Analysis of Markets ","section":"B","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":1720}
        ,
        {"faculty":"COMM","classNum":"220","title":"Analysis of Markets ","section":"D","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1721}
        ,
        {"faculty":"COMM","classNum":"220","title":"Analysis of Markets ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":1722}
        ,
        {"faculty":"COMM","classNum":"222","title":"Organizational Behaviour and Theory ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":1723}
        ,
        {"faculty":"COMM","classNum":"222","title":"Organizational Behaviour and Theory ","section":"BB","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":1724}
        ,
        {"faculty":"COMM","classNum":"222","title":"Organizational Behaviour and Theory ","section":"B","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":1725}
        ,
        {"faculty":"COMM","classNum":"222","title":"Organizational Behaviour and Theory ","section":"C","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":1726}
        ,
        {"faculty":"COMM","classNum":"222","title":"Organizational Behaviour and Theory ","section":"CC","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":1727}
        ,
        {"faculty":"COMM","classNum":"222","title":"Organizational Behaviour and Theory ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":1728}
        ,
        {"faculty":"COMM","classNum":"223","title":"Marketing Management I ","section":"C","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":1729}
        ,
        {"faculty":"COMM","classNum":"223","title":"Marketing Management I ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":1730}
        ,
        {"faculty":"COMM","classNum":"223","title":"Marketing Management I ","section":"B","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":1731}
        ,
        {"faculty":"COMM","classNum":"223","title":"Marketing Management I ","section":"BB","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":1732}
        ,
        {"faculty":"COMM","classNum":"223","title":"Marketing Management I ","section":"D","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":1733}
        ,
        {"faculty":"COMM","classNum":"223","title":"Marketing Management I ","section":"A","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1734}
        ,
        {"faculty":"COMM","classNum":"223","title":"Marketing Management I ","section":"E","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":1735}
        ,
        {"faculty":"COMM","classNum":"223","title":"Marketing Management I ","section":"F","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":1736}
        ,
        {"faculty":"COMM","classNum":"223","title":"Marketing Management I ","section":"F","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":1736}
        ,
        {"faculty":"COMM","classNum":"225","title":"Production and Operations Management ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":1737}
        ,
        {"faculty":"COMM","classNum":"225","title":"Production and Operations Management ","section":"D","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":1738}
        ,
        {"faculty":"COMM","classNum":"225","title":"Production and Operations Management ","section":"C","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":1739}
        ,
        {"faculty":"COMM","classNum":"225","title":"Production and Operations Management ","section":"BB","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":1740}
        ,
        {"faculty":"COMM","classNum":"225","title":"Production and Operations Management ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":1742}
        ,
        {"faculty":"COMM","classNum":"226","title":"Business Technology Management ","section":"A","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1743}
        ,
        {"faculty":"COMM","classNum":"226","title":"Business Technology Management ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":1744}
        ,
        {"faculty":"COMM","classNum":"226","title":"Business Technology Management ","section":"B","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":1745}
        ,
        {"faculty":"COMM","classNum":"226","title":"Business Technology Management ","section":"BB","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":1746}
        ,
        {"faculty":"COMM","classNum":"226","title":"Business Technology Management ","section":"C","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":1747}
        ,
        {"faculty":"COMM","classNum":"226","title":"Business Technology Management ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":1748}
        ,
        {"faculty":"COMM","classNum":"305","title":"Managerial Accounting ","section":"D","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":1749}
        ,
        {"faculty":"COMM","classNum":"305","title":"Managerial Accounting ","section":"C","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":1750}
        ,
        {"faculty":"COMM","classNum":"305","title":"Managerial Accounting ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":1751}
        ,
        {"faculty":"COMM","classNum":"305","title":"Managerial Accounting ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 531 SGW","semester":"Fall 2016","classid":1752}
        ,
        {"faculty":"COMM","classNum":"305","title":"Managerial Accounting ","section":"B","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":1753}
        ,
        {"faculty":"COMM","classNum":"305","title":"Managerial Accounting ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":1754}
        ,
        {"faculty":"COMM","classNum":"308","title":"Introduction to Finance ","section":"F","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":1756}
        ,
        {"faculty":"COMM","classNum":"308","title":"Introduction to Finance ","section":"D","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1757}
        ,
        {"faculty":"COMM","classNum":"308","title":"Introduction to Finance ","section":"C","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":1758}
        ,
        {"faculty":"COMM","classNum":"308","title":"Introduction to Finance ","section":"BB","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":1759}
        ,
        {"faculty":"COMM","classNum":"308","title":"Introduction to Finance ","section":"B","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":1760}
        ,
        {"faculty":"COMM","classNum":"308","title":"Introduction to Finance ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":1761}
        ,
        {"faculty":"COMM","classNum":"308","title":"Introduction to Finance ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":1762}
        ,
        {"faculty":"COMM","classNum":"315","title":"Business Law and Ethics ","section":"BB","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":1763}
        ,
        {"faculty":"COMM","classNum":"315","title":"Business Law and Ethics ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1764}
        ,
        {"faculty":"COMM","classNum":"315","title":"Business Law and Ethics ","section":"B","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1765}
        ,
        {"faculty":"COMM","classNum":"315","title":"Business Law and Ethics ","section":"C","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":1766}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"H","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":1770}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"G","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB S2.285 SGW","semester":"Fall 2016","classid":1771}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"F","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":1772}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"D","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":1773}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"E","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 5.255 SGW","semester":"Fall 2016","classid":1774}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"CC","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":1775}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"C","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 3.445 SGW","semester":"Fall 2016","classid":1776}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"BB","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":1777}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"B","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":1778}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":1780}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"BB","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":1781}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"B","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":1782}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":1783}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":1784}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"H","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 5.255 SGW","semester":"Fall 2016","classid":1785}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"G","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":1786}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"F","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 3.445 SGW","semester":"Fall 2016","classid":1787}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"E","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 3.445 SGW","semester":"Fall 2016","classid":1788}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"C","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":1789}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"CC","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 611 SGW","semester":"Fall 2016","classid":1790}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"D","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":1791}
        ,
        {"faculty":"COMP","classNum":"108","title":"Computer Science Industrial Experience Reflective Learning I ","section":"IE","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1792}
        ,
        {"faculty":"COMP","classNum":"201","title":"Introduction to Computing ","section":"DD","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":1793}
        ,
        {"faculty":"COMP","classNum":"201","title":"Introduction to Computing ","section":"DDDA","type":"TUT","day":"Tu","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":1794}
        ,
        {"faculty":"COMP","classNum":"208","title":"Computer Science Industrial Experience Reflective Learning II ","section":"IE","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1795}
        ,
        {"faculty":"COMP","classNum":"218","title":"Fundamentals of Programming ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":1796}
        ,
        {"faculty":"COMP","classNum":"228","title":"System Hardware ","section":"U UB","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"TBA","semester":"Fall 2016","classid":1797}
        ,
        {"faculty":"COMP","classNum":"228","title":"System Hardware ","section":"U","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B070 SGW","semester":"Fall 2016","classid":1798}
        ,
        {"faculty":"COMP","classNum":"228","title":"System Hardware ","section":"U UA","type":"TUT","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"TBA","semester":"Fall 2016","classid":1799}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"R RB","type":"TUT","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":1800}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"R RA","type":"TUT","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":1801}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"Q QA","type":"TUT","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":1803}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"Q","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 520 SGW","semester":"Fall 2016","classid":1805}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"DDDB","type":"TUT","day":"We","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":1806}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"DDDA","type":"TUT","day":"We","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":1807}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"DD","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 920 SGW","semester":"Fall 2016","classid":1808}
        ,
        {"faculty":"COMP","classNum":"233","title":"Probability and Statistics for Computer Science ","section":"Q QA","type":"TUT","day":"Tu","timeBegin":"10:15AM","timeEnd":"11:55AM","room":"H 523 SGW","semester":"Fall 2016","classid":1809}
        ,
        {"faculty":"COMP","classNum":"233","title":"Probability and Statistics for Computer Science ","section":"Q QB","type":"TUT","day":"Th","timeBegin":"10:15AM","timeEnd":"11:55AM","room":"H 523 SGW","semester":"Fall 2016","classid":1810}
        ,
        {"faculty":"COMP","classNum":"233","title":"Probability and Statistics for Computer Science ","section":"Q","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 920 SGW","semester":"Fall 2016","classid":1811}
        ,
        {"faculty":"COMP","classNum":"326","title":"Computer Architecture ","section":"DDDB","type":"TUT","day":"Mo","timeBegin":"9:30PM","timeEnd":"10:20PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":1812}
        ,
        {"faculty":"COMP","classNum":"326","title":"Computer Architecture ","section":"DDDA","type":"TUT","day":"Mo","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":1813}
        ,
        {"faculty":"COMP","classNum":"326","title":"Computer Architecture ","section":"DD","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B080 SGW","semester":"Fall 2016","classid":1814}
        ,
        {"faculty":"COMP","classNum":"335","title":"Introduction to Theoretical Computer Science ","section":"E EB","type":"TUT","day":"Tu","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":1815}
        ,
        {"faculty":"COMP","classNum":"335","title":"Introduction to Theoretical Computer Science ","section":"E EA","type":"TUT","day":"Th","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":1816}
        ,
        {"faculty":"COMP","classNum":"335","title":"Introduction to Theoretical Computer Science ","section":"G GA","type":"TUT","day":"Tu","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 544 SGW","semester":"Fall 2016","classid":1817}
        ,
        {"faculty":"COMP","classNum":"335","title":"Introduction to Theoretical Computer Science ","section":"E","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 520 SGW","semester":"Fall 2016","classid":1818}
        ,
        {"faculty":"COMP","classNum":"335","title":"Introduction to Theoretical Computer Science ","section":"G","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 620 SGW","semester":"Fall 2016","classid":1819}
        ,
        {"faculty":"COMP","classNum":"339","title":"COMBINATORICS ","section":"F","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 521 SGW","semester":"Fall 2016","classid":1820}
        ,
        {"faculty":"COMP","classNum":"339","title":"COMBINATORICS ","section":"F FA","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:35PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":1821}
        ,
        {"faculty":"COMP","classNum":"345","title":"ADVANCED PROGRAM DESIGN, C++ ","section":"N NI","type":"LAB","day":"We","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"TBA","semester":"Fall 2016","classid":1822}
        ,
        {"faculty":"COMP","classNum":"345","title":"ADVANCED PROGRAM DESIGN, C++ ","section":"N","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 420 SGW","semester":"Fall 2016","classid":1823}
        ,
        {"faculty":"COMP","classNum":"345","title":"ADVANCED PROGRAM DESIGN, C++ ","section":"D DJ","type":"LAB","day":"We","timeBegin":"8:30PM","timeEnd":"10:20PM","room":"TBA","semester":"Fall 2016","classid":1824}
        ,
        {"faculty":"COMP","classNum":"345","title":"ADVANCED PROGRAM DESIGN, C++ ","section":"N NJ","type":"LAB","day":"We","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"TBA","semester":"Fall 2016","classid":1825}
        ,
        {"faculty":"COMP","classNum":"345","title":"ADVANCED PROGRAM DESIGN, C++ ","section":"D DI","type":"LAB","day":"We","timeBegin":"8:30PM","timeEnd":"10:20PM","room":"TBA","semester":"Fall 2016","classid":1826}
        ,
        {"faculty":"COMP","classNum":"345","title":"ADVANCED PROGRAM DESIGN, C++ ","section":"D","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 420 SGW","semester":"Fall 2016","classid":1827}
        ,
        {"faculty":"COMP","classNum":"346","title":"Operating Systems ","section":"DJ","type":"X","day":"Th","timeBegin":"7:45PM","timeEnd":"9:35PM","room":"TBA","semester":"Fall 2016","classid":1828}
        ,
        {"faculty":"COMP","classNum":"346","title":"Operating Systems ","section":"DI","type":"X","day":"Th","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"TBA","semester":"Fall 2016","classid":1829}
        ,
        {"faculty":"COMP","classNum":"346","title":"Operating Systems ","section":"DDDB","type":"TUT","day":"Tu","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"TBA","semester":"Fall 2016","classid":1830}
        ,
        {"faculty":"COMP","classNum":"346","title":"Operating Systems ","section":"DDDA","type":"TUT","day":"Tu","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"TBA","semester":"Fall 2016","classid":1831}
        ,
        {"faculty":"COMP","classNum":"346","title":"Operating Systems ","section":"DD","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 1070 SGW","semester":"Fall 2016","classid":1832}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"DDDB","type":"TUT","day":"Th","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"TBA","semester":"Fall 2016","classid":1833}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"U UB","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"TBA","semester":"Fall 2016","classid":1834}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"U UA","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"TBA","semester":"Fall 2016","classid":1835}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"U","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 509 SGW","semester":"Fall 2016","classid":1836}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"DDDA","type":"TUT","day":"Tu","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"TBA","semester":"Fall 2016","classid":1837}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"DD","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 1070 SGW","semester":"Fall 2016","classid":1838}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"H","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":1840}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"H HA","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":1841}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"G","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 435 SGW","semester":"Fall 2016","classid":1842}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"G GA","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 513 SGW","semester":"Fall 2016","classid":1843}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"G GB","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 513 SGW","semester":"Fall 2016","classid":1844}
        ,
        {"faculty":"COMP","classNum":"353","title":"Databases ","section":"FI","type":"X","day":"Th","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"TBA","semester":"Fall 2016","classid":1846}
        ,
        {"faculty":"COMP","classNum":"353","title":"Databases ","section":"FJ","type":"X","day":"Fr","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":1847}
        ,
        {"faculty":"COMP","classNum":"353","title":"Databases ","section":"F","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 561 SGW","semester":"Fall 2016","classid":1848}
        ,
        {"faculty":"COMP","classNum":"353","title":"Databases ","section":"F FA","type":"TUT","day":"Th","timeBegin":"12:15PM","timeEnd":"1:05PM","room":"H 615 SGW","semester":"Fall 2016","classid":1849}
        ,
        {"faculty":"COMP","classNum":"354","title":"Introduction to Software Engineering ","section":"E","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 605 SGW","semester":"Fall 2016","classid":1850}
        ,
        {"faculty":"COMP","classNum":"354","title":"Introduction to Software Engineering ","section":"EI","type":"X","day":"Fr","timeBegin":"2:20PM","timeEnd":"3:50PM","room":"TBA","semester":"Fall 2016","classid":1851}
        ,
        {"faculty":"COMP","classNum":"354","title":"Introduction to Software Engineering ","section":"EJ","type":"X","day":"Fr","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"TBA","semester":"Fall 2016","classid":1852}
        ,
        {"faculty":"COMP","classNum":"354","title":"Introduction to Software Engineering ","section":"E EF","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":1853}
        ,
        {"faculty":"COMP","classNum":"354","title":"Introduction to Software Engineering ","section":"E EA","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":1854}
        ,
        {"faculty":"COMP","classNum":"361","title":"Elementary Numerical Methods ","section":"DDDA","type":"TUT","day":"Fr","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"H 431 SGW","semester":"Fall 2016","classid":1855}
        ,
        {"faculty":"COMP","classNum":"361","title":"Elementary Numerical Methods ","section":"DD","type":"LEC","day":"Fr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 520 SGW","semester":"Fall 2016","classid":1856}
        ,
        {"faculty":"COMP","classNum":"371","title":"Computer Graphics ","section":"UUUI","type":"LAB","day":"We","timeBegin":"4:15PM","timeEnd":"6:05PM","room":"TBA","semester":"Fall 2016","classid":1857}
        ,
        {"faculty":"COMP","classNum":"371","title":"Computer Graphics ","section":"UUUJ","type":"LAB","day":"Mo","timeBegin":"4:15PM","timeEnd":"6:05PM","room":"TBA","semester":"Fall 2016","classid":1858}
        ,
        {"faculty":"COMP","classNum":"371","title":"Computer Graphics ","section":"UU","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 401 SGW","semester":"Fall 2016","classid":1859}
        ,
        {"faculty":"COMP","classNum":"376","title":"Introduction to Game Development ","section":"WW","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 435 SGW","semester":"Fall 2016","classid":1860}
        ,
        {"faculty":"COMP","classNum":"376","title":"Introduction to Game Development ","section":"WWWI","type":"LAB","day":"Tu","timeBegin":"3:45PM","timeEnd":"5:35PM","room":"TBA","semester":"Fall 2016","classid":1861}
        ,
        {"faculty":"COMP","classNum":"376","title":"Introduction to Game Development ","section":"WWWJ","type":"LAB","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:20PM","room":"TBA","semester":"Fall 2016","classid":1862}
        ,
        {"faculty":"COMP","classNum":"376","title":"Introduction to Game Development ","section":"XXXI","type":"LAB","day":"Th","timeBegin":"3:45PM","timeEnd":"5:35PM","room":"TBA","semester":"Fall 2016","classid":1863}
        ,
        {"faculty":"COMP","classNum":"376","title":"Introduction to Game Development ","section":"XXXJ","type":"LAB","day":"Th","timeBegin":"8:30PM","timeEnd":"10:20PM","room":"TBA","semester":"Fall 2016","classid":1864}
        ,
        {"faculty":"COMP","classNum":"376","title":"Introduction to Game Development ","section":"XX","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 633 SGW","semester":"Fall 2016","classid":1865}
        ,
        {"faculty":"COMP","classNum":"426","title":"Multicore Programming ","section":"NNNJ","type":"LAB","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"TBA","semester":"Fall 2016","classid":1866}
        ,
        {"faculty":"COMP","classNum":"426","title":"Multicore Programming ","section":"NNNI","type":"LAB","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"TBA","semester":"Fall 2016","classid":1867}
        ,
        {"faculty":"COMP","classNum":"426","title":"Multicore Programming ","section":"NN","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 540 SGW","semester":"Fall 2016","classid":1868}
        ,
        {"faculty":"COMP","classNum":"428","title":"Parallel Programming ","section":"FFFA","type":"TUT","day":"Th","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":1869}
        ,
        {"faculty":"COMP","classNum":"428","title":"Parallel Programming ","section":"FF","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 523 SGW","semester":"Fall 2016","classid":1870}
        ,
        {"faculty":"COMP","classNum":"428","title":"Parallel Programming ","section":"FJ","type":"X","day":"Fr","timeBegin":"3:30PM","timeEnd":"5:20PM","room":"TBA","semester":"Fall 2016","classid":1871}
        ,
        {"faculty":"COMP","classNum":"428","title":"Parallel Programming ","section":"FI","type":"X","day":"Th","timeBegin":"3:30PM","timeEnd":"5:20PM","room":"TBA","semester":"Fall 2016","classid":1872}
        ,
        {"faculty":"COMP","classNum":"428","title":"Parallel Programming ","section":"FFFB","type":"TUT","day":"Th","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"H 632 SGW","semester":"Fall 2016","classid":1873}
        ,
        {"faculty":"COMP","classNum":"445","title":"Data Communication and Computer Networks ","section":"D DJ","type":"LAB","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"TBA","semester":"Fall 2016","classid":1874}
        ,
        {"faculty":"COMP","classNum":"445","title":"Data Communication and Computer Networks ","section":"D","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 920 SGW","semester":"Fall 2016","classid":1875}
        ,
        {"faculty":"COMP","classNum":"445","title":"Data Communication and Computer Networks ","section":"D DI","type":"LAB","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":1876}
        ,
        {"faculty":"COMP","classNum":"465","title":"Design and Analysis of Algorithms ","section":"N NA","type":"TUT","day":"Th","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"FG B080 SGW","semester":"Fall 2016","classid":1877}
        ,
        {"faculty":"COMP","classNum":"465","title":"Design and Analysis of Algorithms ","section":"N","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"FG B080 SGW","semester":"Fall 2016","classid":1878}
        ,
        {"faculty":"COMP","classNum":"472","title":"Artificial Intelligence ","section":"F FI","type":"LAB","day":"Tu","timeBegin":"4:15PM","timeEnd":"6:15PM","room":"TBA","semester":"Fall 2016","classid":1879}
        ,
        {"faculty":"COMP","classNum":"472","title":"Artificial Intelligence ","section":"F","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG B050 SGW","semester":"Fall 2016","classid":1880}
        ,
        {"faculty":"COMP","classNum":"472","title":"Artificial Intelligence ","section":"F FJ","type":"LAB","day":"We","timeBegin":"4:15PM","timeEnd":"6:15PM","room":"TBA","semester":"Fall 2016","classid":1881}
        ,
        {"faculty":"COMP","classNum":"472","title":"Artificial Intelligence ","section":"F FK","type":"LAB","day":"We","timeBegin":"6:30PM","timeEnd":"8:30PM","room":"TBA","semester":"Fall 2016","classid":1882}
        ,
        {"faculty":"COMP","classNum":"473","title":"Pattern Recognition ","section":"DDDJ","type":"LAB","day":"Th","timeBegin":"8:30PM","timeEnd":"10:20PM","room":"TBA","semester":"Fall 2016","classid":1883}
        ,
        {"faculty":"COMP","classNum":"473","title":"Pattern Recognition ","section":"DD","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 561 SGW","semester":"Fall 2016","classid":1884}
        ,
        {"faculty":"COMP","classNum":"473","title":"Pattern Recognition ","section":"DDDK","type":"LAB","day":"Th","timeBegin":"8:30PM","timeEnd":"10:20PM","room":"TBA","semester":"Fall 2016","classid":1885}
        ,
        {"faculty":"COMP","classNum":"473","title":"Pattern Recognition ","section":"DDDI","type":"LAB","day":"Th","timeBegin":"8:30PM","timeEnd":"10:20PM","room":"TBA","semester":"Fall 2016","classid":1886}
        ,
        {"faculty":"COMP","classNum":"477","title":"Animation for Computer Games ","section":"N NJ","type":"LAB","day":"We","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":1887}
        ,
        {"faculty":"COMP","classNum":"477","title":"Animation for Computer Games ","section":"N NI","type":"LAB","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":1888}
        ,
        {"faculty":"COMP","classNum":"477","title":"Animation for Computer Games ","section":"N","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B080 SGW","semester":"Fall 2016","classid":1889}
        ,
        {"faculty":"COMP","classNum":"478","title":"Image Processing ","section":"DDDJ","type":"LAB","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:30PM","room":"TBA","semester":"Fall 2016","classid":1890}
        ,
        {"faculty":"COMP","classNum":"478","title":"Image Processing ","section":"DDDI","type":"LAB","day":"We","timeBegin":"8:30PM","timeEnd":"10:30PM","room":"TBA","semester":"Fall 2016","classid":1891}
        ,
        {"faculty":"COMP","classNum":"478","title":"Image Processing ","section":"DD","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 540 SGW","semester":"Fall 2016","classid":1892}
        ,
        {"faculty":"COMP","classNum":"479","title":"Information Retrieval and Web Search ","section":"D","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B070 SGW","semester":"Fall 2016","classid":1893}
        ,
        {"faculty":"COMP","classNum":"479","title":"Information Retrieval and Web Search ","section":"D DJ","type":"LAB","day":"We","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":1895}
        ,
        {"faculty":"COMP","classNum":"479","title":"Information Retrieval and Web Search ","section":"D DK","type":"LAB","day":"Tu","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":1896}
        ,
        {"faculty":"COMP","classNum":"490","title":"Computer Science Project I ","section":"C","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1897}
        ,
        {"faculty":"COMP","classNum":"492","title":"Computer Science Project II ","section":"DD","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1898}
        ,
        {"faculty":"COMP","classNum":"495","title":"Honours Seminar ","section":"C","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1899}
        ,
        {"faculty":"COMS","classNum":"210","title":"Media Criticism ","section":"01","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 1.114 LOY","semester":"Fall 2016","classid":1954}
        ,
        {"faculty":"COMS","classNum":"220","title":"History of Communication and Media ","section":"0104","type":"TUT","day":"Th","timeBegin":"4:15PM","timeEnd":"5:15PM","room":"CJ 5.301 LOY","semester":"Fall 2016","classid":1955}
        ,
        {"faculty":"COMS","classNum":"220","title":"History of Communication and Media ","section":"0103","type":"TUT","day":"Th","timeBegin":"4:15PM","timeEnd":"5:15PM","room":"CJ 4.246 LOY","semester":"Fall 2016","classid":1956}
        ,
        {"faculty":"COMS","classNum":"220","title":"History of Communication and Media ","section":"0102","type":"TUT","day":"Th","timeBegin":"3:00PM","timeEnd":"4:00PM","room":"CJ 1.125 LOY","semester":"Fall 2016","classid":1957}
        ,
        {"faculty":"COMS","classNum":"220","title":"History of Communication and Media ","section":"0101","type":"TUT","day":"Th","timeBegin":"3:00PM","timeEnd":"4:00PM","room":"CJ 1.121 LOY","semester":"Fall 2016","classid":1958}
        ,
        {"faculty":"COMS","classNum":"220","title":"History of Communication and Media ","section":"01","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"2:45PM","room":"CJ 1.114 LOY","semester":"Fall 2016","classid":1959}
        ,
        {"faculty":"COMS","classNum":"225","title":"Media Institutions and Policies ","section":"01","type":"SEM","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 5.301 LOY","semester":"Fall 2016","classid":1960}
        ,
        {"faculty":"COMS","classNum":"240","title":"Communication Theory ","section":"0152","type":"TUT","day":"Mo","timeBegin":"4:30PM","timeEnd":"5:30PM","room":"CJ 5.223 LOY","semester":"Fall 2016","classid":1961}
        ,
        {"faculty":"COMS","classNum":"240","title":"Communication Theory ","section":"0151","type":"TUT","day":"Mo","timeBegin":"4:30PM","timeEnd":"5:30PM","room":"CJ 4.246 LOY","semester":"Fall 2016","classid":1962}
        ,
        {"faculty":"COMS","classNum":"240","title":"Communication Theory ","section":"0102","type":"TUT","day":"Mo","timeBegin":"3:15PM","timeEnd":"4:15PM","room":"CJ 1.125 LOY","semester":"Fall 2016","classid":1963}
        ,
        {"faculty":"COMS","classNum":"240","title":"Communication Theory ","section":"0101","type":"TUT","day":"Mo","timeBegin":"3:15PM","timeEnd":"4:15PM","room":"CJ 1.121 LOY","semester":"Fall 2016","classid":1964}
        ,
        {"faculty":"COMS","classNum":"240","title":"Communication Theory ","section":"01","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:00PM","room":"CJ 1.114 LOY","semester":"Fall 2016","classid":1965}
        ,
        {"faculty":"COMS","classNum":"274","title":"Communication Media: Intermedia I ","section":"0101","type":"LAB","day":"Mo","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"TBA","semester":"Fall 2016","classid":1966}
        ,
        {"faculty":"COMS","classNum":"274","title":"Communication Media: Intermedia I ","section":"01","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 1.114 LOY","semester":"Fall 2016","classid":1967}
        ,
        {"faculty":"COMS","classNum":"274","title":"Communication Media: Intermedia I ","section":"0104","type":"LAB","day":"We","timeBegin":"10:30AM","timeEnd":"11:45AM","room":"TBA","semester":"Fall 2016","classid":1968}
        ,
        {"faculty":"COMS","classNum":"274","title":"Communication Media: Intermedia I ","section":"0103","type":"LAB","day":"We","timeBegin":"9:00AM","timeEnd":"10:15AM","room":"TBA","semester":"Fall 2016","classid":1969}
        ,
        {"faculty":"COMS","classNum":"274","title":"Communication Media: Intermedia I ","section":"0102","type":"LAB","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":1970}
        ,
        {"faculty":"COMS","classNum":"276","title":"Communication Media: Sound I ","section":"02","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 4.320 LOY","semester":"Fall 2016","classid":1971}
        ,
        {"faculty":"COMS","classNum":"276","title":"Communication Media: Sound I ","section":"01","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 1.114 LOY","semester":"Fall 2016","classid":1972}
        ,
        {"faculty":"COMS","classNum":"276","title":"Communication Media: Sound I ","section":"0101","type":"LAB","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"TBA","semester":"Fall 2016","classid":1973}
        ,
        {"faculty":"COMS","classNum":"276","title":"Communication Media: Sound I ","section":"0202","type":"LAB","day":"Fr","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":1974}
        ,
        {"faculty":"COMS","classNum":"284","title":"Communication Media: Film and Video I ","section":"0202","type":"LAB","day":"We","timeBegin":"1:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":1975}
        ,
        {"faculty":"COMS","classNum":"284","title":"Communication Media: Film and Video I ","section":"02","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 1.114 LOY","semester":"Fall 2016","classid":1976}
        ,
        {"faculty":"COMS","classNum":"284","title":"Communication Media: Film and Video I ","section":"0101","type":"LAB","day":"We","timeBegin":"1:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":1977}
        ,
        {"faculty":"COMS","classNum":"284","title":"Communication Media: Film and Video I ","section":"01","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 4.320 LOY","semester":"Fall 2016","classid":1978}
        ,
        {"faculty":"COMS","classNum":"307","title":"Scriptwriting for Media ","section":"01","type":"SEM","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 5.301 LOY","semester":"Fall 2016","classid":1979}
        ,
        {"faculty":"COMS","classNum":"325","title":"Approaches to Communication Research ","section":"01","type":"SEM","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 5.301 LOY","semester":"Fall 2016","classid":1981}
        ,
        {"faculty":"COMS","classNum":"355","title":"Media and New Technology ","section":"01","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 4.240 LOY","semester":"Fall 2016","classid":1982}
        ,
        {"faculty":"COMS","classNum":"360","title":"Mass Communication ","section":"01","type":"LEC","day":"Tu","timeBegin":"4:15PM","timeEnd":"7:00PM","room":"CJ 1.114 LOY","semester":"Fall 2016","classid":1983}
        ,
        {"faculty":"COMS","classNum":"367","title":"Media and Cultural Context ","section":"01","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 4.240 LOY","semester":"Fall 2016","classid":1985}
        ,
        {"faculty":"COMS","classNum":"368","title":"Media and Gender ","section":"01","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 4.240 LOY","semester":"Fall 2016","classid":1986}
        ,
        {"faculty":"COMS","classNum":"369","title":"Visual Communication and Culture ","section":"01","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 4.240 LOY","semester":"Fall 2016","classid":1987}
        ,
        {"faculty":"COMS","classNum":"373","title":"Topics in Media and Cultural History ","section":"01","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 4.240 LOY","semester":"Fall 2016","classid":1989}
        ,
        {"faculty":"COMS","classNum":"394","title":"Communication Studies Apprenticeship I ","section":"01","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1990}
        ,
        {"faculty":"COMS","classNum":"395","title":"Communication Studies Apprenticeship II ","section":"01","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1991}
        ,
        {"faculty":"COMS","classNum":"424","title":"Alternative Media ","section":"01","type":"SEM","day":"Mo","timeBegin":"4:15PM","timeEnd":"7:00PM","room":"CJ 4.320 LOY","semester":"Fall 2016","classid":1994}
        ,
        {"faculty":"COMS","classNum":"425","title":"Advanced Seminar in Cultural Studies ","section":"01","type":"SEM","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 5.301 LOY","semester":"Fall 2016","classid":1995}
        ,
        {"faculty":"COMS","classNum":"464","title":"Race, Ethnicity and Media ","section":"01","type":"SEM","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 5.301 LOY","semester":"Fall 2016","classid":1996}
        ,
        {"faculty":"COMS","classNum":"465","title":"RHETORIC AND COMMUNICATION ","section":"01","type":"SEM","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 5.223 LOY","semester":"Fall 2016","classid":1997}
        ,
        {"faculty":"COMS","classNum":"496","title":"Directed Study I ","section":"01","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1998}
        ,
        {"faculty":"COMS","classNum":"497","title":"Directed Study II ","section":"01","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":1999}
        ,
        {"faculty":"CWTE","classNum":"200","title":"COOP WORK TERM 2 (ENGR) ","section":"E","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2062}
        ,
        {"faculty":"CWTE","classNum":"200","title":"COOP WORK TERM 2 (ENGR) ","section":"M","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2063}
        ,
        {"faculty":"CWTE","classNum":"300","title":"COOP WORK TERM 3 (ENGR) ","section":"E","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2067}
        ,
        {"faculty":"CWTE","classNum":"300","title":"COOP WORK TERM 3 (ENGR) ","section":"M","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2068}
        ,
        {"faculty":"CWTE","classNum":"300","title":"COOP WORK TERM 3 (ENGR) ","section":"S","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2069}
        ,
        {"faculty":"CWTE","classNum":"400","title":"COOP WORK TERM 4 (ENGR) ","section":"E","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2072}
        ,
        {"faculty":"CWTE","classNum":"400","title":"COOP WORK TERM 4 (ENGR) ","section":"M","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2074}
        ,
        {"faculty":"CWTE","classNum":"400","title":"COOP WORK TERM 4 (ENGR) ","section":"S","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2073}
        ,
        {"faculty":"ENGR","classNum":"251","title":"Thermodynamics I ","section":"T","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 531 SGW","semester":"Fall 2016","classid":2579}
        ,
        {"faculty":"ENGR","classNum":"290","title":"INTRO. ENGR TEAM DESIGN PROJ ","section":"F","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":2580}
        ,
        {"faculty":"ENGR","classNum":"290","title":"INTRO. ENGR TEAM DESIGN PROJ ","section":"F FA","type":"TUT","day":"Th","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":2581}
        ,
        {"faculty":"ENGR","classNum":"290","title":"INTRO. ENGR TEAM DESIGN PROJ ","section":"F FB","type":"TUT","day":"Tu","timeBegin":"2:15PM","timeEnd":"4:05PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":2582}
        ,
        {"faculty":"HIST","classNum":"242","title":"History of the Middle East ","section":"A","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 820 SGW","semester":"Fall 2016","classid":3080}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"FFFB","type":"TUT","day":"Mo","timeBegin":"6:45PM","timeEnd":"7:35PM","room":"EV 3.309 SGW","semester":"Fall 2016","classid":2583}
        ,
        {"faculty":"HIST","classNum":"264","title":"History of Africa ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":3081}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"FFFA","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"EV 3.309 SGW","semester":"Fall 2016","classid":2584}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"FF","type":"LEC","day":"Fr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 553 SGW","semester":"Fall 2016","classid":2585}
        ,
        {"faculty":"HIST","classNum":"304","title":"Tutorial Preparation for the Honours Essay ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":3082}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"IIID","type":"TUT","day":"Mo","timeBegin":"6:45PM","timeEnd":"7:35PM","room":"EV 1.162 SGW","semester":"Fall 2016","classid":2586}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"IIIC","type":"TUT","day":"We","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"EV 1.162 SGW","semester":"Fall 2016","classid":2587}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"IIIB","type":"TUT","day":"We","timeBegin":"6:45PM","timeEnd":"7:35PM","room":"EV 1.162 SGW","semester":"Fall 2016","classid":2588}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"IIIA","type":"TUT","day":"We","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"EV 3.309 SGW","semester":"Fall 2016","classid":2589}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"II","type":"LEC","day":"Fr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B060 SGW","semester":"Fall 2016","classid":2590}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"H HD","type":"TUT","day":"Tu","timeBegin":"7:45PM","timeEnd":"8:35PM","room":"EV 3.309 SGW","semester":"Fall 2016","classid":2591}
        ,
        {"faculty":"HIST","classNum":"350","title":"Medieval England ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 523 SGW","semester":"Fall 2016","classid":3088}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"H HC","type":"TUT","day":"Tu","timeBegin":"7:45PM","timeEnd":"8:35PM","room":"EV 1.162 SGW","semester":"Fall 2016","classid":2592}
        ,
        {"faculty":"HIST","classNum":"402","title":"The Philosophy and Practice of History ","section":"A","type":"SEM","day":"Th","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"LB 1014 SGW","semester":"Fall 2016","classid":3091}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"H HA","type":"TUT","day":"Th","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"EV 3.309 SGW","semester":"Fall 2016","classid":2594}
        ,
        {"faculty":"HIST","classNum":"486","title":"Public History Internship ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":3092}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"H","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"FG B060 SGW","semester":"Fall 2016","classid":2595}
        ,
        {"faculty":"HIST","classNum":"493","title":"ADVANCED TOPICS IN HISTORY ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":3093}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"G GD","type":"TUT","day":"Th","timeBegin":"6:45PM","timeEnd":"7:35PM","room":"EV 3.309 SGW","semester":"Fall 2016","classid":2596}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"G GC","type":"TUT","day":"Tu","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"EV 3.309 SGW","semester":"Fall 2016","classid":2597}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"G GB","type":"TUT","day":"Tu","timeBegin":"6:45PM","timeEnd":"7:35PM","room":"EV 1.162 SGW","semester":"Fall 2016","classid":2598}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"G GA","type":"TUT","day":"Tu","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"EV 1.162 SGW","semester":"Fall 2016","classid":2599}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"G","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 553 SGW","semester":"Fall 2016","classid":2600}
        ,
        {"faculty":"DANC","classNum":"260","title":"Sound and Silence for the Dancer ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:00PM","timeEnd":"4:00PM","room":"MB 7.251 SGW","semester":"Fall 2016","classid":2104}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"FFFC","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"EV 1.162 SGW","semester":"Fall 2016","classid":2601}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"FFFD","type":"TUT","day":"We","timeBegin":"6:45PM","timeEnd":"7:35PM","room":"EV 3.309 SGW","semester":"Fall 2016","classid":2602}
        ,
        {"faculty":"DANC","classNum":"350","title":"Practical Anatomy for the Moving Body ","section":"A","type":"STU","day":"Mo","timeBegin":"2:00PM","timeEnd":"5:00PM","room":"MB 7.255 SGW","semester":"Fall 2016","classid":2105}
        ,
        {"faculty":"ENGR","classNum":"308","title":"Engineering Industrial Experience Reflective Learning III ","section":"IE","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2603}
        ,
        {"faculty":"DANC","classNum":"441","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2106}
        ,
        {"faculty":"DANC","classNum":"442","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2107}
        ,
        {"faculty":"ENGR","classNum":"311","title":"Transform Calculus and Partial Differential Equations ","section":"Y","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"FG C080 SGW","semester":"Fall 2016","classid":2604}
        ,
        {"faculty":"ENGR","classNum":"311","title":"Transform Calculus and Partial Differential Equations ","section":"X XB","type":"TUT","day":"Th","timeBegin":"8:30AM","timeEnd":"10:10AM","room":"FG B070 SGW","semester":"Fall 2016","classid":2605}
        ,
        {"faculty":"DART","classNum":"221","title":"VISUAL COMM. IN CONTEXT ","section":"AA","type":"STU","day":"Mo","timeBegin":"6:30PM","timeEnd":"8:30PM\nMo","room":"EV 7.745 SGW\nEV 5.635 SGW","semester":"Fall 2016","classid":2108}
        ,
        {"faculty":"ENGR","classNum":"311","title":"Transform Calculus and Partial Differential Equations ","section":"X XA","type":"TUT","day":"Tu","timeBegin":"8:30AM","timeEnd":"10:10AM","room":"FG B070 SGW","semester":"Fall 2016","classid":2606}
        ,
        {"faculty":"DART","classNum":"221","title":"VISUAL COMM. IN CONTEXT ","section":"A","type":"STU","day":"Th","timeBegin":"8:30AM","timeEnd":"10:30AM\nTh","room":"EV 7.735 SGW\nEV 5.815 SGW","semester":"Fall 2016","classid":2109}
        ,
        {"faculty":"ENGR","classNum":"311","title":"Transform Calculus and Partial Differential Equations ","section":"Y YB","type":"TUT","day":"We","timeBegin":"8:45AM","timeEnd":"10:25AM","room":"H 521 SGW","semester":"Fall 2016","classid":2607}
        ,
        {"faculty":"DART","classNum":"221","title":"VISUAL COMM. IN CONTEXT ","section":"B","type":"STU","day":"Mo","timeBegin":"1:30PM","timeEnd":"3:30PM\nMo","room":"EV 5.615 SGW\nEV 5.815 SGW","semester":"Fall 2016","classid":2111}
        ,
        {"faculty":"ENGR","classNum":"311","title":"Transform Calculus and Partial Differential Equations ","section":"T TB","type":"TUT","day":"Th","timeBegin":"8:30AM","timeEnd":"10:10AM","room":"H 521 SGW","semester":"Fall 2016","classid":2608}
        ,
        {"faculty":"ENGR","classNum":"311","title":"Transform Calculus and Partial Differential Equations ","section":"T TA","type":"TUT","day":"Tu","timeBegin":"8:30AM","timeEnd":"10:10AM","room":"H 521 SGW","semester":"Fall 2016","classid":2609}
        ,
        {"faculty":"DART","classNum":"261","title":"INTRODUCT. TO DESIGN STUDIES ","section":"B B","type":"WKS","day":"Tu","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":2112}
        ,
        {"faculty":"IADI","classNum":"401","title":"Undergraduate Aerospace Industry Project II ","section":"IA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":3106}
        ,
        {"faculty":"ENGR","classNum":"311","title":"Transform Calculus and Partial Differential Equations ","section":"T","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"FG C070 SGW","semester":"Fall 2016","classid":2610}
        ,
        {"faculty":"DART","classNum":"261","title":"INTRODUCT. TO DESIGN STUDIES ","section":"B","type":"LEC","day":"Tu","timeBegin":"9:30AM","timeEnd":"11:30AM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":2113}
        ,
        {"faculty":"ENGR","classNum":"311","title":"Transform Calculus and Partial Differential Equations ","section":"Y YA","type":"TUT","day":"We","timeBegin":"8:45AM","timeEnd":"10:25AM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":2611}
        ,
        {"faculty":"IBUS","classNum":"370","title":"INTERNATIONAL FINANCIAL MGMT ","section":"A","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":3107}
        ,
        {"faculty":"DART","classNum":"261","title":"INTRODUCT. TO DESIGN STUDIES ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:30PM","timeEnd":"3:30PM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":2114}
        ,
        {"faculty":"ENGR","classNum":"311","title":"Transform Calculus and Partial Differential Equations ","section":"X","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 531 SGW","semester":"Fall 2016","classid":2612}
        ,
        {"faculty":"IBUS","classNum":"382","title":"MGMT OF INT'L FINANCIAL INST ","section":"A","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":3108}
        ,
        {"faculty":"DART","classNum":"261","title":"INTRODUCT. TO DESIGN STUDIES ","section":"A A","type":"WKS","day":"Tu","timeBegin":"3:45PM","timeEnd":"4:45PM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":2115}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"FF","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG C080 SGW","semester":"Fall 2016","classid":2613}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"FFFA","type":"TUT","day":"Tu","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"H 544 SGW","semester":"Fall 2016","classid":2614}
        ,
        {"faculty":"IBUS","classNum":"462","title":"(also listed as MARK 462) Environment of World Business ","section":"B","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 5.255 SGW","semester":"Fall 2016","classid":3109}
        ,
        {"faculty":"DART","classNum":"291","title":"PROCESS/MATERIALITY OBJECTS ","section":"AA","type":"STU","day":"Tu","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 7.745 SGW","semester":"Fall 2016","classid":2116}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"FFFB","type":"TUT","day":"We","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"H 540 SGW","semester":"Fall 2016","classid":2615}
        ,
        {"faculty":"DART","classNum":"291","title":"PROCESS/MATERIALITY OBJECTS ","section":"B","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 7.745 SGW","semester":"Fall 2016","classid":2117}
        ,
        {"faculty":"IBUS","classNum":"462","title":"(also listed as MARK 462) Environment of World Business ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":3110}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"R","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 531 SGW","semester":"Fall 2016","classid":2616}
        ,
        {"faculty":"DART","classNum":"291","title":"PROCESS/MATERIALITY OBJECTS ","section":"A","type":"STU","day":"Mo","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 7.745 SGW","semester":"Fall 2016","classid":2118}
        ,
        {"faculty":"IBUS","classNum":"462","title":"(also listed as MARK 462) Environment of World Business ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":3111}
        ,
        {"faculty":"DART","classNum":"380","title":"3D Digital Concepts ","section":"A","type":"STU","day":"Mo","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 5.635 SGW","semester":"Fall 2016","classid":2119}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"S SB","type":"TUT","day":"Th","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 537 SGW","semester":"Fall 2016","classid":2617}
        ,
        {"faculty":"IBUS","classNum":"465","title":"(also listed as MARK 465) International Marketing Management ","section":"A","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":3113}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"R RB","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"H 564 SGW","semester":"Fall 2016","classid":2618}
        ,
        {"faculty":"DART","classNum":"381","title":"DIGIT. MEDIA & MOVING IMAGES ","section":"B","type":"STU","day":"Fr","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 5.815 SGW","semester":"Fall 2016","classid":2120}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"S","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 531 SGW","semester":"Fall 2016","classid":2619}
        ,
        {"faculty":"IBUS","classNum":"466","title":"MGMT. OF MULTINATIONAL CORPS ","section":"BB","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":3114}
        ,
        {"faculty":"DART","classNum":"381","title":"DIGIT. MEDIA & MOVING IMAGES ","section":"A","type":"STU","day":"We","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 5.815 SGW","semester":"Fall 2016","classid":2121}
        ,
        {"faculty":"DART","classNum":"391","title":"SOC. CULT. RESEARCH/PRACTICE ","section":"B","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":2122}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"S SA","type":"TUT","day":"Tu","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 564 SGW","semester":"Fall 2016","classid":2620}
        ,
        {"faculty":"IBUS","classNum":"466","title":"MGMT. OF MULTINATIONAL CORPS ","section":"A","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 441 SGW","semester":"Fall 2016","classid":3115}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"R RA","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 564 SGW","semester":"Fall 2016","classid":2621}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"S","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 1070 SGW","semester":"Fall 2016","classid":2622}
        ,
        {"faculty":"IBUS","classNum":"466","title":"MGMT. OF MULTINATIONAL CORPS ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 603 SGW","semester":"Fall 2016","classid":3116}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"S SA","type":"TUT","day":"Fr","timeBegin":"2:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":2623}
        ,
        {"faculty":"DART","classNum":"391","title":"SOC. CULT. RESEARCH/PRACTICE ","section":"C","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":2123}
        ,
        {"faculty":"IBUS","classNum":"492","title":"CROSS-CULTURAL COMMUN & MGMT ","section":"B","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":3117}
        ,
        {"faculty":"IBUS","classNum":"492","title":"CROSS-CULTURAL COMMUN & MGMT ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":3118}
        ,
        {"faculty":"DART","classNum":"391","title":"SOC. CULT. RESEARCH/PRACTICE ","section":"A","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":2124}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"M MC","type":"TUT","day":"Mo","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"TBA","semester":"Fall 2016","classid":2624}
        ,
        {"faculty":"IBUS","classNum":"493","title":"INTERNATIONAL BUSINESS LAW ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":3119}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"M MB","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"TBA","semester":"Fall 2016","classid":2625}
        ,
        {"faculty":"DART","classNum":"447","title":"THE FUTURE LIFE OF OBJECTS ","section":"A","type":"STU","day":"Tu","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 7.745 SGW","semester":"Fall 2016","classid":2125}
        ,
        {"faculty":"IMCA","classNum":"210","title":"Introduction to Video Production ","section":"A","type":"STU","day":"Th","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 6.809 SGW","semester":"Fall 2016","classid":3120}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"M MA","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"TBA","semester":"Fall 2016","classid":2626}
        ,
        {"faculty":"DART","classNum":"449","title":"The Language of the Web ","section":"A","type":"STU","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 5.709 SGW","semester":"Fall 2016","classid":2126}
        ,
        {"faculty":"IMCA","classNum":"210","title":"Introduction to Video Production ","section":"B","type":"STU","day":"Tu","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 6.809 SGW","semester":"Fall 2016","classid":3121}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"M","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 1070 SGW","semester":"Fall 2016","classid":2627}
        ,
        {"faculty":"IMCA","classNum":"221","title":"Programming for Artists ","section":"A","type":"STU","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV S.635 SGW","semester":"Fall 2016","classid":3122}
        ,
        {"faculty":"DART","classNum":"461","title":"INDEPENDENT STUDY I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2127}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"F FB","type":"TUT","day":"Fr","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":2628}
        ,
        {"faculty":"IMCA","classNum":"222","title":"Electronics for Artists ","section":"A","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV S.635 SGW","semester":"Fall 2016","classid":3123}
        ,
        {"faculty":"DART","classNum":"462","title":"INDEPENDENT STUDY II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2128}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"F FA","type":"TUT","day":"Fr","timeBegin":"2:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":2629}
        ,
        {"faculty":"IMCA","classNum":"230","title":"Performance Art ","section":"A","type":"STU","day":"We","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 6.809 SGW","semester":"Fall 2016","classid":3124}
        ,
        {"faculty":"DART","classNum":"463","title":"INDEPENDENT STUDY III ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2129}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"F","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 920 SGW","semester":"Fall 2016","classid":2630}
        ,
        {"faculty":"DART","classNum":"471","title":"Professional Internship I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2130}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"S SB","type":"TUT","day":"Fr","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":2631}
        ,
        {"faculty":"DART","classNum":"472","title":"PROFESSIONAL INTERNSHIP II ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2131}
        ,
        {"faculty":"IMCA","classNum":"471","title":"Independent Study in Intermedia/Cyberarts I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":3125}
        ,
        {"faculty":"ENGR","classNum":"392","title":"Impact of Technology on Society ","section":"EE","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 605 SGW","semester":"Fall 2016","classid":2632}
        ,
        {"faculty":"IMCA","classNum":"472","title":"Independent Study in Intermedia/Cyberarts II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":3126}
        ,
        {"faculty":"DART","classNum":"491","title":"Discursive Design Research I ","section":"A","type":"LEC","day":"Th","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":2132}
        ,
        {"faculty":"ENGR","classNum":"392","title":"Impact of Technology on Society ","section":"F","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 521 SGW","semester":"Fall 2016","classid":2633}
        ,
        {"faculty":"IMCA","classNum":"481","title":"Professional Internship in Intermedia/Cyberarts I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":3127}
        ,
        {"faculty":"IMCA","classNum":"482","title":"Professional Internship in Intermedia/Cyberarts II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":3128}
        ,
        {"faculty":"ENGR","classNum":"392","title":"Impact of Technology on Society ","section":"D","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":2634}
        ,
        {"faculty":"ENGR","classNum":"411","title":"Special Technical Report ","section":"F","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2635}
        ,
        {"faculty":"DFTT","classNum":"209","title":"Design for Live Performance I ","section":"C","type":"STU","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"GM 520 SGW","semester":"Fall 2016","classid":2136}
        ,
        {"faculty":"DFTT","classNum":"209","title":"Design for Live Performance I ","section":"D","type":"STU","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"GM 530 SGW","semester":"Fall 2016","classid":2137}
        ,
        {"faculty":"DFTT","classNum":"209","title":"Design for Live Performance I ","section":"A","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"GM 520 SGW","semester":"Fall 2016","classid":2138}
        ,
        {"faculty":"DFTT","classNum":"209","title":"Design for Live Performance I ","section":"B","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"GM 530 SGW","semester":"Fall 2016","classid":2139}
        ,
        {"faculty":"DFTT","classNum":"305","title":"Independent Study I ","section":"A","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2140}
        ,
        {"faculty":"DFTT","classNum":"401","title":"Advanced Designer's Studio: Conception ","section":"A","type":"STU","day":"Fr","timeBegin":"8:30AM","timeEnd":"12:15PM","room":"GM 520 SGW","semester":"Fall 2016","classid":2141}
        ,
        {"faculty":"DFTT","classNum":"402","title":"DESIGN. STUDIO II:CONCEPTION ","section":"A","type":"STU","day":"Fr","timeBegin":"8:30AM","timeEnd":"12:15PM","room":"GM 520 SGW","semester":"Fall 2016","classid":2142}
        ,
        {"faculty":"DRAW","classNum":"471","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2143}
        ,
        {"faculty":"DRAW","classNum":"472","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2144}
        ,
        {"faculty":"EAST","classNum":"203","title":"Digital Audio Editing ","section":"A B","type":"TUT","day":"Mo","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"MB 8.245 SGW","semester":"Fall 2016","classid":2153}
        ,
        {"faculty":"EAST","classNum":"203","title":"Digital Audio Editing ","section":"A A","type":"TUT","day":"Mo","timeBegin":"2:15PM","timeEnd":"3:45PM","room":"MB 8.245 SGW","semester":"Fall 2016","classid":2154}
        ,
        {"faculty":"EAST","classNum":"203","title":"Digital Audio Editing ","section":"A","type":"LEC","day":"Mo","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"MB 8.245 SGW","semester":"Fall 2016","classid":2155}
        ,
        {"faculty":"EAST","classNum":"211","title":"Theory/MIDIstration I ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:45AM","timeEnd":"12:15PM","room":"VA 323 SGW","semester":"Fall 2016","classid":2156}
        ,
        {"faculty":"EAST","classNum":"351","title":"Intermediate Sound Recording I ","section":"A","type":"STU","day":"WeFr","timeBegin":"12:00PM","timeEnd":"1:30PM","room":"MB 8.270 SGW","semester":"Fall 2016","classid":2158}
        ,
        {"faculty":"EAST","classNum":"361","title":"Current Sound Practice Seminar ","section":"A","type":"LEC","day":"Th","timeBegin":"12:30PM","timeEnd":"3:45PM","room":"MB 8.245 SGW","semester":"Fall 2016","classid":2159}
        ,
        {"faculty":"EAST","classNum":"362","title":"VIRTUAL MODULAR SYNTHESIS ","section":"A","type":"STU","day":"Th","timeBegin":"4:00PM","timeEnd":"7:00PM","room":"MB 8.245 SGW","semester":"Fall 2016","classid":2160}
        ,
        {"faculty":"ESL","classNum":"202","title":"Developing Academic English Language Skills ","section":"G","type":"WKS","day":"WeFr","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":2658}
        ,
        {"faculty":"EAST","classNum":"406","title":"Electroacoustic Composition Seminar/Workshop I ","section":"A","type":"LEC","day":"Th","timeBegin":"12:30PM","timeEnd":"3:45PM","room":"MB 8.245 SGW","semester":"Fall 2016","classid":2161}
        ,
        {"faculty":"ESL","classNum":"202","title":"Developing Academic English Language Skills ","section":"A","type":"WKS","day":"MoWe","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 562 SGW","semester":"Fall 2016","classid":2659}
        ,
        {"faculty":"EAST","classNum":"451","title":"Advanced Recording I ","section":"01","type":"STU","day":"Mo","timeBegin":"1:00PM","timeEnd":"4:00PM","room":"PT 203 LOY","semester":"Fall 2016","classid":2162}
        ,
        {"faculty":"EAST","classNum":"461","title":"Capstone Project Seminar I ","section":"A","type":"LEC","day":"Th","timeBegin":"12:30PM","timeEnd":"3:45PM","room":"MB 8.245 SGW","semester":"Fall 2016","classid":2163}
        ,
        {"faculty":"EAST","classNum":"471","title":"Independent Study I ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2164}
        ,
        {"faculty":"ESL","classNum":"202","title":"Developing Academic English Language Skills ","section":"F","type":"WKS","day":"MoWe","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 613 SGW","semester":"Fall 2016","classid":2661}
        ,
        {"faculty":"ESL","classNum":"202","title":"Developing Academic English Language Skills ","section":"C","type":"WKS","day":"TuTh","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 562 SGW","semester":"Fall 2016","classid":2662}
        ,
        {"faculty":"ESL","classNum":"202","title":"Developing Academic English Language Skills ","section":"CC","type":"WKS","day":"WeFr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 435 SGW","semester":"Fall 2016","classid":2663}
        ,
        {"faculty":"EAST","classNum":"472","title":"Independent Study II ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2165}
        ,
        {"faculty":"ESL","classNum":"202","title":"Developing Academic English Language Skills ","section":"D","type":"WKS","day":"TuTh","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.465 SGW","semester":"Fall 2016","classid":2664}
        ,
        {"faculty":"ESL","classNum":"202","title":"Developing Academic English Language Skills ","section":"E","type":"WKS","day":"TuTh","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 562 SGW","semester":"Fall 2016","classid":2665}
        ,
        {"faculty":"ESL","classNum":"202","title":"Developing Academic English Language Skills ","section":"BB","type":"WKS","day":"TuTh","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 613 SGW","semester":"Fall 2016","classid":2666}
        ,
        {"faculty":"ECON","classNum":"201","title":"Introduction to Microeconomics ","section":"D","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":2167}
        ,
        {"faculty":"ESL","classNum":"204","title":"Refining Academic English Language Skills ","section":"B","type":"WKS","day":"WeFr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 6.425 SGW","semester":"Fall 2016","classid":2667}
        ,
        {"faculty":"ECON","classNum":"201","title":"Introduction to Microeconomics ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":2168}
        ,
        {"faculty":"ECON","classNum":"201","title":"Introduction to Microeconomics ","section":"C","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":2169}
        ,
        {"faculty":"ESL","classNum":"204","title":"Refining Academic English Language Skills ","section":"BB","type":"WKS","day":"TuTh","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":2668}
        ,
        {"faculty":"ECON","classNum":"201","title":"Introduction to Microeconomics ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":2170}
        ,
        {"faculty":"ESL","classNum":"204","title":"Refining Academic English Language Skills ","section":"M","type":"WKS","day":"TuTh","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 539 SGW","semester":"Fall 2016","classid":2669}
        ,
        {"faculty":"ECON","classNum":"203","title":"Introduction to Macroeconomics ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":2171}
        ,
        {"faculty":"ESL","classNum":"204","title":"Refining Academic English Language Skills ","section":"L","type":"WKS","day":"MoWe","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 562 SGW","semester":"Fall 2016","classid":2670}
        ,
        {"faculty":"ECON","classNum":"203","title":"Introduction to Macroeconomics ","section":"B","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":2172}
        ,
        {"faculty":"ESL","classNum":"204","title":"Refining Academic English Language Skills ","section":"D","type":"WKS","day":"TuTh","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":2671}
        ,
        {"faculty":"ECON","classNum":"203","title":"Introduction to Macroeconomics ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":2173}
        ,
        {"faculty":"ECON","classNum":"221","title":"Statistical Methods I ","section":"DD","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 407 SGW","semester":"Fall 2016","classid":2174}
        ,
        {"faculty":"ESL","classNum":"204","title":"Refining Academic English Language Skills ","section":"A","type":"WKS","day":"TuTh","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.445 SGW","semester":"Fall 2016","classid":2672}
        ,
        {"faculty":"ECON","classNum":"221","title":"Statistical Methods I ","section":"B A","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:45PM","room":"FG C080 SGW","semester":"Fall 2016","classid":2175}
        ,
        {"faculty":"ESL","classNum":"204","title":"Refining Academic English Language Skills ","section":"01","type":"WKS","day":"WeFr","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"CC 425 LOY","semester":"Fall 2016","classid":2673}
        ,
        {"faculty":"ECON","classNum":"221","title":"Statistical Methods I ","section":"B","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 433 SGW","semester":"Fall 2016","classid":2176}
        ,
        {"faculty":"ESL","classNum":"204","title":"Refining Academic English Language Skills ","section":"C","type":"WKS","day":"MoWe","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":2674}
        ,
        {"faculty":"ECON","classNum":"221","title":"Statistical Methods I ","section":"A A","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:45PM","room":"FG C080 SGW","semester":"Fall 2016","classid":2177}
        ,
        {"faculty":"ESL","classNum":"204","title":"Refining Academic English Language Skills ","section":"CC","type":"WKS","day":"WeFr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 562 SGW","semester":"Fall 2016","classid":2675}
        ,
        {"faculty":"ECON","classNum":"221","title":"Statistical Methods I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"FG B030 SGW","semester":"Fall 2016","classid":2178}
        ,
        {"faculty":"ECON","classNum":"221","title":"Statistical Methods I ","section":"DDA","type":"TUT","day":"Fr","timeBegin":"4:15PM","timeEnd":"6:15PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":2179}
        ,
        {"faculty":"ESL","classNum":"205","title":"Academic Oral Communication I ","section":"A","type":"WKS","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":2677}
        ,
        {"faculty":"ECON","classNum":"222","title":"Statistical Methods II ","section":"BA","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:45PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":2180}
        ,
        {"faculty":"ESL","classNum":"205","title":"Academic Oral Communication I ","section":"C","type":"WKS","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 6.425 SGW","semester":"Fall 2016","classid":2678}
        ,
        {"faculty":"ECON","classNum":"222","title":"Statistical Methods II ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 631 SGW","semester":"Fall 2016","classid":2181}
        ,
        {"faculty":"ECON","classNum":"222","title":"Statistical Methods II ","section":"A A","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:45PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":2182}
        ,
        {"faculty":"ECON","classNum":"222","title":"Statistical Methods II ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 603 SGW","semester":"Fall 2016","classid":2183}
        ,
        {"faculty":"ECON","classNum":"251","title":"Economic History Prior to the Industrial Revolution ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 507 SGW","semester":"Fall 2016","classid":2184}
        ,
        {"faculty":"ECON","classNum":"301","title":"Intermediate Microeconomic Theory I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 507 SGW","semester":"Fall 2016","classid":2186}
        ,
        {"faculty":"ECON","classNum":"301","title":"Intermediate Microeconomic Theory I ","section":"BB","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 520 SGW","semester":"Fall 2016","classid":2187}
        ,
        {"faculty":"ECON","classNum":"302","title":"Intermediate Microeconomic Theory II ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG C080 SGW","semester":"Fall 2016","classid":2188}
        ,
        {"faculty":"INDU","classNum":"211","title":"Introduction to Production and Manufacturing Systems ","section":"X","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B060 SGW","semester":"Fall 2016","classid":3172}
        ,
        {"faculty":"ECON","classNum":"303","title":"Intermediate Macroeconomic Theory I ","section":"B","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":2189}
        ,
        {"faculty":"INDU","classNum":"211","title":"Introduction to Production and Manufacturing Systems ","section":"X XA","type":"TUT","day":"Th","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"FG B055 SGW","semester":"Fall 2016","classid":3173}
        ,
        {"faculty":"ECON","classNum":"303","title":"Intermediate Macroeconomic Theory I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 507 SGW","semester":"Fall 2016","classid":2190}
        ,
        {"faculty":"ECON","classNum":"304","title":"Intermediate Macroeconomic Theory II ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 1070 SGW","semester":"Fall 2016","classid":2191}
        ,
        {"faculty":"INDU","classNum":"211","title":"Introduction to Production and Manufacturing Systems ","section":"X XB","type":"TUT","day":"Th","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"FG B080 SGW","semester":"Fall 2016","classid":3174}
        ,
        {"faculty":"ECON","classNum":"318","title":"Canadian Economic Policy and Institutions ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 435 SGW","semester":"Fall 2016","classid":2192}
        ,
        {"faculty":"INDU","classNum":"311","title":"Simulation of Industrial Systems ","section":"TK","type":"X","day":"We","timeBegin":"9:45AM","timeEnd":"11:35AM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3175}
        ,
        {"faculty":"ECON","classNum":"318","title":"Canadian Economic Policy and Institutions ","section":"BB","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 820 SGW","semester":"Fall 2016","classid":2193}
        ,
        {"faculty":"INDU","classNum":"311","title":"Simulation of Industrial Systems ","section":"TJ","type":"X","day":"Mo","timeBegin":"9:45AM","timeEnd":"11:35AM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3176}
        ,
        {"faculty":"ECON","classNum":"319","title":"International Economic Policy and Institutions ","section":"B","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 531 SGW","semester":"Fall 2016","classid":2194}
        ,
        {"faculty":"INDU","classNum":"311","title":"Simulation of Industrial Systems ","section":"TI","type":"X","day":"Mo","timeBegin":"9:45AM","timeEnd":"11:35AM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3177}
        ,
        {"faculty":"ECON","classNum":"319","title":"International Economic Policy and Institutions ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":2195}
        ,
        {"faculty":"INDU","classNum":"311","title":"Simulation of Industrial Systems ","section":"T TA","type":"TUT","day":"Mo","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"H 603-1 SGW","semester":"Fall 2016","classid":3178}
        ,
        {"faculty":"ECON","classNum":"324","title":"Economic Data Analysis ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 423 SGW","semester":"Fall 2016","classid":2196}
        ,
        {"faculty":"INDU","classNum":"311","title":"Simulation of Industrial Systems ","section":"T","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG B040 SGW","semester":"Fall 2016","classid":3179}
        ,
        {"faculty":"ECON","classNum":"325","title":"Mathematics for Economists I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 423 SGW","semester":"Fall 2016","classid":2197}
        ,
        {"faculty":"ECON","classNum":"326","title":"Mathematics for Economists II ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":2198}
        ,
        {"faculty":"INDU","classNum":"320","title":"Production Engineering ","section":"X","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG B070 SGW","semester":"Fall 2016","classid":3180}
        ,
        {"faculty":"INDU","classNum":"320","title":"Production Engineering ","section":"X XA","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"H 521 SGW","semester":"Fall 2016","classid":3181}
        ,
        {"faculty":"ECON","classNum":"331","title":"Money and Banking ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":2199}
        ,
        {"faculty":"ECON","classNum":"331","title":"Money and Banking ","section":"B","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 3.430 SGW","semester":"Fall 2016","classid":2200}
        ,
        {"faculty":"INDU","classNum":"324","title":"Operations Research II ","section":"T TA","type":"TUT","day":"Th","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"H 435 SGW","semester":"Fall 2016","classid":3184}
        ,
        {"faculty":"ECON","classNum":"401","title":"Advanced Microeconomic Theory ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 605 SGW","semester":"Fall 2016","classid":2203}
        ,
        {"faculty":"INDU","classNum":"324","title":"Operations Research II ","section":"T","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 435 SGW","semester":"Fall 2016","classid":3185}
        ,
        {"faculty":"ECON","classNum":"403","title":"Advanced Macroeconomic Theory ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 3.445 SGW","semester":"Fall 2016","classid":2204}
        ,
        {"faculty":"INDU","classNum":"330","title":"Engineering Management ","section":"X","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 431 SGW","semester":"Fall 2016","classid":3186}
        ,
        {"faculty":"INDU","classNum":"412","title":"Human Factors Engineering ","section":"X XJ","type":"LAB","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM\nTu","room":"H 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW","semester":"Fall 2016","classid":3187}
        ,
        {"faculty":"ECON","classNum":"421","title":"Econometrics I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 605 SGW","semester":"Fall 2016","classid":2206}
        ,
        {"faculty":"INDU","classNum":"412","title":"Human Factors Engineering ","section":"X XL","type":"LAB","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM\nTh","room":"H 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW","semester":"Fall 2016","classid":3188}
        ,
        {"faculty":"INDU","classNum":"412","title":"Human Factors Engineering ","section":"X XM","type":"LAB","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"H 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW","semester":"Fall 2016","classid":3189}
        ,
        {"faculty":"ECON","classNum":"425","title":"Mathematics for Advanced Study in Economics ","section":"A A","type":"TUT","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:15PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":2207}
        ,
        {"faculty":"INDU","classNum":"412","title":"Human Factors Engineering ","section":"X XN","type":"LAB","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"H 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW","semester":"Fall 2016","classid":3190}
        ,
        {"faculty":"ECON","classNum":"425","title":"Mathematics for Advanced Study in Economics ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":2208}
        ,
        {"faculty":"INDU","classNum":"412","title":"Human Factors Engineering ","section":"X XI","type":"LAB","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM\nTu","room":"H 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW","semester":"Fall 2016","classid":3191}
        ,
        {"faculty":"INDU","classNum":"412","title":"Human Factors Engineering ","section":"X","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 507 SGW","semester":"Fall 2016","classid":3192}
        ,
        {"faculty":"INDU","classNum":"412","title":"Human Factors Engineering ","section":"X XK","type":"LAB","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM\nTh","room":"H 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW\nH 829 SGW","semester":"Fall 2016","classid":3193}
        ,
        {"faculty":"ECON","classNum":"464","title":"Game Theory, Information, and Economic Modelling ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 459 SGW","semester":"Fall 2016","classid":2210}
        ,
        {"faculty":"INDU","classNum":"421","title":"Facilities Design and Material Handling Systems ","section":"YI","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:35PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3194}
        ,
        {"faculty":"INDU","classNum":"421","title":"Facilities Design and Material Handling Systems ","section":"YJ","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:35PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3195}
        ,
        {"faculty":"ECON","classNum":"491","title":"Advanced Environmental Economics ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 623 SGW","semester":"Fall 2016","classid":2211}
        ,
        {"faculty":"INDU","classNum":"421","title":"Facilities Design and Material Handling Systems ","section":"Y YA","type":"TUT","day":"Fr","timeBegin":"2:15PM","timeEnd":"3:05PM","room":"FG B070 SGW","semester":"Fall 2016","classid":3196}
        ,
        {"faculty":"ECON","classNum":"493","title":"ADVANCED TOPICS IN ECONOMICS ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 544 SGW","semester":"Fall 2016","classid":2212}
        ,
        {"faculty":"INDU","classNum":"421","title":"Facilities Design and Material Handling Systems ","section":"Y","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG B070 SGW","semester":"Fall 2016","classid":3197}
        ,
        {"faculty":"INDU","classNum":"421","title":"Facilities Design and Material Handling Systems ","section":"YL","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3198}
        ,
        {"faculty":"INDU","classNum":"421","title":"Facilities Design and Material Handling Systems ","section":"YK","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3199}
        ,
        {"faculty":"INDU","classNum":"423","title":"Inventory Control ","section":"X XA","type":"TUT","day":"We","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"FG B070 SGW","semester":"Fall 2016","classid":3200}
        ,
        {"faculty":"INDU","classNum":"423","title":"Inventory Control ","section":"XI","type":"X","day":"Tu","timeBegin":"11:00AM","timeEnd":"12:55PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3201}
        ,
        {"faculty":"INDU","classNum":"423","title":"Inventory Control ","section":"XJ","type":"X","day":"Tu","timeBegin":"11:00AM","timeEnd":"12:55PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3202}
        ,
        {"faculty":"INDU","classNum":"423","title":"Inventory Control ","section":"XK","type":"X","day":"Th","timeBegin":"11:00AM","timeEnd":"12:55PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":3203}
        ,
        {"faculty":"INDU","classNum":"423","title":"Inventory Control ","section":"X","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B070 SGW","semester":"Fall 2016","classid":3204}
        ,
        {"faculty":"INDU","classNum":"475","title":"Advanced Concepts in Quality Improvement ","section":"XX","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 407 SGW","semester":"Fall 2016","classid":3206}
        ,
        {"faculty":"EXCI","classNum":"202","title":"The Body Human: Form and Function ","section":"51","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"SP S110 LOY","semester":"Fall 2016","classid":2727}
        ,
        {"faculty":"EXCI","classNum":"204","title":"Food for Sport ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG C070 SGW","semester":"Fall 2016","classid":2728}
        ,
        {"faculty":"EXCI","classNum":"210","title":"Introduction to Adapted and Therapeutic Physical Activity ","section":"01","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"HC 155 LOY","semester":"Fall 2016","classid":2729}
        ,
        {"faculty":"EXCI","classNum":"233","title":"Current Issues in Personal and Community Health ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 535 SGW","semester":"Fall 2016","classid":2730}
        ,
        {"faculty":"EXCI","classNum":"250","title":"Research Methods ","section":"01","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"Academic scheduling use only","semester":"Fall 2016","classid":2732}
        ,
        {"faculty":"EXCI","classNum":"251","title":"Fundamentals of Health and Physical Activity ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"HC 155 LOY","semester":"Fall 2016","classid":2733}
        ,
        {"faculty":"EXCI","classNum":"252","title":"Introduction to Physical Activity, Health and Fitness ","section":"0102","type":"LAB","day":"Tu","timeBegin":"1:15PM","timeEnd":"3:45PM","room":"SP S165-21 LOY","semester":"Fall 2016","classid":2735}
        ,
        {"faculty":"EDUC","classNum":"200","title":"English Exam for Teacher Certification ","section":"A","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2239}
        ,
        {"faculty":"EXCI","classNum":"252","title":"Introduction to Physical Activity, Health and Fitness ","section":"0103","type":"LAB","day":"We","timeBegin":"1:15PM","timeEnd":"3:45PM","room":"SP S165-21 LOY","semester":"Fall 2016","classid":2736}
        ,
        {"faculty":"EXCI","classNum":"252","title":"Introduction to Physical Activity, Health and Fitness ","section":"0104","type":"LAB","day":"Th","timeBegin":"1:15PM","timeEnd":"3:45PM","room":"SP S165-21 LOY","semester":"Fall 2016","classid":2737}
        ,
        {"faculty":"EDUC","classNum":"211","title":"Child Development I ","section":"B","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 415 SGW","semester":"Fall 2016","classid":2241}
        ,
        {"faculty":"EXCI","classNum":"252","title":"Introduction to Physical Activity, Health and Fitness ","section":"01","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 310 LOY","semester":"Fall 2016","classid":2738}
        ,
        {"faculty":"INST","classNum":"250","title":"Introductory Information Literacy Skills ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":3228}
        ,
        {"faculty":"EDUC","classNum":"211","title":"Child Development I ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 509 SGW","semester":"Fall 2016","classid":2242}
        ,
        {"faculty":"EXCI","classNum":"252","title":"Introduction to Physical Activity, Health and Fitness ","section":"0101","type":"LAB","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:45PM","room":"SP S165-21 LOY","semester":"Fall 2016","classid":2739}
        ,
        {"faculty":"INTE","classNum":"275","title":"(also listed as FASS 291) Introduction to Sexuality Research ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"FG C070 SGW","semester":"Fall 2016","classid":3229}
        ,
        {"faculty":"EDUC","classNum":"222","title":"Exploring Movement with Children ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 609 SGW","semester":"Fall 2016","classid":2243}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0207","type":"LAB","day":"We","timeBegin":"3:45PM","timeEnd":"5:45PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2740}
        ,
        {"faculty":"INTE","classNum":"290","title":"Introduction to Computer Usage and Document Design ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":3230}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"Academic scheduling use only","semester":"Fall 2016","classid":2741}
        ,
        {"faculty":"INTE","classNum":"293","title":"Computer Application Development ","section":"A B","type":"LAB","day":"Fr","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"TBA","semester":"Fall 2016","classid":3231}
        ,
        {"faculty":"EDUC","classNum":"230","title":"Introduction to Philosophy of Education ","section":"AA","type":"LEC","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 631 SGW","semester":"Fall 2016","classid":2244}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0101","type":"LAB","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:15PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2742}
        ,
        {"faculty":"INTE","classNum":"293","title":"Computer Application Development ","section":"A A","type":"LAB","day":"Mo","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"TBA","semester":"Fall 2016","classid":3232}
        ,
        {"faculty":"EDUC","classNum":"240","title":"Introduction to Training and Development ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":2245}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0102","type":"LAB","day":"Tu","timeBegin":"1:15PM","timeEnd":"3:15PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2743}
        ,
        {"faculty":"INTE","classNum":"293","title":"Computer Application Development ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"FG B055 SGW","semester":"Fall 2016","classid":3233}
        ,
        {"faculty":"EDUC","classNum":"250","title":"Introductory Information Literacy Skills in Education ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 557 SGW","semester":"Fall 2016","classid":2246}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0103","type":"LAB","day":"We","timeBegin":"1:15PM","timeEnd":"3:15PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2744}
        ,
        {"faculty":"EDUC","classNum":"264","title":"Communication: Child, Parent and Teacher ","section":"X","type":"LEC","day":"Th","timeBegin":"9:00AM","timeEnd":"11:00AM","room":"GA 1.145 SGW","semester":"Fall 2016","classid":2248}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0104","type":"LAB","day":"Th","timeBegin":"1:15PM","timeEnd":"3:15PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2745}
        ,
        {"faculty":"EDUC","classNum":"264","title":"Communication: Child, Parent and Teacher ","section":"X A","type":"LAB","day":"Th","timeBegin":"11:00AM","timeEnd":"12:30PM","room":"GA 1.145 SGW","semester":"Fall 2016","classid":2249}
        ,
        {"faculty":"EDUC","classNum":"270","title":"Educational Communication ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":2250}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0206","type":"LAB","day":"Tu","timeBegin":"3:45PM","timeEnd":"5:45PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2746}
        ,
        {"faculty":"EDUC","classNum":"295","title":"Internship I: Prekindergarten Teaching ","section":"A","type":"LEC","day":"Fr","timeBegin":"8:30AM","timeEnd":"10:45AM","room":"GA 1.145 SGW","semester":"Fall 2016","classid":2251}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0205","type":"LAB","day":"Mo","timeBegin":"3:45PM","timeEnd":"5:45PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2747}
        ,
        {"faculty":"EDUC","classNum":"296","title":"Prekindergarten Teaching Seminar ","section":"A","type":"LEC","day":"Fr","timeBegin":"11:00AM","timeEnd":"1:00PM","room":"GA 1.145 SGW","semester":"Fall 2016","classid":2252}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0204","type":"LAB","day":"Th","timeBegin":"1:15PM","timeEnd":"3:15PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2748}
        ,
        {"faculty":"EDUC","classNum":"301","title":"Integrating Computers into the Elementary Classroom ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 429 SGW","semester":"Fall 2016","classid":2253}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0203","type":"LAB","day":"We","timeBegin":"1:15PM","timeEnd":"3:15PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2749}
        ,
        {"faculty":"EDUC","classNum":"302","title":"Working in childhood Settings:  Leadership and Organizational Issues ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 557 SGW","semester":"Fall 2016","classid":2254}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0202","type":"LAB","day":"Tu","timeBegin":"1:15PM","timeEnd":"3:15PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2750}
        ,
        {"faculty":"EDUC","classNum":"303","title":"Children, Families, and Social Policy ","section":"A","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 631 SGW","semester":"Fall 2016","classid":2255}
        ,
        {"faculty":"EDUC","classNum":"374","title":"Child Studies Field Experience: Child and Youth Settings ","section":"A","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 540 SGW","semester":"Fall 2016","classid":2256}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0201","type":"LAB","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:15PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2751}
        ,
        {"faculty":"EDUC","classNum":"380","title":"Teaching Language Arts I ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 544 SGW","semester":"Fall 2016","classid":2257}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"02","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":2752}
        ,
        {"faculty":"EDUC","classNum":"382","title":"Teaching Science Concepts in the Elementary Classroom ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 623 SGW","semester":"Fall 2016","classid":2258}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0108","type":"LAB","day":"Th","timeBegin":"3:45PM","timeEnd":"5:45PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2753}
        ,
        {"faculty":"EDUC","classNum":"384","title":"Teaching Social Studies in Elementary Schools ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 623 SGW","semester":"Fall 2016","classid":2259}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0107","type":"LAB","day":"We","timeBegin":"3:45PM","timeEnd":"5:45PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2754}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0106","type":"LAB","day":"Tu","timeBegin":"3:45PM","timeEnd":"5:45PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2755}
        ,
        {"faculty":"EDUC","classNum":"386","title":"Teaching Mathematics I ","section":"XXA","type":"TUT","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 544 SGW","semester":"Fall 2016","classid":2260}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0105","type":"LAB","day":"Mo","timeBegin":"3:45PM","timeEnd":"5:45PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2756}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0208","type":"LAB","day":"Th","timeBegin":"3:45PM","timeEnd":"5:45PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":2757}
        ,
        {"faculty":"EDUC","classNum":"395","title":"Internship III: Kindergarten Teaching ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2262}
        ,
        {"faculty":"EXCI","classNum":"322","title":"Statistics for Exercise Science ","section":"01","type":"LEC","day":"We","timeBegin":"9:30AM","timeEnd":"12:30PM","room":"TBA","semester":"Fall 2016","classid":2758}
        ,
        {"faculty":"EXCI","classNum":"323","title":"Research Experience in Exercise Science ","section":"02","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2759}
        ,
        {"faculty":"EDUC","classNum":"395","title":"Internship III: Kindergarten Teaching ","section":"BB","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2263}
        ,
        {"faculty":"EXCI","classNum":"351","title":"Introduction to the Biomechanics of Human Movement ","section":"0103","type":"LAB","day":"We","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S165-35 LOY","semester":"Fall 2016","classid":2760}
        ,
        {"faculty":"EXCI","classNum":"351","title":"Introduction to the Biomechanics of Human Movement ","section":"01","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":2761}
        ,
        {"faculty":"EDUC","classNum":"395","title":"Internship III: Kindergarten Teaching ","section":"CC","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2264}
        ,
        {"faculty":"EXCI","classNum":"351","title":"Introduction to the Biomechanics of Human Movement ","section":"0101","type":"LAB","day":"Mo","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S165-35 LOY","semester":"Fall 2016","classid":2762}
        ,
        {"faculty":"EDUC","classNum":"396","title":"Kindergarten Teaching Seminar ","section":"AA","type":"SEM","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 627 SGW","semester":"Fall 2016","classid":2265}
        ,
        {"faculty":"EDUC","classNum":"400","title":"Teaching Across the Curriculum ","section":"AA","type":"LEC","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 459 SGW","semester":"Fall 2016","classid":2266}
        ,
        {"faculty":"EXCI","classNum":"351","title":"Introduction to the Biomechanics of Human Movement ","section":"0104","type":"LAB","day":"Th","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S165-35 LOY","semester":"Fall 2016","classid":2764}
        ,
        {"faculty":"EXCI","classNum":"352","title":"Essentials of Exercise Testing and Training in Athletic Populations ","section":"0101","type":"LAB","day":"Mo","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S165-27 LOY","semester":"Fall 2016","classid":2765}
        ,
        {"faculty":"EDUC","classNum":"406","title":"Educational Aspects of Physical Activity, Health and Wellness ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 401 SGW","semester":"Fall 2016","classid":2267}
        ,
        {"faculty":"EXCI","classNum":"352","title":"Essentials of Exercise Testing and Training in Athletic Populations ","section":"0102","type":"LAB","day":"Tu","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S165-27 LOY","semester":"Fall 2016","classid":2766}
        ,
        {"faculty":"EDUC","classNum":"422","title":"Sociology of Education I ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 539 SGW","semester":"Fall 2016","classid":2268}
        ,
        {"faculty":"EDUC","classNum":"426","title":"SEL TOPICS-COMPAR EDUC I ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 403 SGW","semester":"Fall 2016","classid":2269}
        ,
        {"faculty":"EXCI","classNum":"352","title":"Essentials of Exercise Testing and Training in Athletic Populations ","section":"01","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 310 LOY","semester":"Fall 2016","classid":2767}
        ,
        {"faculty":"EXCI","classNum":"352","title":"Essentials of Exercise Testing and Training in Athletic Populations ","section":"0104","type":"LAB","day":"Th","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S165-27 LOY","semester":"Fall 2016","classid":2768}
        ,
        {"faculty":"EDUC","classNum":"445","title":"Education in Quebec ","section":"BB","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2270}
        ,
        {"faculty":"EXCI","classNum":"352","title":"Essentials of Exercise Testing and Training in Athletic Populations ","section":"0103","type":"LAB","day":"We","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S165-27 LOY","semester":"Fall 2016","classid":2769}
        ,
        {"faculty":"EDUC","classNum":"450","title":"The Inclusive Classroom: Educating Exceptional Children ","section":"BB","type":"LEC","day":"Th","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 565 SGW","semester":"Fall 2016","classid":2271}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"01","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"HC 157 LOY","semester":"Fall 2016","classid":2770}
        ,
        {"faculty":"EDUC","classNum":"454","title":"Diversity in the Classroom ","section":"AA","type":"LEC","day":"Th","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 423 SGW","semester":"Fall 2016","classid":2272}
        ,
        {"faculty":"EDUC","classNum":"490","title":"The Exceptional Child I ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 423 SGW","semester":"Fall 2016","classid":2273}
        ,
        {"faculty":"EDUC","classNum":"492","title":"Child Studies Field Experience: Adaptations and Accommodations in Special and Inclusive  ","section":"A","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 537 SGW","semester":"Fall 2016","classid":2274}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"0102","type":"LAB","day":"Tu","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S112-02 LOY","semester":"Fall 2016","classid":2772}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"0103","type":"LAB","day":"We","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S112-02 LOY","semester":"Fall 2016","classid":2773}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"0104","type":"LAB","day":"Th","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S112-02 LOY","semester":"Fall 2016","classid":2774}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"02","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"HC 157 LOY","semester":"Fall 2016","classid":2775}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"0201","type":"LAB","day":"Mo","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S112-04 LOY","semester":"Fall 2016","classid":2776}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"0202","type":"LAB","day":"Tu","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S112-04 LOY","semester":"Fall 2016","classid":2777}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"0203","type":"LAB","day":"We","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S112-04 LOY","semester":"Fall 2016","classid":2778}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"0204","type":"LAB","day":"Th","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S112-04 LOY","semester":"Fall 2016","classid":2779}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"0251","type":"LAB","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"SP S112-04 LOY","semester":"Fall 2016","classid":2780}
        ,
        {"faculty":"EXCI","classNum":"380","title":"Adapted Physical Activity ","section":"01","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"HC 155 LOY","semester":"Fall 2016","classid":2781}
        ,
        {"faculty":"EXCI","classNum":"383","title":"Clinical Exercise Physiology Internship I ","section":"01","type":"PRA","day":"Fr","timeBegin":"9:00AM","timeEnd":"10:00AM","room":"CC 314 LOY","semester":"Fall 2016","classid":2782}
        ,
        {"faculty":"EXCI","classNum":"422","title":"Pathophysiology in Clinical Exercise Science I ","section":"01","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"CC 405 LOY","semester":"Fall 2016","classid":2783}
        ,
        {"faculty":"EXCI","classNum":"424","title":"Honours Seminar I: Issues and Methods in Exercise Science ","section":"01","type":"SEM","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2784}
        ,
        {"faculty":"EXCI","classNum":"445","title":"Nutrition in Exercise and Sport ","section":"01","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"HC 155 LOY","semester":"Fall 2016","classid":2785}
        ,
        {"faculty":"EXCI","classNum":"357","title":"Human Physiology II: The Cardiovascular and Respiratory Systems ","section":"0101","type":"LAB","day":"Mo","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S112-02 LOY","semester":"Fall 2016","classid":2771}
        ,
        {"faculty":"EXCI","classNum":"461","title":"Pharmacology for Sport and Exercise ","section":"02","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"CC 116 LOY","semester":"Fall 2016","classid":2786}
        ,
        {"faculty":"EXCI","classNum":"483","title":"Clinical Exercise Physiology Internship II ","section":"01","type":"PRA","day":"Fr","timeBegin":"10:00AM","timeEnd":"11:00PM","room":"CC 314 LOY","semester":"Fall 2016","classid":2787}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"RL","type":"X","day":"Th","timeBegin":"3:30PM","timeEnd":"6:00PM\nTh","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2291}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"R RB","type":"TUT","day":"Mo","timeBegin":"2:30PM","timeEnd":"4:10PM","room":"H 537 SGW","semester":"Fall 2016","classid":2292}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"RK","type":"X","day":"Th","timeBegin":"3:30PM","timeEnd":"6:15PM\nTh","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2293}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"RI","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM\nMo","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2294}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"R RA","type":"TUT","day":"Tu","timeBegin":"2:30PM","timeEnd":"4:10PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":2295}
        ,
        {"faculty":"FASS","classNum":"291","title":"(also listed as INTE 275) Introduction to Sexuality Research ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"FG C070 SGW","semester":"Fall 2016","classid":2794}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"R","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B040 SGW","semester":"Fall 2016","classid":2296}
        ,
        {"faculty":"FBRS","classNum":"371","title":"Paper: Surface and Object ","section":"A","type":"STU","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 9.725 SGW","semester":"Fall 2016","classid":2795}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"RJ","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM\nMo","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2297}
        ,
        {"faculty":"FBRS","classNum":"451","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2796}
        ,
        {"faculty":"FBRS","classNum":"452","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2797}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"V VB","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"H 564 SGW","semester":"Fall 2016","classid":2298}
        ,
        {"faculty":"FBRS","classNum":"481","title":"Professional Internship I ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2798}
        ,
        {"faculty":"FBRS","classNum":"482","title":"Professional Internship II ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2799}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"VK","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM\nMo","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2299}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"VJ","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM\nMo","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2300}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"TK","type":"X","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM\nFr","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2301}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"TJ","type":"X","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM\nTh","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2302}
        ,
        {"faculty":"FINA","classNum":"200","title":"Personal Finance ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":2802}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"TI","type":"X","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM\nTu","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2303}
        ,
        {"faculty":"FINA","classNum":"210","title":"Introduction to Real Estate ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":2803}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"T TA","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"H 540 SGW","semester":"Fall 2016","classid":2304}
        ,
        {"faculty":"FINA","classNum":"210","title":"Introduction to Real Estate ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":2804}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"T","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 820 SGW","semester":"Fall 2016","classid":2305}
        ,
        {"faculty":"FINA","classNum":"370","title":"INTERNATIONAL FINANCIAL MGMT ","section":"A","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":2805}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"VI","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM\nMo","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2306}
        ,
        {"faculty":"FINA","classNum":"382","title":"MGMT OF INT'L FINANCIAL INST ","section":"A","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":2806}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"VL","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM\nMo","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":2307}
        ,
        {"faculty":"FINA","classNum":"385","title":"Theory of Finance I ","section":"A","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":2807}
        ,
        {"faculty":"FINA","classNum":"385","title":"Theory of Finance I ","section":"D","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":2808}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"V VA","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"H 537 SGW","semester":"Fall 2016","classid":2309}
        ,
        {"faculty":"FINA","classNum":"385","title":"Theory of Finance I ","section":"E","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":2809}
        ,
        {"faculty":"ELEC","classNum":"311","title":"Electronics I ","section":"FJ","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM\nMo","room":"H 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW","semester":"Fall 2016","classid":2310}
        ,
        {"faculty":"ELEC","classNum":"311","title":"Electronics I ","section":"F FB","type":"TUT","day":"Fr","timeBegin":"2:35PM","timeEnd":"4:15PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":2311}
        ,
        {"faculty":"FINA","classNum":"385","title":"Theory of Finance I ","section":"C","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":2810}
        ,
        {"faculty":"ELEC","classNum":"311","title":"Electronics I ","section":"F","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1070 SGW","semester":"Fall 2016","classid":2312}
        ,
        {"faculty":"ELEC","classNum":"311","title":"Electronics I ","section":"F FA","type":"TUT","day":"Mo","timeBegin":"2:30PM","timeEnd":"4:10PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":2313}
        ,
        {"faculty":"FINA","classNum":"385","title":"Theory of Finance I ","section":"B","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":2811}
        ,
        {"faculty":"ELEC","classNum":"311","title":"Electronics I ","section":"FI","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM\nMo","room":"H 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW","semester":"Fall 2016","classid":2314}
        ,
        {"faculty":"FINA","classNum":"385","title":"Theory of Finance I ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":2812}
        ,
        {"faculty":"FINA","classNum":"395","title":"Theory of Finance II ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":2813}
        ,
        {"faculty":"ELEC","classNum":"311","title":"Electronics I ","section":"FK","type":"X","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:30PM\nTu","room":"H 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW","semester":"Fall 2016","classid":2316}
        ,
        {"faculty":"FINA","classNum":"395","title":"Theory of Finance II ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":2815}
        ,
        {"faculty":"ELEC","classNum":"312","title":"Electronics II ","section":"F FA","type":"TUT","day":"Th","timeBegin":"9:10AM","timeEnd":"10:00AM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":2317}
        ,
        {"faculty":"FINA","classNum":"395","title":"Theory of Finance II ","section":"B","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":2816}
        ,
        {"faculty":"ELEC","classNum":"312","title":"Electronics II ","section":"F","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 521 SGW","semester":"Fall 2016","classid":2318}
        ,
        {"faculty":"FINA","classNum":"395","title":"Theory of Finance II ","section":"D","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":2817}
        ,
        {"faculty":"ELEC","classNum":"351","title":"Electromagnetic Waves and Guiding Structures ","section":"H","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":2319}
        ,
        {"faculty":"ELEC","classNum":"351","title":"Electromagnetic Waves and Guiding Structures ","section":"H HA","type":"TUT","day":"Mo","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"H 537 SGW","semester":"Fall 2016","classid":2320}
        ,
        {"faculty":"FINA","classNum":"402","title":"Short-Term Financial Management ","section":"A","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":2818}
        ,
        {"faculty":"ELEC","classNum":"351","title":"Electromagnetic Waves and Guiding Structures ","section":"H HB","type":"TUT","day":"Mo","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"H 564 SGW","semester":"Fall 2016","classid":2321}
        ,
        {"faculty":"FINA","classNum":"402","title":"Short-Term Financial Management ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.430 SGW","semester":"Fall 2016","classid":2819}
        ,
        {"faculty":"FINA","classNum":"402","title":"Short-Term Financial Management ","section":"BB","type":"LEC","day":"We","timeBegin":"8:30PM","timeEnd":"11:00PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":2820}
        ,
        {"faculty":"FINA","classNum":"405","title":"Cases in Finance ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.285 SGW","semester":"Fall 2016","classid":2821}
        ,
        {"faculty":"FINA","classNum":"405","title":"Cases in Finance ","section":"B","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 6.425 SGW","semester":"Fall 2016","classid":2822}
        ,
        {"faculty":"FINA","classNum":"410","title":"Investment Analysis ","section":"B","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":2823}
        ,
        {"faculty":"FINA","classNum":"410","title":"Investment Analysis ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":2824}
        ,
        {"faculty":"FINA","classNum":"410","title":"Investment Analysis ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":2825}
        ,
        {"faculty":"FINA","classNum":"410","title":"Investment Analysis ","section":"C","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":2826}
        ,
        {"faculty":"FINA","classNum":"411","title":"Portfolio Management ","section":"C","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":2827}
        ,
        {"faculty":"FINA","classNum":"411","title":"Portfolio Management ","section":"B","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":2828}
        ,
        {"faculty":"FINA","classNum":"411","title":"Portfolio Management ","section":"A","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 3.445 SGW","semester":"Fall 2016","classid":2829}
        ,
        {"faculty":"FINA","classNum":"412","title":"Options and Futures ","section":"A","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":2830}
        ,
        {"faculty":"ELEC","classNum":"372","title":"Fundamentals of Control Systems ","section":"RL","type":"X","day":"Fr","timeBegin":"2:45PM","timeEnd":"5:30PM\nFr","room":"H 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW","semester":"Fall 2016","classid":2332}
        ,
        {"faculty":"FINA","classNum":"412","title":"Options and Futures ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 620 SGW","semester":"Fall 2016","classid":2831}
        ,
        {"faculty":"ELEC","classNum":"372","title":"Fundamentals of Control Systems ","section":"R","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B030 SGW","semester":"Fall 2016","classid":2333}
        ,
        {"faculty":"FINA","classNum":"415","title":"Mergers and Acquisitions ","section":"A","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":2832}
        ,
        {"faculty":"ELEC","classNum":"372","title":"Fundamentals of Control Systems ","section":"R RA","type":"TUT","day":"Tu","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 529 SGW","semester":"Fall 2016","classid":2334}
        ,
        {"faculty":"ELEC","classNum":"372","title":"Fundamentals of Control Systems ","section":"RI","type":"X","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM\nMo","room":"H 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW","semester":"Fall 2016","classid":2335}
        ,
        {"faculty":"FINA","classNum":"415","title":"Mergers and Acquisitions ","section":"B","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 3.430 SGW","semester":"Fall 2016","classid":2833}
        ,
        {"faculty":"ELEC","classNum":"372","title":"Fundamentals of Control Systems ","section":"RK","type":"X","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM\nTu","room":"H 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW","semester":"Fall 2016","classid":2336}
        ,
        {"faculty":"FINA","classNum":"416","title":"Behavioural Finance ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.285 SGW","semester":"Fall 2016","classid":2834}
        ,
        {"faculty":"ELEC","classNum":"372","title":"Fundamentals of Control Systems ","section":"RJ","type":"X","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM\nWe","room":"H 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW\nH 832-6 SGW","semester":"Fall 2016","classid":2337}
        ,
        {"faculty":"FINA","classNum":"450","title":"Real Estate Investment and Finance ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":2835}
        ,
        {"faculty":"ELEC","classNum":"390","title":"ELEC. ENG. PROD DESIGN PROJ. ","section":"H","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B070 SGW","semester":"Fall 2016","classid":2338}
        ,
        {"faculty":"FINA","classNum":"450","title":"Real Estate Investment and Finance ","section":"BB","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":2836}
        ,
        {"faculty":"ELEC","classNum":"390","title":"ELEC. ENG. PROD DESIGN PROJ. ","section":"H HA","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"FG B070 SGW","semester":"Fall 2016","classid":2339}
        ,
        {"faculty":"FINA","classNum":"470","title":"International Finance ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":2837}
        ,
        {"faculty":"ELEC","classNum":"421","title":"Solid State Devices ","section":"WW","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 521 SGW","semester":"Fall 2016","classid":2340}
        ,
        {"faculty":"FINA","classNum":"470","title":"International Finance ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 420 SGW","semester":"Fall 2016","classid":2838}
        ,
        {"faculty":"ELEC","classNum":"421","title":"Solid State Devices ","section":"WWWI","type":"LAB","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM\nWe","room":"H007 SGW\nH007 SGW\nH007 SGW\nH007 SGW\nH007 SGW\nH007 SGW","semester":"Fall 2016","classid":2341}
        ,
        {"faculty":"FINA","classNum":"481","title":"Management of Financial Institutions ","section":"A","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 433 SGW","semester":"Fall 2016","classid":2839}
        ,
        {"faculty":"FLIT","classNum":"220","title":"Introduction aux textes littéraires ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 529 SGW","semester":"Fall 2016","classid":2840}
        ,
        {"faculty":"ELEC","classNum":"421","title":"Solid State Devices ","section":"WWWJ","type":"LAB","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM\nWe","room":"H007 SGW\nH007 SGW\nH007 SGW\nH007 SGW\nH007 SGW\nH007 SGW","semester":"Fall 2016","classid":2342}
        ,
        {"faculty":"FLIT","classNum":"303","title":"Littérature et culture québécoises de 1534 à 1900 ","section":"A","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 619 SGW","semester":"Fall 2016","classid":2842}
        ,
        {"faculty":"FLIT","classNum":"456","title":"TEXTES ETRÉSONANCES MÉDIA ","section":"A","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 540 SGW","semester":"Fall 2016","classid":2843}
        ,
        {"faculty":"ELEC","classNum":"431","title":"Electrical Power Systems ","section":"QP","type":"LEC","day":"We","timeBegin":"9:30AM","timeEnd":"12:20PM","room":"TBA","semester":"Fall 2016","classid":2345}
        ,
        {"faculty":"FLIT","classNum":"494","title":"Tutorat en littérature ","section":"BB","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2844}
        ,
        {"faculty":"ELEC","classNum":"431","title":"Electrical Power Systems ","section":"QPQA","type":"LAB","day":"We","timeBegin":"1:45PM","timeEnd":"4:45PM","room":"TBA","semester":"Fall 2016","classid":2346}
        ,
        {"faculty":"FLIT","classNum":"495","title":"Tutorat en littérature ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2845}
        ,
        {"faculty":"ELEC","classNum":"432","title":"Control of Electrical Power Conversion Systems ","section":"QP","type":"LEC","day":"Tu","timeBegin":"8:30AM","timeEnd":"11:20AM","room":"TBA","semester":"Fall 2016","classid":2347}
        ,
        {"faculty":"ELEC","classNum":"432","title":"Control of Electrical Power Conversion Systems ","section":"QPQA","type":"LAB","day":"Tu","timeBegin":"12:45PM","timeEnd":"3:45PM","room":"TBA","semester":"Fall 2016","classid":2348}
        ,
        {"faculty":"ELEC","classNum":"433","title":"Power Electronics ","section":"QPQB","type":"LAB","day":"Mo","timeBegin":"1:45PM","timeEnd":"4:45PM","room":"TBA","semester":"Fall 2016","classid":2349}
        ,
        {"faculty":"ELEC","classNum":"433","title":"Power Electronics ","section":"W WL","type":"LAB","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM\nTh","room":"H 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW","semester":"Fall 2016","classid":2350}
        ,
        {"faculty":"ELEC","classNum":"433","title":"Power Electronics ","section":"W WK","type":"LAB","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM\nTu","room":"H 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW","semester":"Fall 2016","classid":2351}
        ,
        {"faculty":"ELEC","classNum":"433","title":"Power Electronics ","section":"W WJ","type":"LAB","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM\nTh","room":"H 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW","semester":"Fall 2016","classid":2352}
        ,
        {"faculty":"ELEC","classNum":"433","title":"Power Electronics ","section":"W WI","type":"LAB","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM\nTu","room":"H 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW","semester":"Fall 2016","classid":2353}
        ,
        {"faculty":"ELEC","classNum":"433","title":"Power Electronics ","section":"W","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"FG B060 SGW","semester":"Fall 2016","classid":2354}
        ,
        {"faculty":"ELEC","classNum":"433","title":"Power Electronics ","section":"QPQA","type":"LAB","day":"Mo","timeBegin":"1:45PM","timeEnd":"4:45PM","room":"TBA","semester":"Fall 2016","classid":2355}
        ,
        {"faculty":"ELEC","classNum":"433","title":"Power Electronics ","section":"QP","type":"LEC","day":"Mo","timeBegin":"9:30AM","timeEnd":"12:20PM","room":"TBA","semester":"Fall 2016","classid":2356}
        ,
        {"faculty":"ELEC","classNum":"435","title":"Electromechanical Energy Conversion Systems ","section":"QPQA","type":"LAB","day":"Th","timeBegin":"1:45PM","timeEnd":"4:45PM","room":"TBA","semester":"Fall 2016","classid":2357}
        ,
        {"faculty":"ELEC","classNum":"435","title":"Electromechanical Energy Conversion Systems ","section":"QP","type":"LEC","day":"Th","timeBegin":"9:30AM","timeEnd":"12:20PM","room":"TBA","semester":"Fall 2016","classid":2358}
        ,
        {"faculty":"FMAN","classNum":"315","title":"From Idea to Storyboard ","section":"A","type":"STU","day":"Th","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"FB 323 SGW","semester":"Fall 2016","classid":2855}
        ,
        {"faculty":"FMAN","classNum":"315","title":"From Idea to Storyboard ","section":"B","type":"STU","day":"Fr","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"FB 323 SGW","semester":"Fall 2016","classid":2856}
        ,
        {"faculty":"FMAN","classNum":"340","title":"Sound for Animated Film ","section":"A","type":"STU","day":"We","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"FB 430 SGW","semester":"Fall 2016","classid":2857}
        ,
        {"faculty":"FMAN","classNum":"352","title":"Stop?Motion Animation ","section":"AA","type":"STU","day":"Tu","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"FB 323 SGW","semester":"Fall 2016","classid":2858}
        ,
        {"faculty":"ELEC","classNum":"453","title":"Microwave Engineering ","section":"WW","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 564 SGW","semester":"Fall 2016","classid":2364}
        ,
        {"faculty":"FMAN","classNum":"446","title":"Professional Internship I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2859}
        ,
        {"faculty":"FMAN","classNum":"447","title":"Professional Internship II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2860}
        ,
        {"faculty":"FMAN","classNum":"448","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2861}
        ,
        {"faculty":"ELEC","classNum":"453","title":"Microwave Engineering ","section":"WWWI","type":"LAB","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM\nTh","room":"H 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW","semester":"Fall 2016","classid":2366}
        ,
        {"faculty":"ELEC","classNum":"453","title":"Microwave Engineering ","section":"WWWJ","type":"LAB","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM\nTh","room":"H 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW","semester":"Fall 2016","classid":2367}
        ,
        {"faculty":"FMAN","classNum":"449","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2862}
        ,
        {"faculty":"ELEC","classNum":"456","title":"Antennas ","section":"HHHI","type":"LAB","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM\nTu","room":"H 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW","semester":"Fall 2016","classid":2368}
        ,
        {"faculty":"FMPR","classNum":"338","title":"Image I ","section":"AA","type":"STU","day":"Tu","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"FB 301 SGW","semester":"Fall 2016","classid":2863}
        ,
        {"faculty":"FMPR","classNum":"338","title":"Image I ","section":"B","type":"STU","day":"Tu","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"FB 301 SGW","semester":"Fall 2016","classid":2864}
        ,
        {"faculty":"ELEC","classNum":"456","title":"Antennas ","section":"HHHJ","type":"LAB","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM\nWe","room":"H 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW\nH 853 SGW","semester":"Fall 2016","classid":2370}
        ,
        {"faculty":"FMPR","classNum":"338","title":"Image I ","section":"A","type":"STU","day":"Tu","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"FB 301 SGW","semester":"Fall 2016","classid":2865}
        ,
        {"faculty":"FMPR","classNum":"338","title":"Image I ","section":"C","type":"STU","day":"We","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"FB 301 SGW","semester":"Fall 2016","classid":2866}
        ,
        {"faculty":"FMPR","classNum":"340","title":"Sound I ","section":"A","type":"STU","day":"Mo","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"FB 405 SGW","semester":"Fall 2016","classid":2867}
        ,
        {"faculty":"ELEC","classNum":"456","title":"Antennas ","section":"HH","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 529 SGW","semester":"Fall 2016","classid":2372}
        ,
        {"faculty":"FMPR","classNum":"340","title":"Sound I ","section":"AA","type":"STU","day":"Mo","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"FB 405 SGW","semester":"Fall 2016","classid":2868}
        ,
        {"faculty":"FMPR","classNum":"340","title":"Sound I ","section":"B","type":"STU","day":"Fr","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"FB 405 SGW","semester":"Fall 2016","classid":2869}
        ,
        {"faculty":"FMPR","classNum":"341","title":"Writing for Film I ","section":"AA","type":"STU","day":"Tu","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"FB 405 SGW","semester":"Fall 2016","classid":2870}
        ,
        {"faculty":"FMPR","classNum":"438","title":"Image II ","section":"A","type":"STU","day":"We","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"FB 301 SGW","semester":"Fall 2016","classid":2872}
        ,
        {"faculty":"FMPR","classNum":"446","title":"Professional Internship I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2873}
        ,
        {"faculty":"ELEC","classNum":"463","title":"Telecommunication Networks ","section":"H","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B060 SGW","semester":"Fall 2016","classid":2376}
        ,
        {"faculty":"FMPR","classNum":"448","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2874}
        ,
        {"faculty":"ELEC","classNum":"466","title":"Introduction to Optical Communication Systems ","section":"WWWI","type":"LAB","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":2377}
        ,
        {"faculty":"FMPR","classNum":"449","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2875}
        ,
        {"faculty":"FMPR","classNum":"451","title":"Advanced Project Internship I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2876}
        ,
        {"faculty":"ELEC","classNum":"481","title":"Linear Systems ","section":"EEEI","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2380}
        ,
        {"faculty":"FMPR","classNum":"452","title":"Advanced Project Internship II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2877}
        ,
        {"faculty":"ELEC","classNum":"481","title":"Linear Systems ","section":"EE","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 553 SGW","semester":"Fall 2016","classid":2381}
        ,
        {"faculty":"ELEC","classNum":"481","title":"Linear Systems ","section":"EEEK","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2382}
        ,
        {"faculty":"FMST","classNum":"216","title":"METHODS IN FILM STUDIES ","section":"A","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"VA 114 SGW","semester":"Fall 2016","classid":2880}
        ,
        {"faculty":"FMST","classNum":"323","title":"History of Animated Film ","section":"A","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"VA 114 SGW","semester":"Fall 2016","classid":2881}
        ,
        {"faculty":"FMST","classNum":"331","title":"FILM DIRECTORS ","section":"A","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"VA 114 SGW","semester":"Fall 2016","classid":2882}
        ,
        {"faculty":"FMST","classNum":"426","title":"Professional Internship I ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2884}
        ,
        {"faculty":"FMST","classNum":"427","title":"Professional Internship II ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2885}
        ,
        {"faculty":"FMST","classNum":"429","title":"Independent Study II ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2887}
        ,
        {"faculty":"FPST","classNum":"201","title":"Introduction to First Peoples Studies ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"CI 104 SGW","semester":"Fall 2016","classid":2897}
        ,
        {"faculty":"FPST","classNum":"297","title":"PROSEMINAR INDIGENOUS WAYS OF KNOWING ","section":"G","type":"MOD","day":"Fr","timeBegin":"10:00AM","timeEnd":"2:30PM\nFr","room":"H 623 SGW\nCI 104 SGW","semester":"Fall 2016","classid":2899}
        ,
        {"faculty":"FPST","classNum":"303","title":"FIRST PEOPLES AND HEALTH ","section":"A","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 611 SGW","semester":"Fall 2016","classid":2900}
        ,
        {"faculty":"FRAA","classNum":"400","title":"Introduction à la linguistique française I ","section":"A","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 544 SGW","semester":"Fall 2016","classid":2902}
        ,
        {"faculty":"FRAA","classNum":"404","title":"Histoire de la langue française au Québec ","section":"A","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S2.465 SGW","semester":"Fall 2016","classid":2903}
        ,
        {"faculty":"FRAA","classNum":"410","title":"Grammaire du français en contextes ","section":"A","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":2904}
        ,
        {"faculty":"FRAA","classNum":"412","title":"Grammaire de texte ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":2905}
        ,
        {"faculty":"ENCS","classNum":"272","title":"Composition and Argumentation for Engineers ","section":"N NA","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":2409}
        ,
        {"faculty":"FRAA","classNum":"413","title":"Rédaction I ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":2906}
        ,
        {"faculty":"FRAA","classNum":"423","title":"Rédaction II ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":2907}
        ,
        {"faculty":"FRAA","classNum":"432","title":"Écriture pour le Web ","section":"A","type":"LEC","day":"Mo","timeBegin":"10:15","timeEnd":"13:00","room":"H 400 SGW","semester":"Fall 2016","classid":2908}
        ,
        {"faculty":"FRAA","classNum":"491","title":"Tutorat en langue, linguistique ou rédaction ","section":"BB","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2909}
        ,
        {"faculty":"ENCS","classNum":"272","title":"Composition and Argumentation for Engineers ","section":"N NB","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":2411}
        ,
        {"faculty":"ENCS","classNum":"272","title":"Composition and Argumentation for Engineers ","section":"N","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":2412}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"A AL","type":"TUT","day":"Mo","timeBegin":"8:20AM","timeEnd":"10:00AM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":2414}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"B BD","type":"TUT","day":"We","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":2415}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"A AN","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":2416}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"A AO","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":2417}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 531 SGW","semester":"Fall 2016","classid":2418}
        ,
        {"faculty":"FRAN","classNum":"211","title":"French Language: Elementary ","section":"D","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":2915}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"B BA","type":"TUT","day":"We","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":2419}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"B BB","type":"TUT","day":"We","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":2420}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"B BC","type":"TUT","day":"We","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":2421}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 531 SGW","semester":"Fall 2016","classid":2422}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"BB","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG C080 SGW","semester":"Fall 2016","classid":2423}
        ,
        {"faculty":"FRAN","classNum":"211","title":"French Language: Elementary ","section":"B","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 615 SGW","semester":"Fall 2016","classid":2919}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"BBBQ","type":"TUT","day":"Th","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":2424}
        ,
        {"faculty":"FRAN","classNum":"211","title":"French Language: Elementary ","section":"C","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 625 SGW","semester":"Fall 2016","classid":2920}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"BBBN","type":"TUT","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":2425}
        ,
        {"faculty":"FRAN","classNum":"211","title":"French Language: Elementary ","section":"AA","type":"LEC","day":"TuTh","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 513 SGW","semester":"Fall 2016","classid":2921}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"BBBO","type":"TUT","day":"Fr","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":2426}
        ,
        {"faculty":"FRAN","classNum":"211","title":"French Language: Elementary ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 427 SGW","semester":"Fall 2016","classid":2922}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"BBBP","type":"TUT","day":"Fr","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":2427}
        ,
        {"faculty":"ENCS","classNum":"282","title":"Technical Writing and Communication ","section":"A AM","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":2428}
        ,
        {"faculty":"FRAN","classNum":"212","title":"French Language: Transitional Level ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 529 SGW","semester":"Fall 2016","classid":2923}
        ,
        {"faculty":"FRAN","classNum":"212","title":"French Language: Transitional Level ","section":"AA","type":"LEC","day":"TuTh","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":2924}
        ,
        {"faculty":"ENCS","classNum":"393","title":"Social and Ethical Dimensions of Information and Communication Technologies ","section":"FF","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B030 SGW","semester":"Fall 2016","classid":2429}
        ,
        {"faculty":"ENCS","classNum":"483","title":"INN.&CRITICL THKNG SCI&TECH ","section":"DD","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2430}
        ,
        {"faculty":"FRAN","classNum":"212","title":"French Language: Transitional Level ","section":"B","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 623 SGW","semester":"Fall 2016","classid":2925}
        ,
        {"faculty":"FRAN","classNum":"212","title":"French Language: Transitional Level ","section":"T","type":"LEC","day":"Sa","timeBegin":"9:30AM","timeEnd":"3:30PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":2926}
        ,
        {"faculty":"FRAN","classNum":"212","title":"French Language: Transitional Level ","section":"C","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 621 SGW","semester":"Fall 2016","classid":2928}
        ,
        {"faculty":"FRAN","classNum":"213","title":"Langue française : niveaux intermédiaires I et II ","section":"AA","type":"LEC","day":"WeFr","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 621 SGW","semester":"Fall 2016","classid":2929}
        ,
        {"faculty":"FRAN","classNum":"213","title":"Langue française : niveaux intermédiaires I et II ","section":"B","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 544 SGW","semester":"Fall 2016","classid":2930}
        ,
        {"faculty":"FRAN","classNum":"213","title":"Langue française : niveaux intermédiaires I et II ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":2931}
        ,
        {"faculty":"FRAN","classNum":"214","title":"Langue française : niveau intermédiaire I ","section":"A","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 513 SGW","semester":"Fall 2016","classid":2933}
        ,
        {"faculty":"ENGL","classNum":"206","title":"Fundamentals of Written English","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 400 SGW","semester":"Fall 2016","classid":2440}
        ,
        {"faculty":"FRAN","classNum":"215","title":"Langue française : niveau intermédiaire II ","section":"A","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 400-2 SGW","semester":"Fall 2016","classid":2934}
        ,
        {"faculty":"FRAN","classNum":"218","title":"Initiation au français oral ","section":"A","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 529 SGW","semester":"Fall 2016","classid":2935}
        ,
        {"faculty":"FRAN","classNum":"219","title":"Initiation au français écrit ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":2936}
        ,
        {"faculty":"ENGL","classNum":"206","title":"Fundamentals of Written English","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 613 SGW","semester":"Fall 2016","classid":2441}
        ,
        {"faculty":"FRAN","classNum":"221","title":"Correction phonétique ","section":"A","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":2937}
        ,
        {"faculty":"ENGL","classNum":"206","title":"Fundamentals of Written English","section":"B","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 627 SGW","semester":"Fall 2016","classid":2442}
        ,
        {"faculty":"ENGL","classNum":"207","title":"Fundamentals of Written English","section":"B","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 621 SGW","semester":"Fall 2016","classid":2443}
        ,
        {"faculty":"ENGL","classNum":"207","title":"Fundamentals of Written English","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 513 SGW","semester":"Fall 2016","classid":2444}
        ,
        {"faculty":"FRAN","classNum":"301","title":"Langue française : niveaux d'approfondissement I et II ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 615 SGW","semester":"Fall 2016","classid":2938}
        ,
        {"faculty":"ENGL","classNum":"207","title":"Fundamentals of Written English","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 540 SGW","semester":"Fall 2016","classid":2445}
        ,
        {"faculty":"FRAN","classNum":"301","title":"Langue française : niveaux d'approfondissement I et II ","section":"B","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":2939}
        ,
        {"faculty":"ENGL","classNum":"207","title":"Fundamentals of Written English","section":"BB","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 400 SGW","semester":"Fall 2016","classid":2446}
        ,
        {"faculty":"FRAN","classNum":"302","title":"Langue française : niveau d'approfondissement I ","section":"A","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":2940}
        ,
        {"faculty":"ENGL","classNum":"210","title":"Introduction to Essay Writing ","section":"BB","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 529 SGW","semester":"Fall 2016","classid":2447}
        ,
        {"faculty":"FRAN","classNum":"305","title":"Communication orale ","section":"B","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":2941}
        ,
        {"faculty":"ENGL","classNum":"210","title":"Introduction to Essay Writing ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 609 SGW","semester":"Fall 2016","classid":2448}
        ,
        {"faculty":"FRAN","classNum":"305","title":"Communication orale ","section":"A","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":2942}
        ,
        {"faculty":"ENGL","classNum":"210","title":"Introduction to Essay Writing ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 615 SGW","semester":"Fall 2016","classid":2449}
        ,
        {"faculty":"ENGL","classNum":"210","title":"Introduction to Essay Writing ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 625 SGW","semester":"Fall 2016","classid":2450}
        ,
        {"faculty":"FRAN","classNum":"306","title":"Communication écrite ","section":"A","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 615 SGW","semester":"Fall 2016","classid":2943}
        ,
        {"faculty":"ENGL","classNum":"212","title":"English Composition","section":"BB","type":"LEC","day":"We","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 529 SGW","semester":"Fall 2016","classid":2451}
        ,
        {"faculty":"FRAN","classNum":"318","title":"Le français des affaires I ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":2944}
        ,
        {"faculty":"FRAN","classNum":"320","title":"Le vocabulaire français ","section":"A","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":2945}
        ,
        {"faculty":"ENGL","classNum":"212","title":"English Composition","section":"C","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 400-2 SGW","semester":"Fall 2016","classid":2452}
        ,
        {"faculty":"FRAN","classNum":"321","title":"Grammaire fonctionnelle du français ","section":"A","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 529 SGW","semester":"Fall 2016","classid":2946}
        ,
        {"faculty":"ENGL","classNum":"212","title":"English Composition","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 615 SGW","semester":"Fall 2016","classid":2453}
        ,
        {"faculty":"FRAN","classNum":"321","title":"Grammaire fonctionnelle du français ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":2947}
        ,
        {"faculty":"ENGL","classNum":"212","title":"English Composition","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 627 SGW","semester":"Fall 2016","classid":2454}
        ,
        {"faculty":"FTRA","classNum":"200","title":"Méthodologie de la traduction ","section":"A","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":2948}
        ,
        {"faculty":"ENGL","classNum":"212","title":"English Composition","section":"D","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 529 SGW","semester":"Fall 2016","classid":2455}
        ,
        {"faculty":"FTRA","classNum":"200","title":"Méthodologie de la traduction ","section":"B","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":2949}
        ,
        {"faculty":"ENGL","classNum":"212","title":"English Composition","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 623 SGW","semester":"Fall 2016","classid":2456}
        ,
        {"faculty":"FTRA","classNum":"200","title":"Méthodologie de la traduction ","section":"BB","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 615 SGW","semester":"Fall 2016","classid":2950}
        ,
        {"faculty":"ENGL","classNum":"213","title":"English Composition","section":"B","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 544 SGW","semester":"Fall 2016","classid":2457}
        ,
        {"faculty":"FTRA","classNum":"204","title":"Le français en contact avec l'anglais au Québec ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":2951}
        ,
        {"faculty":"ENGL","classNum":"213","title":"English Composition","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 619 SGW","semester":"Fall 2016","classid":2458}
        ,
        {"faculty":"FTRA","classNum":"304","title":"Traduction littéraire de l'anglais au français ","section":"A","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":2952}
        ,
        {"faculty":"ENGL","classNum":"213","title":"English Composition","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 627 SGW","semester":"Fall 2016","classid":2459}
        ,
        {"faculty":"ENGL","classNum":"214","title":"Grammar, Usage, and Style ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 529 SGW","semester":"Fall 2016","classid":2460}
        ,
        {"faculty":"FTRA","classNum":"306","title":"Initiation à la traduction économique de l'anglais au français ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 615 SGW","semester":"Fall 2016","classid":2953}
        ,
        {"faculty":"ENGL","classNum":"216","title":"Writing for Diverse Audiences ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 627 SGW","semester":"Fall 2016","classid":2461}
        ,
        {"faculty":"FTRA","classNum":"310","title":"Initiation à la recherche documentaire et terminologique ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":2954}
        ,
        {"faculty":"ENGL","classNum":"224","title":"The Creative Process ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 509 SGW","semester":"Fall 2016","classid":2462}
        ,
        {"faculty":"FTRA","classNum":"403","title":"Traduction scientifique et technique du français à l'anglais ","section":"AA","type":"LEC","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":2955}
        ,
        {"faculty":"ENGL","classNum":"224","title":"The Creative Process ","section":"C","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 509 SGW","semester":"Fall 2016","classid":2463}
        ,
        {"faculty":"FTRA","classNum":"406","title":"Traduction commerciale et juridique de l'anglais au français ","section":"AA","type":"LEC","day":"We","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":2956}
        ,
        {"faculty":"ENGL","classNum":"224","title":"The Creative Process ","section":"B","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 557 SGW","semester":"Fall 2016","classid":2464}
        ,
        {"faculty":"FTRA","classNum":"409","title":"Révision et correction en traduction ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":2957}
        ,
        {"faculty":"FTRA","classNum":"410","title":"Révision et correction en traduction ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 400 SGW","semester":"Fall 2016","classid":2958}
        ,
        {"faculty":"ENGL","classNum":"235","title":"Short Fiction ","section":"AA","type":"LEC","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 501 SGW","semester":"Fall 2016","classid":2465}
        ,
        {"faculty":"ENGL","classNum":"244","title":"Quebec/Montreal Writing in English ","section":"AA","type":"LEC","day":"We","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 557 SGW","semester":"Fall 2016","classid":2467}
        ,
        {"faculty":"ENGL","classNum":"246","title":"Science Fiction ","section":"AA","type":"LEC","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 509 SGW","semester":"Fall 2016","classid":2468}
        ,
        {"faculty":"FTRA","classNum":"416","title":"Informatique et traduction ","section":"AA","type":"LEC","day":"Fr","timeBegin":"6:15PM","timeEnd":"8:30PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":2960}
        ,
        {"faculty":"FTRA","classNum":"420","title":"Stage de formation : de l'anglais au français ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2961}
        ,
        {"faculty":"ENGL","classNum":"249","title":"Children's Literature ","section":"A","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 501 SGW","semester":"Fall 2016","classid":2469}
        ,
        {"faculty":"FTRA","classNum":"421","title":"Stage de formation : du français à l'anglais ","section":"CC","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2962}
        ,
        {"faculty":"ENGL","classNum":"250","title":"Forms of Popular Writing ","section":"AA","type":"LEC","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 501 SGW","semester":"Fall 2016","classid":2470}
        ,
        {"faculty":"FTRA","classNum":"422","title":"Stage de formation : de l'anglais au français I ","section":"A","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2963}
        ,
        {"faculty":"ENGL","classNum":"251","title":"The Graphic Novel ","section":"B","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":2471}
        ,
        {"faculty":"FTRA","classNum":"423","title":"Stage de formation : du français à l'anglais I ","section":"A","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2964}
        ,
        {"faculty":"FTRA","classNum":"424","title":"Stage de formation : de l'anglais au français II ","section":"A","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2965}
        ,
        {"faculty":"ENGL","classNum":"251","title":"The Graphic Novel ","section":"A","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 557 SGW","semester":"Fall 2016","classid":2472}
        ,
        {"faculty":"FTRA","classNum":"425","title":"Stage de formation : du français à l'anglais II ","section":"A","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2966}
        ,
        {"faculty":"FTRA","classNum":"455","title":"Gestion de projets ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":2968}
        ,
        {"faculty":"ENGL","classNum":"260","title":"Introduction to Literary Study ","section":"B Y","type":"CON","day":"We","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"H 540 SGW","semester":"Fall 2016","classid":2475}
        ,
        {"faculty":"ENGL","classNum":"260","title":"Introduction to Literary Study ","section":"B Z","type":"CON","day":"We","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"H 400 SGW","semester":"Fall 2016","classid":2476}
        ,
        {"faculty":"FTRA","classNum":"492","title":"Tutorat en traduction ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2970}
        ,
        {"faculty":"ENGL","classNum":"260","title":"Introduction to Literary Study ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 535 SGW","semester":"Fall 2016","classid":2477}
        ,
        {"faculty":"ENGL","classNum":"260","title":"Introduction to Literary Study ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 507 SGW","semester":"Fall 2016","classid":2479}
        ,
        {"faculty":"ENGL","classNum":"260","title":"Introduction to Literary Study ","section":"A X","type":"CON","day":"We","timeBegin":"3:15PM","timeEnd":"4:00PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":2480}
        ,
        {"faculty":"ENGL","classNum":"260","title":"Introduction to Literary Study ","section":"A Y","type":"CON","day":"We","timeBegin":"3:15PM","timeEnd":"4:00PM","room":"H 433 SGW","semester":"Fall 2016","classid":2481}
        ,
        {"faculty":"ENGL","classNum":"260","title":"Introduction to Literary Study ","section":"B X","type":"CON","day":"We","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"H 627 SGW","semester":"Fall 2016","classid":2483}
        ,
        {"faculty":"ENGL","classNum":"260","title":"Introduction to Literary Study ","section":"A Z","type":"CON","day":"We","timeBegin":"3:15PM","timeEnd":"4:00PM","room":"H 603 SGW","semester":"Fall 2016","classid":2484}
        ,
        {"faculty":"ENGL","classNum":"261","title":"British Literature to 1660 ","section":"B Z","type":"CON","day":"We","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"H 623 SGW","semester":"Fall 2016","classid":2485}
        ,
        {"faculty":"ENGL","classNum":"261","title":"British Literature to 1660 ","section":"B Y","type":"CON","day":"We","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":2486}
        ,
        {"faculty":"ENGL","classNum":"261","title":"British Literature to 1660 ","section":"B X","type":"CON","day":"We","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"H 529 SGW","semester":"Fall 2016","classid":2487}
        ,
        {"faculty":"ENGL","classNum":"261","title":"British Literature to 1660 ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 407 SGW","semester":"Fall 2016","classid":2488}
        ,
        {"faculty":"ENGL","classNum":"261","title":"British Literature to 1660 ","section":"A Z","type":"CON","day":"We","timeBegin":"2:45PM","timeEnd":"3:30PM","room":"H 401 SGW","semester":"Fall 2016","classid":2489}
        ,
        {"faculty":"ENGL","classNum":"261","title":"British Literature to 1660 ","section":"A Y","type":"CON","day":"We","timeBegin":"2:45PM","timeEnd":"3:30PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":2490}
        ,
        {"faculty":"ENGL","classNum":"261","title":"British Literature to 1660 ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 937 SGW","semester":"Fall 2016","classid":2491}
        ,
        {"faculty":"ENGL","classNum":"261","title":"British Literature to 1660 ","section":"A X","type":"CON","day":"We","timeBegin":"2:45PM","timeEnd":"3:30PM","room":"H 605 SGW","semester":"Fall 2016","classid":2492}
        ,
        {"faculty":"ENGL","classNum":"262","title":"British Literature from 1660 to 1900 ","section":"B Y","type":"CON","day":"We","timeBegin":"1:15PM","timeEnd":"2:00PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":2493}
        ,
        {"faculty":"ENGL","classNum":"262","title":"British Literature from 1660 to 1900 ","section":"B X","type":"CON","day":"We","timeBegin":"1:15PM","timeEnd":"2:00PM","room":"H 513 SGW","semester":"Fall 2016","classid":2494}
        ,
        {"faculty":"ENGL","classNum":"262","title":"British Literature from 1660 to 1900 ","section":"B","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 561 SGW","semester":"Fall 2016","classid":2495}
        ,
        {"faculty":"ENGL","classNum":"262","title":"British Literature from 1660 to 1900 ","section":"A Z","type":"CON","day":"We","timeBegin":"11:45AM","timeEnd":"12:30PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":2496}
        ,
        {"faculty":"ENGL","classNum":"262","title":"British Literature from 1660 to 1900 ","section":"A Y","type":"CON","day":"We","timeBegin":"11:45AM","timeEnd":"12:30PM","room":"H 400 SGW","semester":"Fall 2016","classid":2497}
        ,
        {"faculty":"ENGL","classNum":"262","title":"British Literature from 1660 to 1900 ","section":"A X","type":"CON","day":"We","timeBegin":"11:45AM","timeEnd":"12:30PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":2498}
        ,
        {"faculty":"ENGL","classNum":"262","title":"British Literature from 1660 to 1900 ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 431 SGW","semester":"Fall 2016","classid":2499}
        ,
        {"faculty":"ENGL","classNum":"262","title":"British Literature from 1660 to 1900 ","section":"B Z","type":"CON","day":"We","timeBegin":"1:15PM","timeEnd":"2:00PM","room":"H 627 SGW","semester":"Fall 2016","classid":2500}
        ,
        {"faculty":"ENGL","classNum":"319","title":"Milton ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 501 SGW","semester":"Fall 2016","classid":2501}
        ,
        {"faculty":"ENGL","classNum":"377","title":"Contemporary Canadian Fiction ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 459 SGW","semester":"Fall 2016","classid":2504}
        ,
        {"faculty":"ENGL","classNum":"378","title":"Modern Canadian Poetry ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 633 SGW","semester":"Fall 2016","classid":2505}
        ,
        {"faculty":"ENGL","classNum":"383","title":"African Literature ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 501 SGW","semester":"Fall 2016","classid":2506}
        ,
        {"faculty":"ENGL","classNum":"393","title":"Gender and Sexuality in Literary Studies ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 633 SGW","semester":"Fall 2016","classid":2509}
        ,
        {"faculty":"ENGL","classNum":"395","title":"Technical Writing ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 529 SGW","semester":"Fall 2016","classid":2510}
        ,
        {"faculty":"ENGL","classNum":"474","title":"HONOURS ESSAY ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2512}
        ,
        {"faculty":"ENGR","classNum":"108","title":"Engineering Industrial Experience Reflective Learning I ","section":"IE","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2522}
        ,
        {"faculty":"ENGR","classNum":"201","title":"Professional Practice and Responsibility ","section":"ECEB","type":"TUT","day":"We","timeBegin":"8:45AM","timeEnd":"9:35AM\nWe","room":"H 401 SGW\nH 401 SGW\nH 401 SGW\nH 401 SGW\nH 401 SGW\nH 401 SGW","semester":"Fall 2016","classid":2523}
        ,
        {"faculty":"ENGR","classNum":"201","title":"Professional Practice and Responsibility ","section":"ECEG","type":"TUT","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:05PM\nTu","room":"H 423 SGW\nH 423 SGW\nH 423 SGW\nH 423 SGW\nH 423 SGW\nH 423 SGW","semester":"Fall 2016","classid":2524}
        ,
        {"faculty":"ENGR","classNum":"201","title":"Professional Practice and Responsibility ","section":"ECEF","type":"TUT","day":"Th","timeBegin":"5:45PM","timeEnd":"6:35PM\nTh","room":"H 403 SGW\nH 403 SGW\nH 403 SGW\nH 403 SGW\nH 403 SGW\nH 403 SGW","semester":"Fall 2016","classid":2525}
        ,
        {"faculty":"ENGR","classNum":"201","title":"Professional Practice and Responsibility ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":2526}
        ,
        {"faculty":"ENGR","classNum":"201","title":"Professional Practice and Responsibility ","section":"ECEA","type":"TUT","day":"We","timeBegin":"8:45AM","timeEnd":"9:35AM\nWe","room":"H 401 SGW\nH 401 SGW\nH 401 SGW\nH 401 SGW\nH 401 SGW\nH 401 SGW","semester":"Fall 2016","classid":2527}
        ,
        {"faculty":"ENGR","classNum":"201","title":"Professional Practice and Responsibility ","section":"ECEH","type":"TUT","day":"Mo","timeBegin":"8:45AM","timeEnd":"9:35AM\nMo","room":"H 423 SGW\nH 423 SGW\nH 423 SGW\nH 423 SGW\nH 423 SGW\nH 423 SGW","semester":"Fall 2016","classid":2528}
        ,
        {"faculty":"ENGR","classNum":"201","title":"Professional Practice and Responsibility ","section":"ECEC","type":"TUT","day":"Th","timeBegin":"4:15PM","timeEnd":"5:05PM\nTh","room":"FG B055 SGW\nFG B055 SGW\nFG B055 SGW\nFG B055 SGW\nFG B055 SGW\nFG B055 SGW","semester":"Fall 2016","classid":2529}
        ,
        {"faculty":"ENGR","classNum":"201","title":"Professional Practice and Responsibility ","section":"ECED","type":"TUT","day":"Th","timeBegin":"4:15PM","timeEnd":"5:05PM\nTh","room":"FG B055 SGW\nFG B055 SGW\nFG B055 SGW\nFG B055 SGW\nFG B055 SGW\nFG B055 SGW","semester":"Fall 2016","classid":2530}
        ,
        {"faculty":"ENGR","classNum":"201","title":"Professional Practice and Responsibility ","section":"ECEE","type":"TUT","day":"Th","timeBegin":"5:45PM","timeEnd":"6:35PM\nTh","room":"H 403 SGW\nH 403 SGW\nH 403 SGW\nH 403 SGW\nH 403 SGW\nH 403 SGW","semester":"Fall 2016","classid":2531}
        ,
        {"faculty":"ENGR","classNum":"202","title":"Sustainable Development and Environmental Stewardship ","section":"H","type":"LEC","day":"Th","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 937 SGW","semester":"Fall 2016","classid":2532}
        ,
        {"faculty":"ENGR","classNum":"202","title":"Sustainable Development and Environmental Stewardship ","section":"G","type":"LEC","day":"Fr","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 937 SGW","semester":"Fall 2016","classid":2533}
        ,
        {"faculty":"ENGR","classNum":"208","title":"Engineering Industrial Experience Reflective Learning II ","section":"IE","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2534}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"V","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG C080 SGW","semester":"Fall 2016","classid":2535}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"V VA","type":"TUT","day":"Th","timeBegin":"1:45PM","timeEnd":"3:25PM","room":"H 521 SGW","semester":"Fall 2016","classid":2536}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"V VB","type":"TUT","day":"Mo","timeBegin":"8:20AM","timeEnd":"10:00AM","room":"FG B070 SGW","semester":"Fall 2016","classid":2537}
        ,
        {"faculty":"GEOG","classNum":"220","title":"The Human Environment: Place, Space, and Identity ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 937 SGW","semester":"Fall 2016","classid":3027}
        ,
        {"faculty":"GEOG","classNum":"272","title":"The Natural Environment: Air and Water ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"FG C080 SGW","semester":"Fall 2016","classid":3028}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"X","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG C080 SGW","semester":"Fall 2016","classid":2538}
        ,
        {"faculty":"GEOG","classNum":"274","title":"The Natural Environment: Land and Life ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"FG C070 SGW","semester":"Fall 2016","classid":3029}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"X XA","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"MB 3.430 SGW","semester":"Fall 2016","classid":2539}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"X XB","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":2540}
        ,
        {"faculty":"GEOG","classNum":"333","title":"Urban Transportation ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"GN M100 SGW","semester":"Fall 2016","classid":3031}
        ,
        {"faculty":"GEOG","classNum":"361","title":"Research Design and Qualitative Methods ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 411 SGW","semester":"Fall 2016","classid":3032}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"XX","type":"LEC","day":"Fr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 531 SGW","semester":"Fall 2016","classid":2541}
        ,
        {"faculty":"GEOG","classNum":"363","title":"Geographic Information Systems ","section":"X B","type":"LAB","day":"We","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1254 SGW","semester":"Fall 2016","classid":3033}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"XXXE","type":"TUT","day":"Fr","timeBegin":"15:45","timeEnd":"17:25","room":"MB S1.401 SGW","semester":"Fall 2016","classid":2542}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"XXXF","type":"TUT","day":"Fr","timeBegin":"3:45PM","timeEnd":"5:25PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":2543}
        ,
        {"faculty":"GEOG","classNum":"363","title":"Geographic Information Systems ","section":"X","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 920 SGW","semester":"Fall 2016","classid":3034}
        ,
        {"faculty":"GEOG","classNum":"363","title":"Geographic Information Systems ","section":"X A","type":"LAB","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1254 SGW","semester":"Fall 2016","classid":3035}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"P","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG C080 SGW","semester":"Fall 2016","classid":2544}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"P PA","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":2545}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"P PB","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":2546}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"R","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG C070 SGW","semester":"Fall 2016","classid":2547}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"R RA","type":"TUT","day":"Mo","timeBegin":"8:20AM","timeEnd":"10:00AM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":2548}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"R RB","type":"TUT","day":"Mo","timeBegin":"8:20AM","timeEnd":"10:00AM","room":"H 521 SGW","semester":"Fall 2016","classid":2549}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"T","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG C070 SGW","semester":"Fall 2016","classid":2550}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"T TA","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"FG B030 SGW","semester":"Fall 2016","classid":2551}
        ,
        {"faculty":"GEOG","classNum":"378","title":"The Climate System ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"GN M100 SGW","semester":"Fall 2016","classid":3041}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"T TB","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"H 433 SGW","semester":"Fall 2016","classid":2552}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"U","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 535 SGW","semester":"Fall 2016","classid":2553}
        ,
        {"faculty":"GEOG","classNum":"431","title":"URB PLAN-DEVELOPING WORLD ","section":"A","type":"SEM","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"TBA","semester":"Fall 2016","classid":3043}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"U UA","type":"TUT","day":"Fr","timeBegin":"2:15PM","timeEnd":"3:55PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":2554}
        ,
        {"faculty":"ENGR","classNum":"213","title":"Applied Ordinary Differential Equations ","section":"U UB","type":"TUT","day":"Mo","timeBegin":"2:15PM","timeEnd":"3:55PM","room":"H 605 SGW","semester":"Fall 2016","classid":2555}
        ,
        {"faculty":"ENGR","classNum":"233","title":"Applied Advanced Calculus ","section":"P","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG C070 SGW","semester":"Fall 2016","classid":2556}
        ,
        {"faculty":"GEOG","classNum":"474","title":"Sustainable Forest Management ","section":"A","type":"SEM","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"TBA","semester":"Fall 2016","classid":3046}
        ,
        {"faculty":"ENGR","classNum":"233","title":"Applied Advanced Calculus ","section":"P PA","type":"TUT","day":"Mo","timeBegin":"10:45AM","timeEnd":"12:25PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":2557}
        ,
        {"faculty":"GEOG","classNum":"475","title":"Water Resource Management ","section":"A","type":"SEM","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":3047}
        ,
        {"faculty":"ENGR","classNum":"233","title":"Applied Advanced Calculus ","section":"P PB","type":"TUT","day":"Mo","timeBegin":"10:45AM","timeEnd":"12:25PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":2558}
        ,
        {"faculty":"ENGR","classNum":"233","title":"Applied Advanced Calculus ","section":"Q","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG C080 SGW","semester":"Fall 2016","classid":2559}
        ,
        {"faculty":"ENGR","classNum":"233","title":"Applied Advanced Calculus ","section":"Q QA","type":"TUT","day":"Mo","timeBegin":"10:45AM","timeEnd":"12:25PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":2560}
        ,
        {"faculty":"ENGR","classNum":"233","title":"Applied Advanced Calculus ","section":"Q QB","type":"TUT","day":"Mo","timeBegin":"10:45AM","timeEnd":"12:25PM","room":"H 521 SGW","semester":"Fall 2016","classid":2561}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"YY","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B060 SGW","semester":"Fall 2016","classid":2562}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"T TA","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"FG B055 SGW","semester":"Fall 2016","classid":2563}
        ,
        {"faculty":"GEOL","classNum":"210","title":"Introduction to the Earth ","section":"X","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 420 SGW","semester":"Fall 2016","classid":3051}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"T TB","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"FG B080 SGW","semester":"Fall 2016","classid":2564}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"V","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 553 SGW","semester":"Fall 2016","classid":2565}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"V VA","type":"TUT","day":"Mo","timeBegin":"8:25AM","timeEnd":"10:05AM","room":"FG B055 SGW","semester":"Fall 2016","classid":2566}
        ,
        {"faculty":"GEOL","classNum":"210","title":"Introduction to the Earth ","section":"X A","type":"LAB","day":"Tu","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1271 SGW","semester":"Fall 2016","classid":3052}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"V VB","type":"TUT","day":"Mo","timeBegin":"8:25AM","timeEnd":"10:05AM","room":"FG B080 SGW","semester":"Fall 2016","classid":2567}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"YYYB","type":"TUT","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"H 423 SGW","semester":"Fall 2016","classid":2568}
        ,
        {"faculty":"GEOL","classNum":"210","title":"Introduction to the Earth ","section":"X B","type":"LAB","day":"Th","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1271 SGW","semester":"Fall 2016","classid":3053}
        ,
        {"faculty":"GERM","classNum":"200","title":"Introductory German: Intensive Course ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":3054}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"YYYA","type":"TUT","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"H 403 SGW","semester":"Fall 2016","classid":2569}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"X XB","type":"TUT","day":"We","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"FG B080 SGW","semester":"Fall 2016","classid":2570}
        ,
        {"faculty":"GERM","classNum":"201","title":"Introductory German I ","section":"C","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":3055}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"X XA","type":"TUT","day":"Th","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"FG B080 SGW","semester":"Fall 2016","classid":2571}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"T","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 411 SGW","semester":"Fall 2016","classid":2572}
        ,
        {"faculty":"GERM","classNum":"201","title":"Introductory German I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":3056}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"X","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B060 SGW","semester":"Fall 2016","classid":2573}
        ,
        {"faculty":"GERM","classNum":"201","title":"Introductory German I ","section":"B","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 625 SGW","semester":"Fall 2016","classid":3057}
        ,
        {"faculty":"ENGR","classNum":"251","title":"Thermodynamics I ","section":"T TB","type":"TUT","day":"Fr","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"FG B070 SGW","semester":"Fall 2016","classid":2574}
        ,
        {"faculty":"ENGR","classNum":"251","title":"Thermodynamics I ","section":"T TA","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:25PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":2575}
        ,
        {"faculty":"GERM","classNum":"202","title":"Introductory German II ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":3058}
        ,
        {"faculty":"GERM","classNum":"241","title":"Intermediate German I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":3059}
        ,
        {"faculty":"ENGR","classNum":"251","title":"Thermodynamics I ","section":"M MA","type":"TUT","day":"Fr","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":2576}
        ,
        {"faculty":"ENGR","classNum":"251","title":"Thermodynamics I ","section":"M MB","type":"TUT","day":"Fr","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"H 521 SGW","semester":"Fall 2016","classid":2577}
        ,
        {"faculty":"ENGR","classNum":"251","title":"Thermodynamics I ","section":"M","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 937 SGW","semester":"Fall 2016","classid":2578}
        ,
        {"faculty":"GERM","classNum":"301","title":"Advanced Grammar and Composition I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":3060}
        ,
        {"faculty":"COMM","classNum":"225","title":"Production and Operations Management ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":1741}
        ,
        {"faculty":"COMM","classNum":"315","title":"Business Law and Ethics ","section":"CC","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":1767}
        ,
        {"faculty":"COMM","classNum":"315","title":"Business Law and Ethics ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":1768}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"I","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":1769}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 565 SGW","semester":"Fall 2016","classid":1779}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"R","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 820 SGW","semester":"Fall 2016","classid":1802}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"Q QB","type":"TUT","day":"Th","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":1804}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"H HB","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":1839}
        ,
        {"faculty":"COMP","classNum":"479","title":"Information Retrieval and Web Search ","section":"D DI","type":"LAB","day":"Th","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":1894}
        ,
        {"faculty":"CWTE","classNum":"200","title":"COOP WORK TERM 2 (ENGR) ","section":"S","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2064}
        ,
        {"faculty":"EAST","classNum":"251","title":"Introduction to Recording I ","section":"A","type":"LEC","day":"Mo","timeBegin":"9:00AM","timeEnd":"12:00PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":2157}
        ,
        {"faculty":"ECON","classNum":"201","title":"Introduction to Microeconomics ","section":"B","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":2166}
        ,
        {"faculty":"EDUC","classNum":"260","title":"Historical and Philosophical Foundations of Early Childhood and Elementary Education ","section":"A","type":"LEC","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"GN M100 SGW","semester":"Fall 2016","classid":2247}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"V","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 820 SGW","semester":"Fall 2016","classid":2308}
        ,
        {"faculty":"ELEC","classNum":"466","title":"Introduction to Optical Communication Systems ","section":"WW","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B070 SGW","semester":"Fall 2016","classid":2378}
        ,
        {"faculty":"ELEC","classNum":"481","title":"Linear Systems ","section":"EEEJ","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2379}
        ,
        {"faculty":"ENGR","classNum":"301","title":"Engineering Management Principles and Economics ","section":"H HB","type":"TUT","day":"Th","timeBegin":"7:45PM","timeEnd":"8:35PM","room":"EV 3.309 SGW","semester":"Fall 2016","classid":2593}
        ,
        {"faculty":"EXCI","classNum":"351","title":"Introduction to the Biomechanics of Human Movement ","section":"0102","type":"LAB","day":"Tu","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"SP S165-35 LOY","semester":"Fall 2016","classid":2763}
        ,
        {"faculty":"EXCI","classNum":"492","title":"Independent Study in Exercise Science ","section":"51","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2788}
        ,
        {"faculty":"FINA","classNum":"395","title":"Theory of Finance II ","section":"C","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":2814}
        ,
        {"faculty":"FLIT","classNum":"300","title":"Littérature et culture françaises du Moyen Âge au XVIIe siècle ","section":"A","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 607 SGW","semester":"Fall 2016","classid":2841}
        ,
        {"faculty":"FMST","classNum":"428","title":"Independent Study I ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":2886}
        ,
        {"faculty":"FRAN","classNum":"213","title":"Langue française : niveaux intermédiaires I et II ","section":"T","type":"LEC","day":"Sa","timeBegin":"9:30AM","timeEnd":"3:30PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":2932}
        ,
        {"faculty":"IADI","classNum":"301","title":"Undergraduate Aerospace Industry Project I ","section":"IA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":3105}
        ,
        {"faculty":"IRST","classNum":"203","title":"Introduction to Canadian Irish Studies ","section":"A","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 1011 SGW","semester":"Fall 2016","classid":5115}
        ,
        {"faculty":"IRST","classNum":"344","title":"IRISH PLAYS ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 1011 SGW","semester":"Fall 2016","classid":5118}
        ,
        {"faculty":"ITAL","classNum":"200","title":"Introductory Italian: Intensive Course ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 400 SGW","semester":"Fall 2016","classid":5119}
        ,
        {"faculty":"ITAL","classNum":"201","title":"Introductory Italian I ","section":"D","type":"LEC","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 427 SGW","semester":"Fall 2016","classid":5121}
        ,
        {"faculty":"ITAL","classNum":"201","title":"Introductory Italian I ","section":"C","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 429 SGW","semester":"Fall 2016","classid":5123}
        ,
        {"faculty":"ITAL","classNum":"201","title":"Introductory Italian I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 523 SGW","semester":"Fall 2016","classid":5124}
        ,
        {"faculty":"ITAL","classNum":"201","title":"Introductory Italian I ","section":"B","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 603-1 SGW","semester":"Fall 2016","classid":5125}
        ,
        {"faculty":"ITAL","classNum":"201","title":"Introductory Italian I ","section":"AA","type":"LEC","day":"We","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 615 SGW","semester":"Fall 2016","classid":5126}
        ,
        {"faculty":"ITAL","classNum":"202","title":"Introductory Italian II ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 619 SGW","semester":"Fall 2016","classid":5127}
        ,
        {"faculty":"ITAL","classNum":"210","title":"Italian for Heritage Speakers I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 427 SGW","semester":"Fall 2016","classid":5128}
        ,
        {"faculty":"ITAL","classNum":"240","title":"Intermediate Italian: Intensive Course ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 459 SGW","semester":"Fall 2016","classid":5129}
        ,
        {"faculty":"ITAL","classNum":"241","title":"Intermediate Italian I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 439 SGW","semester":"Fall 2016","classid":5130}
        ,
        {"faculty":"ITAL","classNum":"301","title":"Advanced Grammar and Writing I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 627 SGW","semester":"Fall 2016","classid":5131}
        ,
        {"faculty":"ITAL","classNum":"490","title":"Honours Essay Tutorial ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5132}
        ,
        {"faculty":"JAZZ","classNum":"209","title":"JAZZ AURAL PERCEPTION I ","section":"A","type":"LEC","day":"WeFr","timeBegin":"9:00AM","timeEnd":"10:30AM","room":"VA 323 SGW","semester":"Fall 2016","classid":5133}
        ,
        {"faculty":"JAZZ","classNum":"311","title":"JAZZ AURAL PERCEPTION III ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:45AM","timeEnd":"12:15PM","room":"EV 6.735 SGW","semester":"Fall 2016","classid":5135}
        ,
        {"faculty":"JAZZ","classNum":"471","title":"Independent Study I ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5137}
        ,
        {"faculty":"JAZZ","classNum":"472","title":"Independent Study II ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5138}
        ,
        {"faculty":"JOUR","classNum":"205","title":"Principles of Journalistic Thought and Practice ","section":"51","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"CJ 3.306 LOY","semester":"Fall 2016","classid":5141}
        ,
        {"faculty":"JOUR","classNum":"215","title":"Contemporary News Media ","section":"01","type":"LEC","day":"Mo","timeBegin":"3:00PM","timeEnd":"4:00PM","room":"CJ 3.306 LOY","semester":"Fall 2016","classid":5143}
        ,
        {"faculty":"JOUR","classNum":"302","title":"Research Methods for Journalism ","section":"01","type":"WKS","day":"We","timeBegin":"9:30AM","timeEnd":"11:45AM","room":"CJ 3.307 LOY","semester":"Fall 2016","classid":5144}
        ,
        {"faculty":"JOUR","classNum":"302","title":"Research Methods for Journalism ","section":"02","type":"WKS","day":"Th","timeBegin":"3:00PM","timeEnd":"5:15PM","room":"CJ 3.307 LOY","semester":"Fall 2016","classid":5145}
        ,
        {"faculty":"JOUR","classNum":"302","title":"Research Methods for Journalism ","section":"51","type":"WKS","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"CJ 3.307 LOY","semester":"Fall 2016","classid":5146}
        ,
        {"faculty":"JOUR","classNum":"309","title":"Copy-Editing and Layout ","section":"02","type":"WKS","day":"Mo","timeBegin":"12:30PM","timeEnd":"2:45PM","room":"CJ 3.307 LOY","semester":"Fall 2016","classid":5147}
        ,
        {"faculty":"JOUR","classNum":"309","title":"Copy-Editing and Layout ","section":"01","type":"WKS","day":"Mo","timeBegin":"9:30AM","timeEnd":"11:45AM","room":"CJ 3.307 LOY","semester":"Fall 2016","classid":5148}
        ,
        {"faculty":"JOUR","classNum":"316","title":"Law and Ethics in Journalism ","section":"01","type":"LEC","day":"Th","timeBegin":"9:30AM","timeEnd":"11:45AM","room":"CJ 3.306 LOY","semester":"Fall 2016","classid":5149}
        ,
        {"faculty":"JOUR","classNum":"321","title":"Video Journalism ","section":"01","type":"WKS","day":"Tu","timeBegin":"12:30PM","timeEnd":"2:45PM","room":"CJ 5.305 LOY","semester":"Fall 2016","classid":5150}
        ,
        {"faculty":"JOUR","classNum":"366","title":"Photojournalism ","section":"01","type":"WKS","day":"Fr","timeBegin":"9:30AM","timeEnd":"11:45AM","room":"CJ 3.217 LOY","semester":"Fall 2016","classid":5151}
        ,
        {"faculty":"JOUR","classNum":"404","title":"Magazine Writing ","section":"01","type":"WKS","day":"Mo","timeBegin":"12:30PM","timeEnd":"2:45PM","room":"CJ 5.305 LOY","semester":"Fall 2016","classid":5152}
        ,
        {"faculty":"JOUR","classNum":"421","title":"Advanced Television Journalism ","section":"01","type":"WKS","day":"Th","timeBegin":"9:30AM","timeEnd":"11:45AM","room":"CJ 5.305 LOY","semester":"Fall 2016","classid":5153}
        ,
        {"faculty":"JOUR","classNum":"428","title":"Multi-Platform Journalism ","section":"01","type":"WKS","day":"Tu","timeBegin":"9:30AM","timeEnd":"10:30AM","room":"CJ 3.217 LOY","semester":"Fall 2016","classid":5154}
        ,
        {"faculty":"JOUR","classNum":"444","title":"Critical Approaches to Journalism ","section":"01","type":"LEC","day":"Th","timeBegin":"3:00PM","timeEnd":"5:15PM","room":"CJ 3.306 LOY","semester":"Fall 2016","classid":5156}
        ,
        {"faculty":"JOUR","classNum":"450","title":"Journalism Practicum ","section":"51","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5157}
        ,
        {"faculty":"JOUR","classNum":"451","title":"Independent Study ","section":"51","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5158}
        ,
        {"faculty":"JPER","classNum":"471","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5170}
        ,
        {"faculty":"JPER","classNum":"472","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5171}
        ,
        {"faculty":"LING","classNum":"200","title":"Introduction to Linguistic Science ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 415 SGW","semester":"Fall 2016","classid":5172}
        ,
        {"faculty":"LING","classNum":"200","title":"Introduction to Linguistic Science ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 411 SGW","semester":"Fall 2016","classid":5173}
        ,
        {"faculty":"LING","classNum":"222","title":"Language and Mind: The Chomskyan Program ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 415 SGW","semester":"Fall 2016","classid":5174}
        ,
        {"faculty":"LING","classNum":"300","title":"Sociolinguistics ","section":"A","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 411 SGW","semester":"Fall 2016","classid":5175}
        ,
        {"faculty":"LING","classNum":"320","title":"Semantics ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 429 SGW","semester":"Fall 2016","classid":5177}
        ,
        {"faculty":"LING","classNum":"336","title":"Comparative Indo-European Linguistics ","section":"AA","type":"LEC","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 633 SGW","semester":"Fall 2016","classid":5178}
        ,
        {"faculty":"LING","classNum":"373","title":"Phonological Analysis ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 619 SGW","semester":"Fall 2016","classid":5180}
        ,
        {"faculty":"LING","classNum":"421","title":"Non-Indo-European Structures ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":5182}
        ,
        {"faculty":"LOYC","classNum":"240","title":"ENV. ISSUES & ECO. JUSTICE ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5183}
        ,
        {"faculty":"LOYC","classNum":"320","title":"Biodiversity on Earth ","section":"01","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 314 LOY","semester":"Fall 2016","classid":5185}
        ,
        {"faculty":"LOYC","classNum":"340","title":"Culture and Communication ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 425 LOY","semester":"Fall 2016","classid":5186}
        ,
        {"faculty":"MANA","classNum":"201","title":"Introduction to Business and Management ","section":"BB","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":5187}
        ,
        {"faculty":"MANA","classNum":"201","title":"Introduction to Business and Management ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":5188}
        ,
        {"faculty":"MANA","classNum":"202","title":"Human Behaviour in Organizations ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":5189}
        ,
        {"faculty":"MANA","classNum":"298","title":"Business Law ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":5190}
        ,
        {"faculty":"MANA","classNum":"300","title":"Entrepreneurship: Launching Your Business ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":5191}
        ,
        {"faculty":"MANA","classNum":"341","title":"Organization Theory and Design ","section":"A","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.285 SGW","semester":"Fall 2016","classid":5193}
        ,
        {"faculty":"MANA","classNum":"343","title":"Negotiation and Conflict Resolution ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":5194}
        ,
        {"faculty":"MANA","classNum":"343","title":"Negotiation and Conflict Resolution ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":5195}
        ,
        {"faculty":"MANA","classNum":"362","title":"Human Resource Management ","section":"B","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":5196}
        ,
        {"faculty":"MANA","classNum":"362","title":"Human Resource Management ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":5197}
        ,
        {"faculty":"MANA","classNum":"362","title":"Human Resource Management ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":5198}
        ,
        {"faculty":"MANA","classNum":"366","title":"Industrial Relations and Collective Bargaining ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":5199}
        ,
        {"faculty":"MANA","classNum":"366","title":"Industrial Relations and Collective Bargaining ","section":"A","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":5200}
        ,
        {"faculty":"MANA","classNum":"369","title":"Business and Sustainability ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":5201}
        ,
        {"faculty":"MANA","classNum":"374","title":"SUSTAINABLE MANAGEMENT ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5202}
        ,
        {"faculty":"MANA","classNum":"420","title":"Management Research for Decision Making ","section":"B","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 5.255 SGW","semester":"Fall 2016","classid":5203}
        ,
        {"faculty":"MANA","classNum":"420","title":"Management Research for Decision Making ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":5204}
        ,
        {"faculty":"MANA","classNum":"420","title":"Management Research for Decision Making ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 441 SGW","semester":"Fall 2016","classid":5205}
        ,
        {"faculty":"MANA","classNum":"443","title":"Compensation and Benefits Management ","section":"B","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":5206}
        ,
        {"faculty":"MANA","classNum":"444","title":"Training and Development ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 619 SGW","semester":"Fall 2016","classid":5207}
        ,
        {"faculty":"MANA","classNum":"445","title":"Health and Safety Management ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":5208}
        ,
        {"faculty":"MANA","classNum":"446","title":"Workplace Planning and Staffing ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":5209}
        ,
        {"faculty":"MANA","classNum":"463","title":"Strategic Human Resource Management ","section":"A","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":5210}
        ,
        {"faculty":"MANA","classNum":"466","title":"MGMT. OF MULTINATIONAL CORPS ","section":"BB","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":5211}
        ,
        {"faculty":"MANA","classNum":"466","title":"MGMT. OF MULTINATIONAL CORPS ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 603 SGW","semester":"Fall 2016","classid":5212}
        ,
        {"faculty":"MANA","classNum":"466","title":"MGMT. OF MULTINATIONAL CORPS ","section":"A","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 441 SGW","semester":"Fall 2016","classid":5213}
        ,
        {"faculty":"MANA","classNum":"478","title":"Entrepreneurial Company Law ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":5214}
        ,
        {"faculty":"MANA","classNum":"479","title":"Employment Law ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":5215}
        ,
        {"faculty":"MANA","classNum":"480","title":"Entrepreneurial Family Business ","section":"A","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.285 SGW","semester":"Fall 2016","classid":5216}
        ,
        {"faculty":"MANA","classNum":"493","title":"INTERNATIONAL BUSINESS LAW ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":5217}
        ,
        {"faculty":"MARK","classNum":"201","title":"Introduction to Marketing ","section":"C","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":5219}
        ,
        {"faculty":"MARK","classNum":"201","title":"Introduction to Marketing ","section":"A","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":5220}
        ,
        {"faculty":"MARK","classNum":"201","title":"Introduction to Marketing ","section":"01","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"SI H01 LOY","semester":"Fall 2016","classid":5221}
        ,
        {"faculty":"MARK","classNum":"201","title":"Introduction to Marketing ","section":"51","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"SI H01 LOY","semester":"Fall 2016","classid":5222}
        ,
        {"faculty":"MARK","classNum":"201","title":"Introduction to Marketing ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":5223}
        ,
        {"faculty":"MARK","classNum":"201","title":"Introduction to Marketing ","section":"B","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":5224}
        ,
        {"faculty":"MARK","classNum":"301","title":"Marketing Management II ","section":"A","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":5225}
        ,
        {"faculty":"MARK","classNum":"301","title":"Marketing Management II ","section":"B","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":5226}
        ,
        {"faculty":"MARK","classNum":"302","title":"Marketing Research ","section":"C","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":5227}
        ,
        {"faculty":"MARK","classNum":"302","title":"Marketing Research ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":5228}
        ,
        {"faculty":"MARK","classNum":"302","title":"Marketing Research ","section":"B","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":5229}
        ,
        {"faculty":"MARK","classNum":"305","title":"Consumer Behaviour ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":5231}
        ,
        {"faculty":"MARK","classNum":"305","title":"Consumer Behaviour ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 3.445 SGW","semester":"Fall 2016","classid":5232}
        ,
        {"faculty":"MARK","classNum":"305","title":"Consumer Behaviour ","section":"C","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":5233}
        ,
        {"faculty":"MARK","classNum":"305","title":"Consumer Behaviour ","section":"B","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":5234}
        ,
        {"faculty":"MARK","classNum":"451","title":"Marketing of Services ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 5.255 SGW","semester":"Fall 2016","classid":5235}
        ,
        {"faculty":"MARK","classNum":"452","title":"e-Marketing ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 507 SGW","semester":"Fall 2016","classid":5236}
        ,
        {"faculty":"MARK","classNum":"453","title":"Marketing Communications ","section":"B","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":5237}
        ,
        {"faculty":"MARK","classNum":"453","title":"Marketing Communications ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":5238}
        ,
        {"faculty":"MARK","classNum":"453","title":"Marketing Communications ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":5239}
        ,
        {"faculty":"MARK","classNum":"454","title":"Personal Selling ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":5240}
        ,
        {"faculty":"MARK","classNum":"454","title":"Personal Selling ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 3.445 SGW","semester":"Fall 2016","classid":5241}
        ,
        {"faculty":"MARK","classNum":"457","title":"Marketing Channels ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":5242}
        ,
        {"faculty":"MARK","classNum":"462","title":"(also listed as IBUS 462) Environment of World Business ","section":"B","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 5.255 SGW","semester":"Fall 2016","classid":5243}
        ,
        {"faculty":"MARK","classNum":"462","title":"(also listed as IBUS 462) Environment of World Business ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":5244}
        ,
        {"faculty":"MARK","classNum":"462","title":"(also listed as IBUS 462) Environment of World Business ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":5245}
        ,
        {"faculty":"MARK","classNum":"463","title":"Retailing ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":5247}
        ,
        {"faculty":"MARK","classNum":"465","title":"(also listed as IBUS 465) International Marketing Management ","section":"A","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":5249}
        ,
        {"faculty":"MARK","classNum":"485","title":"Business-to-Business Marketing ","section":"A","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 565 SGW","semester":"Fall 2016","classid":5250}
        ,
        {"faculty":"MARK","classNum":"486","title":"Product Strategy and Innovation ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":5251}
        ,
        {"faculty":"MARK","classNum":"492","title":"CROSS-CULTURAL COMMUN & MGMT ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":5252}
        ,
        {"faculty":"MARK","classNum":"492","title":"CROSS-CULTURAL COMMUN & MGMT ","section":"B","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":5253}
        ,
        {"faculty":"MARK","classNum":"495","title":"Strategic Marketing Planning ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.270 SGW","semester":"Fall 2016","classid":5254}
        ,
        {"faculty":"MARK","classNum":"495","title":"Strategic Marketing Planning ","section":"AA","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":5255}
        ,
        {"faculty":"MAST","classNum":"214","title":"Calculus and Linear Algebra ","section":"AA","type":"LEC","day":"TuTh","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB S2.455 SGW","semester":"Fall 2016","classid":5257}
        ,
        {"faculty":"MAST","classNum":"217","title":"Introduction to Mathematical Thinking ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 433 SGW","semester":"Fall 2016","classid":5258}
        ,
        {"faculty":"MAST","classNum":"218","title":"Multivariable Calculus I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 507 SGW","semester":"Fall 2016","classid":5259}
        ,
        {"faculty":"MAST","classNum":"218","title":"Multivariable Calculus I ","section":"B","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 407 SGW","semester":"Fall 2016","classid":5260}
        ,
        {"faculty":"MAST","classNum":"219","title":"Multivariable Calculus II ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 561 SGW","semester":"Fall 2016","classid":5261}
        ,
        {"faculty":"MAST","classNum":"221","title":"Applied Probability ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":5262}
        ,
        {"faculty":"MAST","classNum":"232","title":"Mathematics with Computer Algebra ","section":"A","type":"LEC","day":"Fr","timeBegin":"4:00PM","timeEnd":"6:15PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":5263}
        ,
        {"faculty":"MAST","classNum":"234","title":"Linear Algebra and Applications I ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":5264}
        ,
        {"faculty":"MAST","classNum":"330","title":"Differential Equations ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 631 SGW","semester":"Fall 2016","classid":5265}
        ,
        {"faculty":"MAST","classNum":"331","title":"Mathematical Modelling ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 401 SGW","semester":"Fall 2016","classid":5266}
        ,
        {"faculty":"MAST","classNum":"334","title":"Numerical Analysis ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 415 SGW","semester":"Fall 2016","classid":5267}
        ,
        {"faculty":"MATH","classNum":"200","title":"Fundamental Concepts of Algebra ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 535 SGW","semester":"Fall 2016","classid":5278}
        ,
        {"faculty":"MATH","classNum":"200","title":"Fundamental Concepts of Algebra ","section":"A A","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 403 SGW","semester":"Fall 2016","classid":5279}
        ,
        {"faculty":"MATH","classNum":"200","title":"Fundamental Concepts of Algebra ","section":"BB","type":"LEC","day":"Fr","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"FG C070 SGW","semester":"Fall 2016","classid":5280}
        ,
        {"faculty":"MATH","classNum":"200","title":"Fundamental Concepts of Algebra ","section":"BBBB","type":"TUT","day":"Fr","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"H 403 SGW","semester":"Fall 2016","classid":5281}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"01","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"HC 157 LOY","semester":"Fall 2016","classid":5282}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"0101","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"HC 157 LOY","semester":"Fall 2016","classid":5283}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"SP S110 LOY","semester":"Fall 2016","classid":5284}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"5151","type":"TUT","day":"We","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"SP S110 LOY","semester":"Fall 2016","classid":5285}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 509 SGW","semester":"Fall 2016","classid":5286}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"A A","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 620 SGW","semester":"Fall 2016","classid":5287}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"BB","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 557 SGW","semester":"Fall 2016","classid":5288}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"BBBB","type":"TUT","day":"Th","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"H 561 SGW","semester":"Fall 2016","classid":5289}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"CC","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 509 SGW","semester":"Fall 2016","classid":5290}
        ,
        {"faculty":"MATH","classNum":"201","title":"Elementary Functions ","section":"CCCC","type":"TUT","day":"Th","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"H 557 SGW","semester":"Fall 2016","classid":5291}
        ,
        {"faculty":"MATH","classNum":"202","title":"College Algebra ","section":"B B","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 561 SGW","semester":"Fall 2016","classid":5292}
        ,
        {"faculty":"MATH","classNum":"202","title":"College Algebra ","section":"A","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 520 SGW","semester":"Fall 2016","classid":5293}
        ,
        {"faculty":"MATH","classNum":"202","title":"College Algebra ","section":"A A","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B040 SGW","semester":"Fall 2016","classid":5294}
        ,
        {"faculty":"MATH","classNum":"202","title":"College Algebra ","section":"AA","type":"LEC","day":"Fr","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 820 SGW","semester":"Fall 2016","classid":5295}
        ,
        {"faculty":"MATH","classNum":"202","title":"College Algebra ","section":"AAAA","type":"TUT","day":"Fr","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"H 557 SGW","semester":"Fall 2016","classid":5296}
        ,
        {"faculty":"MATH","classNum":"202","title":"College Algebra ","section":"B","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 820 SGW","semester":"Fall 2016","classid":5297}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"0101","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"HC 157 LOY","semester":"Fall 2016","classid":5298}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"51","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"CC 310 LOY","semester":"Fall 2016","classid":5299}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"5151","type":"TUT","day":"Tu","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"CC 310 LOY","semester":"Fall 2016","classid":5300}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 561 SGW","semester":"Fall 2016","classid":5301}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"A A","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B040 SGW","semester":"Fall 2016","classid":5302}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"B","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 420 SGW","semester":"Fall 2016","classid":5303}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"B B","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 561 SGW","semester":"Fall 2016","classid":5304}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"BB","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 520 SGW","semester":"Fall 2016","classid":5305}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"BBBB","type":"TUT","day":"We","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"H 820 SGW","semester":"Fall 2016","classid":5306}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"C","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"GN M100 SGW","semester":"Fall 2016","classid":5307}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"C C","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 557 SGW","semester":"Fall 2016","classid":5308}
        ,
        {"faculty":"MATH","classNum":"203","title":"Differential and Integral Calculus I ","section":"01","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 308 LOY","semester":"Fall 2016","classid":5309}
        ,
        {"faculty":"MATH","classNum":"204","title":"Vectors and Matrices ","section":"B B","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 561 SGW","semester":"Fall 2016","classid":5310}
        ,
        {"faculty":"MATH","classNum":"204","title":"Vectors and Matrices ","section":"01","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"HC 157 LOY","semester":"Fall 2016","classid":5311}
        ,
        {"faculty":"MATH","classNum":"204","title":"Vectors and Matrices ","section":"0101","type":"TUT","day":"Tu","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 310 LOY","semester":"Fall 2016","classid":5312}
        ,
        {"faculty":"MATH","classNum":"204","title":"Vectors and Matrices ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 620 SGW","semester":"Fall 2016","classid":5313}
        ,
        {"faculty":"MATH","classNum":"204","title":"Vectors and Matrices ","section":"A A","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 520 SGW","semester":"Fall 2016","classid":5314}
        ,
        {"faculty":"MATH","classNum":"204","title":"Vectors and Matrices ","section":"B","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 420 SGW","semester":"Fall 2016","classid":5315}
        ,
        {"faculty":"MATH","classNum":"204","title":"Vectors and Matrices ","section":"BB","type":"LEC","day":"Fr","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 561 SGW","semester":"Fall 2016","classid":5316}
        ,
        {"faculty":"MATH","classNum":"204","title":"Vectors and Matrices ","section":"BBBB","type":"TUT","day":"Fr","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"H 509 SGW","semester":"Fall 2016","classid":5317}
        ,
        {"faculty":"MATH","classNum":"204","title":"Vectors and Matrices ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5318}
        ,
        {"faculty":"MATH","classNum":"205","title":"Differential and Integral Calculus II ","section":"51","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"CC 310 LOY","semester":"Fall 2016","classid":5319}
        ,
        {"faculty":"MATH","classNum":"205","title":"Differential and Integral Calculus II ","section":"5151","type":"TUT","day":"Th","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"CC 310 LOY","semester":"Fall 2016","classid":5320}
        ,
        {"faculty":"MATH","classNum":"205","title":"Differential and Integral Calculus II ","section":"A","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG B040 SGW","semester":"Fall 2016","classid":5321}
        ,
        {"faculty":"MATH","classNum":"205","title":"Differential and Integral Calculus II ","section":"A A","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 557 SGW","semester":"Fall 2016","classid":5322}
        ,
        {"faculty":"MATH","classNum":"205","title":"Differential and Integral Calculus II ","section":"B","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 557 SGW","semester":"Fall 2016","classid":5323}
        ,
        {"faculty":"MATH","classNum":"205","title":"Differential and Integral Calculus II ","section":"B B","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG B050 SGW","semester":"Fall 2016","classid":5324}
        ,
        {"faculty":"MATH","classNum":"205","title":"Differential and Integral Calculus II ","section":"BB","type":"LEC","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 561 SGW","semester":"Fall 2016","classid":5325}
        ,
        {"faculty":"MATH","classNum":"205","title":"Differential and Integral Calculus II ","section":"BBBB","type":"TUT","day":"Fr","timeBegin":"6:00PM","timeEnd":"7:15PM","room":"H 557 SGW","semester":"Fall 2016","classid":5326}
        ,
        {"faculty":"MATH","classNum":"206","title":"Algebra and Functions ","section":"A","type":"LEC","day":"WeFr","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 520 SGW","semester":"Fall 2016","classid":5327}
        ,
        {"faculty":"MATH","classNum":"206","title":"Algebra and Functions ","section":"B","type":"LEC","day":"WeFr","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 620 SGW","semester":"Fall 2016","classid":5328}
        ,
        {"faculty":"MATH","classNum":"206","title":"Algebra and Functions ","section":"BB","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 561 SGW","semester":"Fall 2016","classid":5329}
        ,
        {"faculty":"MATH","classNum":"206","title":"Algebra and Functions ","section":"C","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 820 SGW","semester":"Fall 2016","classid":5330}
        ,
        {"faculty":"MATH","classNum":"206","title":"Algebra and Functions ","section":"CC","type":"LEC","day":"Th","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 509 SGW","semester":"Fall 2016","classid":5331}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 561 SGW","semester":"Fall 2016","classid":5332}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"B","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 557 SGW","semester":"Fall 2016","classid":5333}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"BB","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 557 SGW","semester":"Fall 2016","classid":5334}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"C","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 411 SGW","semester":"Fall 2016","classid":5335}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"CC","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 509 SGW","semester":"Fall 2016","classid":5336}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"D","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 561 SGW","semester":"Fall 2016","classid":5337}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"DD","type":"LEC","day":"We","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 561 SGW","semester":"Fall 2016","classid":5338}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"E","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 557 SGW","semester":"Fall 2016","classid":5339}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5340}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"EE","type":"LEC","day":"Fr","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 509 SGW","semester":"Fall 2016","classid":5341}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"F","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 420 SGW","semester":"Fall 2016","classid":5342}
        ,
        {"faculty":"MATH","classNum":"208","title":"Fundamental Mathematics I ","section":"G","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 520 SGW","semester":"Fall 2016","classid":5343}
        ,
        {"faculty":"MATH","classNum":"209","title":"Fundamental Mathematics II ","section":"C","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 820 SGW","semester":"Fall 2016","classid":5344}
        ,
        {"faculty":"MATH","classNum":"209","title":"Fundamental Mathematics II ","section":"D","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B050 SGW","semester":"Fall 2016","classid":5346}
        ,
        {"faculty":"MATH","classNum":"209","title":"Fundamental Mathematics II ","section":"CC","type":"LEC","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 557 SGW","semester":"Fall 2016","classid":5347}
        ,
        {"faculty":"MATH","classNum":"209","title":"Fundamental Mathematics II ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5348}
        ,
        {"faculty":"MATH","classNum":"209","title":"Fundamental Mathematics II ","section":"E","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG B050 SGW","semester":"Fall 2016","classid":5349}
        ,
        {"faculty":"MATH","classNum":"209","title":"Fundamental Mathematics II ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 509 SGW","semester":"Fall 2016","classid":5350}
        ,
        {"faculty":"MATH","classNum":"209","title":"Fundamental Mathematics II ","section":"B","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 509 SGW","semester":"Fall 2016","classid":5351}
        ,
        {"faculty":"MATH","classNum":"209","title":"Fundamental Mathematics II ","section":"BB","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 557 SGW","semester":"Fall 2016","classid":5352}
        ,
        {"faculty":"MATH","classNum":"251","title":"Linear Algebra I ","section":"C","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 553 SGW","semester":"Fall 2016","classid":5353}
        ,
        {"faculty":"MATH","classNum":"251","title":"Linear Algebra I ","section":"B","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 411 SGW","semester":"Fall 2016","classid":5354}
        ,
        {"faculty":"MATH","classNum":"251","title":"Linear Algebra I ","section":"A","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB S2.115 SGW","semester":"Fall 2016","classid":5355}
        ,
        {"faculty":"MATH","classNum":"264","title":"Advanced Calculus I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 435 SGW","semester":"Fall 2016","classid":5356}
        ,
        {"faculty":"MATH","classNum":"264","title":"Advanced Calculus I ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":5357}
        ,
        {"faculty":"MATH","classNum":"265","title":"Advanced Calculus II ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 561 SGW","semester":"Fall 2016","classid":5358}
        ,
        {"faculty":"MATH","classNum":"339","title":"COMBINATORICS ","section":"F","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 521 SGW","semester":"Fall 2016","classid":5359}
        ,
        {"faculty":"MATH","classNum":"339","title":"COMBINATORICS ","section":"F FA","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:35PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":5360}
        ,
        {"faculty":"MATH","classNum":"354","title":"Numerical Analysis ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 520 SGW","semester":"Fall 2016","classid":5362}
        ,
        {"faculty":"MATH","classNum":"364","title":"Analysis I ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 539 SGW","semester":"Fall 2016","classid":5363}
        ,
        {"faculty":"MATH","classNum":"364","title":"Analysis I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 565 SGW","semester":"Fall 2016","classid":5364}
        ,
        {"faculty":"MATH","classNum":"370","title":"Ordinary Differential Equations ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 523 SGW","semester":"Fall 2016","classid":5365}
        ,
        {"faculty":"MATH","classNum":"496","title":"Honours Project in Pure and Applied Mathematics ","section":"A","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5366}
        ,
        {"faculty":"MCHI","classNum":"206","title":"Introduction to Modern Chinese II ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 613 SGW","semester":"Fall 2016","classid":5387}
        ,
        {"faculty":"MCHI","classNum":"240","title":"INTERM. MDRN CHINESE I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 603 SGW","semester":"Fall 2016","classid":5388}
        ,
        {"faculty":"MCHI","classNum":"310","title":"Introduction to Modern Chinese Literature ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 611 SGW","semester":"Fall 2016","classid":5390}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"YJ","type":"X","day":"Mo","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":5391}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"YI","type":"X","day":"Mo","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":5392}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"YK","type":"X","day":"Fr","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"TBA","semester":"Fall 2016","classid":5393}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"YL","type":"X","day":"Th","timeBegin":"11:45AM","timeEnd":"3:45PM","room":"TBA","semester":"Fall 2016","classid":5394}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"Y YB","type":"TUT","day":"Mo","timeBegin":"7:45PM","timeEnd":"9:35PM","room":"TBA","semester":"Fall 2016","classid":5395}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"Y YA","type":"TUT","day":"Mo","timeBegin":"7:45PM","timeEnd":"9:35PM","room":"TBA","semester":"Fall 2016","classid":5396}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"Y","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 411 SGW","semester":"Fall 2016","classid":5397}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"XL","type":"X","day":"Fr","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"TBA","semester":"Fall 2016","classid":5398}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"XK","type":"X","day":"Th","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":5399}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"X XB","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"TBA","semester":"Fall 2016","classid":5400}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"XJ","type":"X","day":"We","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":5401}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"XI","type":"X","day":"We","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":5402}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"X XA","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:35PM","room":"TBA","semester":"Fall 2016","classid":5403}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"X","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 507 SGW","semester":"Fall 2016","classid":5404}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"TL","type":"X","day":"Fr","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"TBA","semester":"Fall 2016","classid":5405}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"TK","type":"X","day":"Tu","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":5406}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"T TB","type":"TUT","day":"Mo","timeBegin":"3:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":5407}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"TJ","type":"X","day":"Tu","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":5408}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"TI","type":"X","day":"Tu","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":5409}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"T TA","type":"TUT","day":"Mo","timeBegin":"3:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":5410}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"T","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 507 SGW","semester":"Fall 2016","classid":5411}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"YJ","type":"X","day":"Fr","timeBegin":"6:45PM","timeEnd":"7:35PM","room":"TBA","semester":"Fall 2016","classid":5412}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"YK","type":"X","day":"We","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"TBA","semester":"Fall 2016","classid":5413}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"Y YB","type":"TUT","day":"We","timeBegin":"4:30PM","timeEnd":"5:20PM","room":"TBA","semester":"Fall 2016","classid":5414}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"YL","type":"X","day":"We","timeBegin":"6:45PM","timeEnd":"7:35PM","room":"TBA","semester":"Fall 2016","classid":5415}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"T","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 411 SGW","semester":"Fall 2016","classid":5416}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"TI","type":"X","day":"Tu","timeBegin":"5:15PM","timeEnd":"6:05PM","room":"TBA","semester":"Fall 2016","classid":5418}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"TJ","type":"X","day":"Tu","timeBegin":"6:15PM","timeEnd":"7:05PM","room":"TBA","semester":"Fall 2016","classid":5419}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"T TB","type":"TUT","day":"Th","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":5420}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"TK","type":"X","day":"Tu","timeBegin":"5:15PM","timeEnd":"6:05PM","room":"TBA","semester":"Fall 2016","classid":5421}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"TL","type":"X","day":"Tu","timeBegin":"6:15PM","timeEnd":"7:05PM","room":"TBA","semester":"Fall 2016","classid":5422}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"YI","type":"X","day":"Fr","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"TBA","semester":"Fall 2016","classid":5423}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"Y YA","type":"TUT","day":"Fr","timeBegin":"4:30PM","timeEnd":"5:20PM","room":"TBA","semester":"Fall 2016","classid":5424}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"Y","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 531 SGW","semester":"Fall 2016","classid":5425}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"XL","type":"X","day":"Th","timeBegin":"6:15PM","timeEnd":"7:05PM","room":"TBA","semester":"Fall 2016","classid":5426}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"XK","type":"X","day":"Th","timeBegin":"5:15PM","timeEnd":"6:05PM","room":"TBA","semester":"Fall 2016","classid":5427}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"XXXB","type":"TUT","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":5428}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"XJ","type":"X","day":"Th","timeBegin":"6:15PM","timeEnd":"7:05PM","room":"TBA","semester":"Fall 2016","classid":5429}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"XI","type":"X","day":"Th","timeBegin":"5:15PM","timeEnd":"6:05PM","room":"TBA","semester":"Fall 2016","classid":5430}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"XXXA","type":"TUT","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:05PM","room":"TBA","semester":"Fall 2016","classid":5431}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"XX","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B060 SGW","semester":"Fall 2016","classid":5432}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"Y YB","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"FG B030 SGW","semester":"Fall 2016","classid":5433}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"Y YA","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"H 433 SGW","semester":"Fall 2016","classid":5434}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"Y","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG C070 SGW","semester":"Fall 2016","classid":5435}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"X XB","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"H 605 SGW","semester":"Fall 2016","classid":5436}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"T","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG C070 SGW","semester":"Fall 2016","classid":5437}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"X","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG C080 SGW","semester":"Fall 2016","classid":5438}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"T TB","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"FG B050 SGW","semester":"Fall 2016","classid":5439}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"T TA","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"H 557 SGW","semester":"Fall 2016","classid":5440}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"X XA","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"H 431 SGW","semester":"Fall 2016","classid":5441}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"T TB","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"MB 6.425 SGW","semester":"Fall 2016","classid":5442}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"T TA","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"H 429 SGW","semester":"Fall 2016","classid":5443}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"T","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 520 SGW","semester":"Fall 2016","classid":5444}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"X XB","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"H 427 SGW","semester":"Fall 2016","classid":5445}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"X","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 820 SGW","semester":"Fall 2016","classid":5446}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"X XA","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"H 427 SGW","semester":"Fall 2016","classid":5447}
        ,
        {"faculty":"MECH","classNum":"313","title":"Machine Drawing and Design ","section":"X","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B040 SGW","semester":"Fall 2016","classid":5448}
        ,
        {"faculty":"MECH","classNum":"313","title":"Machine Drawing and Design ","section":"X XA","type":"TUT","day":"We","timeBegin":"3:55PM","timeEnd":"5:35PM","room":"TBA","semester":"Fall 2016","classid":5449}
        ,
        {"faculty":"MECH","classNum":"343","title":"Theory of Machines ","section":"XJ","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"H 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW","semester":"Fall 2016","classid":5450}
        ,
        {"faculty":"MECH","classNum":"343","title":"Theory of Machines ","section":"XN","type":"X","day":"We","timeBegin":"4:15PM","timeEnd":"6:05PM","room":"H 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW","semester":"Fall 2016","classid":5451}
        ,
        {"faculty":"MECH","classNum":"343","title":"Theory of Machines ","section":"X","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 411 SGW","semester":"Fall 2016","classid":5452}
        ,
        {"faculty":"MECH","classNum":"343","title":"Theory of Machines ","section":"X XA","type":"TUT","day":"Fr","timeBegin":"2:15PM","timeEnd":"3:05PM","room":"H 401 SGW","semester":"Fall 2016","classid":5453}
        ,
        {"faculty":"MECH","classNum":"343","title":"Theory of Machines ","section":"XL","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"H 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW","semester":"Fall 2016","classid":5454}
        ,
        {"faculty":"MECH","classNum":"343","title":"Theory of Machines ","section":"X XB","type":"TUT","day":"Fr","timeBegin":"2:15PM","timeEnd":"3:05PM","room":"H 403 SGW","semester":"Fall 2016","classid":5455}
        ,
        {"faculty":"MECH","classNum":"343","title":"Theory of Machines ","section":"XK","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"H 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW","semester":"Fall 2016","classid":5456}
        ,
        {"faculty":"MECH","classNum":"343","title":"Theory of Machines ","section":"XM","type":"X","day":"We","timeBegin":"4:15PM","timeEnd":"6:05PM","room":"H 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW","semester":"Fall 2016","classid":5457}
        ,
        {"faculty":"MECH","classNum":"343","title":"Theory of Machines ","section":"XI","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"H 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW\nH 1040 SGW","semester":"Fall 2016","classid":5458}
        ,
        {"faculty":"MECH","classNum":"344","title":"Machine Element Design ","section":"MM","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B050 SGW","semester":"Fall 2016","classid":5459}
        ,
        {"faculty":"MECH","classNum":"344","title":"Machine Element Design ","section":"MMMA","type":"TUT","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"H 509 SGW","semester":"Fall 2016","classid":5460}
        ,
        {"faculty":"MECH","classNum":"344","title":"Machine Element Design ","section":"X","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"FG B040 SGW","semester":"Fall 2016","classid":5461}
        ,
        {"faculty":"MECH","classNum":"344","title":"Machine Element Design ","section":"X XA","type":"TUT","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"H 564 SGW","semester":"Fall 2016","classid":5462}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"XP","type":"X","day":"We","timeBegin":"11:45AM","timeEnd":"1:35PM\nWe","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5463}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"T","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 553 SGW","semester":"Fall 2016","classid":5464}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"T TA","type":"TUT","day":"We","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"H 403 SGW","semester":"Fall 2016","classid":5465}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"TI","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5466}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"TJ","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5467}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"TK","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:35PM\nMo","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5468}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"TL","type":"X","day":"Tu","timeBegin":"2:45PM","timeEnd":"4:35PM\nTu","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5469}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"T TB","type":"TUT","day":"We","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"H 423 SGW","semester":"Fall 2016","classid":5470}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"TM","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:35PM\nMo","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5471}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"TN","type":"X","day":"Tu","timeBegin":"9:45AM","timeEnd":"11:35AM\nTu","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5472}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"TO","type":"X","day":"Tu","timeBegin":"9:45AM","timeEnd":"11:35AM\nTu","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5473}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"TP","type":"X","day":"We","timeBegin":"11:45AM","timeEnd":"1:35PM\nWe","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5474}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"X","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B060 SGW","semester":"Fall 2016","classid":5475}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"X XA","type":"TUT","day":"We","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"FG B055 SGW","semester":"Fall 2016","classid":5476}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"XI","type":"X","day":"Th","timeBegin":"2:45PM","timeEnd":"4:35PM\nTh","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5477}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"XJ","type":"X","day":"Th","timeBegin":"2:45PM","timeEnd":"4:35PM\nTh","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5478}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"XK","type":"X","day":"Th","timeBegin":"9:45AM","timeEnd":"11:35AM\nTh","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5479}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"XL","type":"X","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:35PM\nFr","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5480}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"X XB","type":"TUT","day":"We","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"FG B080 SGW","semester":"Fall 2016","classid":5481}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"XM","type":"X","day":"Th","timeBegin":"9:45AM","timeEnd":"11:35AM\nTh","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5482}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"XN","type":"X","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:35PM\nFr","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5483}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"XO","type":"X","day":"Tu","timeBegin":"2:45PM","timeEnd":"4:35PM\nTu","room":"H 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW\nH 1045 SGW","semester":"Fall 2016","classid":5484}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FM","type":"X","day":"Fr","timeBegin":"8:45AM","timeEnd":"10:35AM\nFr","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5488}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"F FC","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":5492}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FR","type":"X","day":"Th","timeBegin":"9:45AM","timeEnd":"11:35AM\nTh","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5493}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FQ","type":"X","day":"Th","timeBegin":"9:45AM","timeEnd":"11:35AM\nTh","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5494}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FP","type":"X","day":"Tu","timeBegin":"9:45AM","timeEnd":"11:35AM\nTu","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5495}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FI","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5497}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"F FA","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"H 627 SGW","semester":"Fall 2016","classid":5498}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FJ","type":"X","day":"We","timeBegin":"8:45AM","timeEnd":"10:35AM\nWe","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5502}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FN","type":"X","day":"Fr","timeBegin":"8:45AM","timeEnd":"10:35AM\nFr","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5503}
        ,
        {"faculty":"MECH","classNum":"368","title":"Electronics for Mechanical Engineers ","section":"TJ","type":"X","day":"Th","timeBegin":"2:30PM","timeEnd":"4:20PM\nTh","room":"H 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW","semester":"Fall 2016","classid":5506}
        ,
        {"faculty":"MECH","classNum":"368","title":"Electronics for Mechanical Engineers ","section":"T TA","type":"TUT","day":"Tu","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 431 SGW","semester":"Fall 2016","classid":5508}
        ,
        {"faculty":"MECH","classNum":"370","title":"Modelling, Simulation and Control Systems ","section":"XI","type":"X","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:35PM\nMo","room":"H 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW","semester":"Fall 2016","classid":5510}
        ,
        {"faculty":"MECH","classNum":"370","title":"Modelling, Simulation and Control Systems ","section":"X","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 431 SGW","semester":"Fall 2016","classid":5511}
        ,
        {"faculty":"MECH","classNum":"370","title":"Modelling, Simulation and Control Systems ","section":"XJ","type":"X","day":"Fr","timeBegin":"2:45PM","timeEnd":"4:35PM\nFr","room":"H 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW","semester":"Fall 2016","classid":5513}
        ,
        {"faculty":"MECH","classNum":"370","title":"Modelling, Simulation and Control Systems ","section":"XK","type":"X","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:35PM\nMo","room":"H 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW","semester":"Fall 2016","classid":5514}
        ,
        {"faculty":"MECH","classNum":"371","title":"Analysis and Design of Control Systems ","section":"FI","type":"X","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM\nWe","room":"H 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW","semester":"Fall 2016","classid":5516}
        ,
        {"faculty":"MECH","classNum":"371","title":"Analysis and Design of Control Systems ","section":"FL","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM\nTu","room":"H 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW","semester":"Fall 2016","classid":5517}
        ,
        {"faculty":"MECH","classNum":"371","title":"Analysis and Design of Control Systems ","section":"F","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 431 SGW","semester":"Fall 2016","classid":5520}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XQ","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"10:35AM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5522}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XN","type":"X","day":"Tu","timeBegin":"9:45AM","timeEnd":"11:35AM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5523}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XO","type":"X","day":"Th","timeBegin":"2:45PM","timeEnd":"4:35PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5524}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XP","type":"X","day":"Th","timeBegin":"2:45PM","timeEnd":"4:35PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5525}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FO","type":"X","day":"Tu","timeBegin":"9:45AM","timeEnd":"11:35AM\nTu","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5485}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FL","type":"X","day":"We","timeBegin":"8:45AM","timeEnd":"10:35AM\nWe","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5486}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"F FB","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 627 SGW","semester":"Fall 2016","classid":5487}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FU","type":"X","day":"Tu","timeBegin":"2:45PM","timeEnd":"4:35PM\nTu","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5489}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FT","type":"X","day":"Mo","timeBegin":"10:45AM","timeEnd":"12:35PM\nMo","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5490}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FS","type":"X","day":"Mo","timeBegin":"10:45AM","timeEnd":"12:35PM\nMo","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5491}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FK","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5496}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"F","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 535 SGW","semester":"Fall 2016","classid":5499}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FW","type":"X","day":"Th","timeBegin":"2:45PM","timeEnd":"4:35PM\nTh","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5500}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FV","type":"X","day":"Tu","timeBegin":"2:45PM","timeEnd":"4:35PM\nTu","room":"H 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW\nH 1049 SGW","semester":"Fall 2016","classid":5501}
        ,
        {"faculty":"MECH","classNum":"368","title":"Electronics for Mechanical Engineers ","section":"TL","type":"X","day":"Tu","timeBegin":"2:30PM","timeEnd":"4:20PM\nTu","room":"H 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW","semester":"Fall 2016","classid":5504}
        ,
        {"faculty":"MECH","classNum":"368","title":"Electronics for Mechanical Engineers ","section":"TK","type":"X","day":"Tu","timeBegin":"2:30PM","timeEnd":"4:20PM\nTu","room":"H 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW","semester":"Fall 2016","classid":5505}
        ,
        {"faculty":"MECH","classNum":"368","title":"Electronics for Mechanical Engineers ","section":"TI","type":"X","day":"Th","timeBegin":"2:30PM","timeEnd":"4:20PM\nTh","room":"H 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW\nH 1053 SGW","semester":"Fall 2016","classid":5507}
        ,
        {"faculty":"MECH","classNum":"368","title":"Electronics for Mechanical Engineers ","section":"T","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 431 SGW","semester":"Fall 2016","classid":5509}
        ,
        {"faculty":"MECH","classNum":"370","title":"Modelling, Simulation and Control Systems ","section":"X XA","type":"TUT","day":"We","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 431 SGW","semester":"Fall 2016","classid":5512}
        ,
        {"faculty":"MECH","classNum":"370","title":"Modelling, Simulation and Control Systems ","section":"XL","type":"X","day":"Fr","timeBegin":"2:45PM","timeEnd":"4:35PM\nFr","room":"H 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW","semester":"Fall 2016","classid":5515}
        ,
        {"faculty":"MECH","classNum":"371","title":"Analysis and Design of Control Systems ","section":"FJ","type":"X","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM\nWe","room":"H 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW","semester":"Fall 2016","classid":5518}
        ,
        {"faculty":"MECH","classNum":"371","title":"Analysis and Design of Control Systems ","section":"FK","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM\nTu","room":"H 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW\nH 1051 SGW","semester":"Fall 2016","classid":5519}
        ,
        {"faculty":"MECH","classNum":"371","title":"Analysis and Design of Control Systems ","section":"F FA","type":"TUT","day":"Mo","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"H 513 SGW","semester":"Fall 2016","classid":5521}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XX","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG C080 SGW","semester":"Fall 2016","classid":5526}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XXXA","type":"TUT","day":"We","timeBegin":"8:30PM","timeEnd":"10:20PM","room":"H 403 SGW","semester":"Fall 2016","classid":5527}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XI","type":"X","day":"Mo","timeBegin":"9:45AM","timeEnd":"11:35AM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5528}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XJ","type":"X","day":"Mo","timeBegin":"9:45AM","timeEnd":"11:35AM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5529}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XK","type":"X","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:35PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5530}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XXXB","type":"TUT","day":"We","timeBegin":"8:30PM","timeEnd":"10:20PM","room":"H 423 SGW","semester":"Fall 2016","classid":5532}
        ,
        {"faculty":"MECH","classNum":"390","title":"Mechanical Engineering Design Project ","section":"X XE","type":"TUT","day":"Th","timeBegin":"4:45PM","timeEnd":"6:35PM","room":"TBA","semester":"Fall 2016","classid":5533}
        ,
        {"faculty":"MECH","classNum":"390","title":"Mechanical Engineering Design Project ","section":"X XD","type":"TUT","day":"Tu","timeBegin":"4:45PM","timeEnd":"6:35PM","room":"TBA","semester":"Fall 2016","classid":5534}
        ,
        {"faculty":"MECH","classNum":"390","title":"Mechanical Engineering Design Project ","section":"X XB","type":"TUT","day":"Tu","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":5535}
        ,
        {"faculty":"MECH","classNum":"390","title":"Mechanical Engineering Design Project ","section":"X XC","type":"TUT","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":5537}
        ,
        {"faculty":"MECH","classNum":"390","title":"Mechanical Engineering Design Project ","section":"X","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 535 SGW","semester":"Fall 2016","classid":5538}
        ,
        {"faculty":"MECH","classNum":"411","title":"Instrumentation and Measurements ","section":"TK","type":"X","day":"We","timeBegin":"2:45PM","timeEnd":"4:35PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5539}
        ,
        {"faculty":"MECH","classNum":"411","title":"Instrumentation and Measurements ","section":"TJ","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5540}
        ,
        {"faculty":"MECH","classNum":"411","title":"Instrumentation and Measurements ","section":"TI","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"4:35PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5541}
        ,
        {"faculty":"MECH","classNum":"411","title":"Instrumentation and Measurements ","section":"T","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 523 SGW","semester":"Fall 2016","classid":5542}
        ,
        {"faculty":"MECH","classNum":"411","title":"Instrumentation and Measurements ","section":"T TA","type":"TUT","day":"Fr","timeBegin":"2:15PM","timeEnd":"3:05PM","room":"H 523 SGW","semester":"Fall 2016","classid":5543}
        ,
        {"faculty":"MECH","classNum":"375","title":"Mechanical Vibrations ","section":"XL","type":"X","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:35PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5531}
        ,
        {"faculty":"MECH","classNum":"390","title":"Mechanical Engineering Design Project ","section":"X XA","type":"TUT","day":"Th","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":5536}
        ,
        {"faculty":"MECH","classNum":"412","title":"Computer?Aided Mechanical Design ","section":"NNNL","type":"LAB","day":"We","timeBegin":"8:45AM","timeEnd":"10:35AM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5544}
        ,
        {"faculty":"MECH","classNum":"412","title":"Computer?Aided Mechanical Design ","section":"NNNK","type":"LAB","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5545}
        ,
        {"faculty":"MECH","classNum":"412","title":"Computer?Aided Mechanical Design ","section":"NN","type":"LEC","day":"Fr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B050 SGW","semester":"Fall 2016","classid":5546}
        ,
        {"faculty":"MECH","classNum":"412","title":"Computer?Aided Mechanical Design ","section":"NNNI","type":"LAB","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5547}
        ,
        {"faculty":"MECH","classNum":"412","title":"Computer?Aided Mechanical Design ","section":"NNNM","type":"LAB","day":"We","timeBegin":"8:45AM","timeEnd":"10:35AM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5548}
        ,
        {"faculty":"MECH","classNum":"412","title":"Computer?Aided Mechanical Design ","section":"NNNJ","type":"LAB","day":"Mo","timeBegin":"8:45AM","timeEnd":"10:35AM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5549}
        ,
        {"faculty":"MECH","classNum":"415","title":"Advanced Programming for Mechanical and Industrial Engineers ","section":"M","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 615 SGW","semester":"Fall 2016","classid":5550}
        ,
        {"faculty":"MECH","classNum":"415","title":"Advanced Programming for Mechanical and Industrial Engineers ","section":"M MA","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"H 615 SGW","semester":"Fall 2016","classid":5551}
        ,
        {"faculty":"MECH","classNum":"422","title":"Mechanical Behaviour of Polymer Composite Materials ","section":"YY","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 531 SGW","semester":"Fall 2016","classid":5552}
        ,
        {"faculty":"MECH","classNum":"425","title":"Manufacturing of Composites ","section":"Y YL","type":"LAB","day":"Tu","timeBegin":"11:45AM","timeEnd":"1:35PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5553}
        ,
        {"faculty":"MECH","classNum":"425","title":"Manufacturing of Composites ","section":"Y YK","type":"LAB","day":"Tu","timeBegin":"11:45AM","timeEnd":"1:35PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5554}
        ,
        {"faculty":"MECH","classNum":"425","title":"Manufacturing of Composites ","section":"Y YJ","type":"LAB","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5555}
        ,
        {"faculty":"MECH","classNum":"425","title":"Manufacturing of Composites ","section":"Y YI","type":"LAB","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5556}
        ,
        {"faculty":"MECH","classNum":"425","title":"Manufacturing of Composites ","section":"Y","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"FG B050 SGW","semester":"Fall 2016","classid":5557}
        ,
        {"faculty":"MECH","classNum":"447","title":"Fundamentals of Vehicle System Design ","section":"T","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 629 SGW","semester":"Fall 2016","classid":5558}
        ,
        {"faculty":"MECH","classNum":"447","title":"Fundamentals of Vehicle System Design ","section":"T TL","type":"LAB","day":"Th","timeBegin":"10:15AM","timeEnd":"12:05PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5561}
        ,
        {"faculty":"MECH","classNum":"447","title":"Fundamentals of Vehicle System Design ","section":"T TK","type":"LAB","day":"Mo","timeBegin":"10:15AM","timeEnd":"12:05PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5562}
        ,
        {"faculty":"MECH","classNum":"447","title":"Fundamentals of Vehicle System Design ","section":"T TJ","type":"LAB","day":"Fr","timeBegin":"10:15AM","timeEnd":"12:05PM\nFr","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5563}
        ,
        {"faculty":"MECH","classNum":"447","title":"Fundamentals of Vehicle System Design ","section":"T TI","type":"LAB","day":"We","timeBegin":"10:15AM","timeEnd":"12:05PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5564}
        ,
        {"faculty":"MECH","classNum":"461","title":"Gas Dynamics ","section":"XXXI","type":"LAB","day":"We","timeBegin":"11:15AM","timeEnd":"1:05PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5565}
        ,
        {"faculty":"MECH","classNum":"461","title":"Gas Dynamics ","section":"XX","type":"LEC","day":"Fr","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"FG B060 SGW","semester":"Fall 2016","classid":5566}
        ,
        {"faculty":"MECH","classNum":"461","title":"Gas Dynamics ","section":"XXXL","type":"LAB","day":"Th","timeBegin":"12:00PM","timeEnd":"1:50PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5569}
        ,
        {"faculty":"MECH","classNum":"461","title":"Gas Dynamics ","section":"XXXJ","type":"LAB","day":"We","timeBegin":"11:15AM","timeEnd":"1:05PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5571}
        ,
        {"faculty":"MECH","classNum":"473","title":"Control System Design ","section":"M","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG B080 SGW","semester":"Fall 2016","classid":5572}
        ,
        {"faculty":"MECH","classNum":"473","title":"Control System Design ","section":"M MI","type":"LAB","day":"Fr","timeBegin":"2:15PM","timeEnd":"4:05PM\nFr","room":"H 1057 SGW\nH 1057 SGW\nH 1057 SGW\nH 1057 SGW\nH 1057 SGW\nH 1057 SGW","semester":"Fall 2016","classid":5573}
        ,
        {"faculty":"MHIS","classNum":"203","title":"MUSIC HISTORY TO 1800 ","section":"A","type":"LEC","day":"MoWe","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"TBA","semester":"Fall 2016","classid":5587}
        ,
        {"faculty":"MHIS","classNum":"471","title":"Independent Study I ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5588}
        ,
        {"faculty":"MHIS","classNum":"472","title":"Independent Study II ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5589}
        ,
        {"faculty":"MPER","classNum":"471","title":"INDEPENDENT STUDY I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5590}
        ,
        {"faculty":"MPER","classNum":"472","title":"INDEPENDENT STUDY II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5591}
        ,
        {"faculty":"MUSI","classNum":"211","title":"Aural Perception I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:45AM","timeEnd":"12:15PM","room":"EV 6.735 SGW","semester":"Fall 2016","classid":5611}
        ,
        {"faculty":"MUSI","classNum":"251","title":"Harmony I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"9:00AM","timeEnd":"10:30AM","room":"EV 6.735 SGW","semester":"Fall 2016","classid":5612}
        ,
        {"faculty":"MUSI","classNum":"261","title":"Music Composition I ","section":"A A","type":"TUT","day":"Mo","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":5613}
        ,
        {"faculty":"MUSI","classNum":"261","title":"Music Composition I ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:15PM","timeEnd":"3:45PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":5614}
        ,
        {"faculty":"MUSI","classNum":"361","title":"Music Composition III ","section":"A A","type":"TUT","day":"Tu","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":5616}
        ,
        {"faculty":"MUSI","classNum":"361","title":"Music Composition III ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:15PM","timeEnd":"3:45PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":5617}
        ,
        {"faculty":"MUSI","classNum":"461","title":"Music Composition V ","section":"A A","type":"TUT","day":"Tu","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":5618}
        ,
        {"faculty":"MUSI","classNum":"461","title":"Music Composition V ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:15PM","timeEnd":"3:45PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":5619}
        ,
        {"faculty":"MUSI","classNum":"471","title":"INDEPENDENT STUDY I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5620}
        ,
        {"faculty":"MUSI","classNum":"472","title":"INDEPENDENT STUDY II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5621}
        ,
        {"faculty":"MUSI","classNum":"491","title":"Special Project in Music ","section":"A","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5622}
        ,
        {"faculty":"MUSI","classNum":"492","title":"Special Project in Music ","section":"A","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5623}
        ,
        {"faculty":"PHIL","classNum":"201","title":"Problems of Philosophy ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":5626}
        ,
        {"faculty":"PHIL","classNum":"210","title":"Critical Thinking ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5627}
        ,
        {"faculty":"PHIL","classNum":"214","title":"Deductive Logic ","section":"A A","type":"CON","day":"We","timeBegin":"2:45PM","timeEnd":"3:30PM","room":"H 621 SGW","semester":"Fall 2016","classid":5629}
        ,
        {"faculty":"PHIL","classNum":"214","title":"Deductive Logic ","section":"A B","type":"CON","day":"We","timeBegin":"3:30PM","timeEnd":"4:15PM","room":"H 621 SGW","semester":"Fall 2016","classid":5630}
        ,
        {"faculty":"PHIL","classNum":"232","title":"Introduction to Ethics ","section":"A B","type":"CON","day":"Mo","timeBegin":"3:30PM","timeEnd":"4:15PM","room":"H 427 SGW","semester":"Fall 2016","classid":5632}
        ,
        {"faculty":"PHIL","classNum":"232","title":"Introduction to Ethics ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":5633}
        ,
        {"faculty":"PHIL","classNum":"232","title":"Introduction to Ethics ","section":"A A","type":"CON","day":"Mo","timeBegin":"2:45PM","timeEnd":"3:30PM","room":"H 427 SGW","semester":"Fall 2016","classid":5634}
        ,
        {"faculty":"PHIL","classNum":"235","title":"Biomedical Ethics ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5635}
        ,
        {"faculty":"PHIL","classNum":"260","title":"Presocratics and Plato ","section":"A A","type":"CON","day":"Tu","timeBegin":"11:45AM","timeEnd":"12:30PM","room":"H 429 SGW","semester":"Fall 2016","classid":5636}
        ,
        {"faculty":"PHIL","classNum":"260","title":"Presocratics and Plato ","section":"A B","type":"CON","day":"Tu","timeBegin":"12:30PM","timeEnd":"1:15PM","room":"H 429 SGW","semester":"Fall 2016","classid":5637}
        ,
        {"faculty":"PHIL","classNum":"260","title":"Presocratics and Plato ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 620 SGW","semester":"Fall 2016","classid":5638}
        ,
        {"faculty":"PHIL","classNum":"263","title":"Introduction to Epistemology ","section":"A A","type":"CON","day":"Th","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"H 537 SGW","semester":"Fall 2016","classid":5639}
        ,
        {"faculty":"PHIL","classNum":"263","title":"Introduction to Epistemology ","section":"A B","type":"CON","day":"Th","timeBegin":"5:00PM","timeEnd":"5:45PM","room":"H 537 SGW","semester":"Fall 2016","classid":5640}
        ,
        {"faculty":"PHIL","classNum":"263","title":"Introduction to Epistemology ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 420 SGW","semester":"Fall 2016","classid":5641}
        ,
        {"faculty":"PHIL","classNum":"266","title":"Introduction to Philosophy of Religion ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5642}
        ,
        {"faculty":"PHIL","classNum":"360","title":"Rationalism ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"FG B080 SGW","semester":"Fall 2016","classid":5644}
        ,
        {"faculty":"PHIL","classNum":"374","title":"Kant and 19th-Century Philosophy ","section":"A","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 564 SGW","semester":"Fall 2016","classid":5645}
        ,
        {"faculty":"PHOT","classNum":"211","title":"Black?and?White Photography I ","section":"A","type":"STU","day":"Fr","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 3.645 SGW","semester":"Fall 2016","classid":5652}
        ,
        {"faculty":"PHOT","classNum":"311","title":"Large Format Photography I ","section":"A","type":"STU","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 3.645 SGW","semester":"Fall 2016","classid":5653}
        ,
        {"faculty":"PHOT","classNum":"471","title":"Professional Internship I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5655}
        ,
        {"faculty":"PHOT","classNum":"472","title":"Professional Internship II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5656}
        ,
        {"faculty":"PHOT","classNum":"481","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5657}
        ,
        {"faculty":"PHYS","classNum":"204","title":"Mechanics ","section":"01","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"SI H01 LOY","semester":"Fall 2016","classid":5661}
        ,
        {"faculty":"PHYS","classNum":"204","title":"Mechanics ","section":"02","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"SP S110 LOY","semester":"Fall 2016","classid":5662}
        ,
        {"faculty":"PHYS","classNum":"204","title":"Mechanics ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"SI H01 LOY","semester":"Fall 2016","classid":5664}
        ,
        {"faculty":"PHYS","classNum":"205","title":"Electricity and Magnetism ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"SI H01 LOY","semester":"Fall 2016","classid":5666}
        ,
        {"faculty":"PHYS","classNum":"206","title":"Waves and Modern Physics ","section":"01","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"SI H01 LOY","semester":"Fall 2016","classid":5667}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"04","type":"LAB","day":"We","timeBegin":"9:30AM","timeEnd":"12:30PM\nWe","room":"SP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY","semester":"Fall 2016","classid":5668}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"05","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"4:30PM\nTu","room":"SP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY","semester":"Fall 2016","classid":5669}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"06","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"4:30PM\nTu","room":"SP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY","semester":"Fall 2016","classid":5670}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"07","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"4:30PM\nWe","room":"SP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY","semester":"Fall 2016","classid":5671}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"08","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"4:30PM\nWe","room":"SP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY","semester":"Fall 2016","classid":5672}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"09","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"4:30PM\nTh","room":"SP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY","semester":"Fall 2016","classid":5673}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"03","type":"LAB","day":"We","timeBegin":"9:30AM","timeEnd":"12:30PM\nWe","room":"SP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY","semester":"Fall 2016","classid":5674}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"02","type":"LAB","day":"Tu","timeBegin":"9:30AM","timeEnd":"12:30PM\nTu","room":"SP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY","semester":"Fall 2016","classid":5675}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"52","type":"LAB","day":"Tu","timeBegin":"5:00PM","timeEnd":"8:00PM\nTu","room":"SP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY","semester":"Fall 2016","classid":5678}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"53","type":"LAB","day":"We","timeBegin":"5:00PM","timeEnd":"8:00PM\nWe","room":"SP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY\nSP 265-19 LOY","semester":"Fall 2016","classid":5679}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"10","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"4:30PM\nTh","room":"SP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY","semester":"Fall 2016","classid":5680}
        ,
        {"faculty":"PHYS","classNum":"224","title":"Introductory Experimental Mechanics ","section":"54","type":"LAB","day":"We","timeBegin":"5:00PM","timeEnd":"8:00PM\nWe","room":"SP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY\nSP 265-18 LOY","semester":"Fall 2016","classid":5681}
        ,
        {"faculty":"PHYS","classNum":"225","title":"Introductory Experimental Electricity ","section":"02","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"4:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5682}
        ,
        {"faculty":"PHYS","classNum":"225","title":"Introductory Experimental Electricity ","section":"01","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"4:30PM\nTu","room":"SP 265-17 LOY\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5683}
        ,
        {"faculty":"PHYS","classNum":"225","title":"Introductory Experimental Electricity ","section":"06","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"4:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5684}
        ,
        {"faculty":"PHYS","classNum":"225","title":"Introductory Experimental Electricity ","section":"05","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"4:30PM\nTh","room":"SP 265-17 LOY\nSP 265-17 LOY\nSP 265-17 LOY\nSP 265-17 LOY\nSP 265-17 LOY\nSP 265-17 LOY","semester":"Fall 2016","classid":5685}
        ,
        {"faculty":"PHYS","classNum":"225","title":"Introductory Experimental Electricity ","section":"04","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"4:30PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5686}
        ,
        {"faculty":"PHYS","classNum":"225","title":"Introductory Experimental Electricity ","section":"03","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"4:30PM\nWe","room":"SP 265-17 LOY\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5687}
        ,
        {"faculty":"PHYS","classNum":"226","title":"Introductory Experimental Waves and Modern Physics ","section":"01","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"4:30PM\nTu","room":"SP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY","semester":"Fall 2016","classid":5688}
        ,
        {"faculty":"PHYS","classNum":"226","title":"Introductory Experimental Waves and Modern Physics ","section":"06","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"4:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5689}
        ,
        {"faculty":"PHYS","classNum":"226","title":"Introductory Experimental Waves and Modern Physics ","section":"05","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"4:30PM\nTh","room":"SP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY","semester":"Fall 2016","classid":5690}
        ,
        {"faculty":"PHYS","classNum":"226","title":"Introductory Experimental Waves and Modern Physics ","section":"04","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"4:30PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5691}
        ,
        {"faculty":"PHYS","classNum":"226","title":"Introductory Experimental Waves and Modern Physics ","section":"03","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"4:30PM\nWe","room":"SP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY\nSP 265-09 LOY","semester":"Fall 2016","classid":5692}
        ,
        {"faculty":"PHYS","classNum":"226","title":"Introductory Experimental Waves and Modern Physics ","section":"02","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"4:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":5693}
        ,
        {"faculty":"PHYS","classNum":"232","title":"Methods of Theoretical Physics I ","section":"01","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"CC 106 LOY","semester":"Fall 2016","classid":5694}
        ,
        {"faculty":"PHYS","classNum":"245","title":"Classical Mechanics ","section":"01","type":"LEC","day":"WeFr","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"CC 106 LOY","semester":"Fall 2016","classid":5695}
        ,
        {"faculty":"PHYS","classNum":"253","title":"Electricity and Magnetism I ","section":"01","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 106 LOY","semester":"Fall 2016","classid":5696}
        ,
        {"faculty":"PHYS","classNum":"290","title":"Experimental Electronics ","section":"01","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5697}
        ,
        {"faculty":"PHYS","classNum":"291","title":"Experimental Mechanics I ","section":"01","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5698}
        ,
        {"faculty":"PHYS","classNum":"293","title":"Experimental Electricity and Magnetism I ","section":"01","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5699}
        ,
        {"faculty":"PHYS","classNum":"334","title":"Thermodynamics ","section":"01","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 425 LOY","semester":"Fall 2016","classid":5701}
        ,
        {"faculty":"PHYS","classNum":"345","title":"Advanced Classical Mechanics ","section":"01","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CJ 1.125 LOY","semester":"Fall 2016","classid":5702}
        ,
        {"faculty":"PHYS","classNum":"358","title":"Solid State Physics ","section":"01","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 405 LOY","semester":"Fall 2016","classid":5704}
        ,
        {"faculty":"PHYS","classNum":"377","title":"Quantum Mechanics I ","section":"01","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 405 LOY","semester":"Fall 2016","classid":5705}
        ,
        {"faculty":"PHYS","classNum":"394","title":"Experimental Atomic Physics ","section":"01","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5706}
        ,
        {"faculty":"PHYS","classNum":"496","title":"HONOURS RESEARCH PROJECT ","section":"01","type":"SEM","day":"Mo","timeBegin":"12:00AM","timeEnd":"12:00AM","room":"TBA","semester":"Fall 2016","classid":5707}
        ,
        {"faculty":"POLI","classNum":"203","title":"Introduction to Comparative Politics ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 407 SGW","semester":"Fall 2016","classid":5726}
        ,
        {"faculty":"POLI","classNum":"204","title":"INTRO TO CANADIAN POLITICS ","section":"B","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 415 SGW","semester":"Fall 2016","classid":5727}
        ,
        {"faculty":"POLI","classNum":"204","title":"INTRO TO CANADIAN POLITICS ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5729}
        ,
        {"faculty":"POLI","classNum":"204","title":"INTRO TO CANADIAN POLITICS ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":5730}
        ,
        {"faculty":"POLI","classNum":"205","title":"Introduction to International Relations ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 553 SGW","semester":"Fall 2016","classid":5731}
        ,
        {"faculty":"POLI","classNum":"205","title":"Introduction to International Relations ","section":"CC","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 415 SGW","semester":"Fall 2016","classid":5732}
        ,
        {"faculty":"POLI","classNum":"205","title":"Introduction to International Relations ","section":"B","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 507 SGW","semester":"Fall 2016","classid":5733}
        ,
        {"faculty":"POLI","classNum":"207","title":"Introduction to Political Science Research ","section":"AAAB","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":5737}
        ,
        {"faculty":"POLI","classNum":"207","title":"Introduction to Political Science Research ","section":"A","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 411 SGW","semester":"Fall 2016","classid":5740}
        ,
        {"faculty":"POLI","classNum":"207","title":"Introduction to Political Science Research ","section":"AAAA","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":5741}
        ,
        {"faculty":"POLI","classNum":"207","title":"Introduction to Political Science Research ","section":"AAAC","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":5743}
        ,
        {"faculty":"POLI","classNum":"207","title":"Introduction to Political Science Research ","section":"AAAD","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":5744}
        ,
        {"faculty":"POLI","classNum":"219","title":"Governance and Organized Crime ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5749}
        ,
        {"faculty":"POLI","classNum":"285","title":"INTRO TO LAW & SOCIETY ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 420 SGW","semester":"Fall 2016","classid":5750}
        ,
        {"faculty":"POLI","classNum":"305","title":"International Political Economy ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 520 SGW","semester":"Fall 2016","classid":5751}
        ,
        {"faculty":"POLI","classNum":"310","title":"Politics of the U.S. ","section":"A","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 433 SGW","semester":"Fall 2016","classid":5752}
        ,
        {"faculty":"POLI","classNum":"334","title":"Political Participation in Canada ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":5756}
        ,
        {"faculty":"POLI","classNum":"339","title":"(also listed as SCPA 339) Quebec Politics and Society/ La vie politique quebecoise ","section":"A","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":5757}
        ,
        {"faculty":"POLI","classNum":"373","title":"Late Modern Political Philosophy ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 435 SGW","semester":"Fall 2016","classid":5762}
        ,
        {"faculty":"POLI","classNum":"379","title":"Politics of Latin America ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"FG B050 SGW","semester":"Fall 2016","classid":5763}
        ,
        {"faculty":"POLI","classNum":"393","title":"ADVANCED EMPIRICAL RESEARCH METHODS ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 449 SGW","semester":"Fall 2016","classid":5765}
        ,
        {"faculty":"POLI","classNum":"395","title":"Politics of the Middle East ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"FG B030 SGW","semester":"Fall 2016","classid":5767}
        ,
        {"faculty":"POLI","classNum":"414","title":"AUTHORS OF POL IMAGINATION ","section":"A","type":"SEM","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 632 SGW","semester":"Fall 2016","classid":5769}
        ,
        {"faculty":"POLI","classNum":"463","title":"Government and Business in Canada ","section":"A","type":"SEM","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 634 SGW","semester":"Fall 2016","classid":5772}
        ,
        {"faculty":"PRIN","classNum":"211","title":"Intaglio I ","section":"A","type":"STU","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 9.655 SGW","semester":"Fall 2016","classid":5783}
        ,
        {"faculty":"PRIN","classNum":"211","title":"Intaglio I ","section":"B","type":"STU","day":"Th","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 9.655 SGW","semester":"Fall 2016","classid":5784}
        ,
        {"faculty":"PRIN","classNum":"231","title":"Screen Printing I ","section":"A","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 9.705 SGW","semester":"Fall 2016","classid":5787}
        ,
        {"faculty":"PRIN","classNum":"331","title":"Screen Printing II ","section":"A","type":"STU","day":"We","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 9.705 SGW","semester":"Fall 2016","classid":5789}
        ,
        {"faculty":"PRIN","classNum":"431","title":"Screen Printing III ","section":"A","type":"STU","day":"We","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 9.705 SGW","semester":"Fall 2016","classid":5792}
        ,
        {"faculty":"PRIN","classNum":"472","title":"Independent Study in Print Media II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5796}
        ,
        {"faculty":"PRIN","classNum":"481","title":"Professional Internship ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5797}
        ,
        {"faculty":"PSYC","classNum":"200","title":"Introductory Psychology ","section":"01","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"3:45PM","room":"HC 155 LOY","semester":"Fall 2016","classid":5814}
        ,
        {"faculty":"PSYC","classNum":"233","title":"Adolescence ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"GN M100 SGW","semester":"Fall 2016","classid":5816}
        ,
        {"faculty":"PSYC","classNum":"241","title":"Stress, Health, and Coping ","section":"01","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"HC 155 LOY","semester":"Fall 2016","classid":5817}
        ,
        {"faculty":"PSYC","classNum":"243","title":"Learning Disabilities ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"GN M100 SGW","semester":"Fall 2016","classid":5819}
        ,
        {"faculty":"PSYC","classNum":"305","title":"History and Systems ","section":"02","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 111 LOY","semester":"Fall 2016","classid":5820}
        ,
        {"faculty":"PSYC","classNum":"305","title":"History and Systems ","section":"01","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 308 LOY","semester":"Fall 2016","classid":5821}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0431","type":"CON","day":"Th","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5823}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"01","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"CC 310 LOY","semester":"Fall 2016","classid":5824}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0111","type":"CON","day":"Th","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 425 LOY","semester":"Fall 2016","classid":5825}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0113","type":"CON","day":"Th","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5827}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0114","type":"CON","day":"Th","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":5828}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0221","type":"CON","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 425 LOY","semester":"Fall 2016","classid":5830}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0222","type":"CON","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"TBA","semester":"Fall 2016","classid":5831}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0223","type":"CON","day":"Tu","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5832}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0224","type":"CON","day":"Tu","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"TBA","semester":"Fall 2016","classid":5833}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0430","type":"CON","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"TBA","semester":"Fall 2016","classid":5834}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0429","type":"CON","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5835}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"04","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"CC 310 LOY","semester":"Fall 2016","classid":5836}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0328","type":"CON","day":"We","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"TBA","semester":"Fall 2016","classid":5837}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0432","type":"CON","day":"Th","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"TBA","semester":"Fall 2016","classid":5841}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0325","type":"CON","day":"Mo","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5842}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"03","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"SI H01 LOY","semester":"Fall 2016","classid":5843}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0327","type":"CON","day":"We","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5844}
        ,
        {"faculty":"PSYC","classNum":"310","title":"Research Methods and Designs I ","section":"0326","type":"CON","day":"Mo","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"TBA","semester":"Fall 2016","classid":5845}
        ,
        {"faculty":"PSYC","classNum":"311","title":"Research Methods and Designs II ","section":"01","type":"LEC","day":"Mo","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"CC 115 LOY","semester":"Fall 2016","classid":5848}
        ,
        {"faculty":"PSYC","classNum":"311","title":"Research Methods and Designs II ","section":"0101","type":"LAB","day":"Tu","timeBegin":"9:15AM","timeEnd":"11:15AM","room":"CC 215 LOY","semester":"Fall 2016","classid":5849}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0309","type":"LAB","day":"We","timeBegin":"1:15PM","timeEnd":"2:45PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5850}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"04","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"CC 115 LOY","semester":"Fall 2016","classid":5851}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0410","type":"LAB","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:45PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5852}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0411","type":"LAB","day":"Th","timeBegin":"10:15AM","timeEnd":"11:45AM","room":"CC 215 LOY","semester":"Fall 2016","classid":5853}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0412","type":"LAB","day":"Th","timeBegin":"3:00PM","timeEnd":"4:30PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5854}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"51","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:45PM","room":"CC 111 LOY","semester":"Fall 2016","classid":5855}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"5152","type":"LAB","day":"Mo","timeBegin":"8:35PM","timeEnd":"10:05PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5856}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"5153","type":"LAB","day":"Th","timeBegin":"6:15PM","timeEnd":"7:45PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5857}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"5154","type":"LAB","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:00PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5858}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0204","type":"LAB","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:45AM","room":"CC 215 LOY","semester":"Fall 2016","classid":5859}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0205","type":"LAB","day":"We","timeBegin":"11:00AM","timeEnd":"12:30PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5860}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0206","type":"LAB","day":"Fr","timeBegin":"9:00AM","timeEnd":"10:30AM","room":"CC 215 LOY","semester":"Fall 2016","classid":5861}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"03","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 115 LOY","semester":"Fall 2016","classid":5862}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0307","type":"LAB","day":"Th","timeBegin":"1:15PM","timeEnd":"2:45PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5863}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0308","type":"LAB","day":"Tu","timeBegin":"1:15PM","timeEnd":"2:45PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5864}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 115 LOY","semester":"Fall 2016","classid":5865}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0101","type":"LAB","day":"We","timeBegin":"8:45AM","timeEnd":"10:15AM","room":"CC 215 LOY","semester":"Fall 2016","classid":5866}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0102","type":"LAB","day":"Fr","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5867}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"0103","type":"LAB","day":"Fr","timeBegin":"10:45AM","timeEnd":"12:15PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5868}
        ,
        {"faculty":"PSYC","classNum":"315","title":"Statistical Analysis I ","section":"02","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"CC 111 LOY","semester":"Fall 2016","classid":5869}
        ,
        {"faculty":"PSYC","classNum":"316","title":"Statistical Analysis II ","section":"0103","type":"LAB","day":"We","timeBegin":"3:00PM","timeEnd":"4:30PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5871}
        ,
        {"faculty":"PSYC","classNum":"316","title":"Statistical Analysis II ","section":"5155","type":"LAB","day":"We","timeBegin":"8:35PM","timeEnd":"10:05PM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5872}
        ,
        {"faculty":"PSYC","classNum":"316","title":"Statistical Analysis II ","section":"5154","type":"LAB","day":"Tu","timeBegin":"3:00PM","timeEnd":"4:30PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5873}
        ,
        {"faculty":"PSYC","classNum":"316","title":"Statistical Analysis II ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 116 LOY","semester":"Fall 2016","classid":5874}
        ,
        {"faculty":"PSYC","classNum":"316","title":"Statistical Analysis II ","section":"0101","type":"LAB","day":"Mo","timeBegin":"1:45PM","timeEnd":"3:15PM","room":"CC 215 LOY","semester":"Fall 2016","classid":5875}
        ,
        {"faculty":"PSYC","classNum":"316","title":"Statistical Analysis II ","section":"01","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 310 LOY","semester":"Fall 2016","classid":5876}
        ,
        {"faculty":"PSYC","classNum":"321","title":"Fundamentals of Personality ","section":"02","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 116 LOY","semester":"Fall 2016","classid":5879}
        ,
        {"faculty":"PSYC","classNum":"321","title":"Fundamentals of Personality ","section":"01","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"CC 308 LOY","semester":"Fall 2016","classid":5880}
        ,
        {"faculty":"PSYC","classNum":"325","title":"Fundamentals of Social Psychology ","section":"01","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 115 LOY","semester":"Fall 2016","classid":5881}
        ,
        {"faculty":"PSYC","classNum":"325","title":"Fundamentals of Social Psychology ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 115 LOY","semester":"Fall 2016","classid":5882}
        ,
        {"faculty":"PSYC","classNum":"333","title":"Fundamentals of Lifespan Development ","section":"51","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 111 LOY","semester":"Fall 2016","classid":5883}
        ,
        {"faculty":"PSYC","classNum":"333","title":"Fundamentals of Lifespan Development ","section":"02","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 115 LOY","semester":"Fall 2016","classid":5884}
        ,
        {"faculty":"PSYC","classNum":"333","title":"Fundamentals of Lifespan Development ","section":"01","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 116 LOY","semester":"Fall 2016","classid":5885}
        ,
        {"faculty":"PSYC","classNum":"340","title":"Fundamentals of Psychopathology ","section":"01","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 116 LOY","semester":"Fall 2016","classid":5886}
        ,
        {"faculty":"PSYC","classNum":"340","title":"Fundamentals of Psychopathology ","section":"02","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 116 LOY","semester":"Fall 2016","classid":5887}
        ,
        {"faculty":"PSYC","classNum":"340","title":"Fundamentals of Psychopathology ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 111 LOY","semester":"Fall 2016","classid":5888}
        ,
        {"faculty":"PSYC","classNum":"351","title":"Fundamentals of Learning ","section":"02","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"CC 111 LOY","semester":"Fall 2016","classid":5889}
        ,
        {"faculty":"PSYC","classNum":"351","title":"Fundamentals of Learning ","section":"01","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 115 LOY","semester":"Fall 2016","classid":5890}
        ,
        {"faculty":"PSYC","classNum":"355","title":"Fundamentals of Behavioural Neurobiology ","section":"01","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 111 LOY","semester":"Fall 2016","classid":5891}
        ,
        {"faculty":"PSYC","classNum":"355","title":"Fundamentals of Behavioural Neurobiology ","section":"02","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 111 LOY","semester":"Fall 2016","classid":5892}
        ,
        {"faculty":"PSYC","classNum":"363","title":"Fundamentals of Sensation and Perception ","section":"02","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 111 LOY","semester":"Fall 2016","classid":5894}
        ,
        {"faculty":"PSYC","classNum":"363","title":"Fundamentals of Sensation and Perception ","section":"51","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 111 LOY","semester":"Fall 2016","classid":5895}
        ,
        {"faculty":"PSYC","classNum":"364","title":"Fundamentals of Cognition ","section":"02","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 111 LOY","semester":"Fall 2016","classid":5896}
        ,
        {"faculty":"PSYC","classNum":"364","title":"Fundamentals of Cognition ","section":"01","type":"LEC","day":"Fr","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"CC 111 LOY","semester":"Fall 2016","classid":5897}
        ,
        {"faculty":"PSYC","classNum":"387","title":"Directed Research in Psychology ","section":"01","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5898}
        ,
        {"faculty":"PSYC","classNum":"420","title":"The Self in Social Context ","section":"01","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"SP 157 LOY","semester":"Fall 2016","classid":5899}
        ,
        {"faculty":"PSYC","classNum":"423","title":"Emotion ","section":"01","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"SP 157 LOY","semester":"Fall 2016","classid":5900}
        ,
        {"faculty":"PSYC","classNum":"426","title":"Psychometrics and Individual Differences ","section":"01","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 321 LOY","semester":"Fall 2016","classid":5901}
        ,
        {"faculty":"PSYC","classNum":"432","title":"Childhood Development ","section":"01","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"SP 157 LOY","semester":"Fall 2016","classid":5902}
        ,
        {"faculty":"PSYC","classNum":"433","title":"Adolescent Development ","section":"01","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"SP 157 LOY","semester":"Fall 2016","classid":5903}
        ,
        {"faculty":"PSYC","classNum":"435","title":"Developmental Psychopathology ","section":"01","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 106 LOY","semester":"Fall 2016","classid":5904}
        ,
        {"faculty":"PSYC","classNum":"442","title":"Psychopathology: Behaviour Regulation Disorders ","section":"51","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"SP 157 LOY","semester":"Fall 2016","classid":5905}
        ,
        {"faculty":"PSYC","classNum":"444","title":"Hypnosis and Dissociation ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"SP 157 LOY","semester":"Fall 2016","classid":5906}
        ,
        {"faculty":"PSYC","classNum":"445","title":"Human Neuropsychology ","section":"01","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"SP 157 LOY","semester":"Fall 2016","classid":5907}
        ,
        {"faculty":"PSYC","classNum":"450","title":"Neurobiology of Drug Abuse and Addiction ","section":"01","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"SP 157 LOY","semester":"Fall 2016","classid":5908}
        ,
        {"faculty":"PSYC","classNum":"466","title":"Cognitive Development ","section":"01","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 106 LOY","semester":"Fall 2016","classid":5910}
        ,
        {"faculty":"PSYC","classNum":"487","title":"Advanced Directed Research in Psychology ","section":"01","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5911}
        ,
        {"faculty":"PSYC","classNum":"490","title":"Honours Seminar Topics ","section":"0101","type":"TUT","day":"Th","timeBegin":"4:00PM","timeEnd":"6:00PM","room":"TBA","semester":"Fall 2016","classid":5912}
        ,
        {"faculty":"PSYC","classNum":"490","title":"Honours Seminar Topics ","section":"0202","type":"TUT","day":"Th","timeBegin":"4:00PM","timeEnd":"6:00PM","room":"TBA","semester":"Fall 2016","classid":5913}
        ,
        {"faculty":"PSYC","classNum":"490","title":"Honours Seminar Topics ","section":"02","type":"SEM","day":"Tu","timeBegin":"4:15PM","timeEnd":"6:45PM","room":"SP 254-01 LOY","semester":"Fall 2016","classid":5914}
        ,
        {"faculty":"PSYC","classNum":"490","title":"Honours Seminar Topics ","section":"01","type":"SEM","day":"Tu","timeBegin":"4:15PM","timeEnd":"6:45PM","room":"PY 244 LOY","semester":"Fall 2016","classid":5915}
        ,
        {"faculty":"PTNG","classNum":"471","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5927}
        ,
        {"faculty":"PTNG","classNum":"472","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5928}
        ,
        {"faculty":"RELI","classNum":"220","title":"Introduction to Judaism ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 407 SGW","semester":"Fall 2016","classid":5931}
        ,
        {"faculty":"RELI","classNum":"223","title":"Introduction to Christianity ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG B060 SGW","semester":"Fall 2016","classid":5932}
        ,
        {"faculty":"RELI","classNum":"224","title":"Introduction to Islam ","section":"A","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":5933}
        ,
        {"faculty":"RELI","classNum":"225","title":"Introduction to Hinduism ","section":"AA","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG B060 SGW","semester":"Fall 2016","classid":5934}
        ,
        {"faculty":"RELI","classNum":"394","title":"History of Satan: Evil Personified in Judaism and Christianity ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"FG C070 SGW","semester":"Fall 2016","classid":5939}
        ,
        {"faculty":"RELI","classNum":"410","title":"Honours Thesis ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5941}
        ,
        {"faculty":"SCOL","classNum":"290","title":"Directed and Independent Study I ","section":"01","type":"RSC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5949}
        ,
        {"faculty":"SCOL","classNum":"390","title":"Directed and Independent Study II ","section":"01","type":"RSC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5951}
        ,
        {"faculty":"SCOL","classNum":"490","title":"Directed and Independent Study III ","section":"01","type":"RSC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 1.129 LOY","semester":"Fall 2016","classid":5952}
        ,
        {"faculty":"SCOM","classNum":"361","title":"Management Science Models for Operations Management ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.210 SGW","semester":"Fall 2016","classid":5953}
        ,
        {"faculty":"SCOM","classNum":"363","title":"Product Design and Business Process Re-Engineering ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 3.430 SGW","semester":"Fall 2016","classid":5954}
        ,
        {"faculty":"SCOM","classNum":"372","title":"Supply Chain Planning and Control ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":5955}
        ,
        {"faculty":"SCOM","classNum":"374","title":"Supply Chain Logistics ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":5956}
        ,
        {"faculty":"SCOM","classNum":"492","title":"Supply Chain Simulation ","section":"A","type":"LEC","day":"Fr","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":5957}
        ,
        {"faculty":"SCOM","classNum":"498","title":"Supply Chain Project ","section":"AA","type":"LEC","day":"Fr","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.285 SGW","semester":"Fall 2016","classid":5958}
        ,
        {"faculty":"SCPA","classNum":"201","title":"Introduction to Public Policy and the Public Interest ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"CI 104 SGW","semester":"Fall 2016","classid":5959}
        ,
        {"faculty":"SCPA","classNum":"204","title":"INTRO TO CANADIAN POLITICS ","section":"B","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 415 SGW","semester":"Fall 2016","classid":5961}
        ,
        {"faculty":"SCPA","classNum":"204","title":"INTRO TO CANADIAN POLITICS ","section":"C","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 415 SGW","semester":"Fall 2016","classid":5962}
        ,
        {"faculty":"SCPA","classNum":"204","title":"INTRO TO CANADIAN POLITICS ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":5963}
        ,
        {"faculty":"SCPA","classNum":"204","title":"INTRO TO CANADIAN POLITICS ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":5964}
        ,
        {"faculty":"SCPA","classNum":"215","title":"Economics for Public Policy and Community Development ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"CI 01 SGW","semester":"Fall 2016","classid":5965}
        ,
        {"faculty":"SCPA","classNum":"411","title":"Internship ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5966}
        ,
        {"faculty":"SCPA","classNum":"450","title":"Neo-Liberal Globalization and the Global Justice Movement ","section":"A","type":"SEM","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CI 104 SGW","semester":"Fall 2016","classid":5967}
        ,
        {"faculty":"SCUL","classNum":"396","title":"Digital Sculpture ","section":"AA","type":"STU","day":"We","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 5.635 SGW","semester":"Fall 2016","classid":5968}
        ,
        {"faculty":"SCUL","classNum":"451","title":"Independent Study I ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5969}
        ,
        {"faculty":"SCUL","classNum":"452","title":"Independent Study II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":5970}
        ,
        {"faculty":"SOCI","classNum":"212","title":"Statistics I ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 507 SGW","semester":"Fall 2016","classid":6040}
        ,
        {"faculty":"SOCI","classNum":"212","title":"Statistics I ","section":"B","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 420 SGW","semester":"Fall 2016","classid":6041}
        ,
        {"faculty":"SOCI","classNum":"212","title":"Statistics I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 557 SGW","semester":"Fall 2016","classid":6042}
        ,
        {"faculty":"SOCI","classNum":"213","title":"Statistics II ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 565 SGW","semester":"Fall 2016","classid":6043}
        ,
        {"faculty":"SOCI","classNum":"213","title":"Statistics II ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 539 SGW","semester":"Fall 2016","classid":6045}
        ,
        {"faculty":"SOCI","classNum":"225","title":"Sociology Through Film ","section":"A","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"FG B050 SGW","semester":"Fall 2016","classid":6047}
        ,
        {"faculty":"SOCI","classNum":"261","title":"Social Problems ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 561 SGW","semester":"Fall 2016","classid":6048}
        ,
        {"faculty":"SOCI","classNum":"262","title":"Social Deviance ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"FG B050 SGW","semester":"Fall 2016","classid":6049}
        ,
        {"faculty":"SOCI","classNum":"276","title":"GENDER AND SOCIETY ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B050 SGW","semester":"Fall 2016","classid":6052}
        ,
        {"faculty":"SOCI","classNum":"310","title":"Research Methods ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 631 SGW","semester":"Fall 2016","classid":6054}
        ,
        {"faculty":"SOCI","classNum":"310","title":"Research Methods ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":6055}
        ,
        {"faculty":"SOCI","classNum":"323","title":"ECONOMIC TRANSFORMATION IN CAPITALIST SOCIETY ","section":"A","type":"LEC","day":"Fr","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 420 SGW","semester":"Fall 2016","classid":6057}
        ,
        {"faculty":"SOCI","classNum":"333","title":"Political Sociology ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 433 SGW","semester":"Fall 2016","classid":6058}
        ,
        {"faculty":"SOCI","classNum":"341","title":"Sociology of the Media ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 431 SGW","semester":"Fall 2016","classid":6059}
        ,
        {"faculty":"SOCI","classNum":"366","title":"The History and Sociology of Genocide to 1945 ","section":"A","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 429 SGW","semester":"Fall 2016","classid":6060}
        ,
        {"faculty":"SOCI","classNum":"375","title":"Social Construction of Sexualities ","section":"A","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":6061}
        ,
        {"faculty":"SOCI","classNum":"402","title":"CONTEMPORARY SOCIOLOGICAL THEORY ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":6063}
        ,
        {"faculty":"SOCI","classNum":"403","title":"Contemporary Cultural Theory ","section":"A","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":6065}
        ,
        {"faculty":"SOCI","classNum":"404","title":"Sociology of Literature ","section":"A","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 562 SGW","semester":"Fall 2016","classid":6067}
        ,
        {"faculty":"SOCI","classNum":"441","title":"MATERIAL CULTURE ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":6068}
        ,
        {"faculty":"SOEN","classNum":"287","title":"Web Programming ","section":"Q","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 820 SGW","semester":"Fall 2016","classid":6074}
        ,
        {"faculty":"SOEN","classNum":"287","title":"Web Programming ","section":"Q QB","type":"TUT","day":"Th","timeBegin":"6:15PM","timeEnd":"7:55PM","room":"TBA","semester":"Fall 2016","classid":6075}
        ,
        {"faculty":"SOEN","classNum":"287","title":"Web Programming ","section":"Q QA","type":"TUT","day":"Tu","timeBegin":"11:45AM","timeEnd":"1:25PM","room":"TBA","semester":"Fall 2016","classid":6076}
        ,
        {"faculty":"SOEN","classNum":"321","title":"Information Systems Security ","section":"GGGA","type":"TUT","day":"Mo","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"H 631 SGW","semester":"Fall 2016","classid":6077}
        ,
        {"faculty":"SOEN","classNum":"321","title":"Information Systems Security ","section":"GG","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 553 SGW","semester":"Fall 2016","classid":6078}
        ,
        {"faculty":"SOEN","classNum":"321","title":"Information Systems Security ","section":"GGGB","type":"TUT","day":"Mo","timeBegin":"8:30PM","timeEnd":"9:20PM","room":"H 401 SGW","semester":"Fall 2016","classid":6079}
        ,
        {"faculty":"SOEN","classNum":"341","title":"Software Process ","section":"H HA","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":6080}
        ,
        {"faculty":"SOEN","classNum":"341","title":"Software Process ","section":"H","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 5.265 SGW","semester":"Fall 2016","classid":6081}
        ,
        {"faculty":"SOEN","classNum":"341","title":"Software Process ","section":"H HB","type":"TUT","day":"Fr","timeBegin":"12:45PM","timeEnd":"1:35PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":6082}
        ,
        {"faculty":"SOEN","classNum":"342","title":"Software Requirements and Specifications ","section":"H HB","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 523 SGW","semester":"Fall 2016","classid":6083}
        ,
        {"faculty":"SOEN","classNum":"342","title":"Software Requirements and Specifications ","section":"H HA","type":"TUT","day":"Fr","timeBegin":"3:45PM","timeEnd":"4:35PM","room":"H 429 SGW","semester":"Fall 2016","classid":6084}
        ,
        {"faculty":"SOEN","classNum":"342","title":"Software Requirements and Specifications ","section":"H","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 1070 SGW","semester":"Fall 2016","classid":6085}
        ,
        {"faculty":"SOEN","classNum":"343","title":"Software Architecture and Design I ","section":"H HB","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 429 SGW","semester":"Fall 2016","classid":6086}
        ,
        {"faculty":"SOEN","classNum":"343","title":"Software Architecture and Design I ","section":"H HA","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 619 SGW","semester":"Fall 2016","classid":6088}
        ,
        {"faculty":"SOEN","classNum":"384","title":"Management, Measurement and Quality Control ","section":"F FA","type":"TUT","day":"Fr","timeBegin":"9:15AM","timeEnd":"10:05AM","room":"H 564 SGW","semester":"Fall 2016","classid":6089}
        ,
        {"faculty":"SOEN","classNum":"384","title":"Management, Measurement and Quality Control ","section":"F","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1070 SGW","semester":"Fall 2016","classid":6090}
        ,
        {"faculty":"SOEN","classNum":"387","title":"Web-Based Enterprise Application Design ","section":"F","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 557 SGW","semester":"Fall 2016","classid":6091}
        ,
        {"faculty":"SOEN","classNum":"387","title":"Web-Based Enterprise Application Design ","section":"F FB","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 615 SGW","semester":"Fall 2016","classid":6092}
        ,
        {"faculty":"SOEN","classNum":"387","title":"Web-Based Enterprise Application Design ","section":"F FA","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 513 SGW","semester":"Fall 2016","classid":6093}
        ,
        {"faculty":"SOEN","classNum":"422","title":"Embedded Systems and Software ","section":"MMME","type":"TUT","day":"We","timeBegin":"8:20PM","timeEnd":"9:05PM","room":"TBA","semester":"Fall 2016","classid":6094}
        ,
        {"faculty":"SOEN","classNum":"422","title":"Embedded Systems and Software ","section":"MI","type":"X","day":"We","timeBegin":"9:10PM","timeEnd":"11:00PM","room":"TBA","semester":"Fall 2016","classid":6095}
        ,
        {"faculty":"SOEN","classNum":"422","title":"Embedded Systems and Software ","section":"MJ","type":"X","day":"Th","timeBegin":"2:45PM","timeEnd":"4:35PM","room":"TBA","semester":"Fall 2016","classid":6096}
        ,
        {"faculty":"SOEN","classNum":"422","title":"Embedded Systems and Software ","section":"MM","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 427 SGW","semester":"Fall 2016","classid":6097}
        ,
        {"faculty":"SOEN","classNum":"423","title":"Distributed Systems ","section":"H HA","type":"TUT","day":"Tu","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"TBA","semester":"Fall 2016","classid":6098}
        ,
        {"faculty":"SOEN","classNum":"423","title":"Distributed Systems ","section":"H","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 629 SGW","semester":"Fall 2016","classid":6099}
        ,
        {"faculty":"SOEN","classNum":"423","title":"Distributed Systems ","section":"HI","type":"X","day":"Tu","timeBegin":"3:45PM","timeEnd":"5:30PM","room":"TBA","semester":"Fall 2016","classid":6100}
        ,
        {"faculty":"SPAN","classNum":"200","title":"Introductory Spanish: Intensive Course ","section":"D","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 609 SGW","semester":"Fall 2016","classid":6110}
        ,
        {"faculty":"SPAN","classNum":"200","title":"Introductory Spanish: Intensive Course ","section":"A","type":"LEC","day":"MoTuWeTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 429 SGW","semester":"Fall 2016","classid":6111}
        ,
        {"faculty":"SPAN","classNum":"200","title":"Introductory Spanish: Intensive Course ","section":"B","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 629 SGW","semester":"Fall 2016","classid":6112}
        ,
        {"faculty":"SPAN","classNum":"200","title":"Introductory Spanish: Intensive Course ","section":"C","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 529 SGW","semester":"Fall 2016","classid":6113}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"F","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 621 SGW","semester":"Fall 2016","classid":6114}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"E","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 540 SGW","semester":"Fall 2016","classid":6115}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"D","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 627 SGW","semester":"Fall 2016","classid":6116}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"G","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 627 SGW","semester":"Fall 2016","classid":6117}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"H","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 607 SGW","semester":"Fall 2016","classid":6118}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"AA","type":"LEC","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 615 SGW","semester":"Fall 2016","classid":6119}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 627 SGW","semester":"Fall 2016","classid":6120}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"C","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 400-2 SGW","semester":"Fall 2016","classid":6121}
        ,
        {"faculty":"SPAN","classNum":"202","title":"Introductory Spanish II ","section":"A","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 564 SGW","semester":"Fall 2016","classid":6123}
        ,
        {"faculty":"SPAN","classNum":"202","title":"Introductory Spanish II ","section":"B","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 609 SGW","semester":"Fall 2016","classid":6124}
        ,
        {"faculty":"SPAN","classNum":"202","title":"Introductory Spanish II ","section":"C","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 544 SGW","semester":"Fall 2016","classid":6125}
        ,
        {"faculty":"SPAN","classNum":"240","title":"Intermediate Spanish: Intensive Course ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 513 SGW","semester":"Fall 2016","classid":6126}
        ,
        {"faculty":"SPAN","classNum":"240","title":"Intermediate Spanish: Intensive Course ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 609 SGW","semester":"Fall 2016","classid":6127}
        ,
        {"faculty":"SPAN","classNum":"241","title":"Intermediate Spanish I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 513 SGW","semester":"Fall 2016","classid":6128}
        ,
        {"faculty":"SPAN","classNum":"241","title":"Intermediate Spanish I ","section":"B","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":6129}
        ,
        {"faculty":"SPAN","classNum":"301","title":"Grammar and the Process of Writing I ","section":"B","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 615 SGW","semester":"Fall 2016","classid":6130}
        ,
        {"faculty":"SPAN","classNum":"301","title":"Grammar and the Process of Writing I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 625 SGW","semester":"Fall 2016","classid":6131}
        ,
        {"faculty":"SPAN","classNum":"303","title":"Critical Reading of Hispanic Texts ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 401 SGW","semester":"Fall 2016","classid":6133}
        ,
        {"faculty":"SPAN","classNum":"305","title":"Communicative Strategies and Oral Communication for Non-Native Speakers ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 607 SGW","semester":"Fall 2016","classid":6134}
        ,
        {"faculty":"SPAN","classNum":"306","title":"Introduction to Translation ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 627 SGW","semester":"Fall 2016","classid":6135}
        ,
        {"faculty":"SPAN","classNum":"310","title":"Conquest and Empire: Spanish Literature from the 12th to the 17th Centuries ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 615 SGW","semester":"Fall 2016","classid":6136}
        ,
        {"faculty":"SPAN","classNum":"320","title":"Defining Difference in Spanish America: Literature from 1500 to 1880 ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 625 SGW","semester":"Fall 2016","classid":6137}
        ,
        {"faculty":"SPAN","classNum":"365","title":"The History of Spanish Culture ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 625 SGW","semester":"Fall 2016","classid":6138}
        ,
        {"faculty":"STAT","classNum":"249","title":"Probability I ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"FG B050 SGW","semester":"Fall 2016","classid":6152}
        ,
        {"faculty":"STAT","classNum":"250","title":"Statistics ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 937 SGW","semester":"Fall 2016","classid":6154}
        ,
        {"faculty":"STAT","classNum":"349","title":"Probability II ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 539 SGW","semester":"Fall 2016","classid":6155}
        ,
        {"faculty":"STAT","classNum":"360","title":"Linear Models ","section":"B","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":6156}
        ,
        {"faculty":"STAT","classNum":"360","title":"Linear Models ","section":"D","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":6157}
        ,
        {"faculty":"STAT","classNum":"499","title":"Honours Project in Statistics ","section":"A","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6160}
        ,
        {"faculty":"TESL","classNum":"231","title":"Modern English Grammar ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 501 SGW","semester":"Fall 2016","classid":6172}
        ,
        {"faculty":"TESL","classNum":"231","title":"Modern English Grammar ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 427 SGW","semester":"Fall 2016","classid":6173}
        ,
        {"faculty":"TESL","classNum":"232","title":"English Grammar ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 459 SGW","semester":"Fall 2016","classid":6174}
        ,
        {"faculty":"TESL","classNum":"324","title":"Methodology I ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 501 SGW","semester":"Fall 2016","classid":6175}
        ,
        {"faculty":"TESL","classNum":"326","title":"TESL Pedagogy: General ","section":"X","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":6176}
        ,
        {"faculty":"TESL","classNum":"326","title":"TESL Pedagogy: General ","section":"X A","type":"PRA","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 611 SGW","semester":"Fall 2016","classid":6178}
        ,
        {"faculty":"TESL","classNum":"330","title":"Computers in Language Learning ","section":"Y B","type":"LAB","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 625 SGW","semester":"Fall 2016","classid":6180}
        ,
        {"faculty":"TESL","classNum":"330","title":"Computers in Language Learning ","section":"Y","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 427 SGW","semester":"Fall 2016","classid":6181}
        ,
        {"faculty":"TESL","classNum":"330","title":"Computers in Language Learning ","section":"X A","type":"LAB","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 544 SGW","semester":"Fall 2016","classid":6182}
        ,
        {"faculty":"TESL","classNum":"341","title":"Language Acquisition ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 540 SGW","semester":"Fall 2016","classid":6183}
        ,
        {"faculty":"TESL","classNum":"426","title":"PEDAGOGY: PRIMARY ","section":"Y B","type":"LAB","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":6184}
        ,
        {"faculty":"TESL","classNum":"426","title":"PEDAGOGY: PRIMARY ","section":"Y","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 619 SGW","semester":"Fall 2016","classid":6185}
        ,
        {"faculty":"TESL","classNum":"426","title":"PEDAGOGY: PRIMARY ","section":"X","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 611 SGW","semester":"Fall 2016","classid":6186}
        ,
        {"faculty":"TESL","classNum":"426","title":"PEDAGOGY: PRIMARY ","section":"X A","type":"LAB","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":6187}
        ,
        {"faculty":"TESL","classNum":"427","title":"Pedagogy: Secondary ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 564 SGW","semester":"Fall 2016","classid":6188}
        ,
        {"faculty":"TESL","classNum":"466","title":"Internship: Primary I ","section":"B","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6189}
        ,
        {"faculty":"TESL","classNum":"466","title":"Internship: Primary I ","section":"A","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6190}
        ,
        {"faculty":"TESL","classNum":"466","title":"Internship: Primary I ","section":"C","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6191}
        ,
        {"faculty":"TESL","classNum":"467","title":"Internship: Secondary I ","section":"B","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6192}
        ,
        {"faculty":"TESL","classNum":"467","title":"Internship: Secondary I ","section":"A","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6193}
        ,
        {"faculty":"TESL","classNum":"471","title":"Teaching Language Arts: Secondary ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 621 SGW","semester":"Fall 2016","classid":6194}
        ,
        {"faculty":"THEO","classNum":"201","title":"Introduction to Theological Studies ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 435 SGW","semester":"Fall 2016","classid":6201}
        ,
        {"faculty":"THEO","classNum":"202","title":"Introduction to Biblical Studies ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":6202}
        ,
        {"faculty":"THEO","classNum":"206","title":"Introduction to Christian Origins ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":6204}
        ,
        {"faculty":"THEO","classNum":"226","title":"Theology and Myth ","section":"A","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 435 SGW","semester":"Fall 2016","classid":6205}
        ,
        {"faculty":"THEO","classNum":"238","title":"Theology in Film ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 507 SGW","semester":"Fall 2016","classid":6206}
        ,
        {"faculty":"THEO","classNum":"320","title":"HISTORY OF CHRISTIANITY: THE MEDIEVAL PERIOD ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 564 SGW","semester":"Fall 2016","classid":6207}
        ,
        {"faculty":"THEO","classNum":"410","title":"Honours Tutorial ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6209}
        ,
        {"faculty":"THEO","classNum":"460","title":"Honours Essay ","section":"AA","type":"TUT","day":"TBA","room":"D 205 SGW","semester":"Fall 2016","classid":6210}
        ,
        {"faculty":"URBS","classNum":"240","title":"Planning ","section":"B","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG C080 SGW","semester":"Fall 2016","classid":6223}
        ,
        {"faculty":"URBS","classNum":"335","title":"Geographic Information Systems ","section":"X A","type":"LAB","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1254 SGW","semester":"Fall 2016","classid":6231}
        ,
        {"faculty":"URBS","classNum":"338","title":"Urban Ecology ","section":"A","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 415 SGW","semester":"Fall 2016","classid":6233}
        ,
        {"faculty":"URBS","classNum":"460","title":"Reading the Urban Form ","section":"A","type":"SEM","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 1271 SGW","semester":"Fall 2016","classid":6234}
        ,
        {"faculty":"URBS","classNum":"480","title":"Impact Assessment ","section":"BB","type":"SEM","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 1271 SGW","semester":"Fall 2016","classid":6235}
        ,
        {"faculty":"WSDB","classNum":"290","title":"Introduction to Historical Perspectives in Women's Studies ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 459 SGW","semester":"Fall 2016","classid":6238}
        ,
        {"faculty":"WSDB","classNum":"290","title":"Introduction to Historical Perspectives in Women's Studies ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"FG B055 SGW","semester":"Fall 2016","classid":6239}
        ,
        {"faculty":"WSDB","classNum":"380","title":"Feminist Thought I ","section":"A","type":"SEM","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MU 101 SGW","semester":"Fall 2016","classid":6241}
        ,
        {"faculty":"FMPR","classNum":"447","title":"Professional Internship II ","section":"AA","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6245}
        ,
        {"faculty":"SPAN","classNum":"490","title":"HONOURS PROJECT ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6246}
        ,
        {"faculty":"WSDB","classNum":"491","title":"Feminist Perspectives on Culture ","section":"A","type":"SEM","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MU 101 SGW","semester":"Fall 2016","classid":6248}
        ,
        {"faculty":"ARTE","classNum":"498","title":"TOPICS IN MEDIA/TECHNOLOGY ","section":"A","type":"LEC","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 2.645 SGW","semester":"Fall 2016","classid":6249}
        ,
        {"faculty":"CART","classNum":"498","title":"SPECIAL TOPICS IN CART ","section":"AA","type":"STU","day":"Th","timeBegin":"6:30PM","timeEnd":"8:30PM\nTh","room":"EV 5.615 SGW\nEV 5.635 SGW","semester":"Fall 2016","classid":6255}
        ,
        {"faculty":"DART","classNum":"498","title":"SPECIAL TOPICS IN DESIGN ","section":"BB","type":"STU","day":"Th","timeBegin":"6:30PM","timeEnd":"8:30PM\nTh","room":"EV 5.615 SGW\nEV 5.635 SGW","semester":"Fall 2016","classid":6258}
        ,
        {"faculty":"DANC","classNum":"398","title":"SPECIAL TOPICS IN DANCE ","section":"A","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6263}
        ,
        {"faculty":"DANC","classNum":"398","title":"SPECIAL TOPICS IN DANCE ","section":"C","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6265}
        ,
        {"faculty":"DANC","classNum":"398","title":"SPECIAL TOPICS IN DANCE ","section":"E","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6267}
        ,
        {"faculty":"DANC","classNum":"398","title":"SPECIAL TOPICS IN DANCE ","section":"F","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6268}
        ,
        {"faculty":"DANC","classNum":"398","title":"SPECIAL TOPICS IN DANCE ","section":"G","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6269}
        ,
        {"faculty":"DANC","classNum":"398","title":"SPECIAL TOPICS IN DANCE ","section":"H","type":"STU","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6270}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6271}
        ,
        {"faculty":"FFAR","classNum":"298","title":"SPECIAL TOPICS IN FINE ARTS ","section":"C","type":"LEC","day":"Fr","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":6272}
        ,
        {"faculty":"FFAR","classNum":"298","title":"SPECIAL TOPICS IN FINE ARTS ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"VA 114 SGW","semester":"Fall 2016","classid":6273}
        ,
        {"faculty":"CERA","classNum":"398","title":"SPECIAL TOPICS IN CERAMICS ","section":"A","type":"STU","day":"Tu","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"VA 08 SGW","semester":"Fall 2016","classid":6282}
        ,
        {"faculty":"PHOT","classNum":"398","title":"SPECIAL TOPICS IN PHOTO ","section":"A","type":"STU","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 3.635 SGW","semester":"Fall 2016","classid":6284}
        ,
        {"faculty":"SCUL","classNum":"398","title":"SPECIAL TOPICS IN SCULPTURE ","section":"A","type":"STU","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"VA 125 SGW","semester":"Fall 2016","classid":6285}
        ,
        {"faculty":"ENGL","classNum":"210","title":"Introduction to Essay Writing ","section":"C","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 627 SGW","semester":"Fall 2016","classid":6306}
        ,
        {"faculty":"MCHI","classNum":"200","title":"Introduction to Modern Chinese I ","section":"AA","type":"LEC","day":"TuTh","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 427 SGW","semester":"Fall 2016","classid":6311}
        ,
        {"faculty":"MARA","classNum":"200","title":"Introduction to Modern Standard Arabic I ","section":"AA","type":"LEC","day":"TuTh","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 609 SGW","semester":"Fall 2016","classid":6312}
        ,
        {"faculty":"ENGL","classNum":"429","title":"ADV.STUDIES CREATIVE WRITING ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 633-1 SGW","semester":"Fall 2016","classid":6319}
        ,
        {"faculty":"LOYC","classNum":"298","title":"SEL TOPICS IN LOYC ","section":"01","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CC 425 LOY","semester":"Fall 2016","classid":6320}
        ,
        {"faculty":"INDU","classNum":"311","title":"Simulation of Industrial Systems ","section":"T TB","type":"TUT","day":"We","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"H 603-1 SGW","semester":"Fall 2016","classid":6321}
        ,
        {"faculty":"INDU","classNum":"311","title":"Simulation of Industrial Systems ","section":"TL","type":"X","day":"We","timeBegin":"9:45AM","timeEnd":"11:35AM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":6322}
        ,
        {"faculty":"ECON","classNum":"398","title":"SELECTED TOPICS IN ECONOMICS ","section":"A","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 544 SGW","semester":"Fall 2016","classid":6323}
        ,
        {"faculty":"ECON","classNum":"498","title":"ADVANCED TOPICS IN ECONOMICS ","section":"B","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":6324}
        ,
        {"faculty":"ENGL","classNum":"415","title":"Literary Production:  Curating & Archiving the Literary Event ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 634 SGW","semester":"Fall 2016","classid":6333}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"M","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 415 SGW","semester":"Fall 2016","classid":6334}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"MA","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":6335}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"MB","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"3:05PM","room":"TBA","semester":"Fall 2016","classid":6336}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"MI","type":"X","day":"Th","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":6337}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"MJ","type":"X","day":"Th","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":6338}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"ML","type":"X","day":"We","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":6340}
        ,
        {"faculty":"MECH","classNum":"313","title":"Machine Drawing and Design ","section":"X XB","type":"TUT","day":"Mo","timeBegin":"3:55PM","timeEnd":"5:35PM","room":"TBA","semester":"Fall 2016","classid":6341}
        ,
        {"faculty":"RELI","classNum":"209","title":"The Religious Imagination ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 520 SGW","semester":"Fall 2016","classid":6348}
        ,
        {"faculty":"ENGR","classNum":"251","title":"Thermodynamics I ","section":"X","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 937 SGW","semester":"Fall 2016","classid":6352}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"01TL","type":"TL\n","day":"Mo","timeBegin":"1:30PM","timeEnd":"4:00PM\nMo","room":"CC 312 LOY\nSP 232 LOY","semester":"Fall 2016","classid":6356}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"02TL","type":"TL\n","day":"Tu","timeBegin":"1:30PM","timeEnd":"4:00PM\nTu","room":"CC 312 LOY\nSP 232 LOY","semester":"Fall 2016","classid":6357}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"05TL","type":"TL\n","day":"Fr","timeBegin":"9:00AM","timeEnd":"11:30AM\nFr","room":"CC 312 LOY\nSP 232 LOY","semester":"Fall 2016","classid":6360}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"06TL","type":"TL\n","day":"Mo","timeBegin":"9:00AM","timeEnd":"11:30AM\nMo","room":"CC 312 LOY\nSP 232 LOY","semester":"Fall 2016","classid":6361}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"51TL","type":"TL\n","day":"Mo","timeBegin":"6:30PM","timeEnd":"9:00PM\nMo","room":"CC 312 LOY\nSP 232 LOY","semester":"Fall 2016","classid":6362}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"52TL","type":"TL\n","day":"Th","timeBegin":"6:30PM","timeEnd":"9:00PM\nTh","room":"CC 312 LOY\nSP 232 LOY","semester":"Fall 2016","classid":6363}
        ,
        {"faculty":"CHEM","classNum":"205","title":"General Chemistry I ","section":"56TL","type":"TL\n","day":"TBA","timeBegin":"\nTBA","room":"TBA\nTBA","semester":"Fall 2016","classid":6364}
        ,
        {"faculty":"CHEM","classNum":"206","title":"General Chemistry II ","section":"01TL","type":"TL\n","day":"Fr","timeBegin":"1:30PM","timeEnd":"4:00PM\nFr","room":"CC 312 LOY\nSP 232 LOY","semester":"Fall 2016","classid":6365}
        ,
        {"faculty":"CHEM","classNum":"206","title":"General Chemistry II ","section":"56TL","type":"TL\n","day":"TBA","timeBegin":"\nTBA","room":"TBA\nTBA","semester":"Fall 2016","classid":6367}
        ,
        {"faculty":"ENGR","classNum":"251","title":"Thermodynamics I ","section":"XA","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:25PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":6369}
        ,
        {"faculty":"LING","classNum":"330","title":"Sanskrit ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 607 SGW","semester":"Fall 2016","classid":6371}
        ,
        {"faculty":"LING","classNum":"415","title":"ADVANCED SYNTAX ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":6373}
        ,
        {"faculty":"LING","classNum":"475","title":"History of Linguistics ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 625 SGW","semester":"Fall 2016","classid":6374}
        ,
        {"faculty":"PHIL","classNum":"220","title":"Introduction to the Philosophy of Science ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"GN M100 SGW","semester":"Fall 2016","classid":6387}
        ,
        {"faculty":"ENGL","classNum":"255","title":"VIDEO GAMES AND/AS LITERATURE ","section":"A","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 415 SGW","semester":"Fall 2016","classid":6396}
        ,
        {"faculty":"CIVI","classNum":"231","title":"Geology for Civil Engineers ","section":"LLLD","type":"TUT","day":"We","timeBegin":"5:45PM","timeEnd":"6:45PM","room":"H 629 SGW","semester":"Fall 2016","classid":6399}
        ,
        {"faculty":"CIVI","classNum":"432","title":"Soil Mechanics ","section":"LW","type":"X","day":"Tu","timeBegin":"11:05AM","timeEnd":"12:55PM\nTu","room":"H 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW\nH 0015 SGW","semester":"Fall 2016","classid":6400}
        ,
        {"faculty":"WSDB","classNum":"390","title":"FEMINIST PERSPECTIVES ON PEACE ","section":"A","type":"SEM","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":6413}
        ,
        {"faculty":"SOCI","classNum":"321","title":"Sociology of Health, Illness and Medicine ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":6421}
        ,
        {"faculty":"SCPA","classNum":"321","title":"Public Affairs Strategies ","section":"AA","type":"SEM","day":"Th","timeBegin":"3:00PM","timeEnd":"5:45PM","room":"CI 104 SGW","semester":"Fall 2016","classid":6435}
        ,
        {"faculty":"FTRA","classNum":"301","title":"Traduction littéraire du français à l'anglais ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":6438}
        ,
        {"faculty":"SOCI","classNum":"384","title":"Food and Sustainability ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"FG B030 SGW","semester":"Fall 2016","classid":6440}
        ,
        {"faculty":"ANTH","classNum":"384","title":"Food and Sustainability ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"FG B030 SGW","semester":"Fall 2016","classid":6441}
        ,
        {"faculty":"ENGL","classNum":"298","title":"SELECTED TOPICS IN ENGLISH ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 1011 SGW","semester":"Fall 2016","classid":6444}
        ,
        {"faculty":"ENGL","classNum":"359","title":"STUDIES IN IRISH LITERATURE ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 1011 SGW","semester":"Fall 2016","classid":6446}
        ,
        {"faculty":"ANTH","classNum":"301","title":"History of Anthropological Thought ","section":"A","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"FG B030 SGW","semester":"Fall 2016","classid":6447}
        ,
        {"faculty":"AHSC","classNum":"313","title":"Family Communication ","section":"02","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"VE 326 LOY","semester":"Fall 2016","classid":6449}
        ,
        {"faculty":"CHEM","classNum":"271","title":"Biochemistry I ","section":"01TL","type":"TL\n","day":"Th","timeBegin":"1:30PM","timeEnd":"4:00PM\nTh","room":"CC 320 LOY\nSP 310 LOY","semester":"Fall 2016","classid":6452}
        ,
        {"faculty":"CHEM","classNum":"271","title":"Biochemistry I ","section":"56TL","type":"TL\n","day":"TBA","timeBegin":"\nTBA","room":"TBA\nTBA","semester":"Fall 2016","classid":6453}
        ,
        {"faculty":"CHEM","classNum":"271","title":"Biochemistry I ","section":"02TL","type":"TL\n","day":"Fr","timeBegin":"1:30PM","timeEnd":"4:00PM\nFr","room":"CC 320 LOY\nSP 310 LOY","semester":"Fall 2016","classid":6454}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"U UC","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"TBA","semester":"Fall 2016","classid":6455}
        ,
        {"faculty":"COMM","classNum":"299","title":"SEMINAR COURSE ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":6462}
        ,
        {"faculty":"COMM","classNum":"499","title":"SEMINAR COURSE ","section":"BB","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"10:00PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":6464}
        ,
        {"faculty":"COMM","classNum":"499","title":"SEMINAR COURSE ","section":"CC","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 6.425 SGW","semester":"Fall 2016","classid":6465}
        ,
        {"faculty":"FINA","classNum":"455","title":"SEMINAR IN FINANCE ","section":"A","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6466}
        ,
        {"faculty":"FINA","classNum":"455","title":"SEMINAR IN FINANCE ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.430 SGW","semester":"Fall 2016","classid":6467}
        ,
        {"faculty":"FINA","classNum":"455","title":"SEMINAR IN FINANCE ","section":"BB","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.430 SGW","semester":"Fall 2016","classid":6468}
        ,
        {"faculty":"PHIL","classNum":"241","title":"Philosophy of Human Rights ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"GN M100 SGW","semester":"Fall 2016","classid":6472}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6480}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6482}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6483}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6484}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6485}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6486}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6487}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6488}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6489}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6490}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6491}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6492}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"B6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6493}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"C6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6495}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"D6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6496}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"B7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6498}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6499}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"B8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6500}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"C8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6501}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6502}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"B9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6503}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6504}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6505}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6506}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6507}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6508}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6509}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6510}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6511}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6512}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6513}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6514}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6515}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6517}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6518}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6519}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"B6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6520}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"C6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6521}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"D6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6522}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6523}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"B7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6524}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6525}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"B8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6526}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6527}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6528}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6529}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6530}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6531}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6532}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6533}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6535}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6536}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6537}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6538}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6539}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6541}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"B6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6542}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"C6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6543}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"D6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6544}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6545}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"B7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6546}
        ,
        {"faculty":"IRST","classNum":"209","title":"Highlights of Irish Literature ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 1011 SGW","semester":"Fall 2016","classid":6547}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6548}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"B8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6549}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"C8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6550}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6551}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"B9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6552}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6553}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6554}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6555}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6556}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6557}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6558}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6559}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6560}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6561}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6562}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6563}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6564}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6565}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6566}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6568}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"B6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6569}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"C6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6570}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"D6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6572}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6573}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"B7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6574}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6575}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"B8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6577}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"C8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6578}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6579}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"B9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6580}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6581}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6582}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6583}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6584}
        ,
        {"faculty":"IRST","classNum":"398","title":"SPEC TOP/CDN IRISH STUDIES ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 1011 SGW","semester":"Fall 2016","classid":6585}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6588}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6589}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6590}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6591}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6592}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6593}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6594}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6595}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6597}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6598}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"C6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6601}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"D6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6602}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6603}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"B7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6604}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6605}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"B8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6606}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"C8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6607}
        ,
        {"faculty":"IRST","classNum":"398","title":"SPEC TOP/CDN IRISH STUDIES ","section":"B","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 1011 SGW","semester":"Fall 2016","classid":6608}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6609}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"B9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6610}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6611}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6612}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6613}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6614}
        ,
        {"faculty":"SOCI","classNum":"363","title":"LAW AND SOCIETY ","section":"A","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"FG B030 SGW","semester":"Fall 2016","classid":6621}
        ,
        {"faculty":"ANTH","classNum":"363","title":"LAW AND SOCIETY ","section":"A","type":"LEC","day":"Fr","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"FG B030 SGW","semester":"Fall 2016","classid":6622}
        ,
        {"faculty":"COMS","classNum":"493","title":"COMM. MEDIA: ADV. TOPICS ","section":"01","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 4.320 LOY","semester":"Fall 2016","classid":6623}
        ,
        {"faculty":"COMS","classNum":"493","title":"COMM. MEDIA: ADV. TOPICS ","section":"02","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 4.246 LOY","semester":"Fall 2016","classid":6624}
        ,
        {"faculty":"COMS","classNum":"493","title":"COMM. MEDIA: ADV. TOPICS ","section":"03","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 4.240 LOY","semester":"Fall 2016","classid":6625}
        ,
        {"faculty":"ENGL","classNum":"356","title":"The Irish Short Story Tradition ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 1011 SGW","semester":"Fall 2016","classid":6626}
        ,
        {"faculty":"COMS","classNum":"493","title":"COMM. MEDIA: ADV. TOPICS ","section":"0101","type":"LAB","day":"Fr","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"TBA","semester":"Fall 2016","classid":6627}
        ,
        {"faculty":"COMS","classNum":"493","title":"COMM. MEDIA: ADV. TOPICS ","section":"0202","type":"LAB","day":"Fr","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"TBA","semester":"Fall 2016","classid":6628}
        ,
        {"faculty":"COMS","classNum":"493","title":"COMM. MEDIA: ADV. TOPICS ","section":"0303","type":"LAB","day":"Fr","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"TBA","semester":"Fall 2016","classid":6629}
        ,
        {"faculty":"SOCI","classNum":"498","title":"ADVANCED TOPICS IN SOCIOLOGY & ANTHROPOLOGY ","section":"B","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":6634}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6636}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6637}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6638}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"D","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 561 SGW","semester":"Fall 2016","classid":6641}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"DDA","type":"TUT","day":"Th","timeBegin":"8:30AM","timeEnd":"10:10AM","room":"H 400 SGW","semester":"Fall 2016","classid":6642}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"DDB","type":"TUT","day":"Th","timeBegin":"8:30AM","timeEnd":"10:10AM","room":"H 513 SGW","semester":"Fall 2016","classid":6643}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"DI","type":"X","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM\nMo","room":"H 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW","semester":"Fall 2016","classid":6644}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"DJ","type":"X","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM\nMo","room":"H 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW","semester":"Fall 2016","classid":6645}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"DK","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM\nTu","room":"H 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW","semester":"Fall 2016","classid":6646}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"DL","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM\nTu","room":"H 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW","semester":"Fall 2016","classid":6647}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"F","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 509 SGW","semester":"Fall 2016","classid":6648}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"B9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6649}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6650}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"F FA","type":"TUT","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:25AM","room":"H 400 SGW","semester":"Fall 2016","classid":6652}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"FI","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM\nTh","room":"H 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW","semester":"Fall 2016","classid":6654}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"FJ","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM\nTh","room":"H 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW","semester":"Fall 2016","classid":6656}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6658}
        ,
        {"faculty":"COEN","classNum":"243","title":"Programming Methodology I ","section":"D","type":"LEC","day":"WeFr","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 431 SGW","semester":"Fall 2016","classid":6659}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6660}
        ,
        {"faculty":"COEN","classNum":"243","title":"Programming Methodology I ","section":"D DA","type":"TUT","day":"We","timeBegin":"11:45AM","timeEnd":"1:35PM","room":"TBA","semester":"Fall 2016","classid":6661}
        ,
        {"faculty":"COEN","classNum":"243","title":"Programming Methodology I ","section":"D DB","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:35PM","room":"TBA","semester":"Fall 2016","classid":6662}
        ,
        {"faculty":"HIST","classNum":"261","title":"History of South Asia ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B040 SGW","semester":"Fall 2016","classid":6664}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6665}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6666}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"D2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6668}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6669}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6670}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6671}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6672}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"C4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6673}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"D4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6674}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"E4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6675}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6676}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6677}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6678}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6679}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"F5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6681}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"G5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6682}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6684}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6685}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6686}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6688}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6689}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"C10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6690}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"D10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6691}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"E10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6692}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"F10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6693}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"G10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6694}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"H10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6695}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"I10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6696}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"J10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6697}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"K10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6698}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6699}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6700}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"C11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6701}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6702}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6703}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"C12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6704}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A13","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6705}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6706}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6707}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"C14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6708}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"D14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6709}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"E14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6710}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"F14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6711}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"G14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6712}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"H14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6713}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"I14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6714}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6715}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6716}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"C15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6717}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"D15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6718}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"E15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6719}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"F15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6720}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"G15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6721}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6722}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6723}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6724}
        ,
        {"faculty":"COEN","classNum":"316","title":"Computer Architecture and Design ","section":"D","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":6725}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6726}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6727}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"D2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6728}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6729}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6730}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6731}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6732}
        ,
        {"faculty":"COEN","classNum":"316","title":"Computer Architecture and Design ","section":"D DA","type":"TUT","day":"Th","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":6733}
        ,
        {"faculty":"COEN","classNum":"316","title":"Computer Architecture and Design ","section":"DI","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":6734}
        ,
        {"faculty":"COEN","classNum":"316","title":"Computer Architecture and Design ","section":"DJ","type":"X","day":"Fr","timeBegin":"2:45PM","timeEnd":"5:30PM\nFr","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":6735}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6737}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6738}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6739}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6740}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6741}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6742}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6743}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6744}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6745}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6746}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6747}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6748}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6749}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"B6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6750}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"C6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6751}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"D6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6752}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6753}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"B7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6754}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6755}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"B8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6756}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"C8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6757}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6758}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"B9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6759}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6760}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6761}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6762}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6763}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6764}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6765}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6766}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6767}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"C4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6768}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"D4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6769}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6770}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6771}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6772}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6773}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"E5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6774}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"F5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6775}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"G5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6776}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"H5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6777}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6778}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6779}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6780}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6782}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6783}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"C10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6784}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"D10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6785}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"E10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6786}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"F10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6787}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"G10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6788}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"H10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6789}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"I10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6790}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"J10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6791}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"K10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6792}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6793}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6794}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"C11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6795}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6796}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6797}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"C12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6798}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A13","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6799}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6800}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6801}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A1","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6802}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"C14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6803}
        ,
        {"faculty":"FPST","classNum":"203","title":"First Peoples of Canada ","section":"A","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"CI 104 SGW","semester":"Fall 2016","classid":6804}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"D14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6805}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"E14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6806}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"F14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6807}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"G14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6808}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"H14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6809}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"I14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6810}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6811}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6812}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"C15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6813}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"D15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6814}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"E15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6815}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"F15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6816}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"G15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6817}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6818}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6819}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"A17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6820}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6821}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6822}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6823}
        ,
        {"faculty":"HIST","classNum":"344","title":"Rise and Fall of Yugoslavia ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 523 SGW","semester":"Fall 2016","classid":6825}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"D2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6826}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6827}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6828}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6829}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6830}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"C4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6831}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"D4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6832}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"E4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6833}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6834}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6835}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6836}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6837}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"E5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6838}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"F5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6839}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"G5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6840}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"H5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6841}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6842}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6843}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6844}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6845}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6846}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6847}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"C10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6848}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"D10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6849}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"E10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6850}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"F10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6851}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"G10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6852}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"H10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6853}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"I10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6854}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"J10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6855}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"K10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6856}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6857}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6858}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"C11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6859}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6860}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6861}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"C12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6862}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A13","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6863}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6864}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6865}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"C14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6866}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"D14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6867}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"E14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6868}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"F14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6869}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"G14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6870}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"H14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6871}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"I14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6872}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6873}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6874}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"C15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6875}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"D15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6876}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"E15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6877}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"F15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6878}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"G15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6879}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6880}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6881}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"A17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6882}
        ,
        {"faculty":"MPER","classNum":"351","title":"PRIVATE STUDY III ","section":"B17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6883}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6884}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6885}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6886}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"D2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6887}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6888}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6889}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6890}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6891}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"C4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6892}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"D4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6893}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"E4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6894}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6895}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6896}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6897}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6898}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"E5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6899}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"F5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6900}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"G5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6901}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"H5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6902}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6903}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6904}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6905}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6906}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6907}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6908}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"C10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6909}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"D10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6910}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"E10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6911}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"F10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6912}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"G10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6913}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"H10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6914}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"I10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6915}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"J10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6916}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"K10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6917}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6918}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6919}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"C11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6920}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6921}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6922}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"C12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6923}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A13","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6924}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6925}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6926}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"C14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6927}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"D14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6928}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"E14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6929}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"F14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6930}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"G14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6931}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"H14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6932}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"I14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6933}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6934}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6935}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"C15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6936}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"D15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6937}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"E15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6938}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"F15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6939}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"G15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6940}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6941}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6942}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"A17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6943}
        ,
        {"faculty":"MPER","classNum":"352","title":"PRIVATE STUDY IV ","section":"B17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6944}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6945}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6946}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6947}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"D2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6948}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6949}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6950}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6951}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6952}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"C4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6953}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"D4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6954}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"E4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6955}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6956}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6957}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6958}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6959}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"E5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6960}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"F5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6961}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"G5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6962}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"H5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6963}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6964}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6965}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6967}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6968}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6969}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"C10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6970}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"D10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6971}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"E10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6972}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"F10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6973}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"G10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6974}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"H10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6975}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"I10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6976}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"J10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6977}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"K10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6978}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6980}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"C11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6981}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6982}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6983}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"C12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6984}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A13","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6985}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6986}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6987}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"C14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6988}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"D14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6989}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"E14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6990}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"F14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6991}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"G14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6992}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"H14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6993}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"I14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6994}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6995}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6996}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"C15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6997}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"D15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6998}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"E15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":6999}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"F15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7000}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"G15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7001}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7002}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7003}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"A17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7004}
        ,
        {"faculty":"MPER","classNum":"451","title":"PRIVATE STUDY V ","section":"B17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7005}
        ,
        {"faculty":"CLAS","classNum":"201","title":"Introductory Ancient Greek I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 427 SGW","semester":"Fall 2016","classid":7006}
        ,
        {"faculty":"CLAS","classNum":"203","title":"Introductory Latin I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 603 SGW","semester":"Fall 2016","classid":7007}
        ,
        {"faculty":"CLAS","classNum":"260","title":"Introduction to Greek Archaeology ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 620 SGW","semester":"Fall 2016","classid":7009}
        ,
        {"faculty":"CLAS","classNum":"363","title":"Archaeology of Archaic Greece ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 633 SGW","semester":"Fall 2016","classid":7010}
        ,
        {"faculty":"CLAS","classNum":"490","title":"Honours Thesis ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7011}
        ,
        {"faculty":"ELEC","classNum":"251","title":"Fundamentals of Applied Electromagnetics ","section":"D","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B040 SGW","semester":"Fall 2016","classid":7012}
        ,
        {"faculty":"ELEC","classNum":"251","title":"Fundamentals of Applied Electromagnetics ","section":"D DA","type":"TUT","day":"Fr","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"H 564 SGW","semester":"Fall 2016","classid":7013}
        ,
        {"faculty":"ELEC","classNum":"251","title":"Fundamentals of Applied Electromagnetics ","section":"D DB","type":"TUT","day":"Tu","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 564 SGW","semester":"Fall 2016","classid":7014}
        ,
        {"faculty":"FPST","classNum":"341","title":"GLOBALIZATION-INDIGE PEOPLES ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 619 SGW","semester":"Fall 2016","classid":7016}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"D","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 920 SGW","semester":"Fall 2016","classid":7017}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"D DA","type":"TUT","day":"Th","timeBegin":"2:30PM","timeEnd":"4:10PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":7018}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"D DB","type":"TUT","day":"Mo","timeBegin":"2:30PM","timeEnd":"4:10PM","room":"H 564 SGW","semester":"Fall 2016","classid":7019}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"DI","type":"X","day":"We","timeBegin":"5:45PM","timeEnd":"8:30PM\nWe","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":7020}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"DJ","type":"X","day":"We","timeBegin":"5:45PM","timeEnd":"8:30PM\nWe","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":7021}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"DK","type":"X","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM\nTu","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":7022}
        ,
        {"faculty":"ELEC","classNum":"273","title":"Basic Circuit Analysis ","section":"DL","type":"X","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM\nTu","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":7023}
        ,
        {"faculty":"FPST","classNum":"402","title":"First Peoples Contemporary Social Issues ","section":"A","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 537 SGW","semester":"Fall 2016","classid":7025}
        ,
        {"faculty":"POLI","classNum":"404","title":"International Institutions ","section":"A","type":"SEM","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 632 SGW","semester":"Fall 2016","classid":7035}
        ,
        {"faculty":"ENGL","classNum":"336","title":"Late Victorian and Edwardian Writing ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 633 SGW","semester":"Fall 2016","classid":7042}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7046}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7047}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"C2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7048}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"D2","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7049}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7050}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7051}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7052}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7053}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"C4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7054}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"D4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7055}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"E4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7056}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7057}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7058}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"C5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7059}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"D5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7060}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"E5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7061}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"F5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7062}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"G5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7063}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"H5","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7064}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7065}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A7","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7066}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A8","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7067}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A9","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7068}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7069}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7070}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"C10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7071}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"D10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7072}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"E10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7073}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"F10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7074}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"G10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7075}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"H10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7076}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"I10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7077}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"J10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7078}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"K10","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7079}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7080}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7081}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"C11","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7082}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7083}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7084}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"C12","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7085}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7086}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7087}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7088}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"C15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7089}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"D15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7090}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"E15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7091}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"F15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7092}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"G15","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7093}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7094}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7095}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7097}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7098}
        ,
        {"faculty":"MATH","classNum":"366","title":"Complex Analysis I ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 619 SGW","semester":"Fall 2016","classid":7100}
        ,
        {"faculty":"MATH","classNum":"369","title":"Abstract Algebra I ","section":"A","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"MB 3.255 SGW","semester":"Fall 2016","classid":7101}
        ,
        {"faculty":"MATH","classNum":"464","title":"Real Analysis ","section":"B","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":7108}
        ,
        {"faculty":"HIST","classNum":"285","title":"INTRO TO LAW & SOCIETY ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 420 SGW","semester":"Fall 2016","classid":7111}
        ,
        {"faculty":"STAT","classNum":"349","title":"Probability II ","section":"C","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 565 SGW","semester":"Fall 2016","classid":7122}
        ,
        {"faculty":"CHEM","classNum":"451","title":"Nanochemistry ","section":"01","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 405 LOY","semester":"Fall 2016","classid":7139}
        ,
        {"faculty":"FPST","classNum":"211","title":"ALGONQUIAN PEOPLES ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 603 SGW","semester":"Fall 2016","classid":7141}
        ,
        {"faculty":"AHSC","classNum":"322","title":"Fundamentals of Child- and Youth-Care Work ","section":"01","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":7142}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"BB","type":"LEC","day":"Tu","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":7144}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"CC","type":"LEC","day":"We","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":7145}
        ,
        {"faculty":"SPAN","classNum":"201","title":"Introductory Spanish I ","section":"DD","type":"LEC","day":"Th","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":7146}
        ,
        {"faculty":"ENGL","classNum":"344","title":"CREATIVE WRITING:PLAYWRITING ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":7152}
        ,
        {"faculty":"TESL","classNum":"466","title":"Internship: Primary I ","section":"D","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7157}
        ,
        {"faculty":"POLI","classNum":"324","title":"PARLIAMENT AND THE CHARTER ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":7160}
        ,
        {"faculty":"POLI","classNum":"313","title":"SPECIAL TOPICS IN COMP POLI: ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 605 SGW","semester":"Fall 2016","classid":7163}
        ,
        {"faculty":"THEO","classNum":"233","title":"Religious Pluralism in a Secular Culture ","section":"A","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 415 SGW","semester":"Fall 2016","classid":7167}
        ,
        {"faculty":"POLI","classNum":"487","title":"ADVANCED SEMINAR IN COMPARATIVE POLITICS ","section":"A","type":"SEM","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 634 SGW","semester":"Fall 2016","classid":7171}
        ,
        {"faculty":"POLI","classNum":"487","title":"ADVANCED SEMINAR IN COMPARATIVE POLITICS ","section":"B","type":"SEM","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 632 SGW","semester":"Fall 2016","classid":7172}
        ,
        {"faculty":"PHIL","classNum":"498","title":"ADVANCED TOPICS IN PHIL ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 623 SGW","semester":"Fall 2016","classid":7181}
        ,
        {"faculty":"MAST","classNum":"334","title":"Numerical Analysis ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 520 SGW","semester":"Fall 2016","classid":7186}
        ,
        {"faculty":"MACF","classNum":"402","title":"Mathematical and Computational Finance II ","section":"D","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":7187}
        ,
        {"faculty":"HIST","classNum":"359","title":"(also listed as SOCI 366) The History and Sociology of Genocide to 1945 ","section":"A","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 429 SGW","semester":"Fall 2016","classid":7195}
        ,
        {"faculty":"PSYC","classNum":"363","title":"Fundamentals of Sensation and Perception ","section":"01","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 115 LOY","semester":"Fall 2016","classid":7200}
        ,
        {"faculty":"PHIL","classNum":"385","title":"Marxism ","section":"A","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 544 SGW","semester":"Fall 2016","classid":7204}
        ,
        {"faculty":"LOYC","classNum":"298","title":"SEL TOPICS IN LOYC ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 507 SGW","semester":"Fall 2016","classid":7211}
        ,
        {"faculty":"PSYC","classNum":"457","title":"Foundations of Animal Behaviour ","section":"01","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"CC 320 LOY","semester":"Fall 2016","classid":7213}
        ,
        {"faculty":"BIOL","classNum":"498","title":"ADVANCED TOPICS IN BIOLOGY ","section":"01","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CC 425 LOY","semester":"Fall 2016","classid":7217}
        ,
        {"faculty":"BIOL","classNum":"451","title":"Field Ecology ","section":"01","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 203 LOY","semester":"Fall 2016","classid":7218}
        ,
        {"faculty":"HIST","classNum":"263","title":"HISTORY OF JAPAN ","section":"A","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 420 SGW","semester":"Fall 2016","classid":7220}
        ,
        {"faculty":"HIST","classNum":"377","title":"History of Russia 1694-1917 ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 523 SGW","semester":"Fall 2016","classid":7222}
        ,
        {"faculty":"HIST","classNum":"334","title":"History of Haiti:  From Independence to Present ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 523 SGW","semester":"Fall 2016","classid":7224}
        ,
        {"faculty":"MATH","classNum":"392","title":"Elementary Number Theory ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":7235}
        ,
        {"faculty":"GEOG","classNum":"204","title":"Global Environmental Issues ","section":"AA","type":"LEC","day":"Fr","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 937 SGW","semester":"Fall 2016","classid":7239}
        ,
        {"faculty":"SOCI","classNum":"331","title":"Social Inequalities ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B050 SGW","semester":"Fall 2016","classid":7241}
        ,
        {"faculty":"GEOG","classNum":"355","title":"Resource Analysis and Management ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"FG B040 SGW","semester":"Fall 2016","classid":7247}
        ,
        {"faculty":"BIOL","classNum":"482","title":"Functional Genomics ","section":"01","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 314 LOY","semester":"Fall 2016","classid":7255}
        ,
        {"faculty":"HIST","classNum":"298","title":"SELECTED TOPICS IN HISTORY ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 920 SGW","semester":"Fall 2016","classid":7260}
        ,
        {"faculty":"GEOG","classNum":"463","title":"Advanced Geographic Information Systems ","section":"X","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"TBA","semester":"Fall 2016","classid":7277}
        ,
        {"faculty":"GEOG","classNum":"463","title":"Advanced Geographic Information Systems ","section":"X A","type":"LAB","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":7278}
        ,
        {"faculty":"HISW","classNum":"251","title":"History of the United States to the Civil War Era ","section":"XX","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 520 SGW","semester":"Fall 2016","classid":7283}
        ,
        {"faculty":"URBS","classNum":"337","title":"Urban Agriculture ","section":"BB","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 820 SGW","semester":"Fall 2016","classid":7290}
        ,
        {"faculty":"HISW","classNum":"276","title":"History of Latin America:  The Colonial Period ","section":"X","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 415 SGW","semester":"Fall 2016","classid":7302}
        ,
        {"faculty":"HISW","classNum":"276","title":"History of Latin America:  The Colonial Period ","section":"X A","type":"CON","day":"Th","timeBegin":"10:15AM","timeEnd":"11:00AM","room":"H 632 SGW","semester":"Fall 2016","classid":7303}
        ,
        {"faculty":"HISW","classNum":"276","title":"History of Latin America:  The Colonial Period ","section":"X B","type":"CON","day":"Th","timeBegin":"10:15AM","timeEnd":"11:00AM","room":"H 634 SGW","semester":"Fall 2016","classid":7304}
        ,
        {"faculty":"HISW","classNum":"276","title":"History of Latin America:  The Colonial Period ","section":"X C","type":"CON","day":"Th","timeBegin":"11:15AM","timeEnd":"12:00PM","room":"H 632 SGW","semester":"Fall 2016","classid":7305}
        ,
        {"faculty":"HISW","classNum":"276","title":"History of Latin America:  The Colonial Period ","section":"X D","type":"CON","day":"Th","timeBegin":"11:15AM","timeEnd":"12:00PM","room":"H 634 SGW","semester":"Fall 2016","classid":7306}
        ,
        {"faculty":"HISW","classNum":"276","title":"History of Latin America:  The Colonial Period ","section":"X E","type":"CON","day":"Th","timeBegin":"12:15PM","timeEnd":"1:00PM","room":"H 632 SGW","semester":"Fall 2016","classid":7307}
        ,
        {"faculty":"HISW","classNum":"276","title":"History of Latin America:  The Colonial Period ","section":"X F","type":"CON","day":"Th","timeBegin":"12:15PM","timeEnd":"1:00PM","room":"H 634 SGW","semester":"Fall 2016","classid":7308}
        ,
        {"faculty":"HISW","classNum":"251","title":"History of the United States to the Civil War Era ","section":"XXAA","type":"CON","day":"Mo","timeBegin":"8:35PM","timeEnd":"9:20PM","room":"H 632 SGW","semester":"Fall 2016","classid":7309}
        ,
        {"faculty":"HISW","classNum":"251","title":"History of the United States to the Civil War Era ","section":"XXBB","type":"CON","day":"Mo","timeBegin":"8:35PM","timeEnd":"9:20PM","room":"H 634 SGW","semester":"Fall 2016","classid":7310}
        ,
        {"faculty":"HISW","classNum":"251","title":"History of the United States to the Civil War Era ","section":"XXCC","type":"CON","day":"Mo","timeBegin":"8:35PM","timeEnd":"9:20PM","room":"H 457 SGW","semester":"Fall 2016","classid":7311}
        ,
        {"faculty":"HISW","classNum":"251","title":"History of the United States to the Civil War Era ","section":"XX A","type":"CON","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":7312}
        ,
        {"faculty":"HISW","classNum":"251","title":"History of the United States to the Civil War Era ","section":"XX B","type":"CON","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"H 632 SGW","semester":"Fall 2016","classid":7313}
        ,
        {"faculty":"HISW","classNum":"251","title":"History of the United States to the Civil War Era ","section":"XX C","type":"CON","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:00PM","room":"H 457 SGW","semester":"Fall 2016","classid":7314}
        ,
        {"faculty":"URBS","classNum":"481","title":"URB PLAN-DEVELOPING WORLD ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"TBA","semester":"Fall 2016","classid":7315}
        ,
        {"faculty":"EAST","classNum":"465","title":"Capstone Recording Project I ","section":"01","type":"STU","day":"Mo","timeBegin":"1:00PM","timeEnd":"4:00PM","room":"PT 203 LOY","semester":"Fall 2016","classid":7316}
        ,
        {"faculty":"ARTH","classNum":"367","title":"Studies in 20th?Century Art and Architecture ","section":"A","type":"LEC","day":"Tu","timeBegin":"12:15PM","timeEnd":"2:45PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":7324}
        ,
        {"faculty":"ARTH","classNum":"373","title":"Issues in Contemporary Canadian Art ","section":"A","type":"LEC","day":"Tu","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":7325}
        ,
        {"faculty":"ARTH","classNum":"398","title":"SPEC.TOPICS IN ART & SOCIETY ","section":"A","type":"LEC","day":"Fr","timeBegin":"12:15PM","timeEnd":"2:45PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":7326}
        ,
        {"faculty":"ARTH","classNum":"400","title":"Advanced Seminar in Art Historical Method ","section":"A","type":"SEM","day":"Tu","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"EV 3.760 SGW","semester":"Fall 2016","classid":7327}
        ,
        {"faculty":"ARTH","classNum":"290","title":"Art History and Archaeology ","section":"A","type":"LEC","day":"Mo","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":7329}
        ,
        {"faculty":"ARTH","classNum":"361","title":"Studies in Ancient Roman Art and Architecture ","section":"A","type":"LEC","day":"Mo","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":7332}
        ,
        {"faculty":"ARTH","classNum":"356","title":"STUDIES/MATERIALS-PROCESSES ","section":"A","type":"LEC","day":"Fr","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":7333}
        ,
        {"faculty":"ARTH","classNum":"450","title":"ADV. SEM. HIST. ART & ARCH. ","section":"A","type":"LEC","day":"Th","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"EV 3.760 SGW","semester":"Fall 2016","classid":7334}
        ,
        {"faculty":"IMCA","classNum":"220","title":"Introduction to Digital Media and Electronic Arts ","section":"A","type":"STU","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV S.635 SGW","semester":"Fall 2016","classid":7337}
        ,
        {"faculty":"IMCA","classNum":"321","title":"Electronic Arts Workshop ","section":"A","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV S.625 SGW","semester":"Fall 2016","classid":7338}
        ,
        {"faculty":"IMCA","classNum":"331","title":"Intermedia and Interventionist Performance Practices ","section":"A","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 6.809 SGW","semester":"Fall 2016","classid":7339}
        ,
        {"faculty":"PHOT","classNum":"332","title":"Digital Photography II ","section":"A","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 5.709 SGW","semester":"Fall 2016","classid":7340}
        ,
        {"faculty":"PRIN","classNum":"241","title":"Processes in Digital Print Media I ","section":"A","type":"STU","day":"Mo","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 5.709 SGW","semester":"Fall 2016","classid":7342}
        ,
        {"faculty":"PRIN","classNum":"241","title":"Processes in Digital Print Media I ","section":"AA","type":"STU","day":"Mo","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 5.709 SGW","semester":"Fall 2016","classid":7343}
        ,
        {"faculty":"PRIN","classNum":"365","title":"The Artist`s Book as Object ","section":"A","type":"STU","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 9.615 SGW","semester":"Fall 2016","classid":7346}
        ,
        {"faculty":"WSDB","classNum":"291","title":"Introduction to Contemporary Concerns in Women's Studies ","section":"A","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 403 SGW","semester":"Fall 2016","classid":7379}
        ,
        {"faculty":"COMP","classNum":"218","title":"Fundamentals of Programming ","section":"ECEA","type":"TUT","day":"Tu","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"FG B030 SGW","semester":"Fall 2016","classid":7381}
        ,
        {"faculty":"COMP","classNum":"218","title":"Fundamentals of Programming ","section":"ECEB","type":"TUT","day":"Th","timeBegin":"10:15AM","timeEnd":"11:55AM","room":"H 557 SGW","semester":"Fall 2016","classid":7382}
        ,
        {"faculty":"POLI","classNum":"298","title":"SELECTED TOPICS IN POLI SCI: ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":7403}
        ,
        {"faculty":"COMM","classNum":"225","title":"Production and Operations Management ","section":"E","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":7405}
        ,
        {"faculty":"BTM","classNum":"480","title":"Project Management ","section":"AA","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 5.255 SGW","semester":"Fall 2016","classid":7406}
        ,
        {"faculty":"COMM","classNum":"222","title":"Organizational Behaviour and Theory ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":7407}
        ,
        {"faculty":"FFAR","classNum":"254","title":"Introduction to Food Studies: We are What We Eat ","section":"A","type":"LEC","day":"We","timeBegin":"12:15PM","timeEnd":"2:45PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":7408}
        ,
        {"faculty":"FFAR","classNum":"298","title":"SPECIAL TOPICS IN FINE ARTS ","section":"B","type":"LEC","day":"Tu","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":7409}
        ,
        {"faculty":"ACCO","classNum":"320","title":"Financial Reporting II ","section":"BB","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":7419}
        ,
        {"faculty":"FINA","classNum":"416","title":"Behavioural Finance ","section":"B","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 5.275 SGW","semester":"Fall 2016","classid":7420}
        ,
        {"faculty":"HIST","classNum":"209","title":"Quebec to 1867 ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 553 SGW","semester":"Fall 2016","classid":7422}
        ,
        {"faculty":"COMM","classNum":"320","title":"Entrepreneurship ","section":"J","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":7424}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"I","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB S2.285 SGW","semester":"Fall 2016","classid":7425}
        ,
        {"faculty":"COMM","classNum":"401","title":"Strategy and Competition ","section":"J","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 633 SGW","semester":"Fall 2016","classid":7426}
        ,
        {"faculty":"MANA","classNum":"443","title":"Compensation and Benefits Management ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.401 SGW","semester":"Fall 2016","classid":7427}
        ,
        {"faculty":"MARK","classNum":"301","title":"Marketing Management II ","section":"AA","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S1.430 SGW","semester":"Fall 2016","classid":7428}
        ,
        {"faculty":"CHEM","classNum":"477","title":"Advanced Laboratory in Biochemistry ","section":"05","type":"LAB","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 310 LOY","semester":"Fall 2016","classid":7429}
        ,
        {"faculty":"CHEM","classNum":"477","title":"Advanced Laboratory in Biochemistry ","section":"06","type":"LAB","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 310 LOY","semester":"Fall 2016","classid":7430}
        ,
        {"faculty":"CHEM","classNum":"477","title":"Advanced Laboratory in Biochemistry ","section":"52","type":"LAB","day":"Th","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"SP 310 LOY","semester":"Fall 2016","classid":7431}
        ,
        {"faculty":"CART","classNum":"214","title":"Visual Form and Communication ","section":"A","type":"STU","day":"We","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 6.720 SGW","semester":"Fall 2016","classid":7435}
        ,
        {"faculty":"EAST","classNum":"462","title":"Capstone Project Seminar II ","section":"A","type":"LEC","day":"Th","timeBegin":"12:30PM","timeEnd":"3:45PM","room":"MB 8.245 SGW","semester":"Fall 2016","classid":7436}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"EE","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B040 SGW","semester":"Fall 2016","classid":7445}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"EEEA","type":"TUT","day":"Tu","timeBegin":"11:45AM","timeEnd":"1:25PM","room":"TBA","semester":"Fall 2016","classid":7446}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"EEEB","type":"TUT","day":"Th","timeBegin":"11:45AM","timeEnd":"1:25PM","room":"TBA","semester":"Fall 2016","classid":7447}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"FFFA","type":"TUT","day":"Mo","timeBegin":"5:45PM","timeEnd":"7:25PM","room":"TBA","semester":"Fall 2016","classid":7448}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"EI","type":"X","day":"Mo","timeBegin":"7:45PM","timeEnd":"8:45PM","room":"TBA","semester":"Fall 2016","classid":7449}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"EJ","type":"X","day":"Tu","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"TBA","semester":"Fall 2016","classid":7450}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"EK","type":"X","day":"Th","timeBegin":"8:30PM","timeEnd":"9:30PM","room":"TBA","semester":"Fall 2016","classid":7451}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"Q","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 920 SGW","semester":"Fall 2016","classid":7452}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"Q QA","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:55AM","room":"TBA","semester":"Fall 2016","classid":7453}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"Q QB","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:55AM","room":"TBA","semester":"Fall 2016","classid":7454}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"Q QC","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:55AM","room":"TBA","semester":"Fall 2016","classid":7455}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"QI","type":"X","day":"We","timeBegin":"12:10PM","timeEnd":"1:10PM","room":"TBA","semester":"Fall 2016","classid":7457}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"QJ","type":"X","day":"We","timeBegin":"12:10PM","timeEnd":"1:10PM","room":"TBA","semester":"Fall 2016","classid":7458}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"QK","type":"X","day":"Mo","timeBegin":"12:10PM","timeEnd":"1:10PM","room":"TBA","semester":"Fall 2016","classid":7459}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"PK","type":"X","day":"Mo","timeBegin":"12:10PM","timeEnd":"1:10PM","room":"TBA","semester":"Fall 2016","classid":7460}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"R","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 1070 SGW","semester":"Fall 2016","classid":7461}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"R RA","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:55AM","room":"TBA","semester":"Fall 2016","classid":7462}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"R RB","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:55AM","room":"TBA","semester":"Fall 2016","classid":7463}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"R RC","type":"TUT","day":"Fr","timeBegin":"8:45AM","timeEnd":"10:25AM","room":"TBA","semester":"Fall 2016","classid":7464}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"RI","type":"X","day":"Fr","timeBegin":"10:40AM","timeEnd":"11:40AM","room":"TBA","semester":"Fall 2016","classid":7465}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"RJ","type":"X","day":"Fr","timeBegin":"10:40AM","timeEnd":"11:40AM","room":"TBA","semester":"Fall 2016","classid":7466}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"RK","type":"X","day":"We","timeBegin":"12:10PM","timeEnd":"1:10PM","room":"TBA","semester":"Fall 2016","classid":7467}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"D","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 420 SGW","semester":"Fall 2016","classid":7469}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"D DA","type":"TUT","day":"Mo","timeBegin":"12:45PM","timeEnd":"2:35PM","room":"TBA","semester":"Fall 2016","classid":7470}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"D DB","type":"TUT","day":"We","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"TBA","semester":"Fall 2016","classid":7471}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"D DC","type":"TUT","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"TBA","semester":"Fall 2016","classid":7472}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"DI","type":"X","day":"Mo","timeBegin":"6:15PM","timeEnd":"7:15PM","room":"TBA","semester":"Fall 2016","classid":7473}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"DJ","type":"X","day":"We","timeBegin":"6:15PM","timeEnd":"7:15PM","room":"TBA","semester":"Fall 2016","classid":7474}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"DK","type":"X","day":"We","timeBegin":"7:30PM","timeEnd":"8:30PM","room":"TBA","semester":"Fall 2016","classid":7475}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"Y","type":"LEC","day":"WeFr","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"FG B040 SGW","semester":"Fall 2016","classid":7480}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"Y YA","type":"TUT","day":"We","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":7481}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"Y YB","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"H 564 SGW","semester":"Fall 2016","classid":7482}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TI","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"12:45PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7483}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TJ","type":"X","day":"Fr","timeBegin":"8:45AM","timeEnd":"12:45PM\nFr","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7484}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TK","type":"X","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7485}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TL","type":"X","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7486}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TM","type":"X","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7487}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TN","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"12:45PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7488}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TO","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"12:45PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7489}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TP","type":"X","day":"We","timeBegin":"8:45AM","timeEnd":"12:45PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7490}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TQ","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"12:45PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7491}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TR","type":"X","day":"Fr","timeBegin":"8:45AM","timeEnd":"12:45PM\nFr","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7492}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"TS","type":"X","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7493}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XI","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"12:45PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7494}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XJ","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"12:45PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7495}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XK","type":"X","day":"We","timeBegin":"8:45AM","timeEnd":"12:45PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7496}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XL","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"12:45PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7497}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XM","type":"X","day":"Fr","timeBegin":"8:45AM","timeEnd":"12:45PM\nFr","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7498}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XN","type":"X","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7499}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XO","type":"X","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7500}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XP","type":"X","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7501}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XQ","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"12:45PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7502}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XR","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"12:45PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7503}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"XS","type":"X","day":"We","timeBegin":"8:45AM","timeEnd":"12:45PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7504}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YI","type":"X","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7505}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YJ","type":"X","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7506}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YK","type":"X","day":"Mo","timeBegin":"8:45AM","timeEnd":"12:45PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7507}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YL","type":"X","day":"Tu","timeBegin":"8:45AM","timeEnd":"9:45AM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7508}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YM","type":"X","day":"We","timeBegin":"8:45AM","timeEnd":"12:45PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7509}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YN","type":"X","day":"Th","timeBegin":"8:45AM","timeEnd":"12:45PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7510}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YO","type":"X","day":"Fr","timeBegin":"8:45AM","timeEnd":"12:45PM\nFr","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7511}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YP","type":"X","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7512}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YQ","type":"X","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7513}
        ,
        {"faculty":"MECH","classNum":"311","title":"Manufacturing Processes ","section":"YR","type":"X","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":7514}
        ,
        {"faculty":"FMST","classNum":"214","title":"English-Canadian Film ","section":"A","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"VA 114 SGW","semester":"Fall 2016","classid":7517}
        ,
        {"faculty":"ARTH","classNum":"448","title":"ADV. SEMINAR IN ART & FILM ","section":"A","type":"SEM","day":"Tu","timeBegin":"12:15PM","timeEnd":"2:45PM","room":"EV 3.760 SGW","semester":"Fall 2016","classid":7524}
        ,
        {"faculty":"SCUL","classNum":"398","title":"SPECIAL TOPICS IN SCULPTURE ","section":"B","type":"STU","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"VA 125 SGW","semester":"Fall 2016","classid":7541}
        ,
        {"faculty":"ENGR","classNum":"361","title":"Fluid Mechanics I ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":7546}
        ,
        {"faculty":"ENGR","classNum":"361","title":"Fluid Mechanics I ","section":"ECEA","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"H 537 SGW","semester":"Fall 2016","classid":7547}
        ,
        {"faculty":"ENGR","classNum":"361","title":"Fluid Mechanics I ","section":"ECEB","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"H 603-1 SGW","semester":"Fall 2016","classid":7548}
        ,
        {"faculty":"ENGR","classNum":"361","title":"Fluid Mechanics I ","section":"ECEC","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 621 SGW","semester":"Fall 2016","classid":7549}
        ,
        {"faculty":"ENGR","classNum":"361","title":"Fluid Mechanics I ","section":"ECED","type":"TUT","day":"We","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 537 SGW","semester":"Fall 2016","classid":7550}
        ,
        {"faculty":"ENGR","classNum":"361","title":"Fluid Mechanics I ","section":"ECEF","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 544 SGW","semester":"Fall 2016","classid":7551}
        ,
        {"faculty":"ENGR","classNum":"361","title":"Fluid Mechanics I ","section":"ECEG","type":"TUT","day":"We","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 564 SGW","semester":"Fall 2016","classid":7552}
        ,
        {"faculty":"TESL","classNum":"415","title":"Testing, Evaluation and Course Design ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 623 SGW","semester":"Fall 2016","classid":7553}
        ,
        {"faculty":"ELEC","classNum":"312","title":"Electronics II ","section":"FI","type":"X","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM\nWe","room":"H 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW","semester":"Fall 2016","classid":7554}
        ,
        {"faculty":"ELEC","classNum":"312","title":"Electronics II ","section":"FJ","type":"X","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM\nWe","room":"H 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW","semester":"Fall 2016","classid":7555}
        ,
        {"faculty":"CLAS","classNum":"264","title":"EGYPTIAN ARCHAEOLOGY ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 423 SGW","semester":"Fall 2016","classid":7558}
        ,
        {"faculty":"FMPR","classNum":"339","title":"Montage I ","section":"A","type":"STU","day":"We","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"FB 403 SGW","semester":"Fall 2016","classid":7559}
        ,
        {"faculty":"FMPR","classNum":"339","title":"Montage I ","section":"B","type":"STU","day":"We","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"FB 403 SGW","semester":"Fall 2016","classid":7560}
        ,
        {"faculty":"FMPR","classNum":"339","title":"Montage I ","section":"AA","type":"STU","day":"We","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"FB 403 SGW","semester":"Fall 2016","classid":7561}
        ,
        {"faculty":"EDUC","classNum":"493","title":"Internship IV: Primary Teaching ","section":"DD","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7564}
        ,
        {"faculty":"EDUC","classNum":"494","title":"Primary Teaching Seminar ","section":"BB","type":"SEM","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 613 SGW","semester":"Fall 2016","classid":7565}
        ,
        {"faculty":"EDUC","classNum":"297","title":"Internship II: Observation and Evaluation in Education ","section":"B","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"GA 1.145 SGW","semester":"Fall 2016","classid":7566}
        ,
        {"faculty":"ENGL","classNum":"233","title":"Critical Reading ","section":"A","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 633 SGW","semester":"Fall 2016","classid":7570}
        ,
        {"faculty":"BLDG","classNum":"212","title":"Building Engineering Drawing and Introduction to Design ","section":"L LD","type":"TUT","day":"Mo","timeBegin":"8:15AM","timeEnd":"10:05AM","room":"TBA","semester":"Fall 2016","classid":7580}
        ,
        {"faculty":"MUSI","classNum":"262","title":"Music Composition II ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:15PM","timeEnd":"3:45PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":7587}
        ,
        {"faculty":"MUSI","classNum":"262","title":"Music Composition II ","section":"A A","type":"TUT","day":"Mo","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":7588}
        ,
        {"faculty":"MUSI","classNum":"362","title":"Music Composition IV ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:15PM","timeEnd":"3:45PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":7589}
        ,
        {"faculty":"MUSI","classNum":"362","title":"Music Composition IV ","section":"A A","type":"TUT","day":"Tu","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":7590}
        ,
        {"faculty":"MUSI","classNum":"462","title":"Music Composition VI ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:15PM","timeEnd":"3:45PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":7591}
        ,
        {"faculty":"MUSI","classNum":"462","title":"Music Composition VI ","section":"A A","type":"TUT","day":"Tu","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":7592}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0109","type":"LAB","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":7594}
        ,
        {"faculty":"MECH","classNum":"371","title":"Analysis and Design of Control Systems ","section":"F FB","type":"TUT","day":"Fr","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"H 513 SGW","semester":"Fall 2016","classid":7598}
        ,
        {"faculty":"PSYC","classNum":"490","title":"Honours Seminar Topics ","section":"03","type":"SEM","day":"Tu","timeBegin":"4:15PM","timeEnd":"6:45PM","room":"PY 123 LOY","semester":"Fall 2016","classid":7604}
        ,
        {"faculty":"PSYC","classNum":"490","title":"Honours Seminar Topics ","section":"0303","type":"TUT","day":"Th","timeBegin":"4:00PM","timeEnd":"6:00PM","room":"TBA","semester":"Fall 2016","classid":7605}
        ,
        {"faculty":"GEOG","classNum":"490","title":"INTERNSHIP IN GEOGRAPHY ","section":"AA","type":"REA","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"TBA","semester":"Fall 2016","classid":7620}
        ,
        {"faculty":"ECON","classNum":"398","title":"SELECTED TOPICS IN ECONOMICS ","section":"B","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 623 SGW","semester":"Fall 2016","classid":7622}
        ,
        {"faculty":"ELEC","classNum":"372","title":"Fundamentals of Control Systems ","section":"R RB","type":"TUT","day":"Mo","timeBegin":"8:45AM","timeEnd":"9:35AM","room":"H 529 SGW","semester":"Fall 2016","classid":7638}
        ,
        {"faculty":"COEN","classNum":"316","title":"Computer Architecture and Design ","section":"D DB","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 634 SGW","semester":"Fall 2016","classid":7639}
        ,
        {"faculty":"BTM","classNum":"430","title":"ENT RES PLNG&INFO TECH INTG ","section":"AA","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":7642}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"P","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 620 SGW","semester":"Fall 2016","classid":7653}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"P PA","type":"TUT","day":"Fr","timeBegin":"8:45AM","timeEnd":"10:25AM","room":"TBA","semester":"Fall 2016","classid":7654}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"P PB","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:55AM","room":"TBA","semester":"Fall 2016","classid":7655}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"PI","type":"X","day":"Fr","timeBegin":"10:40AM","timeEnd":"11:40AM","room":"TBA","semester":"Fall 2016","classid":7656}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"PJ","type":"X","day":"Mo","timeBegin":"12:10PM","timeEnd":"1:10PM","room":"TBA","semester":"Fall 2016","classid":7657}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"E6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7660}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"E6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7661}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"E6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7662}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"E6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7663}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"E6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7664}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"E6","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7665}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"A13","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7667}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"B14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7668}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B16","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7669}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"B17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7670}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"B17","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7671}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"C14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7672}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"D14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7673}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"E14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7674}
        ,
        {"faculty":"MPER","classNum":"252","title":"PRIVATE STUDY II ","section":"E4","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7675}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"F14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7676}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"G14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7677}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"H14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7678}
        ,
        {"faculty":"MPER","classNum":"452","title":"PRIVATE STUDY VI ","section":"I14","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7679}
        ,
        {"faculty":"MPER","classNum":"251","title":"PRIVATE STUDY I ","section":"A18","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7680}
        ,
        {"faculty":"JPER","classNum":"251","title":"JAZZ PRIVATE STUDY I ","section":"C3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7699}
        ,
        {"faculty":"JPER","classNum":"252","title":"JAZZ PRIVATE STUDY II ","section":"C3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7700}
        ,
        {"faculty":"JPER","classNum":"351","title":"JAZZ PRIVATE STUDY III ","section":"C3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7701}
        ,
        {"faculty":"JPER","classNum":"352","title":"JAZZ PRIVATE STUDY IV ","section":"C3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7702}
        ,
        {"faculty":"JPER","classNum":"451","title":"JAZZ PRIVATE STUDY V ","section":"C3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7703}
        ,
        {"faculty":"JPER","classNum":"452","title":"JAZZ PRIVATE STUDY VI ","section":"C3","type":"PST","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7704}
        ,
        {"faculty":"EXCI","classNum":"253","title":"Human Anatomy I: Musculoskeletal Anatomy ","section":"0209","type":"LAB","day":"Fr","timeBegin":"1:15PM","timeEnd":"3:15PM","room":"SP 148-06 LOY","semester":"Fall 2016","classid":7708}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0106","type":"LAB","day":"Tu","timeBegin":"3:45PM","timeEnd":"6:00PM","room":"SP S165-01 LOY","semester":"Fall 2016","classid":7716}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0206","type":"LAB","day":"Tu","timeBegin":"3:45PM","timeEnd":"6:00PM","room":"SP S165-07 LOY","semester":"Fall 2016","classid":7717}
        ,
        {"faculty":"CLAS","classNum":"410","title":"STUDIES IN GREEK LIT: PROSE ","section":"A","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 457 SGW","semester":"Fall 2016","classid":7739}
        ,
        {"faculty":"ESL","classNum":"202","title":"Developing Academic English Language Skills ","section":"H","type":"WKS","day":"WeFr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":7746}
        ,
        {"faculty":"COMP","classNum":"353","title":"Databases ","section":"F FB","type":"TUT","day":"Th","timeBegin":"12:15PM","timeEnd":"1:05PM","room":"H 400-2 SGW","semester":"Fall 2016","classid":7755}
        ,
        {"faculty":"FRAN","classNum":"301","title":"Langue française : niveaux d'approfondissement I et II ","section":"D","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 400 SGW","semester":"Fall 2016","classid":7763}
        ,
        {"faculty":"FRAA","classNum":"410","title":"Grammaire du français en contextes ","section":"B","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 615 SGW","semester":"Fall 2016","classid":7765}
        ,
        {"faculty":"FRAA","classNum":"413","title":"Rédaction I ","section":"B","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 423 SGW","semester":"Fall 2016","classid":7766}
        ,
        {"faculty":"CATA","classNum":"262","title":"Emergency Care in Sport and Exercise ","section":"0107","type":"LAB","day":"Th","timeBegin":"3:45PM","timeEnd":"6:00PM","room":"SP S165-01 LOY","semester":"Fall 2016","classid":7776}
        ,
        {"faculty":"COMP","classNum":"335","title":"Introduction to Theoretical Computer Science ","section":"G GB","type":"TUT","day":"Tu","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 540 SGW","semester":"Fall 2016","classid":7779}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"DDDC","type":"TUT","day":"Tu","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"TBA","semester":"Fall 2016","classid":7780}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"F","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 420 SGW","semester":"Fall 2016","classid":7783}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"F FA","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 544 SGW","semester":"Fall 2016","classid":7784}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"F FB","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":7785}
        ,
        {"faculty":"JAZZ","classNum":"400","title":"JAZZ STUDIES CAPSTONE SEMINAR AND PROJECT ","section":"A","type":"SEM","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7790}
        ,
        {"faculty":"COMP","classNum":"339","title":"COMBINATORICS ","section":"F FB","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:35PM","room":"TBA","semester":"Fall 2016","classid":7799}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"DDDC","type":"TUT","day":"We","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":7802}
        ,
        {"faculty":"URBS","classNum":"498","title":"ADV TOPICS/URBAN STUDIES ","section":"A","type":"LEC","day":"We","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 1271 SGW","semester":"Fall 2016","classid":7821}
        ,
        {"faculty":"PSYC","classNum":"321","title":"Fundamentals of Personality ","section":"03","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 308 LOY","semester":"Fall 2016","classid":7833}
        ,
        {"faculty":"MECH","classNum":"344","title":"Machine Element Design ","section":"X XB","type":"TUT","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":7835}
        ,
        {"faculty":"MATH","classNum":"494","title":"TOPICS/PURE & APPLIED MATH ","section":"C","type":"LEC","day":"MoWe","timeBegin":"3:45PM","timeEnd":"5:15PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":7840}
        ,
        {"faculty":"BTM","classNum":"382","title":"Database Management ","section":"B","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":7884}
        ,
        {"faculty":"ELEC","classNum":"481","title":"Linear Systems ","section":"EEEL","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7903}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"EE","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":7906}
        ,
        {"faculty":"COMM","classNum":"212","title":"Business Communication ","section":"V","type":"LEC","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 1.437 SGW","semester":"Fall 2016","classid":7915}
        ,
        {"faculty":"FLIT","classNum":"494","title":"Tutorat en littérature ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7991}
        ,
        {"faculty":"FLIT","classNum":"494","title":"Tutorat en littérature ","section":"CC","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7992}
        ,
        {"faculty":"FLIT","classNum":"495","title":"Tutorat en littérature ","section":"BB","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7993}
        ,
        {"faculty":"FLIT","classNum":"495","title":"Tutorat en littérature ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7995}
        ,
        {"faculty":"FLIT","classNum":"495","title":"Tutorat en littérature ","section":"B","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7996}
        ,
        {"faculty":"FLIT","classNum":"495","title":"Tutorat en littérature ","section":"C","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7997}
        ,
        {"faculty":"FLIT","classNum":"494","title":"Tutorat en littérature ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7998}
        ,
        {"faculty":"FLIT","classNum":"494","title":"Tutorat en littérature ","section":"B","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":7999}
        ,
        {"faculty":"FLIT","classNum":"494","title":"Tutorat en littérature ","section":"C","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8000}
        ,
        {"faculty":"FRAA","classNum":"491","title":"Tutorat en langue, linguistique ou rédaction ","section":"AA","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8001}
        ,
        {"faculty":"FRAA","classNum":"491","title":"Tutorat en langue, linguistique ou rédaction ","section":"CC","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8002}
        ,
        {"faculty":"FRAA","classNum":"491","title":"Tutorat en langue, linguistique ou rédaction ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8003}
        ,
        {"faculty":"FRAA","classNum":"491","title":"Tutorat en langue, linguistique ou rédaction ","section":"B","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8004}
        ,
        {"faculty":"FRAA","classNum":"491","title":"Tutorat en langue, linguistique ou rédaction ","section":"C","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8005}
        ,
        {"faculty":"FTRA","classNum":"492","title":"Tutorat en traduction ","section":"BB","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8006}
        ,
        {"faculty":"FTRA","classNum":"492","title":"Tutorat en traduction ","section":"CC","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8007}
        ,
        {"faculty":"FTRA","classNum":"492","title":"Tutorat en traduction ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8008}
        ,
        {"faculty":"FTRA","classNum":"492","title":"Tutorat en traduction ","section":"B","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8009}
        ,
        {"faculty":"FTRA","classNum":"492","title":"Tutorat en traduction ","section":"C","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8010}
        ,
        {"faculty":"FLIT","classNum":"308","title":"Littératures et cultures de la Francophonie ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 623 SGW","semester":"Fall 2016","classid":8052}
        ,
        {"faculty":"FLIT","classNum":"318","title":"Le XIXe siècle I ","section":"A","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 564 SGW","semester":"Fall 2016","classid":8053}
        ,
        {"faculty":"FLIT","classNum":"320","title":"XX E SIÈCLE I ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 513 SGW","semester":"Fall 2016","classid":8054}
        ,
        {"faculty":"POLI","classNum":"312","title":"SPECIAL TOPICS INT'L POLI ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":8065}
        ,
        {"faculty":"BIOL","classNum":"340","title":"Plant Biology ","section":"0102","type":"LAB","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM\nTh","room":"SP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY\nSP 380-5 LOY","semester":"Fall 2016","classid":8067}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"F FB","type":"TUT","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:25AM","room":"H 513 SGW","semester":"Fall 2016","classid":8068}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"FK","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM\nMo","room":"H 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW","semester":"Fall 2016","classid":8069}
        ,
        {"faculty":"COEN","classNum":"212","title":"Digital Systems Design I ","section":"FL","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM\nMo","room":"H 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW\nH 1029-1 SGW","semester":"Fall 2016","classid":8070}
        ,
        {"faculty":"COEN","classNum":"498","title":"TOPICS/COMPUTER ENGINEERING ","section":"NN","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 403 SGW","semester":"Fall 2016","classid":8071}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"T TB","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:55PM","room":"H 537 SGW","semester":"Fall 2016","classid":8073}
        ,
        {"faculty":"ELEC","classNum":"275","title":"Principles of Electrical Engineering ","section":"TL","type":"X","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM\nFr","room":"H 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW\nH 822 SGW","semester":"Fall 2016","classid":8074}
        ,
        {"faculty":"ELEC","classNum":"312","title":"Electronics II ","section":"FK","type":"X","day":"We","timeBegin":"2:45PM","timeEnd":"5:15PM\nWe","room":"H 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW\nH 855 SGW","semester":"Fall 2016","classid":8075}
        ,
        {"faculty":"ELEC","classNum":"342","title":"Discrete-Time Signals and Systems ","section":"U","type":"LEC","day":"WeFr","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 620 SGW","semester":"Fall 2016","classid":8077}
        ,
        {"faculty":"ELEC","classNum":"342","title":"Discrete-Time Signals and Systems ","section":"U UA","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 400 SGW","semester":"Fall 2016","classid":8078}
        ,
        {"faculty":"ELEC","classNum":"342","title":"Discrete-Time Signals and Systems ","section":"U UB","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 513 SGW","semester":"Fall 2016","classid":8079}
        ,
        {"faculty":"ELEC","classNum":"342","title":"Discrete-Time Signals and Systems ","section":"UI","type":"X","day":"Th","timeBegin":"5:45PM","timeEnd":"8:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8080}
        ,
        {"faculty":"ELEC","classNum":"342","title":"Discrete-Time Signals and Systems ","section":"UJ","type":"X","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8081}
        ,
        {"faculty":"ELEC","classNum":"342","title":"Discrete-Time Signals and Systems ","section":"UK","type":"X","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8082}
        ,
        {"faculty":"ELEC","classNum":"342","title":"Discrete-Time Signals and Systems ","section":"UL","type":"X","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8083}
        ,
        {"faculty":"ELEC","classNum":"367","title":"Introduction to Digital Communications ","section":"P","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 1070 SGW","semester":"Fall 2016","classid":8084}
        ,
        {"faculty":"ELEC","classNum":"367","title":"Introduction to Digital Communications ","section":"PI","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8085}
        ,
        {"faculty":"ELEC","classNum":"367","title":"Introduction to Digital Communications ","section":"PJ","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM\nMo","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8086}
        ,
        {"faculty":"ELEC","classNum":"367","title":"Introduction to Digital Communications ","section":"PK","type":"X","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8087}
        ,
        {"faculty":"ELEC","classNum":"367","title":"Introduction to Digital Communications ","section":"PL","type":"X","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:30PM\nTu","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8088}
        ,
        {"faculty":"ELEC","classNum":"367","title":"Introduction to Digital Communications ","section":"PM","type":"X","day":"We","timeBegin":"5:45PM","timeEnd":"8:30PM\nWe","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8089}
        ,
        {"faculty":"ELEC","classNum":"367","title":"Introduction to Digital Communications ","section":"PN","type":"X","day":"Th","timeBegin":"5:45PM","timeEnd":"8:30PM\nTh","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8090}
        ,
        {"faculty":"ENGL","classNum":"302","title":"History of the English Language ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 459 SGW","semester":"Fall 2016","classid":8093}
        ,
        {"faculty":"ENGL","classNum":"326","title":"STUDIES IN 18TH C. BRIT LIT ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 459 SGW","semester":"Fall 2016","classid":8094}
        ,
        {"faculty":"ENGL","classNum":"333","title":"STUDIES IN 19C BRITISH POETRY ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 633 SGW","semester":"Fall 2016","classid":8095}
        ,
        {"faculty":"ENGL","classNum":"334","title":"STUDIES IN 19TH C. BR. PROSE ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 501 SGW","semester":"Fall 2016","classid":8096}
        ,
        {"faculty":"ENGL","classNum":"367","title":"American Poetry ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 501 SGW","semester":"Fall 2016","classid":8098}
        ,
        {"faculty":"PHYS","classNum":"498","title":"ADVANCED TOPICS IN PHYSICS ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 401 SGW","semester":"Fall 2016","classid":8099}
        ,
        {"faculty":"ENGL","classNum":"387","title":"South Asian Literature ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 633 SGW","semester":"Fall 2016","classid":8104}
        ,
        {"faculty":"ENGL","classNum":"246","title":"Science Fiction ","section":"BB","type":"LEC","day":"We","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 509 SGW","semester":"Fall 2016","classid":8105}
        ,
        {"faculty":"POLI","classNum":"421","title":"TRANSNATIONAL POLITICS ","section":"AA","type":"SEM","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 634 SGW","semester":"Fall 2016","classid":8108}
        ,
        {"faculty":"POLI","classNum":"411","title":"GENDER AND PUBLIC POLICY ","section":"A","type":"SEM","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 634 SGW","semester":"Fall 2016","classid":8110}
        ,
        {"faculty":"POLI","classNum":"405","title":"COMPARATIVE ELECTORAL SYSTEM ","section":"A","type":"SEM","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":8111}
        ,
        {"faculty":"POLI","classNum":"400","title":"ADV SEM INT'L REL THEORY ","section":"AA","type":"SEM","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 634 SGW","semester":"Fall 2016","classid":8112}
        ,
        {"faculty":"POLI","classNum":"389","title":"Religion and Politics ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B030 SGW","semester":"Fall 2016","classid":8114}
        ,
        {"faculty":"AHSC","classNum":"260","title":"Program Planning, Design and Evaluation ","section":"52","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:30PM","room":"CC 119 LOY","semester":"Fall 2016","classid":8116}
        ,
        {"faculty":"ELEC","classNum":"498","title":"TOPICS IN ELECTR. ENG. ","section":"II","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B055 SGW","semester":"Fall 2016","classid":8117}
        ,
        {"faculty":"ELEC","classNum":"498","title":"TOPICS IN ELECTR. ENG. ","section":"N","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":8118}
        ,
        {"faculty":"WSDB","classNum":"385","title":"Introduction to Trans Studies ","section":"AA","type":"SEM","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MU 101 SGW","semester":"Fall 2016","classid":8124}
        ,
        {"faculty":"RELI","classNum":"215","title":"Religions of Asia ","section":"A","type":"LEC","day":"WeFr","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"H 553 SGW","semester":"Fall 2016","classid":8125}
        ,
        {"faculty":"WSDB","classNum":"398","title":"SELECTED TOPICS IN WS ","section":"A","type":"SEM","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":8129}
        ,
        {"faculty":"WSDB","classNum":"398","title":"SELECTED TOPICS IN WS ","section":"B","type":"SEM","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MU 101 SGW","semester":"Fall 2016","classid":8130}
        ,
        {"faculty":"WSDB","classNum":"391","title":"Health Issues: Feminist Perspectives ","section":"A","type":"SEM","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MU 101 SGW","semester":"Fall 2016","classid":8131}
        ,
        {"faculty":"POLI","classNum":"388","title":"Human Rights and International Justice ","section":"A","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":8132}
        ,
        {"faculty":"POLI","classNum":"366","title":"Politics of Africa ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 605 SGW","semester":"Fall 2016","classid":8133}
        ,
        {"faculty":"ENCS","classNum":"272","title":"Composition and Argumentation for Engineers ","section":"N NC","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 632 SGW","semester":"Fall 2016","classid":8134}
        ,
        {"faculty":"POLI","classNum":"302","title":"International Security ","section":"A","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":8135}
        ,
        {"faculty":"RELI","classNum":"301","title":"Biblical Studies I: The Hebrew Bible ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 403 SGW","semester":"Fall 2016","classid":8136}
        ,
        {"faculty":"RELI","classNum":"310","title":"Self and Other: Identity and Ethical Development ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 557 SGW","semester":"Fall 2016","classid":8137}
        ,
        {"faculty":"RELI","classNum":"360","title":"Religions of China ","section":"A","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B055 SGW","semester":"Fall 2016","classid":8139}
        ,
        {"faculty":"RELI","classNum":"362","title":"Religions of Tibet ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B055 SGW","semester":"Fall 2016","classid":8140}
        ,
        {"faculty":"RELI","classNum":"384","title":"WOMEN AND RELIGION: HINDUISM ","section":"AA","type":"SEM","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"GN M100 SGW","semester":"Fall 2016","classid":8141}
        ,
        {"faculty":"RELI","classNum":"387","title":"Goddesses and Religious Images of Women ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"FG B050 SGW","semester":"Fall 2016","classid":8142}
        ,
        {"faculty":"RELI","classNum":"396","title":"FOOD AND RELIGION ","section":"A","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":8143}
        ,
        {"faculty":"AHSC","classNum":"432","title":"Seminar in Therapeutic Recreation ","section":"1","type":"SEM","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"VE 317 LOY","semester":"Fall 2016","classid":8147}
        ,
        {"faculty":"ENGL","classNum":"451","title":"History and Ideology in Canadian Literature ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":8148}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"FFFC","type":"TUT","day":"Tu","timeBegin":"7:15PM","timeEnd":"8:05PM","room":"H 544 SGW","semester":"Fall 2016","classid":8149}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"R RC","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"H 603-1 SGW","semester":"Fall 2016","classid":8150}
        ,
        {"faculty":"ENGR","classNum":"371","title":"Probability and Statistics in Engineering ","section":"S SC","type":"TUT","day":"Th","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 564 SGW","semester":"Fall 2016","classid":8151}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"F FC","type":"TUT","day":"Fr","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"TBA","semester":"Fall 2016","classid":8152}
        ,
        {"faculty":"ENGR","classNum":"391","title":"Numerical Methods in Engineering ","section":"S SC","type":"TUT","day":"Fr","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"TBA","semester":"Fall 2016","classid":8153}
        ,
        {"faculty":"IRST","classNum":"270","title":"IRISH TRD MUSIC:GLOBAL SOUND ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 1011 SGW","semester":"Fall 2016","classid":8154}
        ,
        {"faculty":"ECON","classNum":"201","title":"Introduction to Microeconomics ","section":"E","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":8155}
        ,
        {"faculty":"ECON","classNum":"203","title":"Introduction to Macroeconomics ","section":"C","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":8156}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"XX","type":"LEC","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"FG B060 SGW","semester":"Fall 2016","classid":8157}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"XXXE","type":"TUT","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"H 403 SGW","semester":"Fall 2016","classid":8158}
        ,
        {"faculty":"ENGR","classNum":"242","title":"Statics ","section":"XXXF","type":"TUT","day":"Mo","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"H 423 SGW","semester":"Fall 2016","classid":8159}
        ,
        {"faculty":"ENGR","classNum":"251","title":"Thermodynamics I ","section":"F","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 507 SGW","semester":"Fall 2016","classid":8160}
        ,
        {"faculty":"ECON","classNum":"498","title":"ADVANCED TOPICS IN ECONOMICS ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 621 SGW","semester":"Fall 2016","classid":8163}
        ,
        {"faculty":"ECON","classNum":"413","title":"Economic Growth and Fluctuations ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 613 SGW","semester":"Fall 2016","classid":8164}
        ,
        {"faculty":"ENGR","classNum":"392","title":"Impact of Technology on Society ","section":"G","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 521 SGW","semester":"Fall 2016","classid":8166}
        ,
        {"faculty":"PHIL","classNum":"236","title":"Environmental Ethics ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"FG C070 SGW","semester":"Fall 2016","classid":8168}
        ,
        {"faculty":"PHIL","classNum":"255","title":"Philosophy of Leisure ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"FG B040 SGW","semester":"Fall 2016","classid":8169}
        ,
        {"faculty":"PHIL","classNum":"327","title":"KINDS OF MINDS ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 820 SGW","semester":"Fall 2016","classid":8170}
        ,
        {"faculty":"PHIL","classNum":"342","title":"Political Philosophy ","section":"A","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 537 SGW","semester":"Fall 2016","classid":8171}
        ,
        {"faculty":"PHIL","classNum":"471","title":"ADV TOPICS/FEMINIST THEORY ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":8174}
        ,
        {"faculty":"ECON","classNum":"221","title":"Statistical Methods I ","section":"C","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 407 SGW","semester":"Fall 2016","classid":8176}
        ,
        {"faculty":"ECON","classNum":"221","title":"Statistical Methods I ","section":"CA","type":"TUT","day":"Fr","timeBegin":"4:15PM","timeEnd":"6:15PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":8177}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"M MA","type":"TUT","day":"Mo","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"H 433 SGW","semester":"Fall 2016","classid":8179}
        ,
        {"faculty":"MECH","classNum":"221","title":"Materials Science ","section":"M MB","type":"TUT","day":"Mo","timeBegin":"3:15PM","timeEnd":"4:05PM","room":"FG B030 SGW","semester":"Fall 2016","classid":8180}
        ,
        {"faculty":"BIOL","classNum":"450","title":"TECHNIQUES IN ECOLOGY ","section":"01","type":"LAB","day":"Mo","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"SP 380-5 LOY","semester":"Fall 2016","classid":8182}
        ,
        {"faculty":"BIOL","classNum":"450","title":"TECHNIQUES IN ECOLOGY ","section":"0101","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CC 425 LOY","semester":"Fall 2016","classid":8183}
        ,
        {"faculty":"IRST","classNum":"211","title":"HISTORY OF IRELAND ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1011 SGW","semester":"Fall 2016","classid":8184}
        ,
        {"faculty":"SCOL","classNum":"360","title":"MULTIDISCIPLINARY STUDIES ","section":"D","type":"LEC","day":"Mo","timeBegin":"8:30AM","timeEnd":"11:45AM","room":"SP 365-1 LOY","semester":"Fall 2016","classid":8185}
        ,
        {"faculty":"IRST","classNum":"398","title":"SPEC TOP/CDN IRISH STUDIES ","section":"C","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 1011 SGW","semester":"Fall 2016","classid":8186}
        ,
        {"faculty":"IRST","classNum":"398","title":"SPEC TOP/CDN IRISH STUDIES ","section":"D","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 1011 SGW","semester":"Fall 2016","classid":8187}
        ,
        {"faculty":"ENGL","classNum":"398","title":"SELECTED TOPICS IN ENGLISH ","section":"B","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 540 SGW","semester":"Fall 2016","classid":8188}
        ,
        {"faculty":"ENGL","classNum":"398","title":"SELECTED TOPICS IN ENGLISH ","section":"C","type":"LEC","day":"Tu","timeBegin":"1:45PM","timeEnd":"3:45PM","room":"R 103 SGW","semester":"Fall 2016","classid":8189}
        ,
        {"faculty":"ENGL","classNum":"398","title":"SELECTED TOPICS IN ENGLISH ","section":"E","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":8191}
        ,
        {"faculty":"ENGL","classNum":"398","title":"SELECTED TOPICS IN ENGLISH ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 459 SGW","semester":"Fall 2016","classid":8192}
        ,
        {"faculty":"IRST","classNum":"316","title":"The Irish Revolution, 1913-1923 ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 1011 SGW","semester":"Fall 2016","classid":8195}
        ,
        {"faculty":"ENGL","classNum":"398","title":"SELECTED TOPICS IN ENGLISH ","section":"X","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 1011 SGW","semester":"Fall 2016","classid":8196}
        ,
        {"faculty":"ENGL","classNum":"398","title":"SELECTED TOPICS IN ENGLISH ","section":"Y","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 1011 SGW","semester":"Fall 2016","classid":8197}
        ,
        {"faculty":"ENGL","classNum":"398","title":"SELECTED TOPICS IN ENGLISH ","section":"ZZ","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 1011 SGW","semester":"Fall 2016","classid":8199}
        ,
        {"faculty":"ENGL","classNum":"480","title":"INDEPENDENT STUDIES ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8200}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"Q QC","type":"TUT","day":"Th","timeBegin":"2:45PM","timeEnd":"4:25PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":8201}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"R RC","type":"TUT","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":8202}
        ,
        {"faculty":"FMST","classNum":"216","title":"METHODS IN FILM STUDIES ","section":"B","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"VA 114 SGW","semester":"Fall 2016","classid":8203}
        ,
        {"faculty":"FLIT","classNum":"362","title":"Littérature maghrébine ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":8204}
        ,
        {"faculty":"POLI","classNum":"203","title":"Introduction to Comparative Politics ","section":"CC","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 411 SGW","semester":"Fall 2016","classid":8205}
        ,
        {"faculty":"SOCI","classNum":"474","title":"THE BODY SOCIAL ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB S2.445 SGW","semester":"Fall 2016","classid":8207}
        ,
        {"faculty":"ANTH","classNum":"474","title":"THE BODY SOCIAL ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB S2.445 SGW","semester":"Fall 2016","classid":8208}
        ,
        {"faculty":"ANTH","classNum":"472","title":"Childhood and Youth ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":8209}
        ,
        {"faculty":"GERM","classNum":"230","title":"Introduction to German Culture ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 5.215 SGW","semester":"Fall 2016","classid":8212}
        ,
        {"faculty":"SOCI","classNum":"421","title":"SOCIOLOGY OF EMOTIONS ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":8213}
        ,
        {"faculty":"ANTH","classNum":"423","title":"Political Anthropology ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":8214}
        ,
        {"faculty":"THEO","classNum":"298","title":"SEL TOPICS IN THEO STUDIES ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 553 SGW","semester":"Fall 2016","classid":8218}
        ,
        {"faculty":"THEO","classNum":"303","title":"Themes in the Hebrew Bible ","section":"A","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"FG B080 SGW","semester":"Fall 2016","classid":8219}
        ,
        {"faculty":"ITAL","classNum":"398","title":"SELECTED TOPICS IN ITALIAN ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 459 SGW","semester":"Fall 2016","classid":8220}
        ,
        {"faculty":"GERM","classNum":"420","title":"Of German Witches, Ghosts, Daemons and Vampires ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB 2.445 SGW","semester":"Fall 2016","classid":8222}
        ,
        {"faculty":"THEO","classNum":"315","title":"Gospels and Acts ","section":"A","type":"LEC","day":"Th","timeBegin":"4:15PM","timeEnd":"6:15PM","room":"H 603 SGW","semester":"Fall 2016","classid":8223}
        ,
        {"faculty":"MARA","classNum":"398","title":"SPECIAL TOPICS IN ARABIC ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 611 SGW","semester":"Fall 2016","classid":8227}
        ,
        {"faculty":"SOCI","classNum":"424","title":"APPLIED SOCIAL STATISTICS ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 3.265 SGW","semester":"Fall 2016","classid":8228}
        ,
        {"faculty":"ANTH","classNum":"302","title":"Art, Aesthetics, and Anthropology ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 441 SGW","semester":"Fall 2016","classid":8229}
        ,
        {"faculty":"SOCI","classNum":"298","title":"SELECTED TOPICS IN SOCIOLOGY ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 509 SGW","semester":"Fall 2016","classid":8230}
        ,
        {"faculty":"ANTH","classNum":"444","title":"International Indigenism ","section":"A","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":8231}
        ,
        {"faculty":"FRAN","classNum":"305","title":"Communication orale ","section":"S","type":"LEC","day":"Sa","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":8232}
        ,
        {"faculty":"LBCL","classNum":"395","title":"The History of Science: Early Modern to Contemporary ","section":"A","type":"CON","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"RR 02 SGW","semester":"Fall 2016","classid":8234}
        ,
        {"faculty":"LBCL","classNum":"495","title":"SPEC/STUD:17C TO PRESENT ","section":"A","type":"CON","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"RR 302 SGW","semester":"Fall 2016","classid":8235}
        ,
        {"faculty":"THEO","classNum":"205","title":"Introduction to Christian Spirituality ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 820 SGW","semester":"Fall 2016","classid":8237}
        ,
        {"faculty":"AHSC","classNum":"465","title":"Parent-Child Relations ","section":"01","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"VE 226 LOY","semester":"Fall 2016","classid":8238}
        ,
        {"faculty":"CHEM","classNum":"495","title":"Modern Spectroscopy ","section":"51","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 405 LOY","semester":"Fall 2016","classid":8240}
        ,
        {"faculty":"FPST","classNum":"210","title":"Haudenosaunee Peoples ","section":"A","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 631 SGW","semester":"Fall 2016","classid":8241}
        ,
        {"faculty":"CLAS","classNum":"203","title":"Introductory Latin I ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 621 SGW","semester":"Fall 2016","classid":8249}
        ,
        {"faculty":"CLAS","classNum":"230","title":"(also listed as HIST 219) Ancient Near East ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 920 SGW","semester":"Fall 2016","classid":8250}
        ,
        {"faculty":"POLI","classNum":"416","title":"ANCIENT POLITICAL TEXTS ","section":"A","type":"SEM","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":8252}
        ,
        {"faculty":"CLAS","classNum":"240","title":"(also listed as HIST 223) Greek History from the Bronze Age to Alexander ","section":"A","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":8254}
        ,
        {"faculty":"POLI","classNum":"349","title":"Political and Social Theory and the City ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 433 SGW","semester":"Fall 2016","classid":8256}
        ,
        {"faculty":"LBCL","classNum":"390","title":"History of Music: Ancient to Classical ","section":"A","type":"CON","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"RR 02 SGW","semester":"Fall 2016","classid":8257}
        ,
        {"faculty":"CLAS","classNum":"242","title":"(also listed as HIST 225) History of the Roman Republic ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 937 SGW","semester":"Fall 2016","classid":8258}
        ,
        {"faculty":"CLAS","classNum":"341","title":"(also listed as HIST 323) Greek History from Alexander to the Roman Conquest ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG B060 SGW","semester":"Fall 2016","classid":8259}
        ,
        {"faculty":"CLAS","classNum":"369","title":"Roman Art and Archaeology ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 619 SGW","semester":"Fall 2016","classid":8260}
        ,
        {"faculty":"POLI","classNum":"306","title":"Classical Political Thought ","section":"A","type":"LEC","day":"Th","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB S1.235 SGW","semester":"Fall 2016","classid":8261}
        ,
        {"faculty":"CHEM","classNum":"443","title":"ORGANOMETALLIC CHEMISTRY ","section":"01","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 425 LOY","semester":"Fall 2016","classid":8262}
        ,
        {"faculty":"POLI","classNum":"206","title":"Introduction to Western Political Theory ","section":"C","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 553 SGW","semester":"Fall 2016","classid":8264}
        ,
        {"faculty":"CHEM","classNum":"498","title":"ADVANCED TOPICS IN CHEMISTRY ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 425 LOY","semester":"Fall 2016","classid":8265}
        ,
        {"faculty":"CHEM","classNum":"498","title":"ADVANCED TOPICS IN CHEMISTRY ","section":"52","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 425 LOY","semester":"Fall 2016","classid":8267}
        ,
        {"faculty":"HIST","classNum":"203","title":"History of Canada, Pre-Confederation ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 820 SGW","semester":"Fall 2016","classid":8272}
        ,
        {"faculty":"CHEM","classNum":"498","title":"ADVANCED TOPICS IN CHEMISTRY ","section":"01","type":"LEC","day":"WeFr","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"CJ 1.121 LOY","semester":"Fall 2016","classid":8273}
        ,
        {"faculty":"BLDG","classNum":"498","title":"TOPICS/BLDG ENGINEERING ","section":"L","type":"LEC","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"FG B050 SGW","semester":"Fall 2016","classid":8275}
        ,
        {"faculty":"BLDG","classNum":"498","title":"TOPICS/BLDG ENGINEERING ","section":"D","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 620 SGW","semester":"Fall 2016","classid":8276}
        ,
        {"faculty":"FMST","classNum":"318","title":"Experimental Film ","section":"A","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"VA 114 SGW","semester":"Fall 2016","classid":8279}
        ,
        {"faculty":"HIST","classNum":"358","title":"Foreign Relations of the United States, 1945 to the Present ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 429 SGW","semester":"Fall 2016","classid":8282}
        ,
        {"faculty":"HIST","classNum":"324","title":"United States, 1877-1924 ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 429 SGW","semester":"Fall 2016","classid":8283}
        ,
        {"faculty":"FMST","classNum":"316","title":"FILM & MOVING IMAGE CULTURES ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"VA 114 SGW","semester":"Fall 2016","classid":8284}
        ,
        {"faculty":"FMST","classNum":"335","title":"ASPECTS OF NATIONAL CINEMAS ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"VA 114 SGW","semester":"Fall 2016","classid":8285}
        ,
        {"faculty":"THEO","classNum":"403","title":"Ignatian Spirituality: Theory and Method ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"TBA","semester":"Fall 2016","classid":8286}
        ,
        {"faculty":"FMST","classNum":"391","title":"Sexual Representation in Cinema ","section":"A","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"H 110 SGW","semester":"Fall 2016","classid":8287}
        ,
        {"faculty":"FMST","classNum":"450","title":"Film Studies Specialization Seminar ","section":"AA","type":"SEM","day":"Th","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"FB 250 SGW","semester":"Fall 2016","classid":8289}
        ,
        {"faculty":"CIVI","classNum":"453","title":"Design of Reinforced Concrete Structures ","section":"L LB","type":"TUT","day":"Mo","timeBegin":"1:15PM","timeEnd":"2:05PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":8290}
        ,
        {"faculty":"CIVI","classNum":"498","title":"Topics in Civil Engineering ","section":"LL","type":"LEC","day":"Tu","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 411 SGW","semester":"Fall 2016","classid":8291}
        ,
        {"faculty":"FMST","classNum":"448","title":"ADV. SEMINAR IN ART & FILM ","section":"A","type":"SEM","day":"Tu","timeBegin":"12:15PM","timeEnd":"2:45PM","room":"EV 3.760 SGW","semester":"Fall 2016","classid":8292}
        ,
        {"faculty":"RELI","classNum":"333","title":"Stories in Judaism ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 540 SGW","semester":"Fall 2016","classid":8295}
        ,
        {"faculty":"LING","classNum":"200","title":"Introduction to Linguistic Science ","section":"B","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"FG B060 SGW","semester":"Fall 2016","classid":8296}
        ,
        {"faculty":"LING","classNum":"315","title":"Syntactic Theory ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 603 SGW","semester":"Fall 2016","classid":8297}
        ,
        {"faculty":"LING","classNum":"322","title":"LING & COGNITIVE SCIENCE ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 429 SGW","semester":"Fall 2016","classid":8298}
        ,
        {"faculty":"LING","classNum":"341","title":"Introduction to Romance Linguistics ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 607 SGW","semester":"Fall 2016","classid":8299}
        ,
        {"faculty":"LING","classNum":"380","title":"Morphology ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 523 SGW","semester":"Fall 2016","classid":8300}
        ,
        {"faculty":"LING","classNum":"420","title":"Language Change ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 611 SGW","semester":"Fall 2016","classid":8301}
        ,
        {"faculty":"RELI","classNum":"398","title":"SELECTED TOPICS IN RELIGION ","section":"C","type":"LEC","day":"Tu","timeBegin":"1:45PM","timeEnd":"3:45PM","room":"R 103 SGW","semester":"Fall 2016","classid":8302}
        ,
        {"faculty":"AHSC","classNum":"475","title":"Organizational Leadership: A Human Systems Approach ","section":"01","type":"LEC","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CC 119 LOY","semester":"Fall 2016","classid":8304}
        ,
        {"faculty":"CHEM","classNum":"498","title":"ADVANCED TOPICS IN CHEMISTRY ","section":"53","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"CC 425 LOY","semester":"Fall 2016","classid":8305}
        ,
        {"faculty":"HIST","classNum":"398","title":"SELECTED TOPICS IN HISTORY ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 619 SGW","semester":"Fall 2016","classid":8306}
        ,
        {"faculty":"HIST","classNum":"398","title":"SELECTED TOPICS IN HISTORY ","section":"B","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 523 SGW","semester":"Fall 2016","classid":8307}
        ,
        {"faculty":"HIST","classNum":"381","title":"History and Public Policy ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 619 SGW","semester":"Fall 2016","classid":8308}
        ,
        {"faculty":"RELI","classNum":"233","title":"Introduction to Women and Religion ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 620 SGW","semester":"Fall 2016","classid":8309}
        ,
        {"faculty":"POLI","classNum":"214","title":"Human Rights: An Overview ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 411 SGW","semester":"Fall 2016","classid":8311}
        ,
        {"faculty":"PHIL","classNum":"377","title":"20th-Century Continental Philosophy ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 537 SGW","semester":"Fall 2016","classid":8312}
        ,
        {"faculty":"PHIL","classNum":"480","title":"Plato ","section":"A","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":8314}
        ,
        {"faculty":"POLI","classNum":"487","title":"ADVANCED SEMINAR IN COMPARATIVE POLITICS ","section":"C","type":"SEM","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 634 SGW","semester":"Fall 2016","classid":8315}
        ,
        {"faculty":"ENGL","classNum":"398","title":"SELECTED TOPICS IN ENGLISH ","section":"D","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 611 SGW","semester":"Fall 2016","classid":8318}
        ,
        {"faculty":"HIST","classNum":"394","title":"Food in History ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 429 SGW","semester":"Fall 2016","classid":8320}
        ,
        {"faculty":"SPAN","classNum":"362","title":"Cultures of Mexico, the Central American Region, and the Spanish Caribbean ","section":"A","type":"LEC","day":"MoWe","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 625 SGW","semester":"Fall 2016","classid":8322}
        ,
        {"faculty":"SPAN","classNum":"474","title":"Translation for Specific Fields ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 544 SGW","semester":"Fall 2016","classid":8323}
        ,
        {"faculty":"ECON","classNum":"301","title":"Intermediate Microeconomic Theory I ","section":"A A","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"H 937 SGW","semester":"Fall 2016","classid":8327}
        ,
        {"faculty":"ECON","classNum":"301","title":"Intermediate Microeconomic Theory I ","section":"BB A","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"H 937 SGW","semester":"Fall 2016","classid":8328}
        ,
        {"faculty":"ITAL","classNum":"498","title":"ADVANCED TOPICS IN ITALIAN ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 632 SGW","semester":"Fall 2016","classid":8329}
        ,
        {"faculty":"PHIL","classNum":"416","title":"Philosophy of Language ","section":"A","type":"LEC","day":"Tu","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":8330}
        ,
        {"faculty":"ITAL","classNum":"303","title":"Introductions to Academic Writing in Italiian ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 621 SGW","semester":"Fall 2016","classid":8333}
        ,
        {"faculty":"ECON","classNum":"302","title":"Intermediate Microeconomic Theory II ","section":"A A","type":"TUT","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"H 520 SGW","semester":"Fall 2016","classid":8334}
        ,
        {"faculty":"PHIL","classNum":"498","title":"ADVANCED TOPICS IN PHIL ","section":"BB","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 633-1 SGW","semester":"Fall 2016","classid":8335}
        ,
        {"faculty":"ECON","classNum":"303","title":"Intermediate Macroeconomic Theory I ","section":"A A","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"3:45PM","room":"H 531 SGW","semester":"Fall 2016","classid":8336}
        ,
        {"faculty":"ECON","classNum":"303","title":"Intermediate Macroeconomic Theory I ","section":"B A","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"3:45PM","room":"H 531 SGW","semester":"Fall 2016","classid":8337}
        ,
        {"faculty":"HIST","classNum":"412","title":"ADV STUDY IN CANADIAN HIST ","section":"A","type":"LEC","day":"Tu","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"LB 1014 SGW","semester":"Fall 2016","classid":8338}
        ,
        {"faculty":"MCHI","classNum":"365","title":"Introduction to Chinese Cultural Traditions ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 3.430 SGW","semester":"Fall 2016","classid":8339}
        ,
        {"faculty":"HIST","classNum":"437","title":"ADV STUDY IN EUROPEAN HIST ","section":"A","type":"SEM","day":"Tu","timeBegin":"12:00PM","timeEnd":"2:30PM","room":"LB 1014 SGW","semester":"Fall 2016","classid":8343}
        ,
        {"faculty":"HIST","classNum":"498","title":"ADVANCED TOPICS IN HISTORY ","section":"A","type":"SEM","day":"We","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"LB 1014 SGW","semester":"Fall 2016","classid":8345}
        ,
        {"faculty":"HIST","classNum":"498","title":"ADVANCED TOPICS IN HISTORY ","section":"AA","type":"SEM","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"LB 1014 SGW","semester":"Fall 2016","classid":8347}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"A","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 1.210 SGW","semester":"Fall 2016","classid":8349}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AA","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":8350}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"B","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 553 SGW","semester":"Fall 2016","classid":8351}
        ,
        {"faculty":"COMS","classNum":"298","title":"SELECTED TOPICS IN COMS ","section":"01","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 1.114 LOY","semester":"Fall 2016","classid":8354}
        ,
        {"faculty":"ECON","classNum":"304","title":"Intermediate Macroeconomic Theory II ","section":"A A","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"3:45PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":8355}
        ,
        {"faculty":"COMS","classNum":"309","title":"Studies in Documentary ","section":"01","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 4.320 LOY","semester":"Fall 2016","classid":8356}
        ,
        {"faculty":"RELI","classNum":"498","title":"ADVANCED TOPICS IN RELIGION ","section":"I","type":"SEM","day":"Th","timeBegin":"4:00PM","timeEnd":"6:15PM","room":"R 103 SGW","semester":"Fall 2016","classid":8359}
        ,
        {"faculty":"LING","classNum":"457","title":"Archaic Latin and the Italic Dialects ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 439 SGW","semester":"Fall 2016","classid":8360}
        ,
        {"faculty":"SPAN","classNum":"470","title":"Spanish-American Testimonio Discourse ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 627 SGW","semester":"Fall 2016","classid":8363}
        ,
        {"faculty":"SPAN","classNum":"472","title":"Discourses of Discovery, Colonization, and Resistance in Spain and Spanish America ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":8364}
        ,
        {"faculty":"POLI","classNum":"496","title":"Honours Seminar ","section":"A","type":"SEM","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 634 SGW","semester":"Fall 2016","classid":8366}
        ,
        {"faculty":"HIST","classNum":"348","title":"History of Violence: Middle East 1798 to Present ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 607 SGW","semester":"Fall 2016","classid":8370}
        ,
        {"faculty":"HIST","classNum":"328","title":"The Scientific Revolution ","section":"A","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 607 SGW","semester":"Fall 2016","classid":8371}
        ,
        {"faculty":"HIST","classNum":"398","title":"SELECTED TOPICS IN HISTORY ","section":"C","type":"LEC","day":"MoWe","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 619 SGW","semester":"Fall 2016","classid":8372}
        ,
        {"faculty":"HIST","classNum":"298","title":"SELECTED TOPICS IN HISTORY ","section":"BB","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 420 SGW","semester":"Fall 2016","classid":8373}
        ,
        {"faculty":"HIST","classNum":"235","title":"THE HOLOCAUST ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":8374}
        ,
        {"faculty":"RELI","classNum":"300","title":"CULTS AND NEW RELIGIOUS MOVEMENTS IN NORTH AMERICA ","section":"AA","type":"LEC","day":"We","timeBegin":"8:30PM","timeEnd":"10:45PM","room":"H 553 SGW","semester":"Fall 2016","classid":8375}
        ,
        {"faculty":"RELI","classNum":"318","title":"SHIITE ISLAM ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"GN M100 SGW","semester":"Fall 2016","classid":8376}
        ,
        {"faculty":"RELI","classNum":"320","title":"The Making of Christianity ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 433 SGW","semester":"Fall 2016","classid":8377}
        ,
        {"faculty":"MATH","classNum":"200","title":"Fundamental Concepts of Algebra ","section":"A B","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 423 SGW","semester":"Fall 2016","classid":8378}
        ,
        {"faculty":"MATH","classNum":"200","title":"Fundamental Concepts of Algebra ","section":"A C","type":"TUT","day":"We","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"FG B055 SGW","semester":"Fall 2016","classid":8379}
        ,
        {"faculty":"HIST","classNum":"498","title":"ADVANCED TOPICS IN HISTORY ","section":"BB","type":"SEM","day":"Th","timeBegin":"6:00PM","timeEnd":"8:30PM","room":"LB 1014 SGW","semester":"Fall 2016","classid":8380}
        ,
        {"faculty":"SOCI","classNum":"212","title":"Statistics I ","section":"C","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 507 SGW","semester":"Fall 2016","classid":8382}
        ,
        {"faculty":"MATH","classNum":"200","title":"Fundamental Concepts of Algebra ","section":"BBCC","type":"TUT","day":"Fr","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"H 423 SGW","semester":"Fall 2016","classid":8385}
        ,
        {"faculty":"MATH","classNum":"200","title":"Fundamental Concepts of Algebra ","section":"BBAA","type":"TUT","day":"Fr","timeBegin":"8:30PM","timeEnd":"9:45PM","room":"H 401 SGW","semester":"Fall 2016","classid":8386}
        ,
        {"faculty":"RELI","classNum":"328","title":"Modern Judaism ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"FG B055 SGW","semester":"Fall 2016","classid":8387}
        ,
        {"faculty":"POLI","classNum":"204","title":"INTRO TO CANADIAN POLITICS ","section":"C","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 415 SGW","semester":"Fall 2016","classid":8388}
        ,
        {"faculty":"PSYC","classNum":"342","title":"Forensic Psychology ","section":"01","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"3:45PM","room":"CC 111 LOY","semester":"Fall 2016","classid":8389}
        ,
        {"faculty":"PSYC","classNum":"460","title":"Vision ","section":"01","type":"LEC","day":"MoWe","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"SP 157 LOY","semester":"Fall 2016","classid":8390}
        ,
        {"faculty":"COMS","classNum":"420","title":"RECEPTION STUDIES ","section":"01","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 4.320 LOY","semester":"Fall 2016","classid":8391}
        ,
        {"faculty":"COMS","classNum":"462","title":"Communication, Culture, and Popular Art ","section":"01","type":"SEM","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 5.223 LOY","semester":"Fall 2016","classid":8393}
        ,
        {"faculty":"COMS","classNum":"324","title":"Communication Analysis of Environment ","section":"01","type":"LEC","day":"Th","timeBegin":"4:15PM","timeEnd":"7:00PM","room":"CJ 4.320 LOY","semester":"Fall 2016","classid":8394}
        ,
        {"faculty":"SOCI","classNum":"250","title":"Sociology of Culture ","section":"A","type":"LEC","day":"We","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 561 SGW","semester":"Fall 2016","classid":8395}
        ,
        {"faculty":"RELI","classNum":"338","title":"HOLOCAUST HISTORICAL CIRCUMS ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"MB 3.270 SGW","semester":"Fall 2016","classid":8399}
        ,
        {"faculty":"MATH","classNum":"479","title":"Convex and Non-Linear Analysis ","section":"B","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 513 SGW","semester":"Fall 2016","classid":8402}
        ,
        {"faculty":"HIST","classNum":"211","title":"(also listed as IRST 211) History of Ireland ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1011 SGW","semester":"Fall 2016","classid":8405}
        ,
        {"faculty":"HIST","classNum":"398","title":"SELECTED TOPICS IN HISTORY ","section":"D","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 1011 SGW","semester":"Fall 2016","classid":8406}
        ,
        {"faculty":"THEO","classNum":"343","title":"Religion and Politics ","section":"B","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"FG B030 SGW","semester":"Fall 2016","classid":8408}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AB","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":8411}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AC","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":8412}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AD","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":8413}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AF","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":8415}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AH","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"MB 3.285 SGW","semester":"Fall 2016","classid":8417}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AI","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":8418}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AJ","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":8419}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AK","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":8420}
        ,
        {"faculty":"SOCI","classNum":"203","title":"Introduction to Society ","section":"AL","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:45PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":8421}
        ,
        {"faculty":"COMS","classNum":"413","title":"Cultures of Production ","section":"01","type":"SEM","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 5.223 LOY","semester":"Fall 2016","classid":8425}
        ,
        {"faculty":"COMS","classNum":"365","title":"History of Sound Recording ","section":"01","type":"LEC","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 4.320 LOY","semester":"Fall 2016","classid":8427}
        ,
        {"faculty":"COMS","classNum":"422","title":"PERSPECTIVE ON INFO. SOCIETY ","section":"01","type":"SEM","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"CJ 5.301 LOY","semester":"Fall 2016","classid":8428}
        ,
        {"faculty":"COMS","classNum":"416","title":"FILM CRITICISM ","section":"01","type":"SEM","day":"Fr","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"CJ 5.223 LOY","semester":"Fall 2016","classid":8430}
        ,
        {"faculty":"COMS","classNum":"304","title":"SEL. TOP. IN FILM STUDIES ","section":"51","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:45PM","room":"CJ 1.114 LOY","semester":"Fall 2016","classid":8432}
        ,
        {"faculty":"STAT","classNum":"480","title":"Statistical Data Analysis ","section":"J","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":8433}
        ,
        {"faculty":"JOUR","classNum":"206","title":"INTRODUCTION TO REPORTING ","section":"01","type":"WKS","day":"Tu","timeBegin":"12:30PM","timeEnd":"2:45PM","room":"CJ 3.307 LOY","semester":"Fall 2016","classid":8438}
        ,
        {"faculty":"PSYC","classNum":"230","title":"SEL TOP IN LEARN+MOTIVA A ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"GN M100 SGW","semester":"Fall 2016","classid":8439}
        ,
        {"faculty":"PSYC","classNum":"456","title":"FUNCTIONAL NEUROANATOMY ","section":"01","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"CC 106 LOY","semester":"Fall 2016","classid":8440}
        ,
        {"faculty":"THEO","classNum":"204","title":"Introduction to Christian Ethics ","section":"AA","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 553 SGW","semester":"Fall 2016","classid":8441}
        ,
        {"faculty":"FTRA","classNum":"438","title":"INITIATION AU SOUS-TIRAGE ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"LB 618 SGW","semester":"Fall 2016","classid":8448}
        ,
        {"faculty":"ECON","classNum":"421","title":"Econometrics I ","section":"A A","type":"TUT","day":"Fr","timeBegin":"1:15PM","timeEnd":"2:15PM","room":"MB 2.430 SGW","semester":"Fall 2016","classid":8449}
        ,
        {"faculty":"THEO","classNum":"291","title":"THE ICON: THEOLOGY IN COLOUR ","section":"A","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 553 SGW","semester":"Fall 2016","classid":8450}
        ,
        {"faculty":"JOUR","classNum":"420","title":"GENDER, DIVERSITY AND JOURNALISM ","section":"01","type":"LEC","day":"We","timeBegin":"3:00PM","timeEnd":"5:15PM","room":"CJ 3.307 LOY","semester":"Fall 2016","classid":8452}
        ,
        {"faculty":"FTRA","classNum":"412","title":"Théories de la traduction ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":8453}
        ,
        {"faculty":"JOUR","classNum":"207","title":"INTRODUCTION TO MULTIMEDIA ","section":"01","type":"WKS","day":"Mo","timeBegin":"9:30AM","timeEnd":"11:45AM","room":"CJ 5.305 LOY","semester":"Fall 2016","classid":8455}
        ,
        {"faculty":"JOUR","classNum":"207","title":"INTRODUCTION TO MULTIMEDIA ","section":"02","type":"WKS","day":"Tu","timeBegin":"9:30AM","timeEnd":"11:45AM","room":"CJ 5.305 LOY","semester":"Fall 2016","classid":8456}
        ,
        {"faculty":"JOUR","classNum":"207","title":"INTRODUCTION TO MULTIMEDIA ","section":"03","type":"WKS","day":"Fr","timeBegin":"12:30PM","timeEnd":"2:45PM","room":"CJ 5.305 LOY","semester":"Fall 2016","classid":8457}
        ,
        {"faculty":"JOUR","classNum":"206","title":"INTRODUCTION TO REPORTING ","section":"02","type":"WKS","day":"Th","timeBegin":"12:30PM","timeEnd":"2:45PM","room":"CJ 3.307 LOY","semester":"Fall 2016","classid":8461}
        ,
        {"faculty":"JOUR","classNum":"206","title":"INTRODUCTION TO REPORTING ","section":"51","type":"WKS","day":"We","timeBegin":"6:00PM","timeEnd":"6:00PM","room":"CJ 3.307 LOY","semester":"Fall 2016","classid":8462}
        ,
        {"faculty":"SOCI","classNum":"498","title":"ADVANCED TOPICS IN SOCIOLOGY & ANTHROPOLOGY ","section":"CC","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB S2.445 SGW","semester":"Fall 2016","classid":8466}
        ,
        {"faculty":"ANTH","classNum":"498","title":"ADVANCED TOPICS ANTHROPOLOGY ","section":"CC","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"MB S2.445 SGW","semester":"Fall 2016","classid":8467}
        ,
        {"faculty":"SOCI","classNum":"221","title":"Sociology of Cyberspace ","section":"A","type":"LEC","day":"We","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":8468}
        ,
        {"faculty":"SOCI","classNum":"221","title":"Sociology of Cyberspace ","section":"AA","type":"TUT","day":"We","timeBegin":"4:30PM","timeEnd":"5:30PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":8469}
        ,
        {"faculty":"SOCI","classNum":"221","title":"Sociology of Cyberspace ","section":"AB","type":"TUT","day":"We","timeBegin":"4:30PM","timeEnd":"5:30PM","room":"MB S1.255 SGW","semester":"Fall 2016","classid":8470}
        ,
        {"faculty":"SOCI","classNum":"221","title":"Sociology of Cyberspace ","section":"AC","type":"TUT","day":"We","timeBegin":"4:30PM","timeEnd":"5:30PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":8471}
        ,
        {"faculty":"SOCI","classNum":"221","title":"Sociology of Cyberspace ","section":"AD","type":"TUT","day":"Fr","timeBegin":"1:00PM","timeEnd":"2:00PM","room":"MB 2.285 SGW","semester":"Fall 2016","classid":8472}
        ,
        {"faculty":"SOCI","classNum":"221","title":"Sociology of Cyberspace ","section":"AE","type":"TUT","day":"Fr","timeBegin":"1:00PM","timeEnd":"2:00PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":8473}
        ,
        {"faculty":"HIST","classNum":"323","title":"(also listed as CLAS 341) Greek History from Alexander to the Roman Conquest ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG B060 SGW","semester":"Fall 2016","classid":8474}
        ,
        {"faculty":"SOCI","classNum":"221","title":"Sociology of Cyberspace ","section":"AF","type":"TUT","day":"Fr","timeBegin":"1:00PM","timeEnd":"2:00PM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":8475}
        ,
        {"faculty":"JOUR","classNum":"206","title":"INTRODUCTION TO REPORTING ","section":"0101","type":"CON","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"CJ 3.306 LOY","semester":"Fall 2016","classid":8476}
        ,
        {"faculty":"JOUR","classNum":"206","title":"INTRODUCTION TO REPORTING ","section":"0201","type":"CON","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"CJ 3.306 LOY","semester":"Fall 2016","classid":8477}
        ,
        {"faculty":"JOUR","classNum":"206","title":"INTRODUCTION TO REPORTING ","section":"5101","type":"CON","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"CJ 3.306 LOY","semester":"Fall 2016","classid":8478}
        ,
        {"faculty":"HISW","classNum":"207","title":"EARLY MODERN EUROPE ","section":"X","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 507 SGW","semester":"Fall 2016","classid":8482}
        ,
        {"faculty":"HIST","classNum":"223","title":"(also listed as CLAS 240) Greek History from the Bronze Age to Alexander ","section":"A","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":8484}
        ,
        {"faculty":"HIST","classNum":"225","title":"(also listed as CLAS 242) History of the Roman Republic ","section":"A","type":"LEC","day":"TuTh","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 937 SGW","semester":"Fall 2016","classid":8485}
        ,
        {"faculty":"HISW","classNum":"207","title":"EARLY MODERN EUROPE ","section":"X B","type":"CON","day":"Tu","timeBegin":"10:15AM","timeEnd":"11:00AM","room":"H 457 SGW","semester":"Fall 2016","classid":8486}
        ,
        {"faculty":"HISW","classNum":"207","title":"EARLY MODERN EUROPE ","section":"X D","type":"CON","day":"Tu","timeBegin":"11:15AM","timeEnd":"12:00PM","room":"H 457 SGW","semester":"Fall 2016","classid":8489}
        ,
        {"faculty":"HISW","classNum":"207","title":"EARLY MODERN EUROPE ","section":"X E","type":"CON","day":"Tu","timeBegin":"12:15PM","timeEnd":"1:00PM","room":"MB 2.255 SGW","semester":"Fall 2016","classid":8490}
        ,
        {"faculty":"HISW","classNum":"207","title":"EARLY MODERN EUROPE ","section":"X F","type":"CON","day":"Tu","timeBegin":"12:15PM","timeEnd":"1:00PM","room":"H 457 SGW","semester":"Fall 2016","classid":8491}
        ,
        {"faculty":"SCPA","classNum":"339","title":"(also listed as SCPA 339) Quebec Politics and Society/ La vie politique quebecoise ","section":"A","type":"LEC","day":"Tu","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":8492}
        ,
        {"faculty":"HIST","classNum":"219","title":"(also listed as CLAS 230) Ancient Near East ","section":"A","type":"LEC","day":"TuTh","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 920 SGW","semester":"Fall 2016","classid":8493}
        ,
        {"faculty":"EDUC","classNum":"304","title":"Children's Play in Childhood Settings ","section":"A","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 403 SGW","semester":"Fall 2016","classid":8494}
        ,
        {"faculty":"EDUC","classNum":"307","title":"INTERGRATING DIGITAL TECH & SOCIAL MEDIA IN LEARNING ENV ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":8495}
        ,
        {"faculty":"EDUC","classNum":"460","title":"Child Studies Field Experience:  Child and Youth Settings ","section":"A","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8496}
        ,
        {"faculty":"EDUC","classNum":"461","title":"Child Studies Seminar:  Child and Youth Settings ","section":"A","type":"LEC","day":"Fr","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 621 SGW","semester":"Fall 2016","classid":8497}
        ,
        {"faculty":"EDUC","classNum":"361","title":"Inclusive Practices in Early Childhood Settings ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 423 SGW","semester":"Fall 2016","classid":8498}
        ,
        {"faculty":"GEOG","classNum":"321","title":"A World of Food ","section":"A","type":"LEC","day":"MoWe","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 520 SGW","semester":"Fall 2016","classid":8499}
        ,
        {"faculty":"GEOG","classNum":"323","title":"URBAN AGRICULTURE ","section":"BB","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 820 SGW","semester":"Fall 2016","classid":8500}
        ,
        {"faculty":"GEOG","classNum":"374","title":"PLANT ECOLOGY ","section":"X","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 937 SGW","semester":"Fall 2016","classid":8501}
        ,
        {"faculty":"GEOG","classNum":"374","title":"PLANT ECOLOGY ","section":"X A","type":"LAB","day":"Tu","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 1271 SGW","semester":"Fall 2016","classid":8502}
        ,
        {"faculty":"GEOG","classNum":"374","title":"PLANT ECOLOGY ","section":"X B","type":"LAB","day":"Th","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 1271 SGW","semester":"Fall 2016","classid":8503}
        ,
        {"faculty":"URBS","classNum":"498","title":"ADV TOPICS/URBAN STUDIES ","section":"AA","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 1271 SGW","semester":"Fall 2016","classid":8509}
        ,
        {"faculty":"URBS","classNum":"260","title":"Analytical Methods in Urban Studies ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"MB S2.210 SGW","semester":"Fall 2016","classid":8510}
        ,
        {"faculty":"URBS","classNum":"260","title":"Analytical Methods in Urban Studies ","section":"X A","type":"LAB","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1267 SGW","semester":"Fall 2016","classid":8511}
        ,
        {"faculty":"URBS","classNum":"260","title":"Analytical Methods in Urban Studies ","section":"X B","type":"LAB","day":"Mo","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 1267 SGW","semester":"Fall 2016","classid":8512}
        ,
        {"faculty":"URBS","classNum":"260","title":"Analytical Methods in Urban Studies ","section":"X C","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 1267 SGW","semester":"Fall 2016","classid":8513}
        ,
        {"faculty":"URBS","classNum":"260","title":"Analytical Methods in Urban Studies ","section":"X D","type":"LAB","day":"We","timeBegin":"11:45AM","timeEnd":"1:00PM","room":"H 1267 SGW","semester":"Fall 2016","classid":8514}
        ,
        {"faculty":"ARTH","classNum":"270","title":"Icons of Architectural History ","section":"A","type":"LEC","day":"Th","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":8520}
        ,
        {"faculty":"ARTH","classNum":"283","title":"The Life and Work of ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":8521}
        ,
        {"faculty":"ARTH","classNum":"352","title":"Studies in the History of Fibre Art ","section":"A","type":"LEC","day":"We","timeBegin":"9:00AM","timeEnd":"11:30AM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":8522}
        ,
        {"faculty":"ARTH","classNum":"370","title":"Studies in Canadian Art ","section":"A","type":"LEC","day":"Mo","timeBegin":"12:15PM","timeEnd":"2:45PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":8524}
        ,
        {"faculty":"ARTH","classNum":"376","title":"Topics in Amerindian and Inuit Art ","section":"A","type":"LEC","day":"We","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":8525}
        ,
        {"faculty":"ARTH","classNum":"389","title":"Issues in Ethnocultural Art Histories ","section":"A","type":"LEC","day":"Th","timeBegin":"12:15PM","timeEnd":"2:45PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":8527}
        ,
        {"faculty":"ARTH","classNum":"392","title":"GENDER ISSUES IN ART & ARTH ","section":"A","type":"LEC","day":"Mo","timeBegin":"3:00PM","timeEnd":"5:30PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":8528}
        ,
        {"faculty":"ARTH","classNum":"364","title":"Studies in Renaissance Art and Architecture ","section":"A","type":"LEC","day":"Th","timeBegin":"12:15PM","timeEnd":"2:45PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":8531}
        ,
        {"faculty":"FMST","classNum":"335","title":"ASPECTS OF NATIONAL CINEMAS ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"VA 114 SGW","semester":"Fall 2016","classid":8534}
        ,
        {"faculty":"FMPR","classNum":"335","title":"Acting and Directing Acting for the Screen I ","section":"A","type":"STU","day":"Mo","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"FB 405 SGW","semester":"Fall 2016","classid":8535}
        ,
        {"faculty":"FMPR","classNum":"335","title":"Acting and Directing Acting for the Screen I ","section":"B","type":"STU","day":"Tu","timeBegin":"8:45AM","timeEnd":"12:45PM","room":"FB 405 SGW","semester":"Fall 2016","classid":8536}
        ,
        {"faculty":"FMPR","classNum":"440","title":"Sound II ","section":"A","type":"STU","day":"Th","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"FB 407 SGW","semester":"Fall 2016","classid":8537}
        ,
        {"faculty":"FMPR","classNum":"498","title":"SPECIAL TOPICS IN FMPR ","section":"AA","type":"STU","day":"We","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"FB 405 SGW","semester":"Fall 2016","classid":8538}
        ,
        {"faculty":"CART","classNum":"215","title":"Introduction to Game Design ","section":"A","type":"STU","day":"Tu","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 7.735 SGW","semester":"Fall 2016","classid":8539}
        ,
        {"faculty":"CART","classNum":"351","title":"Networks and Navigation ","section":"B","type":"STU","day":"Fr","timeBegin":"1:30PM","timeEnd":"3:30PM\nFr","room":"EV 5.615 SGW\nEV 5.635 SGW","semester":"Fall 2016","classid":8540}
        ,
        {"faculty":"CART","classNum":"361","title":"3D Digital Production I ","section":"B","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"3:30PM\nWe","room":"EV 5.615 SGW\nEV 5.635 SGW","semester":"Fall 2016","classid":8541}
        ,
        {"faculty":"DART","classNum":"398","title":"SPECIAL TOPICS IN DESIGN ","section":"A","type":"STU","day":"Tu","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 5.635 SGW","semester":"Fall 2016","classid":8543}
        ,
        {"faculty":"DART","classNum":"498","title":"SPECIAL TOPICS IN DESIGN ","section":"A","type":"STU","day":"We","timeBegin":"8:30AM","timeEnd":"10:30AM\nWe","room":"EV 7.745 SGW\nEV 5.635 SGW","semester":"Fall 2016","classid":8544}
        ,
        {"faculty":"DART","classNum":"498","title":"SPECIAL TOPICS IN DESIGN ","section":"B","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 7.735 SGW","semester":"Fall 2016","classid":8554}
        ,
        {"faculty":"MUSI","classNum":"351","title":"Analysis ","section":"A","type":"LEC","day":"TuTh","timeBegin":"9:00AM","timeEnd":"10:30AM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":8555}
        ,
        {"faculty":"MUSI","classNum":"363","title":"SONGWRITING II ","section":"A","type":"LEC","day":"WeFr","timeBegin":"10:30AM","timeEnd":"12:00PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":8556}
        ,
        {"faculty":"JAZZ","classNum":"352","title":"JAZZ ANALYSIS ","section":"A","type":"LEC","day":"TuTh","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"MB 8.101 SGW","semester":"Fall 2016","classid":8557}
        ,
        {"faculty":"EAST","classNum":"452","title":"Advanced Recording II ","section":"01","type":"STU","day":"Mo","timeBegin":"1:00PM","timeEnd":"4:00PM","room":"PT 203 LOY","semester":"Fall 2016","classid":8558}
        ,
        {"faculty":"JAZZ","classNum":"252","title":"JAZZ HARMONY I ","section":"A","type":"LEC","day":"TuTh","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"MB 8.135 SGW","semester":"Fall 2016","classid":8559}
        ,
        {"faculty":"JAZZ","classNum":"303","title":"JAZZ ARRANGING I ","section":"A","type":"LEC","day":"MoWe","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"MB 8.101 SGW","semester":"Fall 2016","classid":8560}
        ,
        {"faculty":"JHIS","classNum":"314","title":"JAZZ HISTORY ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"MB 8.101 SGW","semester":"Fall 2016","classid":8561}
        ,
        {"faculty":"MHIS","classNum":"314","title":"JAZZ HISTORY ","section":"A","type":"LEC","day":"MoWe","timeBegin":"4:00PM","timeEnd":"5:30PM","room":"MB 8.101 SGW","semester":"Fall 2016","classid":8562}
        ,
        {"faculty":"MHIS","classNum":"331","title":"AESTHETICS AND MUSICAL STYLE ","section":"A","type":"LEC","day":"We","timeBegin":"12:30PM","timeEnd":"3:30PM","room":"MB 8.255 SGW","semester":"Fall 2016","classid":8563}
        ,
        {"faculty":"MUSI","classNum":"421","title":"Research in Music ","section":"AA","type":"SEM","day":"Th","timeBegin":"6:00PM","timeEnd":"9:00PM","room":"MB 8.265 SGW","semester":"Fall 2016","classid":8566}
        ,
        {"faculty":"ENGL","classNum":"240","title":"Drama ","section":"A","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 501 SGW","semester":"Fall 2016","classid":8569}
        ,
        {"faculty":"COMM","classNum":"217","title":"Financial Accounting ","section":"F","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.330 SGW","semester":"Fall 2016","classid":8570}
        ,
        {"faculty":"POLI","classNum":"345","title":"Contemporary Political Philosophy ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 605 SGW","semester":"Fall 2016","classid":8571}
        ,
        {"faculty":"POLI","classNum":"423","title":"PEACE STUDIES&GLOB GOVERNANC ","section":"A","type":"SEM","day":"Mo","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 632 SGW","semester":"Fall 2016","classid":8572}
        ,
        {"faculty":"POLI","classNum":"368","title":"Media, Technology and Politics ","section":"A","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 521 SGW","semester":"Fall 2016","classid":8573}
        ,
        {"faculty":"POLI","classNum":"488","title":"ADV SEM/CDN & QUE POLITICS ","section":"A","type":"SEM","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 429 SGW","semester":"Fall 2016","classid":8574}
        ,
        {"faculty":"FINA","classNum":"230","title":"Introduction to Financial Management ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":8575}
        ,
        {"faculty":"FINA","classNum":"395","title":"Theory of Finance II ","section":"E","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.210 SGW","semester":"Fall 2016","classid":8576}
        ,
        {"faculty":"ARTH","classNum":"298","title":"TOPICS IN GENRE STUDIES ","section":"AA","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":8577}
        ,
        {"faculty":"POLI","classNum":"391","title":"Middle East & Global Conflict ","section":"A","type":"LEC","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 605 SGW","semester":"Fall 2016","classid":8578}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"I","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":8579}
        ,
        {"faculty":"COMM","classNum":"210","title":"Contemporary Business Thinking ","section":"Q","type":"LEC","day":"Th","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB 5.255 SGW","semester":"Fall 2016","classid":8580}
        ,
        {"faculty":"LING","classNum":"490","title":"HONOURS TUTORIAL ","section":"A","type":"TUT","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8582}
        ,
        {"faculty":"EAST","classNum":"466","title":"Capstone Recording Project II ","section":"01","type":"STU","day":"Mo","timeBegin":"1:00PM","timeEnd":"4:00PM","room":"PT 203 LOY","semester":"Fall 2016","classid":8583}
        ,
        {"faculty":"MANA","classNum":"481","title":"Introduction to Management Consulting ","section":"A","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB 2.435 SGW","semester":"Fall 2016","classid":8584}
        ,
        {"faculty":"CATS","classNum":"210","title":"Introduction to Creative Arts Therapies ","section":"A","type":"LEC","day":"Th","timeBegin":"4:15PM","timeEnd":"6:45PM","room":"GN M100 SGW","semester":"Fall 2016","classid":8586}
        ,
        {"faculty":"BSTA","classNum":"378","title":"STAT. MODELS-DATA ANALYSIS ","section":"A","type":"LEC","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.115 SGW","semester":"Fall 2016","classid":8587}
        ,
        {"faculty":"BTM","classNum":"200","title":"FUNDMNTLS OF INFO TECHNOLOGY ","section":"A","type":"LEC","day":"Mo","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S1.435 SGW","semester":"Fall 2016","classid":8588}
        ,
        {"faculty":"BTM","classNum":"481","title":"Information Systems Analysis ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 603-1 SGW","semester":"Fall 2016","classid":8589}
        ,
        {"faculty":"FBRS","classNum":"341","title":"Intermediate Fibre Structures ","section":"A","type":"STU","day":"Th","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"EV 9.745 SGW","semester":"Fall 2016","classid":8592}
        ,
        {"faculty":"FBRS","classNum":"361","title":"INTERM. TEXT.PRINTING/DYEING ","section":"A","type":"STU","day":"Fr","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 9.731 SGW","semester":"Fall 2016","classid":8593}
        ,
        {"faculty":"PHOT","classNum":"398","title":"SPECIAL TOPICS IN PHOTO ","section":"B","type":"STU","day":"Fr","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 3.635 SGW","semester":"Fall 2016","classid":8596}
        ,
        {"faculty":"PHOT","classNum":"498","title":"SPECIAL TOPICS IN PHOTO ","section":"AA","type":"LEC","day":"We","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 3.635 SGW","semester":"Fall 2016","classid":8597}
        ,
        {"faculty":"PRIN","classNum":"391","title":"Contemporary Relief and Woodcut II ","section":"AA","type":"STU","day":"We","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 9.655 SGW","semester":"Fall 2016","classid":8598}
        ,
        {"faculty":"PRIN","classNum":"451","title":"Advanced Projects in Print Media I ","section":"A","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"EV 9.615 SGW","semester":"Fall 2016","classid":8599}
        ,
        {"faculty":"PRIN","classNum":"498","title":"Special Topics in Print Media ","section":"AA","type":"LEC","day":"We","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"EV 9.655 SGW","semester":"Fall 2016","classid":8600}
        ,
        {"faculty":"MARK","classNum":"452","title":"e-Marketing ","section":"A","type":"LEC","day":"Th","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"MB S2.401 SGW","semester":"Fall 2016","classid":8601}
        ,
        {"faculty":"ACTT","classNum":"209","title":"The Engaged Theatre Artist ","section":"01","type":"STU","day":"WeTh","timeBegin":"8:30AM","timeEnd":"11:00AM","room":"FC 00010 LOY","semester":"Fall 2016","classid":8603}
        ,
        {"faculty":"ACTT","classNum":"209","title":"The Engaged Theatre Artist ","section":"0101","type":"LAB","day":"MoTu","timeBegin":"8:30AM","timeEnd":"10:30AM\nWeTh","room":"FC 00010 LOY\nFC 00010 LOY","semester":"Fall 2016","classid":8604}
        ,
        {"faculty":"ACTT","classNum":"211","title":"Voice and Movement Foundation ","section":"A","type":"STU","day":"Mo","timeBegin":"2:30PM","timeEnd":"5:15PM\nTh","room":"MB 7.101 SGW\nMB 7.270 SGW","semester":"Fall 2016","classid":8605}
        ,
        {"faculty":"ACTT","classNum":"211","title":"Voice and Movement Foundation ","section":"A A","type":"LAB","day":"Tu","timeBegin":"2:30PM","timeEnd":"5:30PM","room":"MB 7.270 SGW","semester":"Fall 2016","classid":8606}
        ,
        {"faculty":"ACTT","classNum":"211","title":"Voice and Movement Foundation ","section":"B","type":"STU","day":"Mo","timeBegin":"2:30PM","timeEnd":"5:15PM\nTh","room":"MB 7.425 SGW\nMB 7.101 SGW","semester":"Fall 2016","classid":8607}
        ,
        {"faculty":"ACTT","classNum":"211","title":"Voice and Movement Foundation ","section":"B B","type":"LAB","day":"Tu","timeBegin":"2:30PM","timeEnd":"5:30PM","room":"MB 7.101 SGW","semester":"Fall 2016","classid":8608}
        ,
        {"faculty":"ACTT","classNum":"321","title":"Movement for the Stage ","section":"A","type":"STU","day":"WeFr","timeBegin":"10:30AM","timeEnd":"1:15PM","room":"MB 7.270 SGW","semester":"Fall 2016","classid":8609}
        ,
        {"faculty":"ACTT","classNum":"325","title":"Voice for the Stage ","section":"A","type":"STU","day":"TuTh","timeBegin":"10:30AM","timeEnd":"1:15PM","room":"MB 7.270 SGW","semester":"Fall 2016","classid":8611}
        ,
        {"faculty":"ACTT","classNum":"358","title":"Intensive Movement Studio ","section":"A","type":"STU","day":"MoWe","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"MB 7.270 SGW","semester":"Fall 2016","classid":8612}
        ,
        {"faculty":"ACTT","classNum":"358","title":"Intensive Movement Studio ","section":"A A","type":"LAB","day":"Tu","timeBegin":"2:30PM","timeEnd":"5:15PM","room":"MB 7.401 SGW","semester":"Fall 2016","classid":8613}
        ,
        {"faculty":"ACTT","classNum":"360","title":"Ensemble II ","section":"01","type":"STU","day":"MoWe","timeBegin":"2:30PM","timeEnd":"5:15PM","room":"FC 00010 LOY","semester":"Fall 2016","classid":8614}
        ,
        {"faculty":"ACTT","classNum":"398","title":"Special Topics in Acting ","section":"01","type":"STU","day":"TuTh","timeBegin":"3:00PM","timeEnd":"5:45PM","room":"FC 00010 LOY","semester":"Fall 2016","classid":8615}
        ,
        {"faculty":"ACTT","classNum":"398","title":"Special Topics in Acting ","section":"A","type":"STU","day":"Mo","timeBegin":"11:00AM","timeEnd":"1:45PM\nWe","room":"MB 7.270 SGW\nMB 7.101 SGW","semester":"Fall 2016","classid":8616}
        ,
        {"faculty":"ACTT","classNum":"398","title":"Special Topics in Acting ","section":"AA","type":"STU","day":"Mo","timeBegin":"6:30PM","timeEnd":"9:30PM\nFr","room":"MB 7.270 SGW\nMB 7.401 SGW","semester":"Fall 2016","classid":8617}
        ,
        {"faculty":"ACTT","classNum":"498","title":"Special Topics in Acting ","section":"A","type":"STU","day":"TuTh","timeBegin":"10:30AM","timeEnd":"1:15PM","room":"MB 7.425 SGW","semester":"Fall 2016","classid":8621}
        ,
        {"faculty":"DFTT","classNum":"211","title":"Drawing for the Theatre ","section":"A","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"GM 530 SGW","semester":"Fall 2016","classid":8625}
        ,
        {"faculty":"DFTT","classNum":"301","title":"Introduction to Designer's Studio: Conception ","section":"A","type":"STU","day":"Fr","timeBegin":"8:30AM","timeEnd":"12:15PM","room":"GM 520 SGW","semester":"Fall 2016","classid":8626}
        ,
        {"faculty":"DFTT","classNum":"311","title":"Lighting Design ","section":"A","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"GM 550 SGW","semester":"Fall 2016","classid":8627}
        ,
        {"faculty":"DFTT","classNum":"335","title":"Set Design Realization ","section":"A","type":"STU","day":"Tu","timeBegin":"8:30AM","timeEnd":"12:30PM","room":"GM 520 SGW","semester":"Fall 2016","classid":8628}
        ,
        {"faculty":"DFTT","classNum":"350","title":"Introduction to Public Performance Design ","section":"A","type":"STU","day":"Th","timeBegin":"8:30AM","timeEnd":"12:15PM","room":"GM 520 SGW","semester":"Fall 2016","classid":8629}
        ,
        {"faculty":"DFTT","classNum":"351","title":"Introduction to Public Performance Design ","section":"A","type":"STU","day":"Th","timeBegin":"8:30AM","timeEnd":"12:15PM","room":"GM 520 SGW","semester":"Fall 2016","classid":8630}
        ,
        {"faculty":"DFTT","classNum":"451","title":"Advanced Public Performance Design ","section":"A","type":"STU","day":"Th","timeBegin":"8:30AM","timeEnd":"12:15PM","room":"GM 520 SGW","semester":"Fall 2016","classid":8631}
        ,
        {"faculty":"DFTT","classNum":"370","title":"Introduction to Elements of Production ","section":"A","type":"STU","day":"Fr","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"GM 530 SGW","semester":"Fall 2016","classid":8632}
        ,
        {"faculty":"DFTT","classNum":"371","title":"Introduction to Elements of Production ","section":"A","type":"STU","day":"Fr","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"GM 530 SGW","semester":"Fall 2016","classid":8633}
        ,
        {"faculty":"DFTT","classNum":"470","title":"Advanced Elements of Production ","section":"A","type":"STU","day":"Fr","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"GM 530 SGW","semester":"Fall 2016","classid":8634}
        ,
        {"faculty":"DFTT","classNum":"471","title":"Advanced Elements of Production ","section":"A","type":"STU","day":"Fr","timeBegin":"12:30PM","timeEnd":"2:00PM","room":"GM 530 SGW","semester":"Fall 2016","classid":8635}
        ,
        {"faculty":"PERC","classNum":"306","title":"Theatre History and Theory, 1800 to Present ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:30PM","timeEnd":"9:30PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":8636}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"Y YC","type":"TUT","day":"Mo","timeBegin":"4:30PM","timeEnd":"5:20PM","room":"TBA","semester":"Fall 2016","classid":8637}
        ,
        {"faculty":"MECH","classNum":"215","title":"Programming for Mechanical and Industrial Engineers ","section":"YM","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"6:35PM","room":"TBA","semester":"Fall 2016","classid":8638}
        ,
        {"faculty":"POLI","classNum":"319","title":"EUROPEAN POLITICS&GOV T. ","section":"A","type":"LEC","day":"TuTh","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"FG B030 SGW","semester":"Fall 2016","classid":8640}
        ,
        {"faculty":"FFAR","classNum":"298","title":"SPECIAL TOPICS IN FINE ARTS ","section":"BB","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"EV 1.615 SGW","semester":"Fall 2016","classid":8641}
        ,
        {"faculty":"SOCI","classNum":"336","title":"COLLECTIVE ACTION ","section":"A","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG B030 SGW","semester":"Fall 2016","classid":8642}
        ,
        {"faculty":"SOCI","classNum":"362","title":"Crime and Justice ","section":"A","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG B030 SGW","semester":"Fall 2016","classid":8643}
        ,
        {"faculty":"POLI","classNum":"489","title":"ADVANCED SEMINAR IN PUBLIC POLICY ","section":"B","type":"SEM","day":"We","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"H 632 SGW","semester":"Fall 2016","classid":8644}
        ,
        {"faculty":"FMPR","classNum":"336","title":"Introduction to Film Producing ","section":"AA","type":"LEC","day":"Mo","timeBegin":"6:00PM","timeEnd":"10:00PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":8645}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"PP","type":"LEC","day":"Th","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"H 1070 SGW","semester":"Fall 2016","classid":8648}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"PPPA","type":"TUT","day":"Th","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"MB 2.265 SGW","semester":"Fall 2016","classid":8649}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"PPPB","type":"TUT","day":"Th","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"MB S1.105 SGW","semester":"Fall 2016","classid":8650}
        ,
        {"faculty":"COMP","classNum":"232","title":"Mathematics for Computer Science ","section":"PPPC","type":"TUT","day":"Th","timeBegin":"8:30PM","timeEnd":"10:10PM","room":"MB S2.105 SGW","semester":"Fall 2016","classid":8651}
        ,
        {"faculty":"FMST","classNum":"498","title":"SPECIAL TOPICS IN FMST ","section":"A","type":"LEC","day":"Fr","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"FB 411 SGW","semester":"Fall 2016","classid":8653}
        ,
        {"faculty":"FMAN","classNum":"353","title":"Principles of 3D Digital Film Animation ","section":"A","type":"STU","day":"Fr","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"FB 325 SGW","semester":"Fall 2016","classid":8657}
        ,
        {"faculty":"PERC","classNum":"209","title":"The Engaged Theatre Artist ","section":"01","type":"STU","day":"MoTu","timeBegin":"8:30AM","timeEnd":"10:30AM","room":"FC 00012 LOY","semester":"Fall 2016","classid":8659}
        ,
        {"faculty":"PERC","classNum":"209","title":"The Engaged Theatre Artist ","section":"0101","type":"LAB","day":"WeTh","timeBegin":"8:30AM","timeEnd":"11:00AM","room":"FC 00012 LOY","semester":"Fall 2016","classid":8660}
        ,
        {"faculty":"PERC","classNum":"212","title":"Dramaturgy I ","section":"01","type":"LEC","day":"MoTu","timeBegin":"11:00AM","timeEnd":"12:30PM","room":"FC 00010 LOY","semester":"Fall 2016","classid":8661}
        ,
        {"faculty":"PERC","classNum":"311","title":"Directing I ","section":"AA","type":"STU","day":"Tu","timeBegin":"6:30PM","timeEnd":"9:30PM","room":"MB 7.425 SGW","semester":"Fall 2016","classid":8662}
        ,
        {"faculty":"PERC","classNum":"312","title":"Dramaturgy II ","section":"A","type":"LEC","day":"Fr","timeBegin":"9:30AM","timeEnd":"12:30PM","room":"MB 7.101 SGW","semester":"Fall 2016","classid":8663}
        ,
        {"faculty":"PERC","classNum":"318","title":"Playwriting I ","section":"A","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"MB 7.401 SGW","semester":"Fall 2016","classid":8664}
        ,
        {"faculty":"PERC","classNum":"323","title":"Post-Colonial Theory and Practice ","section":"A","type":"LEC","day":"Mo","timeBegin":"2:30PM","timeEnd":"5:30PM","room":"MB 7.401 SGW","semester":"Fall 2016","classid":8665}
        ,
        {"faculty":"PERC","classNum":"351","title":"Community Arts: The Art of Engagement ","section":"A","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"MB 7.425 SGW","semester":"Fall 2016","classid":8666}
        ,
        {"faculty":"PERC","classNum":"353","title":"Storytelling and Oral Histories ","section":"A","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"MB 7.401 SGW","semester":"Fall 2016","classid":8667}
        ,
        {"faculty":"PERC","classNum":"384","title":"Collective Creation ","section":"A","type":"STU","day":"We","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"MB 7.425 SGW","semester":"Fall 2016","classid":8668}
        ,
        {"faculty":"PERC","classNum":"384","title":"Collective Creation ","section":"A AA","type":"LAB","day":"Fr","timeBegin":"6:30PM","timeEnd":"9:30PM","room":"MB 7.425 SGW","semester":"Fall 2016","classid":8669}
        ,
        {"faculty":"PERC","classNum":"386","title":"Interdisciplinary Approaches to Performance Creation ","section":"A","type":"STU","day":"Tu","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"MB 7.425 SGW","semester":"Fall 2016","classid":8670}
        ,
        {"faculty":"PERC","classNum":"386","title":"Interdisciplinary Approaches to Performance Creation ","section":"A AA","type":"LAB","day":"We","timeBegin":"6:30PM","timeEnd":"9:30PM","room":"MB 7.425 SGW","semester":"Fall 2016","classid":8671}
        ,
        {"faculty":"PERC","classNum":"390","title":"Performance Creation Studio ","section":"0101","type":"LAB","day":"TuTh","timeBegin":"6:30PM","timeEnd":"10:00PM\nSa","room":"FC 00012 LOY\nFC 00012 LOY\nFC 00012 LOY\nFC 00012 LOY\nFC 00012 LOY","semester":"Fall 2016","classid":8673}
        ,
        {"faculty":"SOCI","classNum":"298","title":"SELECTED TOPICS IN SOCIOLOGY ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":8674}
        ,
        {"faculty":"PERC","classNum":"398","title":"Special Topics in Performance Creation ","section":"AA","type":"SEM","day":"Mo","timeBegin":"6:30PM","timeEnd":"9:30PM","room":"MB 7.101 SGW","semester":"Fall 2016","classid":8675}
        ,
        {"faculty":"PERC","classNum":"398","title":"Special Topics in Performance Creation ","section":"A","type":"SEM","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"H 1011 SGW","semester":"Fall 2016","classid":8676}
        ,
        {"faculty":"PERC","classNum":"405","title":"Independent Study I ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8677}
        ,
        {"faculty":"PERC","classNum":"408","title":"Supervised Internship I ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8678}
        ,
        {"faculty":"PERC","classNum":"409","title":"Supervised Internship II ","section":"AA","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8679}
        ,
        {"faculty":"PERC","classNum":"415","title":"Independent Study II ","section":"AA","type":"LEC","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8680}
        ,
        {"faculty":"PERC","classNum":"471","title":"Directing II ","section":"AA","type":"STU","day":"Tu","timeBegin":"6:30PM","timeEnd":"9:30PM","room":"MB 7.425 SGW","semester":"Fall 2016","classid":8681}
        ,
        {"faculty":"PERC","classNum":"482","title":"The Artist-in-Residence ","section":"A","type":"STU","day":"Th","timeBegin":"1:30PM","timeEnd":"5:30PM","room":"GM 520 SGW","semester":"Fall 2016","classid":8682}
        ,
        {"faculty":"ELEC","classNum":"442","title":"Digital Signal Processing ","section":"W","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 603-1 SGW","semester":"Fall 2016","classid":8684}
        ,
        {"faculty":"ELEC","classNum":"442","title":"Digital Signal Processing ","section":"WI","type":"X","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM\nFr","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8685}
        ,
        {"faculty":"ELEC","classNum":"442","title":"Digital Signal Processing ","section":"WJ","type":"X","day":"Fr","timeBegin":"2:45PM","timeEnd":"5:30PM\nFr","room":"TBA\nTBA\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8686}
        ,
        {"faculty":"LBCL","classNum":"298","title":"LBCL SELECTED TOPICS ","section":"A","type":"LEC","day":"TuTh","timeBegin":"10:15AM","timeEnd":"11:30AM","room":"H 411 SGW","semester":"Fall 2016","classid":8687}
        ,
        {"faculty":"THEO","classNum":"331","title":"The Christian Understanding of God ","section":"A","type":"LEC","day":"Tu","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 521 SGW","semester":"Fall 2016","classid":8693}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"TZ","type":"X","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8695}
        ,
        {"faculty":"MECH","classNum":"352","title":"Heat Transfer I ","section":"XZ","type":"X","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8696}
        ,
        {"faculty":"MECH","classNum":"361","title":"Fluid Mechanics II ","section":"FZ","type":"X","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8697}
        ,
        {"faculty":"FFAR","classNum":"298","title":"SPECIAL TOPICS IN FINE ARTS ","section":"CC","type":"LEC","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"EV 1.605 SGW","semester":"Fall 2016","classid":8698}
        ,
        {"faculty":"GEOG","classNum":"418","title":"Geographies of Postcolonialism ","section":"A","type":"SEM","day":"Th","timeBegin":"1:15PM","timeEnd":"4:00PM","room":"H 1269 SGW","semester":"Fall 2016","classid":8699}
        ,
        {"faculty":"GEOL","classNum":"206","title":"Earthquakes, Volcanoes, and Plate Tectonics ","section":"AA","type":"LEC","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 937 SGW","semester":"Fall 2016","classid":8701}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"FFFB","type":"TUT","day":"Fr","timeBegin":"11:45AM","timeEnd":"1:25PM","room":"TBA","semester":"Fall 2016","classid":8703}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"FI","type":"X","day":"Mo","timeBegin":"7:45PM","timeEnd":"8:45PM","room":"TBA","semester":"Fall 2016","classid":8704}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"FJ","type":"X","day":"Fr","timeBegin":"10:15AM","timeEnd":"11:15AM","room":"TBA","semester":"Fall 2016","classid":8705}
        ,
        {"faculty":"COMP","classNum":"248","title":"Object-Oriented Programming I ","section":"FK","type":"X","day":"Fr","timeBegin":"8:30PM","timeEnd":"9:30PM","room":"TBA","semester":"Fall 2016","classid":8706}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"E","type":"LEC","day":"MoWe","timeBegin":"2:45PM","timeEnd":"4:00PM","room":"H 1070 SGW","semester":"Fall 2016","classid":8707}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"E EA","type":"TUT","day":"Mo","timeBegin":"12:45PM","timeEnd":"2:35PM","room":"TBA","semester":"Fall 2016","classid":8708}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"E EB","type":"TUT","day":"We","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"TBA","semester":"Fall 2016","classid":8709}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"E EC","type":"TUT","day":"Mo","timeBegin":"4:15PM","timeEnd":"5:55PM","room":"TBA","semester":"Fall 2016","classid":8710}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"EI","type":"X","day":"Mo","timeBegin":"6:15PM","timeEnd":"7:15PM","room":"TBA","semester":"Fall 2016","classid":8711}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"EJ","type":"X","day":"We","timeBegin":"6:15PM","timeEnd":"7:15PM","room":"TBA","semester":"Fall 2016","classid":8712}
        ,
        {"faculty":"COMP","classNum":"249","title":"Object-Oriented Programming II ","section":"EK","type":"X","day":"We","timeBegin":"7:30PM","timeEnd":"8:30PM","room":"TBA","semester":"Fall 2016","classid":8713}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"W","type":"LEC","day":"MoWe","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"FG B050 SGW","semester":"Fall 2016","classid":8714}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"W WA","type":"TUT","day":"Mo","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"TBA","semester":"Fall 2016","classid":8715}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"W WB","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"TBA","semester":"Fall 2016","classid":8716}
        ,
        {"faculty":"COMP","classNum":"348","title":"Principles of Programming Languages ","section":"W WC","type":"TUT","day":"We","timeBegin":"10:15AM","timeEnd":"11:05AM","room":"TBA","semester":"Fall 2016","classid":8717}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"D","type":"LEC","day":"WeFr","timeBegin":"1:15PM","timeEnd":"2:30PM","room":"H 535 SGW","semester":"Fall 2016","classid":8718}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"D DA","type":"TUT","day":"Fr","timeBegin":"2:45PM","timeEnd":"3:35PM","room":"H 615 SGW","semester":"Fall 2016","classid":8719}
        ,
        {"faculty":"COMP","classNum":"352","title":"Data Structures and Algorithms ","section":"D DB","type":"TUT","day":"Mo","timeBegin":"11:45AM","timeEnd":"12:35PM","room":"H 615 SGW","semester":"Fall 2016","classid":8720}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"F","type":"LEC","day":"Mo","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 553 SGW","semester":"Fall 2016","classid":8722}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"F FA","type":"TUT","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"TBA","semester":"Fall 2016","classid":8723}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"F FB","type":"TUT","day":"Tu","timeBegin":"8:45AM","timeEnd":"10:35AM","room":"TBA","semester":"Fall 2016","classid":8724}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"FI","type":"X","day":"Mo","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":8725}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"FJ","type":"X","day":"Mo","timeBegin":"12:00PM","timeEnd":"4:00PM","room":"TBA","semester":"Fall 2016","classid":8726}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"FK","type":"X","day":"Fr","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"TBA","semester":"Fall 2016","classid":8727}
        ,
        {"faculty":"MECH","classNum":"211","title":"Mechanical Engineering Drawing ","section":"FL","type":"X","day":"Fr","timeBegin":"9:00AM","timeEnd":"1:00PM","room":"TBA","semester":"Fall 2016","classid":8728}
        ,
        {"faculty":"ACTT","classNum":"436","title":"Acting Studio ","section":"GA","type":"STU","day":"TuTh","timeBegin":"6:30PM","timeEnd":"8:00PM\nTuTh","room":"MB 7.270 SGW\nH 0052 SGW\nMB 7.270 SGW\nH 0052 SGW\nMB 7.270 SGW\nH 0052 SGW","semester":"Fall 2016","classid":8730}
        ,
        {"faculty":"ACTT","classNum":"436","title":"Acting Studio ","section":"GA A","type":"LAB","day":"Sa","timeBegin":"10:00AM","timeEnd":"11:30AM\nTuTh","room":"MB 7.270 SGW\nMB 7.270 SGW\nMB 7.270 SGW\nH 0052 SGW\nH 0052 SGW\nH 0052 SGW\nH 0052 SGW\nH 0052 SGW\nH 0052 SGW\nH 0052 SGW\nH 0052 SGW\nMB 7.270 SGW\nMB 7.270 SGW\nH 0052 SGW\nH 0052 SGW\nH 0052 SGW","semester":"Fall 2016","classid":8731}
        ,
        {"faculty":"CHEM","classNum":"208","title":"Chemistry in Our Lives ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":8733}
        ,
        {"faculty":"MUSI","classNum":"241","title":"Functional Keyboard Skills ","section":"A","type":"STU","day":"TuTh","timeBegin":"2:15PM","timeEnd":"3:45PM","room":"MB 8.355 SGW","semester":"Fall 2016","classid":8734}
        ,
        {"faculty":"POLI","classNum":"403","title":"GLOBAL ECOPOL. ANALYSIS ","section":"A","type":"LEC","day":"Tu","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"H 632 SGW","semester":"Fall 2016","classid":8739}
        ,
        {"faculty":"FMST","classNum":"424","title":"SEMINAR IN FILM NARRATIVE ","section":"A","type":"SEM","day":"Tu","timeBegin":"1:15PM","timeEnd":"5:15PM","room":"FB 250 SGW","semester":"Fall 2016","classid":8741}
        ,
        {"faculty":"FTRA","classNum":"411","title":"Terminologie et mondialisation ","section":"AA","type":"LEC","day":"We","timeBegin":"6:30PM","timeEnd":"8:45PM","room":"MB 1.301 SGW","semester":"Fall 2016","classid":8744}
        ,
        {"faculty":"PHYS","classNum":"236","title":"Numerical Analysis in Physics ","section":"01","type":"LEC","day":"TuTh","timeBegin":"4:15PM","timeEnd":"5:30PM","room":"CC 425 LOY","semester":"Fall 2016","classid":8745}
        ,
        {"faculty":"MARK","classNum":"458","title":"The Marketing of Food ","section":"AA","type":"LEC","day":"We","timeBegin":"5:45PM","timeEnd":"8:15PM","room":"MB 3.435 SGW","semester":"Fall 2016","classid":8746}
        ,
        {"faculty":"RELI","classNum":"498","title":"ADVANCED TOPICS IN RELIGION ","section":"B","type":"SEM","day":"We","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"R 103 SGW","semester":"Fall 2016","classid":8747}
        ,
        {"faculty":"CHEM","classNum":"341","title":"Inorganic Chemistry III: The Transition Metals ","section":"01","type":"LEC","day":"TuTh","timeBegin":"8:45AM","timeEnd":"10:00AM","room":"CC 405 LOY","semester":"Fall 2016","classid":8748}
        ,
        {"faculty":"CHEM","classNum":"341","title":"Inorganic Chemistry III: The Transition Metals ","section":"0151","type":"LAB","day":"Tu","timeBegin":"6:30PM","timeEnd":"10:30PM","room":"TBA","semester":"Fall 2016","classid":8751}
        ,
        {"faculty":"CHEM","classNum":"341","title":"Inorganic Chemistry III: The Transition Metals ","section":"0156","type":"LAB","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8752}
        ,
        {"faculty":"RELI","classNum":"498","title":"ADVANCED TOPICS IN RELIGION ","section":"Z","type":"SEM","day":"Th","timeBegin":"2:30PM","timeEnd":"4:45PM","room":"TBA","semester":"Fall 2016","classid":8755}
        ,
        {"faculty":"RELI","classNum":"498","title":"ADVANCED TOPICS IN RELIGION ","section":"F","type":"SEM","day":"Tu","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"Academic scheduling use only","semester":"Fall 2016","classid":8757}
        ,
        {"faculty":"ACTT","classNum":"436","title":"Acting Studio ","section":"GB","type":"STU","day":"We","timeBegin":"6:30PM","timeEnd":"8:00PM\nFr","room":"MB 7.270 SGW\nMB 7.101 SGW\nTBA\nTBA\nTBA\nTBA","semester":"Fall 2016","classid":8760}
        ,
        {"faculty":"EDUC","classNum":"395","title":"Internship III: Kindergarten Teaching ","section":"DD","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8769}
        ,
        {"faculty":"EDUC","classNum":"305","title":"TECHNOLOGY FOR EDUC CHANGE ","section":"EC","type":"LEC","day":"TBA","room":"ONLINE","semester":"Fall 2016","classid":8770}
        ,
        {"faculty":"DFTT","classNum":"301","title":"Introduction to Designer's Studio: Conception ","section":"A A","type":"LAB","day":"Fr","timeBegin":"2:30PM","timeEnd":"4:00PM","room":"GM 530 SGW","semester":"Fall 2016","classid":8771}
        ,
        {"faculty":"DFTT","classNum":"401","title":"Advanced Designer's Studio: Conception ","section":"A A","type":"LAB","day":"Fr","timeBegin":"2:30PM","timeEnd":"4:00PM","room":"GM 530 SGW","semester":"Fall 2016","classid":8772}
        ,
        {"faculty":"DFTT","classNum":"402","title":"DESIGN. STUDIO II:CONCEPTION ","section":"A A","type":"LAB","day":"Fr","timeBegin":"2:30PM","timeEnd":"4:00PM","room":"GM 530 SGW","semester":"Fall 2016","classid":8773}
        ,
        {"faculty":"ACTT","classNum":"325","title":"Voice for the Stage ","section":"B","type":"STU","day":"WeFr","timeBegin":"10:30AM","timeEnd":"1:15PM","room":"MB 7.425 SGW","semester":"Fall 2016","classid":8774}
        ,
        {"faculty":"THEO","classNum":"404","title":"PRCTM. PASTORAL MINISTRY ","section":"A","type":"PRA","day":"TBA","room":"TBA","semester":"Fall 2016","classid":8775}
        ,
        {"faculty":"ACTT","classNum":"201","title":"Introduction to Acting I ","section":"51","type":"STU","day":"Mo","timeBegin":"5:40PM","timeEnd":"9:40PM","room":"FC 00012 LOY","semester":"Fall 2016","classid":8778}
        ,
        {"faculty":"EDUC","classNum":"402","title":"Diversity Issues in Childhood ","section":"A","type":"LEC","day":"Th","timeBegin":"8:45AM","timeEnd":"11:30AM","room":"H 403 SGW","semester":"Fall 2016","classid":8779}
        ,
        {"faculty":"EDUC","classNum":"360","title":"Introduction to Inclusive Practices ","section":"A","type":"LEC","day":"Mo","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 820 SGW","semester":"Fall 2016","classid":8780}
        ,
        {"faculty":"EDUC","classNum":"463","title":"Child Studies Seminar: Inclusive Practices in Childhood Settings ","section":"A","type":"SEM","day":"Fr","timeBegin":"11:45AM","timeEnd":"2:30PM","room":"H 619 SGW","semester":"Fall 2016","classid":8781}
        ,
        {"faculty":"POLI","classNum":"487","title":"ADVANCED SEMINAR IN COMPARATIVE POLITICS ","section":"D","type":"SEM","day":"We","timeBegin":"10:15AM","timeEnd":"1:00PM","room":"MB S2.465 SGW","semester":"Fall 2016","classid":8782}
        ,
        {"faculty":"POLI","classNum":"398","title":"SELECTED TOPICS/POLI SC ","section":"AB","type":"LEC","day":"Th","timeBegin":"6:00PM","timeEnd":"8:15PM","room":"H 629 SGW","semester":"Fall 2016","classid":8783}
        ,
        {"faculty":"ELEC","classNum":"440","title":"Controlled Electric Drives ","section":"F","type":"LEC","day":"Tu","timeBegin":"2:45PM","timeEnd":"5:30PM","room":"FG B070 SGW","semester":"Fall 2016","classid":8788}
        ,
        {"faculty":"ELEC","classNum":"440","title":"Controlled Electric Drives ","section":"FI","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM\nMo","room":"H 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW","semester":"Fall 2016","classid":8789}
        ,
        {"faculty":"ELEC","classNum":"440","title":"Controlled Electric Drives ","section":"FJ","type":"X","day":"Mo","timeBegin":"2:45PM","timeEnd":"5:30PM\nMo","room":"H 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW","semester":"Fall 2016","classid":8790}
        ,
        {"faculty":"ELEC","classNum":"440","title":"Controlled Electric Drives ","section":"FK","type":"X","day":"Fr","timeBegin":"2:45PM","timeEnd":"5:30PM\nFr","room":"H 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW","semester":"Fall 2016","classid":8791}
        ,
        {"faculty":"ELEC","classNum":"440","title":"Controlled Electric Drives ","section":"FL","type":"X","day":"Fr","timeBegin":"2:45PM","timeEnd":"5:30PM\nFr","room":"H 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW","semester":"Fall 2016","classid":8792}
        ,
        {"faculty":"ELEC","classNum":"440","title":"Controlled Electric Drives ","section":"FM","type":"X","day":"Mo","timeBegin":"5:45PM","timeEnd":"8:30PM\nMo","room":"H 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW\nH 945 SGW","semester":"Fall 2016","classid":8793}
        ,
        {"faculty":"ACTT","classNum":"360","title":"Ensemble II ","section":"0101","type":"LAB","day":"Sa","timeBegin":"2:00PM","timeEnd":"6:00PM","room":"FC 00010 LOY","semester":"Fall 2016","classid":8795}
    ]

    return {
        courses: function(){
            return courses;
        },
        addCourse: function(course){
            courses.push(course)
        },
        removeCourse: function(id){
            for(var i = 0; i<courses.length; i++){
                if(id == courses[i].id){
                    courses.splice(i, 1)
                }
            }
        },
        selectedCourses: function() {
            var selectedCourses = []
            for(var i = 0; i < courses.length; i++){
                var course = {}
                course.faculty = courses[i].faculty.name
                course.number = courses[i].number
                selectedCourses.push(course)
            }
            return selectedCourses;
        },
        selectedScheduledCourses: function(){
            var selectedScheduledCourses = []
            for(var i =0; i<courses.length;i++){
                var classSections = []
                for(var j =0;j<courseList.length;j++){
                    if((courses[i].faculty.name == courseList[j].faculty) && (courses[i].number == courseList[j].classNum)){
                        classSections.push(courseList[j])
                    }
                }
                selectedScheduledCourses.push(classSections)
            }
            console.log("Scheduled Courses: " + selectedScheduledCourses)
            return selectedScheduledCourses
        }
    };
})