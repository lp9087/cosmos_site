import axios from 'axios';

import { BACKEND_URL } from '../constants';

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: 15000,
});

export default api;
export { default as feedbackApi } from './feedback';
export { default as newsApi } from './news';
export { default as partnersApi } from './partners';
export { default as achievementsApi } from './achievements';
export { default as productCategoriesApi } from './productCategories';
export { default as productsApi } from './products';
export { default as servicesApi } from './services';
export { default as contactsApi } from './contacts';
