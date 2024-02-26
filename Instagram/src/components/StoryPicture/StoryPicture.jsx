import './StoryPicture.css'
import React from 'react'

//The pfp for the story item

export function StoryPicture(props){
    const { pfp } = props
    return(
        <section className="story-picture-section">
            <img className="story-picture" src={pfp}/>
        </section>
        
    )
}