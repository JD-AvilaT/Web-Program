import React from 'react'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { AllPosts } from './components/AllPosts/AllPosts.jsx'


export default function App(){
    return(
        <div>
            <NavBar/>
            <AllPosts/>
        </div>
    )
}