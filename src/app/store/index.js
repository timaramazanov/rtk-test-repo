import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todo'

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})