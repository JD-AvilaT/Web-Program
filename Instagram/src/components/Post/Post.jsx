import './Post.css'
import React from 'react'
import { Profile } from '../Profile/Profile.jsx'
import { Photo } from '../Photo/Photo.jsx'
import { DownPhoto } from '../DownPhoto/DownPhoto.jsx'
import { Description } from '../Description/Description.jsx'
import  post  from '../data/sampleData.js'


export function Post(){
    return(
        post.map(({ id, username, pfp, photo, likes, comment}) => {
            return (
                <section class="post">
                    <Profile username={username} src={pfp} variant="profile-post"/>
                    <Photo src={photo}/>
                    <DownPhoto/>
                    <Description  username ={username} likes={likes} comment={comment}/>
                </section>
            )
        })
        
        
    )
}