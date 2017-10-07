
/*
//store to-dos in a variable
var todos = ['item 1', 'item 2', 'item 3']

//display to-dos when you call them
console.log('My to-dos:' todos);

//add to-dos
todos.push ('item 4') // push command lets you add something to an array.

// call an item
todos[0] //humans count (1, 2, 3) computers count (0, 1, 2), In this case you call item 1

//change an item
todos[0] = 'new item 1'

//delete an item
todos.splice(0,1) //you state how many items you want to delete. In this case it will delete number 1.
*/



var todos = ['item 1', 'item 2', 'item 3'];

// function to display to-dos.
function displayTodos (){
  console.log('My to-dos:', todos);
}

displayTodos () // the parenthesis tells javascript to run a function. It will show the list.

// function to add to-dos.
function addTodo(todo) { //
  todos.push(todo); // added a new item for the array todos.
  displayTodos (); //an example of functions inside other functions. This also displays the new array.
}

addTodo ('new stuff') // give the name new stuff to the new todo in the array
displayTodos()

// function to change to-dos.
function changeTodo(position, newValue) { //give the parametres for changing
  todos[position] = newValue; // state them as equals
  displayTodos(); // display My to-dos after each change
}


// function to delete to-dos.
function deleteTodo (position) {
  todos.splice(position,1);
  // the first states position of item we delete. As it will be one item, the second will always be one
  displayTodos();
}
