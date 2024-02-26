import './ProfilePanel.css'
import React from 'react'
import { MyProfile } from '../MyProfile/MyProfile.jsx'
import { SuggestedList } from '../SuggestedList/SuggestedList.jsx'

//The right section where Instagram suggests you other people

export function ProfilePanel(props){
    const {  } = props
    return(
        <section className="profile-panel">
            <section className='header-right'>
                <MyProfile variant="my-profile-profile-panel"/>
                <p className='header-switch'>Switch</p>
            </section>
            <SuggestedList/>
        </section>
        
    )
}