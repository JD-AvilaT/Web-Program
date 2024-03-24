import './Header.css'
import { useState } from 'react'
import { useTask } from '../../hooks/useTasks.js'

export function Header(){

    const [ task, setTask ] = useState('')
    const { addTask } = useTask()

    const readValue = (e) => {
        setTask(e.target.value);
    }

    const handleTasks = (e) =>{
        e.preventDefault()
        setTask("")
        addTask(task)
    }


    return(
        <header>
            <div className='title'>
                <h1 className='to-do'>
                    ToDo
                </h1>
                <h1 className='app'>
                    App
                </h1>
            </div>
            <form onSubmit={handleTasks}>
                <input  className='input-text'
                        onChange={readValue} 
                        value={task}
                        type='text'
                        placeholder='Your task...'/>
                <button className='submit-button'
                        type='submit'
                        disabled={!task.trim()}>
                    Add task
                </button>
            </form>
        </header>
    )
}