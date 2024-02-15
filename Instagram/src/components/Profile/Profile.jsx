import './Profile.css'
import React from 'react'
import { ProfilePicture } from '../ProfilePicture/ProfilePicture.jsx'

export function Profile(props){
    const { variant, src, username } = props
    return(
        <section className={`profile ${variant}`}>
            <img  className="profile-picture" src={src} width="56px" height="56px"/>
            <h6 className='username-profile'>{username}</h6>
        </section>
        
    )
}