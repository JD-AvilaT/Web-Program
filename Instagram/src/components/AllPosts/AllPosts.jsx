import './AllPosts.css'
import React from 'react'
import { StoriesBar } from '../StoriesBar/StoriesBar.jsx'
import { Post } from '../Post/Post.jsx'

export function AllPosts(){
    return(
        <section>
            <StoriesBar/>
            <Post/>
        </section>
        
    )
}