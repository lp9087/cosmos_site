import api from 'api';

export interface FeedpackPayload {
  name: string;
  comment: string;
  phone: string;
  email: string;
}

const feedpackApi = {
  sendFeedback({ name, comment, phone, email }: FeedpackPayload) {
    return api('/api/feedback/', {
      method: 'POST',
      data: {
        full_name: name,
        additional: comment,
        phone,
        email,
      },
    });
  },
};

export default feedpackApi;
