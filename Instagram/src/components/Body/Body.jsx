import './Body.css'
import React from 'react'
import { Posts } from '../Posts/Posts.jsx'
import { StoriesBar } from '../StoriesBar/StoriesBar.jsx'

//The section where the stories and the posts are located

export function Body(){
    return(
        <section className='body'>
            <StoriesBar/>
            <Posts/>
        </section>
        
    )
}