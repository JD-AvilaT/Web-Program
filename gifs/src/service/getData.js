export async function getData(words){
    try {
        const response = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=1QiE2axCAQCpgqswcvVlGZnWScrgknVu&q=${words}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        if (!response.ok) {
            throw new Error('No se pudo obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}