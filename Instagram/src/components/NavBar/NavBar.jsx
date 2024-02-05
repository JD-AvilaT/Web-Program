import './NavBar.css'
import React from 'react'
import { Logo } from '../Logo/Logo.jsx'
import { ListNavBar } from '../ListNavBar/ListNavBar.jsx'
import { DownNavBar } from '../DownNavBar/DownNavBar.jsx'

export function NavBar(){
    return(
        <section>
            <Logo/>
            <ListNavBar/>
            <DownNavBar/>
        </section>
        
    )
}