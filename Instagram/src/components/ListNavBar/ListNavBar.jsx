import './ListNavBar.css'
import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar.jsx'

export function ListNavBar(){
    return(
        <section class="list-navbar">
            <ItemNavBar/>
            <ItemNavBar/>
            <ItemNavBar/>
            <ItemNavBar/>
            <ItemNavBar/>
            <ItemNavBar/>
            <ItemNavBar/>
            <ItemNavBar/>
        </section>
        
    )
}