// This file containsJavascript objects containing personal information in sections: bio, work, projects and education and functions to display them

// Bio section and display function definition
var bio = {
  "name": "Robert King",
  "role": "Web Developer",
  "contacts": {
    "mobile": "1234",
    "email": "king.roob@gmail.com",
    "github": "bobrobcpp",
    "location": "London"
  },
  "welcomeMessage": "Welcome, please contact me with any queries.",
  "skills": ["HTML","CSS","C#","Geomatics","Surveying","Hydrography"],
  "biopic": "images/me.jpg"
};

bio.display= function(){
  var formatName = HTMLheaderName.replace("%data%",bio.name);
  var formatRole = HTMLheaderRole.replace("%data%", bio.role);
  var formatgit = HTMLgithub.replace("%data%", bio.contacts.github);
  var formatemail = HTMLemail.replace("%data%", bio.contacts.email);
  var formatphone = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formatpic = HTMLbioPic.replace("%data%",bio.biopic);
  var formatlocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formatskills = HTMLskills.replace("%data%",bio.skills);
  var formatwelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").prepend(formatRole);
  $("#header").prepend(formatName);
  $("#topContacts").append(formatgit,formatphone,formatemail,formatlocation);
  $("#header").append(formatpic,formatwelcomeMessage);
  $("#main").append(work["position"]);
  $("#main").append(education.name);
  $("#footerContacts").append(formatgit,formatphone,formatemail,formatlocation);

  if(bio.skills.length > 0)
  {
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++){
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }
}


// Education section and display function definition
var education ={
  "schools":[
  {
  "name": "University College London",
  "location": "London",
  "dates": 2011,
  "degree": "MSc",
  "majors": ["Hydrographic Surveying"],
  "url": "https://www.ucl.ac.uk/"
},
{
  "name": "University of Sheffield",
  "location": "Sheffield",
  "dates": 2009,
  "degree": "BA",
  "majors": ["Geography"],
  "url": "https://www.sheffield.ac.uk/"
}
],
"onlineCourses":[
{
"title": "Front End Web Developer Nanodegree",
"school": "Udacity",
"dates": "March 2017-Present",
"url": "https://classroom.udacity.com/me"
},
{
"title": "Networking for Web Developers",
"school": "Udacity",
"dates": "March 2017-Present",
"url": "https://classroom.udacity.com/me"
}
]
};

education.display = function(){
  if(education.schools.length > 0){
    for(var i = 0; i < education.schools.length; i ++){
      $("#education").append(HTMLschoolStart);
      var formatschoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formatschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formatschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formatschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formatschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $(".education-entry:last").append(formatschoolName + formatschoolDegree,formatschoolDates,formatschoolLocation,formatschoolMajor);
    }
  }
    if(education.onlineCourses.length > 0){
      $("#education").append(HTMLonlineClasses);
      for(var i = 0; i < education.onlineCourses.length; i ++){
        $("#education").append(HTMLschoolStart);
        var formatonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formatonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formatonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formatonlineTitle + formatonlineSchool);
        $(".education-entry:last").append(formatonlineDates);
    }
  }
}


// Work section and display function definition
var work = {
  "jobs": [
    {
    "title" : "Hydrographic Surveyor",
    "employer" : "Freelance",
    "dates": "Dec 2016-Present",
    "location" : "London",
    "description" : "Navigational surveying and multibeam processing for geophysical surveys"
   },
   {
    "title" : "Hydrographic Surveyor",
    "employer" : "Gardline Geosurvey",
    "dates": "Jan 2012- Dec 2016",
    "location" : "North Sea",
    "description" : "Navigational surveying and multibeam processing for geophysical surveys"
   }
  ]
};

work.display = function(){
    for(var i = 0; i < work.jobs.length; i++){
    $("#workExperience").append(HTMLworkStart);
    var formatemployer = HTMLworkEmployer.replace("%data%",(work.jobs[i].employer)).replace("#","https://en.wikipedia.org/wiki/Hydrographic_survey");
    var formattitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formatjdates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
    var formatjlocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
    var formatjdescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
    $(".work-entry:last").append(formatemployer+formattitle);
    $(".work-entry:last").append(formatjdates + formatjlocation);
    $(".work-entry:last").append(formatjdescription);
  }
}


// Projects section and display function definition
var projects = {
  "projects": [
    {
    "title" : "Portfolio Project",
    "dates" : "April 2017 - May 2017",
    "description" : "Created a responsive website with HMTL, CSS and media queries",
    "images" : ["images/la-420.jpg","images/tiber-420.jpg","images/salalah-420.jpg"]
   },
   {
    "title" : "Unity Project",
    "dates" : "April 2017 - May 2017",
    "description" : "Playing around in the unity editor",
    "images" : ["images/unity1-420.jpg","images/unity2-420.jpg","images/unity3-420.jpg"]
   }
  ]
};

projects.display = function(){
  for(var i = 0; i < projects.projects.length; i ++){
    $("#projects").append(HTMLprojectStart);
    var formatptitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
    var formatpdates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
    var formatpdescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    $(".project-entry:last").append(formatptitle);
    $(".project-entry:last").append(formatpdates);
    $(".project-entry:last").append(formatpdescription);

    $("<div class='container imgContain'></div>").insertAfter(".project-entry:last");

    for(var j = 0; j < projects.projects[i].images.length; j++){
      var formatpimages = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);

      $(".container:last").append(formatpimages);
      $('img:last').addClass('proj-img');
    }
  }

// Click listener to create modal with larger image and toggle background transparency
  $( '.container' ).on( 'click', 'a,img', function(e) {
    if($(this).last().hasClass('modal')===false){
      e.preventDefault();
      $('.proj-img, .project-entry,.work-entry,.education-entry, p, h2,h3,#map,a,.date-text').not(this).css('opacity',0.2);
      $(this).clone().addClass('modal').appendTo('.container').wrap("<div class='pop-modal'></div>").attr( "src", function(i, val) {
        return val.replace("4","7");
      });
    }
    else{
      $('.pop-modal').remove();
      $('*').css('opacity',1);
    }
      });
}





// Function calls to run page and display all sections
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);




// Optional addition of internationalize button of bio name with required inName function used in helper.js
$("#main").append(internationalizeButton);
var inName = (function(name){
  var nameArray = name.split(" ");
  var firstLetter = nameArray[0].slice(0,1).toUpperCase();
  var theRest = nameArray[0].slice(1,nameArray[0].length).toLowerCase();
  return firstLetter + theRest + " "  + nameArray[1].toUpperCase();
});





