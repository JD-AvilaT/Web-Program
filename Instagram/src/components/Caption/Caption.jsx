import './Caption.css'
import React from 'react'

export function Caption(props){
    const {username, comment} = props
    return(
        <section className='caption'>
            <p><strong>{username}</strong></p>
            <p>{comment}</p>
        </section>
        
    )
}