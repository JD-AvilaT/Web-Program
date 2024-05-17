import {  Route, Routes } from "react-router-dom"
import {Home} from '../screens/home'
import {Favorites} from '../screens/favorites'

export const AppRouter = () => {
  return (
    <>
    <section>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    </section>
    
    </>
  )
}