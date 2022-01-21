import { Award, Briefcase, Compass, Home, Info, Package, Tool } from 'react-feather';

const PROMO_CONFIG = {
  NAVBAR_HEADER_TEXT: 'Ведущий разработчик программных решений для госсектора и бизнеса',
  MENU_ITEMS: [
    { icon: Home, text: 'Главная', link: '/' },
    { icon: Info, text: 'О компании', link: '#' },
    { icon: Package, text: 'Продукты', link: '/products/slug' },
    { icon: Tool, text: 'Услуги', link: '#' },
    { icon: Award, text: 'Сотрудничество', link: '#' },
    { icon: Briefcase, text: 'Вакансии', link: '#' },
    { icon: Compass, text: 'Контакты', link: '#' },
  ],
  COPYRIGHT: 'Copyright',
  ADDRESS1: 'г. Ростов-на-Дону',
  ADDRESS2: 'пр. Буденновский, 97',
  PHONE1: '+7 (888) 888-8888',
  PHONE2: '+7 (999) 999-9999',
};

export default PROMO_CONFIG;
