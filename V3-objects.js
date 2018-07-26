// objects: to group related data and functions together.
// properties: things inside an object. Format:   nameOfProperty: 'value',
// Method: A property of an object that is a function.

/*
--example
var myComputer = {
  operatingSystem: 'mac',
  screenSize: '15 inches',
  purchaseYear: 2011
};
you can call each property value like--myComputer.screenSize--on console
for example
*/



var todoList = {
  // it should store a todos array on an object
  todos: ['item 1', 'item 2', 'item 3'], //set value to property
  displayTodos: function() { // it should have a displayTodos method
    console.log('My Todos:', this.todos);
  },

  //it should have an addTodo Method
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  }
};
