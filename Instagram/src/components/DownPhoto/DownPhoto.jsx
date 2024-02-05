import './DownPhoto.css'
import React from 'react'
import { LikesBar } from '../LikesBar/LikesBar.jsx'
import { Save } from '../Save/Save.jsx'

export function DownPhoto(){
    return(
        <section>
            <LikesBar/>
            <Save/>
        </section>
    )
}