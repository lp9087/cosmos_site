import { Award, Briefcase, Compass, Home, Info, Package, Tool } from 'react-feather';

const PROMO_CONFIG = {
  NAVBAR_HEADER_TEXT: 'Ведущий разработчик программных решений для госсектора и бизнеса',
  MENU_ITEMS: [
    {
      id: 'products',
      icon: Package,
      title: 'Продукты',
      link: '#',
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
    { id: 'services', icon: Tool, title: 'Услуги', link: '#' },
    { id: 'partnership', icon: Award, title: 'Сотрудничество', link: '#' },
    { id: 'vacancies', icon: Briefcase, title: 'Вакансии', link: '#' },
    { id: 'about', icon: Info, title: 'О компании', link: '#' },
  ],
  COPYRIGHT: 'Copyright',
  ADDRESS1: 'г. Ростов-на-Дону',
  ADDRESS2: 'пр. Буденновский, 97',
  PHONE: '+7 (888) 888-8888',
};

export default PROMO_CONFIG;
