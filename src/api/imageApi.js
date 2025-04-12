import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        per_page: 20,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
