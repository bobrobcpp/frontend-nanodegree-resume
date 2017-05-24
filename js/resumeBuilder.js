

var bio = {
  "name": "Robert King",
  "role": "Web Developer",
  "contacts": {
    "mobile":"1234",
    "email": "king.roob@gmail.com",
    "github": "bobrobcpp",
    "location": "London"
  },
  "biopic": "images/me.jpg",
  "welcomeMessage": "Welcome, please contact me with any queries.",
  "skills": ["HTML","CSS","C#","Geomatics","Surveying","Hydrography"]

};

var work = {
  "jobs":[
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

var projects = {
  "projects":[
    {
    "title" : "Portfolio Project",
    "dates" : "April-2017",
    "description" : "Created a responsive website with HMTL, CSS and media queries",
    "images" : ["images/la-420.jpg","images/tiber-420.jpg","images/salalah-420.jpg"]
   },
   {
    "title" : "Unity Project",
    "dates" : "2016",
    "description" : "Playing around in the unity editor",
    "images" : ["images/unity1-420.jpg","images/unity2-420.jpg","images/unity3-420.jpg"]
   }
  ]

};

var education ={
  "schools":[
  {
  "name": "University College London",
  "location": "London",
  "dates": 2011,
  "degree": "MSc",
  "majors": ["Hydrographic Surveying"],
  "url":"https://www.ucl.ac.uk/"
},
{
  "name": "University of Sheffield",
  "location": "Sheffield",
  "dates": 2009,
  "degree": "BA",
  "majors": ["Geography"],
  "url":"https://www.sheffield.ac.uk/"
}
],
"onlineCourses":[
{
"title":"Front End Web Developer Nanodegree",
"school":"Udacity",
"dates":"March 2017-Present",
"url": "https://classroom.udacity.com/me"
},
{
"title":"Networking for Web Developers",
"school":"Udacity",
"dates":"March 2017-Present",
"url": "https://classroom.udacity.com/me"
}
]
};






var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formatgit = HTMLgithub.replace("%data%", bio.contacts.github);
var formatemail = HTMLemail.replace("%data%", bio.contacts.email);
var formatphone = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatpic = HTMLbioPic.replace("%data%",bio.biopic);
var formatlocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formatskills = HTMLskills.replace("%data%",bio.skills);
var formatwelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formatgit,formatphone,formatemail,formatlocation);
$("#header").append(formatpic,formatwelcomeMessage);
$("#main").append(work["position"]);
$("#main").append(education.name);

$("#footerContacts").append(formatgit,formatphone,formatemail,formatlocation);



if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
  $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
  $("#skills").append(formattedSkill);
}



work.display = function(){
  for(job in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    var formatemployer = HTMLworkEmployer.replace("%data%",(work.jobs[job].employer)).replace("#","https://en.wikipedia.org/wiki/Hydrographic_survey");
    var formattitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formatjdates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formatjlocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formatjdescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formatemployer+formattitle);
    $(".work-entry:last").append(formatjdates + formatjlocation);
    $(".work-entry:last").append(formatjdescription);
  }
}




projects.display = function(){

  for(var i = 0; i < projects.projects.length; i ++)
  {
      $("#projects").append(HTMLprojectStart);
      var formatptitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
      var formatpdates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
      var formatpdescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
      $(".project-entry:last").append(formatptitle);
      $(".project-entry:last").append(formatpdates);
      $(".project-entry:last").append(formatpdescription);

      $("<div class='container imgContain'></div>").insertAfter(".project-entry:last");

      for(var j = 0; j < projects.projects[i].images.length; j++)
      {
        var formatpimages = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);

        $(".container:last").append(formatpimages);
        $('img:last').addClass('proj-img');
      }
    }

  $( '.container' ).on( 'click', 'a,img', function(e) {
    if($(this).last().hasClass('modal')===false){
  e.preventDefault();

  $('.proj-img, .project-entry,.work-entry, p, h2,#map,a,.date-text').not(this).css('opacity',0.2);

  $(this).clone().addClass('modal').appendTo('.container').wrap("<div class='pop-modal'></div>").attr( "src", function( i, val ) {
  return val.replace("4","7");
  });

    }
    else{
      $('.pop-modal').remove();
      $('*').css('opacity',1);

    }
        });
}



work.display();
projects.display();

$("#mapDiv").append(googleMap);


$("#main").append(internationalizeButton);

var inName = (function(name){
  var nameArray = name.split(" ");
  var firstLetter = nameArray[0].slice(0,1).toUpperCase();
  var theRest = nameArray[0].slice(1,nameArray[0].length).toLowerCase();
  return firstLetter + theRest + " "  + nameArray[1].toUpperCase();
});





