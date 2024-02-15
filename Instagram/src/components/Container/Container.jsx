import './Container.css'
import React from 'react'
import { Header } from '../Header/Header.jsx'
import { Body } from '../Body/Body.jsx'

export function Container(){
    return(
        <section className='container'>
            <Body/>
        </section>
        
    )
}