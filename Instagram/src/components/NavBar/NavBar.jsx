import './NavBar.css'
import React from 'react'
import { Logo } from '../Logo/Logo.jsx'
import { ListNavBar } from '../ListNavBar/ListNavBar.jsx'
import { DownNavBar } from '../DownNavBar/DownNavBar.jsx'

//The complete navbar

export function NavBar(){
    return(
        <section class="navbar">
            <Logo/>
            <ListNavBar/>
            <DownNavBar/>
        </section>
        
    )
}