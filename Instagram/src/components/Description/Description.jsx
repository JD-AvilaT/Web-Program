import './Description.css'
import React from 'react'
import { LikesCounter } from '../LikesCounter/LikesCounter.jsx'
import { Caption } from '../Caption/Caption.jsx'

export function Description(props){
    const { likes, username, comment } = props
    return(
        <section className='description'>
            <p className='likes-counter'><strong>{likes} Me gusta</strong></p>
            <section className='caption'>
                <p><strong>{username}</strong></p>
                <p>{comment}</p>
            </section>
        </section>
    )
}   