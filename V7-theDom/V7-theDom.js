var todoList = { 
  todos: [], // We leave it blank so we can give functions properties as objects
  displayTodos: function() { 
      if (this.todos.length ===0){
        // .displayTodos should tell you if .todos is empty
        console.log('Your todo list is empty!'); 
      } else {
        // it should have a displayTodos method
        console.log('My Todos:');
        // .displayTodos should show if the to-do is completed (x) or not ( )
      for (var i = 0; i < this.todos.length; i++){
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
      console.log('( )',this.todos[i].todoText);
        }
      }
    } 
  },

  // If I want to show one as completed, I'll use todoList.toggleCompleted(numberofitem) 
  
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
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // Get number of completed todos.
    for (var i = 0; i < totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }
    
    //Case 1: if everything's true, make them false.
    if (completedTodos === totalTodos) {
      // Make everything false.
      for(var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: if everything's true, make them false.  
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// We want to access to the display to-dos button
var displayTodosButton = document.getElementById('displayTodosButton');
// We want to access to the toggleAll button
var toggleAllButton = document.getElementById('toggleAllButton');


//We want to run displayTodos method, when we click the display to-dos button.
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

//We want to run toggleAll method, when we click the display to-dos button.
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
  todoList.displayTodos();
});