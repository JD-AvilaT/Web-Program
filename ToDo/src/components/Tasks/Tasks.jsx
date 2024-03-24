import './Tasks.css';
import { useTask } from '../../hooks/useTasks.js';
import { Task } from '../Task/Task.jsx';

export function Tasks() {
    const { tasks, checkboxChange, deleteTask, filterTasks } = useTask();

    const taskValidation = tasks.length > 0;

    const getTasks = (taskValidation) => {
        return taskValidation ? (
            <div className='tasks'>
                {filterTasks().map(({ title, id, done }) => (
                <article key={id}>
                  <Task title={title}
                        onDelete={() => deleteTask(id)}
                        completed={done}
                        onToggle={() => checkboxChange(id)}/>
                </article>
              ))}
            </div> ): (
            <p><strong>There are no tasks</strong></p>
        );
    };

    return getTasks(taskValidation);
}
