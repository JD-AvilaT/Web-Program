import './StoriesBar.css'
import React from 'react'
import { Story } from '../Story/Story.jsx'
import { MyProfile } from '../MyProfile/MyProfile.jsx'

//The section where all the stories are located

export function StoriesBar(){
    return(
        <section class="stories-bar">
            <MyProfile variant="my-profile-stories-bar"/>
            <Story variant="ProfileStoriesBar"/>
        </section>
    )
}