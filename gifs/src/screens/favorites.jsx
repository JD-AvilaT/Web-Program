import { useState, useEffect } from 'react';
import { FavoritesCard, Navbar } from '../components/index';

export function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(window.localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <section>
            <h1 className='my-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Favorites</h1>
            <Navbar/>
            <FavoritesCard favorites={favorites}/>
        </section>
    );
}
