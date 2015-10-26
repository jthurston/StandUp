$.getJSON(jsonFile, function(data){

  maxTime = (totalTime/data.length).toFixed(2); 
  warnTime = (totalTime/data.length) - 1;

  $('#maxTimed').text(maxTime + " Minutes");
  //alert(maxTime);
  //alert(warnTime);
})
