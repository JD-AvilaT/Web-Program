import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Body } from './components/Body/Body.jsx'
import { ProfilePanel } from './components/ProfilePanel/ProfilePanel.jsx'
import { MobileNavbar } from './components/MobileNavbar/MobileNabar.jsx'

export default function App(){
    return(
        <main>
            <NavBar/>
            <Body/>
            <ProfilePanel/>
            <MobileNavbar/>
        </main>
    )
}