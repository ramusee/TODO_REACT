import storage from "../localStorage";

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const lastItemStorageId = storage.getTodos().at(-1)
let id = lastItemStorageId ? lastItemStorageId.id + 1 : 1

function addTodo(title, priority, date) {
  return {
    type: ADD_TODO,
    id: id++,
    priority,
    date,
    title,
  }
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, addTodo, removeTodo, toggleTodo};

