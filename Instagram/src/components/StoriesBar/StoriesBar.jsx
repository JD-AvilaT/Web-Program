import './StoriesBar.css'
import React from 'react'
import { Story } from '../Story/Story.jsx'
import { MyProfile } from '../MyProfile/MyProfile.jsx'

export function StoriesBar(){
    return(
        <section class="stories-bar">
            <MyProfile variant="my-profile-stories-bar"/>
            <Story variant="ProfileStoriesBar"/>
            <Story variant="ProfileStoriesBar"/>
            <Story variant="ProfileStoriesBar"/>
            <Story variant="ProfileStoriesBar"/>
            <Story variant="ProfileStoriesBar"/>
            <Story variant="ProfileStoriesBar"/>
        </section>
    )
}