import './MyProfile.css'
import React from 'react'

export function MyProfile(props){
    const { variant } = props
    return(
        <section className={`my-profile ${variant}`}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU"/>
            <p>AvilaT</p>
        </section>
        
    )
}