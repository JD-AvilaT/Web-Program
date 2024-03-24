import { useState, useEffect, useReducer } from 'react';
import { taskContext } from './taskContext'
import { ACTIONS } from '../const/actions';
import { reducer } from '../Reducers/reducer';

let initTasks = [];
try {
  const tasksData = window.localStorage.getItem("tasks");
  if (tasksData) {
    initTasks = JSON.parse(tasksData);
  }
} catch (error) {
  console.error("Error parsing tasks data:", error);
}

export function TaskContextProvider({children}) {
    const [tasks, dispatch] = useReducer(reducer, initTasks)
    const [filterType, setFilterType] = useState('all');

    useEffect( () => {
        window.localStorage.setItem("tasks", JSON.stringify(tasks))
      } , [tasks])

    const addTask = (taskTitle) => {
       dispatch({
        type: ACTIONS.CREATE_TASK,
        payload: taskTitle
       })
    };

    const deleteTask = (taskId) => {
        dispatch({
            type: ACTIONS.DELETE_TASK,
            payload: taskId
        })
    };

    const checkboxChange = (taskId) => {
        dispatch({
            type: ACTIONS.CHECKBOX_CHANGE,
            payload: taskId
        })
    };

    const handleDeleteCompleted = () => {
        dispatch({
            type: ACTIONS.HANDLE_DELETE_COMPLETED
        })
    };

    const filterTasks = () => {
        if (filterType === 'completed') {
        return tasks.filter((task) => task.done);
        } else if (filterType === 'pending') {
        return tasks.filter((task) => !task.done);
        } else {
        return tasks;
        }
    };

    const showCompletedTasks = () => {
        return tasks.filter(task => task.done).length;
    }

    const showAllTasks = () => {
        return tasks.length
        
    }

    return (
        <taskContext.Provider value={{
            tasks,
            addTask,
            deleteTask,
            checkboxChange,
            handleDeleteCompleted,
            filterTasks,
            showCompletedTasks,
            setFilterType,
            showAllTasks
            }}>
                {children}
        </taskContext.Provider>
    );
}