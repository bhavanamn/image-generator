import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers : {
            Authorization: "eQq_lpkzH6EapRy2sKpCc-LSG2tDqyuSIqUMKzm8gwE",
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;