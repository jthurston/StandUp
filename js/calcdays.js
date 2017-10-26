//make string from startdate
startdateString=startdate.toUTCString();
startdateString=startdateString.split(' ').slice(0, 4).join(' ');

//Populate start date sd
document.getElementById("sd").innerHTML = "Sprint began " + startdateString;

//make string from today
dateString=today.toUTCString();
dateString=dateString.split(' ').slice(0, 4).join(' ');
console.log(dateString);

//Populate today's date p1
document.getElementById("p1").innerHTML = dateString;

//make string from enddate
enddateString=enddate.toUTCString();
enddateString=enddateString.split(' ').slice(0, 4).join(' ');

//Populate enddate ed
document.getElementById("ed").innerHTML = "Sprint ends " + enddateString;

var diff = getWorkingDays(startdate, enddate);

var leftDays = getWorkingDays(today, startdate);

var usedDays = diff - leftDays;

document.getElementById("td").innerHTML = diff;

document.getElementById("du").innerHTML = usedDays + 1;

document.getElementById("dr").innerHTML = leftDays - 1;

function getWorkingDays(startDate, endDate){
     var result = 0;

    var currentDate = startDate;
    while (currentDate <= endDate)  {

        var weekDay = currentDate.getDay();
        if(weekDay != 0 && weekDay != 6)
            result++;         currentDate.setDate(currentDate.getDate()+1);
    }
    return result;
 }
