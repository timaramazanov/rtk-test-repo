import { createAction, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initState = {
  todos: [],
  recentAction: null
}

export const addTodo = createAction('todo/add')
export const updateTodo = createAction('todo/update')
export const finishTodo = createAction('todo/finish')
export const activateTodo = createAction('todo/activate')
export const removeTodo = createAction('todo/remove')

const ActionsLabelsMapping = {
  'todo/add': 'Добавлена задача',
  'todo/update': 'Обновлена задача',
   'todo/finish': 'Заверешна задача',
   'todo/activate': 'Активирована Задача',
   'todo/remove': 'Удалена задача'
}

export const todosReducer = createReducer(initState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todos.push({
        task: action.payload.task,
        finished: false,
        id: nanoid()
      })
    })
    .addCase(updateTodo, (state, action) => {
      state.todos = state.todos.map(
        t => t.id === action.payload.id
          ? { ...t, task: action.payload.task }
          : t
      )  
    })
    .addCase(finishTodo, (state, action) => {
      state.todos = state.todos.map(
        t => t.id === action.payload.id
          ? { ...t, finished: true }
          : t
      )
    })
    .addCase(activateTodo, (state, action) => {
      state.todos = state.todos.map(
        t => t.id === action.payload.id
          ? { ...t, finished: false }
          : t
      )
    })
    .addCase(removeTodo, (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload.id)
    })
    .addMatcher(({ type }) => type.startsWith('todo'), (state, action) => {
      state.recentAction = ActionsLabelsMapping[action.type]
    })
});