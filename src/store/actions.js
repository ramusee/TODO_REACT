const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

let id = 0

function addTodo(title, priority) {
  return {
    type: ADD_TODO,
    id: id++,
    priority,
    title
  }
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}
function toggleTodo(id){
 return {
   type: TOGGLE_TODO,
   id
 }
}

export {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, addTodo, removeTodo, toggleTodo};

