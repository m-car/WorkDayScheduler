var today = moment();
var currentHour = today.format('H');
var hourEl = document.querySelector('.hour');
var task = localStorage.getItem('task');

var testHour = 12;
// Current day displayed at top of planner //
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));
/// $('#currentDay').text(currentHour);

//Change color of time blocks based on hour 

//TODO REPLACE testHour with currentHour
$(".time-block").each(function(){ // THIS IS LIKE A FOR LOOP. VERY NICE
    // console.log($(this).attr("id"));
    // console.log(currentHour)
    if($(this).attr('id') < testHour){
      $(this).addClass('past');
    }else if($(this).attr('id') == testHour){
      $(this).addClass('present');
    }else{
      $(this).addClass('future');
    }
    // var taskObject={
    //   id : $(this).attr('id'),
    //   task: $('textarea').val(),
    // }
    
})

    
    //On savebtn click, enter data into local storage
    $('.saveBtn').click(function(event){
      event.currentTarget.textContent
      localStorage.setItem('task', $("textarea").val());
        
    })
    
    
    //On page refresh, saved events persist
    function renderLastTasks(){
      var task = localStorage.getItem('task')
      document.getElementById('09').children[1].textContent = task;

    }
    function init() {
      // When the init function is executed, the code inside renderLastGrade function will also execute
      renderLastTasks();
    }
    init();










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