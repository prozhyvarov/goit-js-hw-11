import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36372332-a8dc7cfa4e54f609c2ebd7bae';

async function fetchImages(query, page, perPage) {
  const url = `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  const response = await axios.get(url);
  return response;
}

export { fetchImages };
