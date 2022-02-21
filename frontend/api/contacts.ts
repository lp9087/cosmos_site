import api from 'api';

const contactsApi = {
  getContacts() {
    return api('/api/contacts/');
  },
};

export default contactsApi;
