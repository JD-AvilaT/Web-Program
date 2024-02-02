import './style.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App1'
const appContainer = document.getElementById("app")
const root = createRoot(appContainer)



root.render(<App/>)