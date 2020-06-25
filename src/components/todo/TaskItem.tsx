import React from 'react';
import { Task } from '../../Types'
import '../../App.css'
type Props = {
  task: Task
  handleDelete: (task: Task) => void
  handleDone: (task: Task) => void
}
const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
  return (
    <li className={task.done ? 'done' : ''}>
      <label >
        <input onClick={() => handleDone(task)} type="checkbox" className="checkbox-input" defaultChecked={task.done} />
        <span className="checkbox-label">
          {task.title}
        </span>
      </label>
      <button className="btn is-delete" onClick={() => handleDelete(task)}>delete</button>
    </li>
  )
}

export default TaskItem;