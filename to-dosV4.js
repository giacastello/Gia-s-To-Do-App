var todoList = { // todoList.addTodo should add objects (to store more info, like completed)
  todos: [], // We leave it blank so we can give functions as objects
  displayTodos: function() { // it should have a displayTodos method
    console.log('My Todos:', this.todos);
  },

  //it should have an addTodo Method
  addTodo: function(todoText) {
    this.todos.push({ //objects go in curlies.
      todoText: todoText, //first: name of property in object- second: parametre.
      completed: false //boolean true-false. False as default.
      });
    this.displayTodos();
  },

  //todoList.changeTodo should change the todoText property
  changeTodo: function(position, todoText) {
    /*  */
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }

};
