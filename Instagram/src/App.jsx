import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Container } from './components/Container/Container.jsx'

export default function App(){
    return(
        <div class="all">
            <NavBar/>
            <Container/>
        </div>
    )
}