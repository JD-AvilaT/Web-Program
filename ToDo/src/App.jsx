// import { useState } from 'react'
import './App.css'
import { Header, Task, Button } from './components/index.js'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask (taskTitle) {
    console.log(taskTitle); 
    const newTask = {
    id: crypto.randomUUID(),
    title: taskTitle,
    done: false
  }

  const deleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter(tasks.id !== taskId))

  }
  setTasks(prevArray => [...prevArray, newTask])
  }
  return (
    <main>
      <Header onSubmit={addTask}/>
      <section>
        {tasks.map(({ title, id }) => (
          <div key={id}>
            <Task title={title}
                  onDelete={() => deleteTask(id)}/>
          </div>
        ))}

      </section>
    </main>
  )
}

export default App
