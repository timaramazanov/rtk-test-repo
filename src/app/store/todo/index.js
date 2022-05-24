import {
  ADD_TODO,
  UPDATE_TODO,
  FINISH_TODO,
  ACTIVATE_TODO,
  REMOVE_TODO
} from './actions';
import { nanoid } from 'nanoid';

const initState = {
  todos: []
}

export const addTodo = payload => ({ type: ADD_TODO, payload })
export const updateTodo = payload => ({ type: UPDATE_TODO, payload })
export const finishTodo = payload => ({ type: FINISH_TODO, payload })
export const activateTodo = payload => ({ type: ACTIVATE_TODO, payload })
export const removeTodo = payload => ({ type: REMOVE_TODO, payload })

export const todosReducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat({
          task: action.payload.task,
          finished: false,
          id: nanoid()
        })
      }
    case UPDATE_TODO:
      return {
        todos: state.todos.map(
          t => t.id === action.payload.id
            ? { ...t, task: action.payload.task }
            : t
        )
      }
    case FINISH_TODO:
      return {
        todos: state.todos.map(
          t => t.id === action.payload.id
            ? { ...t, finished: true }
            : t
        )
      }
    case ACTIVATE_TODO:
      return {
        todos: state.todos.map(
          t => t.id === action.payload.id
            ? { ...t, finished: false }
            : t
        )
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(t => t.id !== action.payload.id)
      }
    default:
      return state
  }
}