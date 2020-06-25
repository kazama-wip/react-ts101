import React, { useState } from 'react';
import Child from './components/Child';
import Count from './components/Count';
import StyledComponent from './components/StyledComponents';
import TaskList from './components/todo/TaskList'
import { Task } from './Types'
import TaskInput from './components/todo/TaskInput'
import './App.css';
type Item = {
  id: number
  title: string
}
const initialState: Task[] =
  [
    {
      id: 1,
      title: "hi",
      done: false
    },
    {
      id: 2,
      title: "lol",
      done: true
    },
  ]

const App: React.FC = () => {
  const items: Item[] =
    [
      {
        id: 1,
        title: 'aiuoe'
      },
      {
        id: 2,
        title: 'kakiku'
      },
      {
        id: 3,
        title: 'sashisu'
      },
    ]
  const [tasks, setTasks] = useState(initialState)
  return (
    <div>
      <ul>
        {
          items.map((item,) => (
            <li key={item.id}>{item.id}-{item.title} </li>
          ))
        }
      </ul>
      <Child message="aio" >
        Hello
      </Child>
      <Count />
      <StyledComponent />
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}
export default App;
