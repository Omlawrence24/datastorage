var todo;

function storetodo() {
    todo = $(this)
var todoId = todo.attr("id")
var userTodo =$("textarea#" + todoId).val()
console.log("id:" + todoId  + " , task: " + userTodo)
localStorage.setItem(todoId, userTodo);

}
 function loadtodos() {
     for (let i = 0; i < 24; i++) {
         console.log("loading data for " + i) 
        $("textarea#" + i).text(localStorage.getItem(i))
     }
 }
 

 $(document).ready(function(){
     $(".saveBtn").on("click", storetodo);
     loadtodos()

 })

 