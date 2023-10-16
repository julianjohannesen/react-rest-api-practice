import axios from 'axios';

export default async function getPhotos(query){

    const url = 'https://api.unsplash.com/search/photos';
    const headers = {
        "Authorization": "Client-ID H2aZwtv7GsW9lKSxwXV7uau761kcL1E4Q61WwzsEeLI",
        "Accept-Version": "v1",
    }
    const params = {
        "query": query,
        "page": 1,
        "per_page": 20,
        "order_by": "latest", // latest or relevant
        "collections": "latest", // latest
        "orientation": "landscape", // landscape or portrait or squarish
        "content_filter": "high", // high or low meaning high safety or low safety
        "color": "black", // black or white or ...
    }

    try {
        const response = await axios.get(url, {headers: headers, params: params});
        return response.data.results;
    }
    catch(error) {
        console.error(error);
        throw error;
    }
    
}