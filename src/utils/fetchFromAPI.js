import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
  params: {
    maxResults: 61,
  },
  headers: {
    'X-RapidAPI-Key': 'b42b9c56a3msh44d64cb2e512c8ap145d2djsn2167e6e346c2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};