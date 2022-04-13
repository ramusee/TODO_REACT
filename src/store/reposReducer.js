import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actions";
import storage from "../localStorage";
const initialState = storage.getTodos()
export default function reposReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newState = [...state, {
        id: action.id,
        priority: action.priority,
        title: action.title,
        completed: false,
      }]
      storage.saveTodos(newState)
      return newState
    case REMOVE_TODO:
      const _newState = state.filter(todo => todo.id !== action.id)
      storage.saveTodos(_newState)
      return _newState
    case TOGGLE_TODO:
      const __newState = state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
      storage.saveTodos(__newState)
      return __newState
    default:
      return state
  }
}