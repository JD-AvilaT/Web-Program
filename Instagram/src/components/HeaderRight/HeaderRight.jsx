import './HeaderRight.css'
import React from 'react'
import { MyProfile } from '../MyProfile/MyProfile.jsx'

export function HeaderRight(){
    return(
        <section className='header-right'>
            <MyProfile variant="my-profile-header-right"/>
            <p className='header-switch'>Switch</p>
        </section>
        
    )
}