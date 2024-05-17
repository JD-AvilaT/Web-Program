import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <nav className="flex-row gap-3 items-center">
            <Link to='/'>
                <button className='text-white text-2xl font-semibold mx-2 '>Home</button>
            </Link>
            <Link to='/favorites'>
                <button className='text-white text-2xl font-semibold mx-2 hover:text-blue'>Favorites</button>
            </Link>
        </nav>
    )
    
}