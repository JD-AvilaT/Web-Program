import './App.css'
import { Header, Task } from './components/index.js'
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
  setTasks(prevArray => [...prevArray, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter(tasks => tasks.id !== taskId))
  }

  const checkboxChange = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <main>
      <Header onSubmit={addTask}/>
      <section>
        {tasks.map(({ title, id, done }) => (
          <div key={id}>
            <Task title={title}
                  onDelete={() => deleteTask(id)}
                  completed={done}
                  onToggle={() => checkboxChange(id)}/>
          </div>
        ))}

      </section>
    </main>
  )
}
export default App
