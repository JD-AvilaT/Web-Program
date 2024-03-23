import './App.css'
import { Header, Task, Filters, Footer } from './components/index.js'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterType, setFilterType] = useState('all');

  function addTask (taskTitle) {
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

  function handleFilterChange(type) {
    setFilterType(type);
  }

  function filterTasks() {
    return tasks.filter((task) => {
      if (filterType === 'completed') {
        return task.done;
      } else if (filterType === 'pending') {
        return !task.done;
      }
      return true;
    });
  }
  
  function handleDeleteCompleted() {
    setTasks(prevTasks => prevTasks.filter(task => !task.done));
  }
  return (
    <main>
      <Header onSubmit={addTask}/>
      <Filters filterHandler={handleFilterChange} />
      <section>
        {filterTasks().map(({ title, id, done }) => (
          <div key={id}>
            <Task title={title}
                  onDelete={() => deleteTask(id)}
                  completed={done}
                  onToggle={() => checkboxChange(id)}/>
          </div>
        ))}
      </section>
      <Footer tasks={tasks}
              onDeleteCompleted={handleDeleteCompleted}/>
    </main>
  )
}
export default App
