import './LeftSection.css'
import React from 'react'
import { User } from '../User/User.jsx'
import { SuggestedList } from '../SuggestedList/SuggestedList.jsx'

export function LeftSection(){
    return(
        <section>
            <User/>
            <SuggestedList/>
        </section>
    )
}