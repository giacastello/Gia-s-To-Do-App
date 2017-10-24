
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
