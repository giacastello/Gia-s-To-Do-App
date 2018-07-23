// objects: to group related data and functions together.
// properties: things inside an object. Format:   nameOfProperty: 'value',
--example
var myComputer = {
  operatingSystem: 'mac',
  screenSize: '15 inches',
  purchaseYear: 2011
};
you can call each property value like--myComputer.screenSize--on console
for example
  *
  /



var todos = ['item 1', 'item 2', 'item 3'];

// function to display to-dos.
function displayTodos() {
  console.log('My to-dos:', todos);
}

displayTodos() // the parenthesis tells javascript to run a function. It will show the list.

// function to add to-dos.
function addTodo(todo) { //
  todos.push(todo); // added a new item for the array todos.
  displayTodos(); //an example of functions inside other functions. This also displays the new array.
}

addTodo('new stuff') // give the name new stuff to the new todo in the array
displayTodos()

// function to change to-dos.
function changeTodo(position, newValue) { //give the parametres for changing
  todos[position] = newValue; // state them as equals
  displayTodos(); // display My to-dos after each change
}


// function to delete to-dos.
function deleteTodo(position) {
  todos.splice(position, 1);
  // the first states position of item we delete. As it will be one item, the second will always be one
  displayTodos();
}