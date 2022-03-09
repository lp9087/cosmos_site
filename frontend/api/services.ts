import api from 'api';

interface IDetailPayload {
  slug: string;
}

const servicesApi = {
  getServices() {
    return api('/api/services/');
  },
  getService({ slug }: IDetailPayload) {
    return api(`/api/services/${slug}/`);
  },
};

export default servicesApi;
