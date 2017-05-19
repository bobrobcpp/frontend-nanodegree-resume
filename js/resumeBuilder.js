

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
  "welcomeMessage": "Why are you here? What is your problem?",
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
    "images" : "http://192.168.56.1:92/"
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





var name = "Robert King";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formatgit = HTMLgithub.replace("%data%", bio.contacts.github);
var formatphone = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatpic = HTMLbioPic.replace("%data%",bio.biopic);
var formatlocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formatskills = HTMLskills.replace("%data%",bio.skills);
var formatwelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);




$("#topContacts").append(formatgit,formatphone,formatlocation);
$("#header").append(formatpic,formatwelcomeMessage);
$("#main").append(work["position"]);
$("#main").append(education.name);



if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  // var formatSkill = HTMLskills.replace("%data%",bio.skills);
  // $("#skills").append(formatSkill);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
  $("#skills").append(formattedSkill);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
  $("#skills").append(formattedSkill);
}



var displayWork = function(){
  for(job in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    var formatemployer = HTMLworkEmployer.replace("%data%",(work.jobs[job].employer));
    var formattitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formatjdates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formatjlocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formatjdescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formatemployer+formattitle);
    $(".work-entry:last").append(formatjdates + formatjlocation);
    $(".work-entry:last").append(formatjdescription);
  }
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

$("#main").append(internationalizeButton);

var inName = (function(name){
  var nameArray = name.split(" ");
  var firstLetter = nameArray[0].slice(0,1).toUpperCase();
  var theRest = nameArray[0].slice(1,nameArray[0].length).toLowerCase();
  return firstLetter + theRest + " "  + nameArray[1].toUpperCase();
});

projects.display = function(){
      $("#projects").append(HTMLprojectStart);
      var formatptitle = HTMLprojectTitle.replace("%data%",projects.projects[0].title);
      var formatpdates = HTMLprojectDates.replace("%data%",projects.projects[0].dates);
      var formatpdescription = HTMLprojectDescription.replace("%data%",projects.projects[0].description);
      var formatpimages = HTMLprojectImage.replace("%data%",projects.projects[0].images);
      $(".project-entry:last").append(formatptitle);
      $(".project-entry:last").append(formatpdates);
      $(".project-entry:last").append(formatpdescription);
      $(".project-entry:last").append(formatpimages);



}
projects.display();

$("#mapDiv").append(googleMap);