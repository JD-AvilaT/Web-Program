
import './Footer.css';
import { Button } from '../index.js';

export function Footer({ tasks, onDeleteCompleted }) {
  const completedTasks = tasks.filter(task => task.done);

  return (
    <footer className='footer'>
      <p>{completedTasks.length} tareas completas de {tasks.length}</p>
      <Button title="Clear all completed" onClick={() => onDeleteCompleted()} />
    </footer>
  );
  }