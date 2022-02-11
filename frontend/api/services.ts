import api from 'api';

const servicesApi = {
  getServices() {
    return api('/api/services');
  },
};

export default servicesApi;
