import './Footer.css';
import { Button } from '../index.js';
import { useTask } from '../../hooks/useTasks.js';

export function Footer() {
  const {showCompletedTasks,
          showAllTasks,
          handleDeleteCompleted } = useTask()
  return (
    <footer className='footer'>
      <p>{showCompletedTasks()} tareas completas de {showAllTasks()}</p>
      <Button variant='delete-all-button'
              title="Clear all completed"
              onClick={ handleDeleteCompleted } />
    </footer>
  );
}