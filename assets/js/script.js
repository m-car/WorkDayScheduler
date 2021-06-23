// current day displayed at top of planner 
var today = moment();
var currentHour = today.format('h')
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));
// $('#currentDay').text(currentHour);






//time blocks change color based on time of day gray red green

//select all hour blocks
var hourText = $('.hour').text();
console.log(hourText);

//break up selection for individual comparison


//if moment hour > time block : set attribute class (past/present/future)
//  if(currentHour > )






//time block onlick enters event

//on savebtn click, enter data into local storage
    $('.saveBtn').click(function(){
      //  localStorage.setItem('textarea')
    })
//on page refresh saved event persists
