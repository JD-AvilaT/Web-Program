import './SuggestedList.css'
import React from 'react'
import { TitleSuggested } from '../TitleSuggested/TitleSuggested.jsx'
import { ItemSuggested } from '../ItemSuggested/ItemSuggested.jsx'
import {DocumentationRight} from '../DocumentationRight/DocumentationRight.jsx'

//The complete section of suggested for you

export function SuggestedList(){
    return(
        <section className='suggested-list'>
            <TitleSuggested/>
            <ItemSuggested/>
            <DocumentationRight/>
            <p>© 2024 INSTAGRAM FROM META</p>

        </section>
    )

}