import './Profile.css'
import React from 'react'

//The section for the others users information

export function Profile(props){
    const { variant, src, username } = props
    return(
        <section className={`profile ${variant}`}>
            <img  className="profile-picture" src={src}/>
            <h6 className='username-profile'>{username}</h6>
        </section>
        
    )
}