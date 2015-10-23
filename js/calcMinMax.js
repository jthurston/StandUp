$.getJSON(jsonFile, function(data){

  maxTime = totalTime/data.length;
  warnTime = (totalTime/data.length) - 1;

  $('#maxTimed').text(maxTime + " Minutes");
  //alert(maxTime);
  //alert(warnTime);
})
