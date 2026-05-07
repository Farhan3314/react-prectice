import axios from "axios";
const API_KEY = import.meta.env.VITE_PEXELS_KEY;

const BASE_URL = "https://api.pexels.com/v1/search";

const fetchImages = async (query = "people") => {
    try {
        const response = await axios.get(`${BASE_URL}?query=${query}&per_page=12`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        return response.data.photos;
    } catch (error) {
        console.error("Pexels API Error:", error.message);
        return [];
    }
};

export default fetchImages;