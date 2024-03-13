import React from 'react'
import './Filters.css'

export function Filters(){
    return(
        <ul className="filters">
           <li><input type="radio"/>
            <label>
                All
            </label>
           </li>
           <li><input type="radio"/>
            <label>
                Completed
            </label>
           </li>
           <li><input type="radio"/>
            <label>
                Pending
            </label>
           </li>
        </ul>
    )
}