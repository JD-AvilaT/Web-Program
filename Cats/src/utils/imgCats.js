export async function imgCats(fact) {
    try {
        const splitCat = fact.split(' ').slice(0, 5).join(' ');
        const imgcat = `https://cataas.com/cat/says/${splitCat}?fontSize=30&fontColor=violet`;
        return imgcat;
    } catch (error) {
        console.error('No Miaumiua imagen', error);
        throw error;
    }
}