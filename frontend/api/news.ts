import api from 'api';

const newsApi = {
  getNews() {
    return api('/api/news');
  },
};

export default newsApi;
