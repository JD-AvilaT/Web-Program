import './ItemNavBar.css'
import React from 'react'

export function ItemNavBar(props){
    const { icon, title } = props
    return(
        <section class="item-navbar">
            {icon}
            <h2>{title}</h2>
        </section>
    )
}