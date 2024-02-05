import './Profile.css'
import React from 'react'
import { ProfilePicture } from '../ProfilePicture/ProfilePicture'

export function Profile(props){
    const { width, corner} = props
    return(
        <section>
            <ProfilePicture/>
            <h6>AvilaT</h6>
        </section>
        
    )
}