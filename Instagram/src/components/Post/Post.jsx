import './Post.css'
import React from 'react'
import { Profile } from '../Profile/Profile.jsx'
import { Photo } from '../Photo/Photo.jsx'
import { DownPhoto } from '../DownPhoto/DownPhoto.jsx'
import { Description } from '../Description/Description.jsx'
import  dataPost  from '../data/sampleData.js'

//The complete post

export function Post(){
    return(
        dataPost.map(({ id, username, pfp, photo, likes, comment}) => {
            return (
                <section key={id} class="post">
                    <Profile username={username} src={pfp} variant="profile-post"/>
                    <Photo src={photo}/>
                    <DownPhoto/>
                    <Description  username ={username} likes={likes} comment={comment}/>
                </section>
            )
        })
        
        
    )
}