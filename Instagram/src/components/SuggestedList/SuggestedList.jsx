import './SuggestedList.css'
import React from 'react'
import { TitleSuggested } from '../TitleSuggested/TitleSuggested.jsx'
import { ItemSuggested } from '../ItemSuggested/ItemSuggested.jsx'

export function SuggestedList(){
    return(
        <section>
            <TitleSuggested/>
            <ItemSuggested/>
            <ItemSuggested/>
            <ItemSuggested/>
            <ItemSuggested/>
            <ItemSuggested/>
        </section>
    )

}