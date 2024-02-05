import './ProfilePicture.css'
import React from 'react'

export function ProfilePicture(props){
    const { width, corner} = props
    return(
        <img width={width} border-radius={corner} src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/10/13/16971904238942.jpg"/>
    )
}