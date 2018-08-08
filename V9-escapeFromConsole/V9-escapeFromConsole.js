var todoList = { 
  todos: [], // We leave it blank so we can give functions properties as objects
  // If I want to show one as completed, I'll use todoList.toggleCompleted(numberofitem) 
  
  //it should have an addTodo Method
  addTodo: function(todoText) { 
    this.todos.push({ //objects go in curlies.
      todoText: todoText, //first: name of property in object- second: parametre.
      completed: false //boolean true-false. False as default.
    });
  },
  
  //todoList.changeTodo should change the todoText property
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position,1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
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

var handlers = { // We want this object to handle different events
  // It should have working controls to add to-dos
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value); // to get the value of the input
    addTodoTextInput.value = ''; // to clear the input box after we added a to-do
    view.displayTodos();
    
  },
  // It should have working controls to change todos
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  // It should have working controls to deleteTodos
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById ('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    view.displayTodos();  
    
  },
  // It should have working controls to toggle Allto-dos
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = { //Object  responsible to display on screen
  // There should be an li element for every to-do
  displayTodos: function() {
    var todosUl = document.querySelector('ul'); // querySelector will look for this etiqueta in the html    
    todosUl.innerHTML = ''; //to clear the ul before it starts adding things to the list.
    for (var i = 0; i < todoList.todos.length; i++) { //it will display a bullet each time we addTodo
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};