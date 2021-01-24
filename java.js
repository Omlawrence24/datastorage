
// empty varaiable for user input
var todo; 

// this will display the current date and time on screen 
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// this function stores input into local storage 
function storetodo() {
    //var to verify the id and user inout info
    todo = $(this)
var todoId = todo.attr("id")
var userTodo =$("textarea#" + todoId).val()
console.log("id:" + todoId  + " , task: " + userTodo)
localStorage.setItem(todoId, userTodo);

}

// this function enables you to load the data from a previous saved input\
//this also gathers the time
//a for loop to loop thru the time slots to distingish between past present and future
 function loadtodos() {
    var taskDate = new Date()
    var taskHour = taskDate.getHours()

     for (let i = 0; i < 24; i++) {
         var slotHour = i + 1
         var timeStatus = getHourStatus(taskHour,slotHour)
        
        //  console.log(`loading data for ${i} and hour Status is ${timeStatus}` ) 
         console.log("loading data for " + slotHour + " and hour status is " + timeStatus)
        $("textarea#" + slotHour).text(localStorage.getItem(slotHour))
        /// this adds the time status colors to each time slot
        // i added a class depending on current time 
        $("textarea#" + slotHour).addClass(timeStatus)
     }
 }

 // this is my conditional function 
 // returns the results of true time 
  function getHourStatus (currentHour, testHour){
    if (testHour < currentHour) return "past"
    if (testHour > currentHour) return "future"
    if (testHour === currentHour) return "present"

    return "present"
  }


///this is the the first function ran it controls my click handler
//this also loads my store and load functions
 $(document).ready(function(){
   
     $(".saveBtn").on("click", storetodo);
     loadtodos()

 })


