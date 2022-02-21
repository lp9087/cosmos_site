import api from 'api';

const partnersApi = {
  getPartners() {
    return api('/api/partners/');
  },
};

export default partnersApi;
