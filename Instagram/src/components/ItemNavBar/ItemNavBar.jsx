import './ItemNavBar.css'
import React from 'react'

//The item from the navbar

export function ItemNavBar(props){
    const { icon, title, onClick } = props
    const handleClick = (event) => {
       onClick()
    }
    return(
        <button class="item-navbar" 
                 onClick={handleClick}>
            {icon}
            <h2>{title}</h2>
        </button>
    )
}