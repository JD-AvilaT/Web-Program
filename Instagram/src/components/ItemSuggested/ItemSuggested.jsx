import './ItemSuggested.css'
import React from 'react'
import { Profile } from '../Profile/Profile.jsx'

export function ItemSuggested(){
    return(
        <section className='item-suggested'>
            <Profile className="profile-item-suggested"/>
            <p>Follow</p>
        </section>
    )
}