import './Post.css'
import React from 'react'
import { Profile } from '../Profile/Profile.jsx'
import { Photo } from '../Photo/Photo.jsx'
import { DownPhoto } from '../DownPhoto/DownPhoto.jsx'
import { LikesCounter } from '../LikesCounter/LikesCounter.jsx'
import { Caption } from '../Caption/Caption.jsx'

export function Post(){
    return(
        <section>
            <Profile/>
            <Photo/>
            <DownPhoto/>
            <LikesCounter/>
            <Caption/>
        </section>
        
    )
}