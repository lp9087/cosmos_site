import api from 'api';

const menuApi = {
  getMenuItems() {
    return api('/api/menu');
  },
};

export default menuApi;
