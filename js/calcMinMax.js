$.getJSON(jsonFile, function(data){

  maxTime = (totalTime/data.length).toFixed(2);
  warnTime = ((totalTime/data.length) - 1).toFixed(2);

  $('#warnTimed').text(warnTime + " Minute Warning");
  $('#maxTimed').text(maxTime + " Minute Stop");
});
