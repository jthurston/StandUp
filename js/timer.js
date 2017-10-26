//set time holders
var prevTime, stopwatchInterval, elapsedTime = 0;

//calculate times
var updateTime = function () {
  var tempTime = elapsedTime;
  var milliseconds = tempTime % 1000;
  tempTime = Math.floor(tempTime / 1000);
  var seconds = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  var minutes = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  var hours = tempTime % 60;

  //Make a string of time to display
  var time = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  userTime = minutes % 60;

  if (minutes >= warnTime){
    $('#div' + whichOne).css('background-color', warnTimeColor);
  }

  if (minutes >= maxTime){
    $('#div' + whichOne).css('background-color', maxTimeColor);
  }

    $('#time' + currentSpeaker).text(time);

  //Change time on currentspeaker for graphing
  if(currentSpeaker){
    team[currentSpeaker]['y'] = userTime;
  }
};

$('[id^="start"]').click(function () {

  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(function () {
      if (!prevTime) {
        prevTime = Date.now();
      }
      elapsedTime += Date.now() - prevTime;
      prevTime = Date.now();
      updateTime();
    }, 50);
  }
});

$("#pauseButton").click(function () {


  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }
  prevTime = null;
});

$("#resetButton").click(function () {

  $("#pauseButton").click();
  elapsedTime = 0;
  $('#div' + whichOne).css('background-color', onColor);
  updateTime();
});

function startTimer(){
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(function () {
      if (!prevTime) {
        prevTime = Date.now();
      }
      elapsedTime += Date.now() - prevTime;
      prevTime = Date.now();
      updateTime();
    }, 50);
  }
}

function pauseTimer(){
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }
  prevTime = null;
}

function resetTimer(){
  pauseTimer();
  elapsedTime = 0;
  $('#div' + whichOne).css('background-color', onColor);
  updateTime();
}

$(document).ready(function () {
  updateTime();

});
