// This file containsJavascript objects containing personal information in sections: bio, work, projects and education and functions to display them
// Bio section and display function definition

var model = {

     bio : {
    "name": "Robert King",
    "role": "Web Developer",
    "contacts": {
        "mobile": "07969842583",
        "email": "king.roob@gmail.com",
        "github": "bobrobcpp",
        "location": "London"
    },
    "welcomeMessage": "Welcome, please contact me with any queries.",
    "skills": ["JavaScript", "jQuery", "Knockout.js", "HTML", "CSS", "C#", "Hydrographic Surveying"],
    "biopic": "images/me.jpg"
},

// Education section and display function definition
education : {
    "schools": [{
            "name": "University College London",
            "location": "London",
            "dates": "2010 - 2011",
            "degree": "MSc",
            "majors": ["Hydrographic Surveying"],
            "url": "https://www.ucl.ac.uk/"
        },
        {
            "name": "University of Sheffield",
            "location": "Sheffield",
            "dates": "2006 - 2009",
            "degree": "BA",
            "majors": ["Geography"],
            "url": "https://www.sheffield.ac.uk/"
        }
    ],
    "onlineCourses": [{
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "March 2017-September 2017",
            "url": "https://classroom.udacity.com/me"
        },
        {
            "title": "Networking for Web Developers",
            "school": "Udacity",
            "dates": "March 2017-Present",
            "url": "https://classroom.udacity.com/me"
        }
    ]
},
// Work section and display function definition
    work : {
    "jobs": [{
            "title": "Hydrographic Surveyor",
            "employer": "Freelance",
            "dates": "Dec 2016-Present",
            "location": "London",
            "description": "Navigational surveying and multibeam processing for geophysical surveys"
        },
        {
            "title": "Hydrographic Surveyor",
            "employer": "Gardline Geosurvey",
            "dates": "Jan 2012- Dec 2016",
            "location": "North Sea",
            "description": "Navigational surveying and multibeam processing for geophysical surveys"
        }
    ]
},
// Projects section and display function definition
projects : {
    "projects": [
        {
            "title": "Neighbourhood Map- London",
            "dates": "August 2017 - September 2017",
            "description": "A responsive neighbourhood map of central London utilising GoogleMaps API and drawing local information from Foursquare API",
            "url": "https://bobrobcpp.github.io/neighbourhood-map/",
            "images": ["images/la-420.jpg", "images/tiber-420.jpg", "images/salalah-420.jpg"]
        },

       {
            "title": "Web Performance Project: Performant Pizza",
            "dates": "July 2017",
            "description": "Tuned a janky website to run smoothly at 60fps",
            "url": "https://github.com/bobrobcpp/pizza-performance",
            "images": ["images/la-420.jpg", "images/tiber-420.jpg", "images/salalah-420.jpg"]
        },

               {
            "title": "HTML Canvas Project: Frogger Game",
            "dates": "June 2017",
            "description": "Built a frogger clone upon a Udacity provided template",
            "url": "https://github.com/bobrobcpp/pizza-performance",
            "images": ["images/la-420.jpg", "images/tiber-420.jpg", "images/salalah-420.jpg"]
        },


        {
            "title": "Portfolio Project",
            "dates": "April 2017 - May 2017",
            "description": "Created a responsive website with HMTL, CSS and media queries",
            "url": "https://github.com/bobrobcpp/portfolio/",
            "images": ["images/la-420.jpg", "images/tiber-420.jpg", "images/salalah-420.jpg"]
        },
        {
            "title": "Unity Project",
            "dates": "April 2017 - May 2017",
            "description": "Playing around in the unity editor",
            "url": "https://github.com/bobrobcpp/unity-test-2017/",
            "images": ["images/unity1-420.jpg", "images/unity2-420.jpg", "images/unity3-420.jpg"]
        }
    ]
}

}

var octupus = {
    init: function(){
// Function calls to run page and display all sections
        view.displayBio();
        view.displayWork();
        view.displayProjects();
        view.displayEducation();
        mapView.init();
    },
    getBio: function(){
        return model.bio;
    },
    getEducation: function(){
        return model.education;
    },
    getWork: function(){
        return model.work;
    },
    getProjects: function(){
        return model.projects;
    }


//end of octupus
}

var view = {
    displayBio : function() {
    var bio = octupus.getBio();
    var formatName = HTMLheaderName.replace("%data%", bio.name);
    var formatRole = HTMLheaderRole.replace("%data%", bio.role);
    var formatGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formatPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formatPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formatLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formatWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formatRole);
    $("#header").prepend(formatName);
    $("#header").append(formatPic, formatWelcomeMessage);
    $("#main").append(octupus.getWork().position);
    $("#main").append(octupus.getEducation().name);
    $("#topContacts, #footerContacts").append(formatGit, formatPhone, formatEmail, formatLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formatSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formatSkill);
        }
    }
},

displayEducation : function() {
    var education = octupus.getEducation();
    if (education.schools.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formatSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formatSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formatSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formatSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formatSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formatSchoolName + formatSchoolDegree, formatSchoolDates, formatSchoolLocation, formatSchoolMajor);
        }
    }
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);
            var formatOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title).replace("#", education.onlineCourses[j].url);
            var formatOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var formatOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            $(".education-entry:last").append(formatOnlineTitle + formatOnlineSchool);
            $(".education-entry:last").append(formatOnlineDates);
        }
    }
},
displayWork : function() {
    var work = octupus.getWork();
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formatEmployer = HTMLworkEmployer.replace("%data%", (work.jobs[i].employer)).replace("#", "https://en.wikipedia.org/wiki/Hydrographic_survey");
        var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formatJDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formatJLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formatJDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formatEmployer + formatTitle);
        $(".work-entry:last").append(formatJDates + formatJLocation);
        $(".work-entry:last").append(formatJDescription);
    }
},

displayProjects : function() {
    var projects = octupus.getProjects();
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formatPTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
        var formatPDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formatPDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formatPTitle);
        $(".project-entry:last").append(formatPDates);
        $(".project-entry:last").append(formatPDescription);

        $("<div class='container imgContain'></div>").insertAfter(".project-entry:last");

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formatPImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);

            $(".container:last").append(formatPImages);
            $('img:last').addClass('proj-img');
        }
    }

    // Click listener to create modal with larger image and toggle background transparency
    $('.container').on('click', 'a,img', function(e) {
        if ($(this).last().hasClass('modal') === false) {
            e.preventDefault();
            $('.proj-img, .project-entry,.work-entry,.education-entry, p, h2,h3,#map,a,.date-text').not(this).css('opacity', 0.2);
            $(this).clone().addClass('modal').appendTo('.container').wrap("<div class='pop-modal'></div>").attr("src", function(i, val) {
                return val.replace("4", "7");
            });
        } else {
            $('.pop-modal').remove();
            $('*').css('opacity', 1);
        }
    });
}

}

var mapView = {
    init : function(){
        $("#mapDiv").append(googleMap);
    }
}






octupus.init();










// Optional addition of internationalize button of bio name with required inName function used in helper.js
// $("#main").append(internationalizeButton);
// var inName = (function(name) {
//     var nameArray = name.split(" ");
//     var firstLetter = nameArray[0].slice(0, 1).toUpperCase();
//     var theRest = nameArray[0].slice(1, nameArray[0].length).toLowerCase();
//     return firstLetter + theRest + " " + nameArray[1].toUpperCase();
// });