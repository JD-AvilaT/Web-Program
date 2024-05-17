export function FavoritesCard({ favorites }) {
    console.log(favorites)
    return (
        <div className='flex flex-wrap justify-between'>
            {favorites.map(({ id, imageUrl, title }) => {

                return (                  
                    <div  key={id} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-2`} key={id}>
                        <div className={`max-w-xs min-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
                            <a href="#">
                                <img className="rounded-t-lg" src={imageUrl}/>
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
