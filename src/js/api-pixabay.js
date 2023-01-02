import axios from 'axios';
const API_KEY = '32121861-5be12f7d174fbbe08ffb9e651';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export class GalleryAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async axiosGet() {
    const options = new URLSearchParams({
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: this.page,
      per_page: 40,
    });
    const { data } = await axios(`?${options}`);
    this.page += 1;
    return data;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
Footer
