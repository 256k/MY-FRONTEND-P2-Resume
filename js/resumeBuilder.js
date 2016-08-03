var work = {
    "jobs": [{
        "employer": "Vaporus INC",
        "title": "Store Manager",
        "location": "712 St-Catherine O. Montreal, QC.",
        "dates": "2014-2015",
        "description": "Managing a vape store"
    }, {
        "employer": "VMC",
        "title": "QA Tester",
        "location": "Montreal, QC",
        "dates": "2012-2014",
        "description": "End user quality assurance testing"
    }, {
        "employer": "Skateimpact.com",
        "title": "Team Photographer",
        "location": "Cairo, Egypt",
        "dates": "2005-2008",
        "description": "On location photography of the Skate Impact sponsored team using artificial lighting setups"
    }]

};


var projects = {
    "projects": [{
        "title": "Jardin Métis",
        "date": "2015",
        "description": "Volunteer for the CHÂSSI collective team ",
        "images": [
            "images/metis1.png", "images/metis2.png", "images/metis3.png"
        ]
    }, {
        "title": "HXBXI",
        "date": "2015",
        "description": "A DIY 6 square wave analog synth box with patch points",
        "images": [
            "images/hxbxi1.jpg", "images/hxbxi2.jpg", "images/hxbxi3.jpg", "images/hxbxi4.jpg", "images/hxbxi5.jpg"
        ]
    }]
};

var bio = {
    "name": "Fayek Helmi",
    "role": "engineer",
    "contacts": {
        "mobile": "+1 (438) 993-6909",
        "email": "fayek.helmi@gmail.com",
        "github": "256k",
        "twitter": "@fayek",
        "location": "Montreal, QC"
    },
    "biopic": "images/me.jpg",
    "welcome-message": "HEY THERE EVERYONE!!",
    "skills": [
        "programming", "music production", "live performing"
    ]
};

var education = {
    "schools": [{
        "name": "Higher tech Institute",
        "majors": "Mechatronics",
        "degree": "A+",
        "dates": "2004-2010",
        "location": "Cairo, Egypt",
        "url": "http://www.hti.edu.eg/"
    }, {
        "name": "College De La Sainte Famille - Jesuites",
        "majors": "Sciences",
        "degree": "86%",
        "dates": "1994-2004",
        "location": "Cairo, Egypt",
        "url": "www.jesuites.com"
    }],
    "onlinecourses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "Python Language",
        "school": "Coursera",
        "dates": "2015",
        "url": "http://www.coursera.com"
    }, {
        "title": "Internet Of Things",
        "school": "Coursera",
        "dates": "2015",
        "url": "http://www.coursera.com"
    }]
};

bio.display = function() {
    var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedname = HTMLheaderName.replace("%data%", bio.name);
    var imagelink = HTMLbioPic.replace("%data%", bio.biopic);
    var mymobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var myemail = HTMLemail.replace("%data%", bio.contacts.email);
    var mygithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var mytwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var mylocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").prepend(formattedname + formattedrole);
    $("#topContacts").append(mymobile + myemail + mygithub + mytwitter + mylocation);
    $("#header").append(imagelink);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedskill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedskill);
        }
    }
};


work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var workemp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var worktitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var worklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var workdate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var workdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(workemp + worktitle + worklocation + workdate + workdescription);
    }
};


projects.display = function() {
    for (proj in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var projtitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        var projdate = HTMLprojectDates.replace("%data%", projects.projects[proj].date);
        var projdesc = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        $("#projects").append(projtitle + projdate + projdesc);
        for (img in projects.projects[proj].images) {
            var imgurl = HTMLprojectImage.replace("%data%", projects.projects[proj].images[img]);
            $("#projects").append(imgurl);
        }
    }
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var schoolname = HTMLschoolName.replace("%data%",education.schools[school].name );
        var schoolmaj = HTMLschoolMajor.replace("%data%",education.schools[school].majors );
        var schooldates = HTMLschoolDates.replace("%data%",education.schools[school].dates );
        var schooldeg = HTMLschoolDegree.replace("%data%",education.schools[school].degree );
        var schoolloc = HTMLschoolLocation.replace("%data%",education.schools[school].location );
        var schoolinfo = (schoolname + schoolmaj+ schooldeg + schooldates  + schoolloc);
        $("#education").append(schoolinfo);
    };
    for (onschool in education.onlinecourses) {
        var onschoolname = HTMLonlineSchool.replace("%data%",education.onlinecourses[onschool].school );
        var onschooltitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[onschool].title );
        var onschooldates = HTMLonlineDates.replace("%data%",education.onlinecourses[onschool].dates );
        var onschoolurl = HTMLonlineURL.replace("%data%",education.onlinecourses[onschool].url );
        var onlineinfo = (onschooltitle + onschoolname + onschooldates + onschoolurl);
        $("#education").append(onlineinfo);
    }
};


$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();
