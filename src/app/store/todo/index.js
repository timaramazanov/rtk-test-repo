import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initState = {
  todos: []
}

const todosSlice = createSlice({
  name: 'todo',
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        task: action.payload.task,
        finished: false,
        id: nanoid()
      })
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(
        t => t.id === action.payload.id
          ? { ...t, task: action.payload.task }
          : t
      )
    },
    finishTodo: (state, action) => {
      state.todos = state.todos.map(
        t => t.id === action.payload.id
          ? { ...t, finished: true }
          : t
      )
    },
    activateTodo: (state, action) => {
      state.todos = state.todos.map(
        t => t.id === action.payload.id
          ? { ...t, finished: false }
          : t
      )
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload.id)
    }
  }
});

export const {
  addTodo,
  updateTodo,
  finishTodo,
  activateTodo,
  removeTodo
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;