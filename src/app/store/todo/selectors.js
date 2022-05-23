import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = createSelector(
  s => s,
  s => s.todos.todos
)

export const selectRecentAction = createSelector(
  s => s,
  s => s.todos.recentAction
)