import './Header.css'
import { useState } from 'react'

export function Header({ onSubmit }){

    const [ task, setTask ] = useState('')

    const readValue = (e) => {
        //e.preventDefault();
        setTask(e.target.value);
    }

    const handleTasks = (e) =>{
        e.preventDefault()
        onSubmit(task)
    }
    return(
        <form onSubmit={handleTasks}>
            <input onChange={readValue} 
                    value={task}
                    type='text'
                    placeholder='Your task...'/>
            <button type='submit'>Add task</button>
        </form>
    )
}