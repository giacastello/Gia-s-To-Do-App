//store an array of to-dos in a variable
var todos = ['item 1', 'item 2', 'item 3']

//display to-dos when you call them
console.log('My to-dos:', todos);

//add to-dos
todos.push('item 4') // push command lets you add something to an array.

// call an item
todos[0] //humans count (1, 2, 3) computers count (0, 1, 2), In this case you call item 1

//change an item
todos[0] = 'new item 1'

//delete an item
todos.splice(0, 1) //you state how many items you want to delete. In this case it will delete the string in position number 1