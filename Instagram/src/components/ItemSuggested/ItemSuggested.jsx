import './ItemSuggested.css'
import React from 'react'
import { Profile } from '../Profile/Profile.jsx'
import dataPost from '../data/sampleData.js'

//The item from the suggested list

export function ItemSuggested(){
    return(
        dataPost.map(({ id, username, pfp }) => {
            return (
                <section key={id} class="item-suggested">
                    <Profile username={username} src={pfp} variant="profile-item-suggested"/>
                    <p>Follow</p>
                </section>
            )
        })
        
        
    )
}