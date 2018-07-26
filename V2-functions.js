var todos = ['item 1', 'item 2', 'item 3'];


// function to display to-dos.
function displayTodos() { 
  console.log('My to-dos:', todos);
}

displayTodos() // the parenthesis tells javascript to run a function. 
// My to-dos: ['item 1', 'item 2', 'item 3']


// function to add to-dos.
function addTodo(todo) { //
  todos.push('new to do'); // added a new item for the array todos.
}
addTodo() // This will add a to do.
displayTodos() // My to-dos: ['item 1', 'item 2', 'item 3', 'new to do' ]

addTodo('new stuff') // give the name new stuff to the new todo in the array
displayTodos() // My to-dos: ['item 1', 'item 2', 'item 3', 'new stuff' ]


// function to change to-dos.
function changeTodo(position, newValue) { //give the parametres for changing name of to-do.
  todos[position] = newValue; // state them as equals, to asign new value.
  displayTodos(); // display My to-dos after each change
}
changeTodo(0, itemOne) // My to-dos: ['itemOne', 'item 2', 'item 3', 'new stuff']


// function to delete to-dos.
function deleteTodo(position) {
  todos.splice(position, 1);
  // the first states position of item we delete. As it will be one item, the second will always be one
  displayTodos();
}

deleteTodo(0,1) // My to-dos: ['item 2', 'item 3', 'new stuff']cd ..