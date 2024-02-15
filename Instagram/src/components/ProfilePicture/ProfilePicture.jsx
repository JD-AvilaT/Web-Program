import './ProfilePicture.css'
import React from 'react'

export function ProfilePicture( props ){
    const { src } = props
    return(
        <img className="profile-picture" src={src}/>
    )
}