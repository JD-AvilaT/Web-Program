import './Description.css'
import React from 'react'
import { LikesCounter } from '../LikesCounter/LikesCounter.jsx'
import { Caption } from '../Caption/Caption.jsx'

export function Description(){
    return(
        <section className='description'>
            <LikesCounter/>
            <Caption/>
        </section>
    )
}   