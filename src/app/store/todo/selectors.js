import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = createSelector(
  s => s,
  s => s.todos.todos
)