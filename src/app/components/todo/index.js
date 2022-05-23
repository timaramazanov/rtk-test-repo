import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, selectRecentAction } from '../../store/todo/selectors';
import {
  addTodo, finishTodo, activateTodo, updateTodo,
  removeTodo
} from '../../store/todo';
import { TodoItem, TodoEditor } from './item';

import './Todos.css'

const RecentAction = () => {
  const recentAction = useSelector(selectRecentAction);

  if (recentAction) {
    return <p>Последнее действие: "{recentAction}"</p>
  }

  return null;
}

export const Todos = () => {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  const activeTodos = todos.filter(t => !t.finished)
  const finishedTodos = todos.filter(t => t.finished)

  const create = (task) => dispatch(addTodo({ task }))
  const update = (todo) => dispatch(updateTodo(todo))
  const finish = (todo) => dispatch(finishTodo(todo))
  const activate = (todo) => dispatch(activateTodo(todo))
  const remove = (todo) => dispatch(removeTodo(todo))

  return <div className='TodosRoot'>
    <TodoEditor onSave={create}/>
    <ul className='TodosList'>
      {activeTodos.map(t => <TodoItem
        key={t.id}
        item={t}
        finish={finish}
        activate={activate}
        update={update}
        remove={remove}
      />)}
    </ul>
    <ul className='TodosList Finished'>
      {finishedTodos.map(t => <TodoItem
        key={t.id}
        item={t}
        finish={finish}
        activate={activate}
        update={update}
        remove={remove}
      />)}
    </ul>
    <RecentAction/>
  </div>
}