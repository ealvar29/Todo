var todos = ["Buy a new turtle"];

var input = prompt("What would you like to do");

while(input !== "quit"){
    //Handle Input
    if(input === "list") {
       listTodos();
    } else if(input === "new") {
        addTodo();
    } else if(input === "delete"){
       deleteTodo();
    }
    //Ask again for new input
    input = prompt("What would you like to do");

}
console.log("Ok, you Quit the App")

function listTodos(){
    console.log("**********")
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**********")
    console.log(todos);
}

function addTodo(){
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo(){
     //ask for index of todo to be deleted
     var index = prompt("Enter index of todo to delete");
     //delete that todo
     //splice()
     todos.splice(index,1);
     console.log("Deleted Todo");
}