import api from 'api';

interface IDetailPayload {
  slug: string;
}

const customPagesApi = {
  getCustomPages() {
    return api('/api/pages/');
  },
  getCustomPage({ slug }: IDetailPayload) {
    return api(`/api/pages/${slug}/`);
  },
};

export default customPagesApi;
