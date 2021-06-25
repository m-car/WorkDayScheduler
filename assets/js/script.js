var today = moment();
var currentHour = today.format('H');
var hourEl = document.querySelector('.hour');
var hourText = hourEl.textContent;
var timeArray = [];
var testHour = 12;
// Current day displayed at top of planner //
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));
/// $('#currentDay').text(currentHour);

//Change color of time blocks based on hour 

//TODO REPLACE testHour with currentHour
$(".time-block").each(function(){ // THIS IS LIKE A FOR LOOP. VERY NICE
    console.log($(this).attr("id"));
    console.log(currentHour)
    if($(this).attr('id') < testHour){
      console.log("match");
      $(this).addClass('past');
    }else if($(this).attr('id') == testHour){
      $(this).addClass('present');
    }else{
      $(this).addClass('future');
      }
})

    
    //time block onlick enters event
    
    //on savebtn click, enter data into local storage
    $('.saveBtn').click(function(){
      //  localStorage.setItem('textarea')
    })
    //on page refresh saved event persists
    
    // timeArray.push($(this).attr('id'));
    ///TEST CASE//DELETE
    // var seconds = 0;
    // var faketime = window.setInterval(function(){
    //   // console.log(testTimer);  
    //   seconds = seconds + 1;
    //   // console.log(seconds);
    //   console.log(timeArray[seconds]);
    //   if(seconds > 10){
    //     testTimer = 0;
    //   }
    // },1000)
    //////////////////////////////