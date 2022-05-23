import { useState } from 'react';

export const TodoEditor = ({
  onSave,
  onCancel,
  initValue = ''
}) => {
  const [value, setValue] = useState(initValue);

  return <div>
    <input value={value} onChange={v => { setValue(v.target.value) }}/>
    <button disabled={value.length === 0} onClick={() => { onSave(value) }}>Save</button>
    {onCancel && <button onClick={() => { onCancel() }}>Cancel</button>}
  </div>
}

export const TodoItem = ({
  item,
  finish,
  activate,
  update,
  remove
}) => {
  const [editing, setEditing] = useState(false)

  const onCancel = () => {
    setEditing(false)
  }

  const onSave = (value) => {
    update({
      id: item.id,
      task: value
    })
    setEditing(false)
  }

  const onToggle = () => {
    if (item.finished) {
      activate(item)
    } else {
      finish(item)
    }
  }

  return <li>
    {
      editing
        ? <TodoEditor onSave={onSave} onCancel={onCancel} initValue={item.task}/>
        : <>
          <span onClick={() => { setEditing(true) }}>{item.task}</span>
          <input type="checkbox" onChange={onToggle} checked={item.finished}/>
          <button onClick={() => { remove(item) }}>x</button>
        </>
    }
  </li>
};