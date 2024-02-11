import './Story.css'
import React from 'react'
import { StoryPicture } from '../StoryPicture/StoryPicture.jsx'

export function Story(){
    return(
        <section className="story">
            <StoryPicture/>
            <p>username</p>
        </section>
        
    )
}