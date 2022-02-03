const PROMO_CONFIG = {
  MENU_ITEMS: [
    {
      id: 'products',
      title: 'Продукты',
      link: '/products/slug',
      nodes: [
        {
          id: 1,
          title: 'Category 1',
          nodes: [
            { id: 1, title: 'First Product' },
            { id: 2, title: 'Long Product Name 2' },
          ],
        },
        {
          id: 2,
          title: 'Category 2',
          nodes: [{ id: 3, title: 'Product 3' }],
        },
        {
          id: 3,
          title: 'Category 3',
        },
      ],
    },
    { id: 'services', title: 'Услуги', link: '#' },
    { id: 'partnership', title: 'Сотрудничество', link: '#' },
    { id: 'vacancies', title: 'Вакансии', link: '#' },
    { id: 'about', title: 'О компании', link: '#' },
  ],
  PHONE: '+7 (888) 888-8888',
};

export default PROMO_CONFIG;
