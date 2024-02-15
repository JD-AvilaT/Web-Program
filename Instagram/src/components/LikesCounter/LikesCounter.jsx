import './LikesCounter.css'
import React from 'react'

export function LikesCounter(props){
    const { likes } = props
    return(
        <p className='likes-counter'><strong>{likes} Me gusta</strong></p>
    )
}