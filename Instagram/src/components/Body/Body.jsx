import './Body.css'
import React from 'react'
import { Posts } from '../Posts/Posts.jsx'
import { SuggestedList } from '../SuggestedList/SuggestedList.jsx'

export function Body(){
    return(
        <section className='body'>
            <Posts/>
            <SuggestedList/>
        </section>
        
    )
}