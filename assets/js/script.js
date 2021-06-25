var today = moment();
var currentHour = today.format('H');
var hourEl = document.querySelector('.hour');
var task = localStorage.getItem('task');
var buttonListEl = $('.saveBtn');

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
    
})

   //Saves taskID and text from text area to local storage
  //  TODO: Make unique task objects...? 
    buttonListEl.on('click', function(event){
      
      var tArea = $(this).prev().val();
      var taskId = $(this).parent().attr('id');
      localStorage.setItem('task',tArea);
      localStorage.setItem('taskId', taskId);
      console.log("button clicked");
      console.log(tArea);
      console.log(taskId);
    })
    
    //On page refresh, saved events persist
    function renderLastTasks(){
      var task = localStorage.getItem('task')
      var taskID = localStorage.getItem('id');
      document.getElementById('09').children[1].textContent = task;
      document.getElementById('10').children[1].textContent = task;
      document.getElementById('11').children[1].textContent = task;
      document.getElementById('12').children[1].textContent = task;
      document.getElementById('13').children[1].textContent = task;
      document.getElementById('14').children[1].textContent = task;
      document.getElementById('15').children[1].textContent = task;
      document.getElementById('16').children[1].textContent = task;
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