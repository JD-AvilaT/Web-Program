import './Photo.css'
import React from 'react'
import posts from '../data/sampleData.js'

export function Photo(props){
    const { src } = props
    return(
        <img className='photo' src={src}/>
    )
    
    
}