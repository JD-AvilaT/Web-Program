import './Header.css'
import React from 'react'
import { StoriesBar } from '../StoriesBar/StoriesBar.jsx'
import { HeaderRight } from '../HeaderRight/HeaderRight.jsx'

export function Header(){
    return(
        <section class="header">
            <StoriesBar/>
        </section>
    )
}