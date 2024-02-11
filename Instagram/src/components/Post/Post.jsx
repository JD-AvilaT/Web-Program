import './Post.css'
import React from 'react'
import { Profile } from '../Profile/Profile.jsx'
import { Photo } from '../Photo/Photo.jsx'
import { DownPhoto } from '../DownPhoto/DownPhoto.jsx'
import { Description } from '../Description/Description.jsx'


export function Post(){
    return(
        <section class="post">
            <Profile variant="profile-post"/>
            <Photo/>
            <DownPhoto/>
            <Description/>
        </section>
        
    )
}