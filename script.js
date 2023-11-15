]// Initialise an empty array with the variable name todoItems


// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// the function does not need to return anything
// Initialize an empty todoList array
let todoItems = [];
let count=0;


function addToDoItem(text) {
  let todoItem = {
    id: count,
    text: text,
    completed: false
  };
 count= count +1;
  todoItems.push(todoItem);
  console.log("Added:", todoItem);
}


addToDoItem("yogurt");
addToDoItem("berries");


// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
// Function to mark a task as completed


function markToDoItemAsCompleted(todoID) {
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id === todoID) {
      todoItems[i].completed = true;
      break;
    }
  }
}




 


// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted


function removeToDoItem(todoId){
  if (typeof todoId !== "number") {
    console.log("Please enter a number");


   


    return false;
  }
  deleteToDoItem(todoId);
}
// Function to delete a task from the array


function deleteToDoItem(todoId) {
  if (typeof todoId !== "number") {
    console.log("Please enter a number");
    return false;
  }


  let found = false;


  for (let i = todoItems.length - 1; i >= 0; i--) {
    if (todoItems[i].id === todoId) {
      todoItems.splice(i, 1);
      found = true;
      break;
    }
  }


  if (found) {
    console.log(`ToDoItem with ID ${todoId} has been deleted`);
  } else {
    console.log(`ToDoItem with ID ${todoId} not found`);
  }
}


// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array


function clearCompletedTasks() {
  for (let i = todoItems.length - 1; i >= 0; i--) {
    if (todoItems[i].completed) {
      todoItems.splice(i, 1);
    }
  }
}


// Test Cases
console.log(todoItems);
markToDoItemAsCompleted(0);
deleteToDoItem(1);
console.log(todoItems);
clearCompletedTasks();
console.log(todoItems);
deleteToDoItem(0);


// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed


