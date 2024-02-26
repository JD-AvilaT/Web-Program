import './Story.css'
import React from 'react'
import { StoryPicture } from '../StoryPicture/StoryPicture.jsx'
import dataPost from '../data/sampleData.js'

//The story item

export function Story(props){
    const { pfp, username } = props
    return(
        dataPost.map(({ id, username, pfp }) => {
            return (
                <section key={id} class="story">
                    <StoryPicture pfp={pfp}/>
                    <p>{username}</p>
                </section>
            )
        })
        
        
    )
}