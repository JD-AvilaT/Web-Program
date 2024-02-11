import './DownNavBar.css'
import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar.jsx'

export function DownNavBar(){
    return(
        <section class="down-navbar">
            <ItemNavBar/>
            <ItemNavBar/>
        </section>
        
    )
}