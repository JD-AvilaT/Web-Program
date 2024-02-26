import './Photo.css'
import React from 'react'

//The photo for the post

export function Photo(props){
    const { src } = props
    return(
        <img className='photo' src={src}/>
    )
    
    
}