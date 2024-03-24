import './Task.css'
import { Button } from '../index.js'

export function Task(props){
    const { title, 
            onDelete,
            onToggle,
            completed } = props
    return(
        <article className='task'>
            <input checked={completed}
                    type='checkbox'
                    onChange={onToggle}/>
            <p>{title}</p>
            <Button variant='delete-button'
                    title='Delete task' 
                    onClick={onDelete}/>
        </article>
    )
}