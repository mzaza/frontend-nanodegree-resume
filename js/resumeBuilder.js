//Mouse Clicks Tracker
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
//End of Tracker

/*
  Objects used to build the resume
*/

//Biography Object
var bio = {
  "name" : "Mustafa Zaza",
  "role" : "FreeLancer",
  "image" : "images/me.jpg",
  "contacts" : {"mobile" : "+20122-306-405",
                "email" : "mustafa.zaza@gmail.com",
                "twitter" : "@mzaza",
                "github" : "github.com/mzaza",
                "blog" : "http://mustafazaza.blogspot.com",
                "location" : "Cairo, Egypt"},
  "welcomeMessage" : "Welcome to my resume!",
  "skills" : ["Programing in C", "Object Oriented Programing in C++",
  "HTML, CSS & JS", "Linux Administration"]
};

//Work Object
var work = {
  "jobs" : [
    {
      "dates" : "1/1/2014",
      "employer" : "GeeXPad",
      "title" : "Co-Founder",
      "location" : "Egypt",
      "description" : "Virtual Gaming Controller",
      "url" : "http://www.geexpad.com"
    },
    {
      "dates" : "17/8/2014",
      "employer" : "GBArena",
      "title" : "Co-Founder",
      "location" : "Egypt",
      "description" : "A gaming community",
      "url" : "http://www.gbarena.com"
    }
  ]

};

//Projects Object
var projects = {
  "projects" : [
    {
      "dates" : "1/1/2014",
      "title" : "GeeXPad",
      "description" : "Virtual Gaming Controller",
    },
    {
      "dates" : "17/8/2014",
      "title" : "GBArena",
      "description" : "A gaming community",
    }
  ]
}

//Education Object
var education = {
  "schools" : [
    {
      "dates" : 2005,
      "name" : "Cairo University",
      "degree" : "Good",
      "location" : "Egypt",
      "major" : "CS",
      "url" : "http://www.fci.edu.eg"
    },
    {
      "dates" : 2015,
      "name" : "Misr University for Science and Technology",
      "degree" : "Good",
      "location" : "Egypt",
      "major" : "CS",
      "url" : "http://www.must.edu.eg"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "JavaScript Syntax",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com/course/ud804"
    }
  ]
};

/*
  Display functions for resume objects
*/

//Bio Display
bio.display = function () {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(formattedMessage);
  $("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedTwitter)
                  .append(formattedBlog).append(formattedLocation);
  if (bio.skills.length > 0)
  {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills)
    {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkills);
    }
  }
}

//Work Display
work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle).append(formattedDates)
                          .append(formattedLocation).append(formattedDescription);
  }
}

//Projects Display
projects.display = function () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    $(".project-entry:last").append(formattedTitle).append(formattedDates)
                            .append(formattedDescription);

  }
}

//Education Display
education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name)
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolName).append(formattedDates)
                              .append(formattedSchoolDegree).append(formattedSchoolMajor)
                              .append(formattedSchoolLocation);

  }

  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedTitle).append(formattedSchool)
                              .append(formattedDates).append(formattedURL);

  }
}

/*
  Function Calls
*/
bio.display();
work.display();
projects.display();
education.display();

//Internationalization function
function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
//Internationalize Button
$('#main').append(internationalizeButton);
//Google Maps
$("#mapDiv").append(googleMap);
