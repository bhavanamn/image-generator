import axios from "axios";

const clientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers : {
            Authorization: `Client-ID ${clientId}`,
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;
