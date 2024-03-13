import './Task.css'
import { Button } from '../index.js'

export function Task(props){
    const { title, onDelete } = props

    return(
        <article>
            <input type='checkbox'/>
            <p>{title}</p>
            <Button title='Delete task' 
                    onClick={onDelete}/>
        </article>
    )
}