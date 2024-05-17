import { useState, useEffect } from 'react';
import { Loader, Error } from './index';
import { getData } from '../service/getData';
import bookmark from '../icons/bookmark.svg';
import bookmarkFill from '../icons/bookmarkFill.svg';

export function Card({ value }) {
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const fetchData = async (value) => {
        try {
            setLoader(true);
            const hola = await getData(value);
            setData(hola.data);
            console.log(data)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(true);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        fetchData(value);
    }, [value]);

    useEffect(() => {
        const storedFavorites = JSON.parse(window.localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    const favorited = (id) => {
        return favorites.some(favorite => favorite.id === id);
    }

    const addFavorite = (id, imageUrl, title) => {
        const newFavorites = [...favorites, { id, imageUrl, title }];
        window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setFavorites(newFavorites);
    }

    const rmvFavorite = (id) => {
        const FavoritesWOEliminated = favorites.filter(favorite => favorite.id !== id);
        window.localStorage.setItem("favorites", JSON.stringify(FavoritesWOEliminated));
        setFavorites(FavoritesWOEliminated);
    }

    if (error) {
        return <Error />;
    }
    if (loader) {
        return <Loader />;
    }

    return (
        <div className='flex flex-wrap justify-between'>
            {data.map(({ id, images, title }, index) => {
                const isFavorite = favorited(id);
                return (                  
                    <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-2`} key={id}>
                        <div className={`max-w-xs min-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 order-${index + 1}`}>
                            <a href="#">
                                <img className="rounded-t-lg" src={images.original.url} alt={title}/>
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                </a>
                                <button onClick={() => isFavorite ? rmvFavorite(id) : addFavorite(id, images.original.url, title)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <img src={isFavorite ? bookmarkFill : bookmark} alt="Bookmark" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
    
    
}
