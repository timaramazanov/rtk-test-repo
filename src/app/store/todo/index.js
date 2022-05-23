import { createAction, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initState = {
  todos: []
}

export const addTodo = createAction('todo/add')
export const updateTodo = createAction('todo/update')
export const finishTodo = createAction('todo/finish')
export const activateTodo = createAction('todo/activate')
export const removeTodo = createAction('todo/remove')

export const todosReducer = createReducer(initState, {
  [addTodo]: (state, action) => {
    state.todos.push({
      task: action.payload.task,
      finished: false,
      id: nanoid()
    })
  },
  [updateTodo]: (state, action) => {
    state.todos = state.todos.map(
      t => t.id === action.payload.id
        ? { ...t, task: action.payload.task }
        : t
    )
  },
  [finishTodo]: (state, action) => {
    state.todos = state.todos.map(
      t => t.id === action.payload.id
        ? { ...t, finished: true }
        : t
    )
  },
  [activateTodo]: (state, action) => {
    state.todos = state.todos.map(
      t => t.id === action.payload.id
        ? { ...t, finished: false }
        : t
    )
  },
  [removeTodo]: (state, action) => {
    state.todos = state.todos.filter(t => t.id !== action.payload.id)
  }
});