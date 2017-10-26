function testing(){

console.log("In Chart Maker" + team);

var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'pie'
    },
    title: {
        text: 'Participant Times'
    },

    series: [{
        name: "Times",
        colorByPoint: true,
        data: team
    }]
});

}
// the button action
//$('#niceButton').click(function() {
//  console.log("Team" + team[0].name + " Time " + team[0].y)
//    chart.series[0].setData([
//      {
//      data: team
//    }
//  ]);
//});
