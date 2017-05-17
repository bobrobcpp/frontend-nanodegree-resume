
var name = "Robert King";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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
  "welcomeMessage": "Welcome",
  "skills": ["HTML","CSS","C#","Geomatics","Surveying","Hydrography"]

};

var work = {
  "jobs":[
    {
    "title" : "Hydrographic Surveyor",
    "employer" : "Freelance",
    "dates": "2012-2016",
    "location" : "Worldwide",
    "description" : "Navigational surveyingand multibeam processing for geophysical surveys"
   }
  ]
}
var projects = {
  "projects":[
    {
    "title" : "Portfolio Project",
    "dates" : "April-2017",
    "description" : "Created a responsive website with HMTL, CSS and media queries",
    "images" : ["C:\Users\Robert\Documents\UDF\portfolio\images"]
   }
  ]
}


var education ={
  "schools":[
  {
  "name": "University College London",
  "city": "London",
  "dates": 2011,
  "degree": "MSc",
  "majors": ["Hydrographic Surveying"],
  "url":"https://www.ucl.ac.uk/"
},
{
  "name": "University of Sheffield",
  "city": "Sheffield",
  "dates": 2009,
  "degree": "BA",
  "majors": ["Geography"],
  "url":"https://www.sheffield.ac.uk/"
}
]
}

var formatgit = HTMLgithub.replace("%data%", bio.contacts.github);
var formatphone = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatpic = HTMLbioPic.replace("%data%",bio.biopic);
var formatlocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formatskills = HTMLskills.replace("%data%",bio.skills);
var formatwelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);




$("#topContacts").append(formatgit,formatphone,formatlocation);
$("#header").prepend(formatpic,formatwelcomeMessage,formatskills);
$("#main").append(work["position"]);
$("#main").append(education.name);







