var todo; 

function storetodo() {
    todo = $(this)
var todoId = todo.attr("id")
var userTodo =$("textarea#" + todoId).val()
console.log("id:" + todoId  + " , task: " + userTodo)
localStorage.setItem(todoId, userTodo);

}

 function loadtodos() {
    var taskDate = new Date()
    var taskHour = taskDate.getHours()

     for (let i = 0; i < 24; i++) {
         var slotHour = i + 1
         var timeStatus = getHourStatus(taskHour,slotHour)
        
        //  console.log(`loading data for ${i} and hour Status is ${timeStatus}` ) 
         console.log("loading data for " + slotHour + " and hour status is " + timeStatus)
        $("textarea#" + slotHour).text(localStorage.getItem(slotHour))
        debugger
        $("textarea#" + slotHour).addClass(timeStatus)
     }
 }
  function getHourStatus (currentHour, testHour){
    if (testHour < currentHour) return "past"
    if (testHour > currentHour) return "future"
    if (testHour === currentHour) return "present"
    
    return "present"

  }
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
 $(document).ready(function(){
   
     $(".saveBtn").on("click", storetodo);
     loadtodos()

 })


