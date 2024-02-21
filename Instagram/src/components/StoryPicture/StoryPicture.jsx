import './StoryPicture.css'
import React from 'react'

export function StoryPicture(props){
    const { pfp } = props
    return(
        <section className="story-picture-section">
            <img className="story-picture" src={pfp}/>
        </section>
        
    )
}