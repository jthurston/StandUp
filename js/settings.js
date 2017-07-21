//Customiziation area
//Image for when user is not currentSpeaker
var userOff = "images/man.png";
//Image for when user is currentSpeaker
var userOn = "images/man_talk.png";
//Size of images
var iconSize = "75";
//File to pull json data from
//var jsonFile = "https://standup-thirstyman.rhcloud.com/teams?format=json";
var jsonFile = "data/eusteam.json";
//Initial header of webpage
var initialHeader = "Daily Standup Go!";
//Initial subheader of webpage
var subHeader = "Yesterday, today & blockers."
  //Subheader of webpage when at the last participant
var lastHeader = "Last One!";
//Subheader of webpage when finished
var resetHeader = "Scrum Over!";
//background color of webpage
var backgroundColor = "#007282";
//text color of webpage
var textColor = "white";
//color of div when currentSpeaker
var onColor = "Black";
//total time allowed for activity
var totalTime = 15; //minutes
//max time in minutes
var maxTime; //now calculated
//max time color
var maxTimeColor = '#CC0000';
//warning time in minutes
var warnTime; //now calculated
//warn time color
var warnTimeColor = '#FFCC00';
//Allow volunteers
var volunteer = true;
//Allow skips
var skip = true;

//SCRUM DATES ARE HERE!!! SCRUM DATES ARE HERE!!!
//get today
var today = new Date();
//var today = new Date("Mon Apr 15 12:00:00 GMT 2016")
//Start date of sprint
var startdate = new Date("Mon Jul 17 12:00:00 GMT 2017")
  //End date of sprint
var enddate = new Date("Fri July 28 12:00:00 GMT 2017")

//Do not change these
//var team = [{Name:"Clint", y:0},{Name:"Don", y:0},{Name:"Edwin", y:0},{Name:"Jeff", y:0},{Name:"Ryan": y:0];
var team = [];
var selected = [];
var currentSpeaker;
var lastClicked = 0;
var elapsedTime = 0;
var userTime = 0;
var whichOne;
var chosen;
