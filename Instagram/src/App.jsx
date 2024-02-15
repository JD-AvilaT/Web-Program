import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Container } from './components/Container/Container.jsx'
import { ProfilePanel } from './components/ProfilePanel/ProfilePanel.jsx'

export default function App(){
    return(
        <main>
            <NavBar/>
            <Container/>
            <ProfilePanel/>
        </main>
    )
}