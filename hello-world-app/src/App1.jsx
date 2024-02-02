import { Body } from "./components/Body/Body"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import React from 'react'

export default function App(){
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}