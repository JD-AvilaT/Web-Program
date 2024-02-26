import './Posts.css'
import React from 'react'
import { Post } from '../Post/Post.jsx'

//The list of posts

export function Posts(){
    return(
        <section class="posts">
            <Post/>
        </section>
        
    )
}

