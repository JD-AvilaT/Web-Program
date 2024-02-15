import './Body.css'
import React from 'react'
import { Posts } from '../Posts/Posts.jsx'
import { Header } from '../Header/Header.jsx'

export function Body(){
    return(
        <section className='body'>
            <Header/>
            <Posts/>
        </section>
        
    )
}