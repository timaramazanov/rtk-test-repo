import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initState = {
  todos: [],
  recentAction: null
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        task: action.payload.task,
        finished: false,
        id: nanoid()
      })
      state.recentAction = 'Добавлена задача'
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(
        t => t.id === action.payload.id
          ? { ...t, task: action.payload.task }
          : t
      )
      state.recentAction = 'Обновлена задача'
    },
    finishTodo: (state, action) => {
      state.todos = state.todos.map(
        t => t.id === action.payload.id
          ? { ...t, finished: true }
          : t
      )
      state.recentAction = 'Завершена задача'
    },
    activateTodo: (state, action) => {
      state.todos = state.todos.map(
        t => t.id === action.payload.id
          ? { ...t, finished: false }
          : t
      )
      state.recentAction = 'Активироана задача'
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload.id)
      state.recentAction = 'Удалена задача'
    }
  }
})

export const {
  addTodo,
  updateTodo,
  finishTodo,
  activateTodo,
  removeTodo
} = todosSlice.actions

export const todosReducer = todosSlice.reducer;