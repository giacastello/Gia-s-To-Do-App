// .displayTodos should show .todoText
// .displayTodos should tell you if .todos is empty
//. displayTodos should show .completed

var todoList = { 
    // todoList.addTodo should add objects (to store more info, like completed)
    todos: [], // We leave it blank so we can give functions as objects
    displayTodos: function() { 
        if (this.todos.length ===0){
          console.log('Your todo list is empty!'); // .displayTodos should tell you if .todos is empty
        } else {
        console.log('My Todos:');// it should have a displayTodos method
          // .displayTodos should show .todoText
        for (var i = 0; i < this.todos.length; i++){
        console.log(this.todos[i].todoText);
        }
      } 
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