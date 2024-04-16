export async function imgCats(fact) {
    try {
        const splitCat = fact.split(' ').slice(0, 4).join(' ');
        const imgcat = `https://cataas.com/cat/says/${splitCat}?fontSize=50&fontColor=white`;
        return imgcat;
    } catch (error) {
        console.error('No Miaumiua imagen', error);
        throw error;
    }
}