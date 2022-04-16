import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actions";
import storage from "../localStorage";

const initialState = storage.getTodos()
export default function reposReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: action.id,
        priority: action.priority,
        date: action.date,
        title: action.title,
        completed: false,
      }]
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
    default:
      return state
  }
}