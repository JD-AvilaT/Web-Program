import './Profile.css'
import React from 'react'
import { ProfilePicture } from '../ProfilePicture/ProfilePicture.jsx'

export function Profile(props){
    const { variant } = props
    return(
        <section className={`profile ${variant}`}>
            <ProfilePicture width="56px" height="56px"/>
            <h6>Username</h6>
        </section>
        
    )
}