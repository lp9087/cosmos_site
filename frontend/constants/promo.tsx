import { Award, Briefcase, Compass, Home, Info, Package, Tool } from 'react-feather';

const PROMO_CONFIG = {
  NAVBAR_HEADER_TEXT: 'Ведущий разработчик программных решений для госсектора и бизнеса',
  MENU_ITEMS: [
    { icon: Home, text: 'Главная', link: '#' },
    { icon: Package, text: 'Продукты', link: '#' },
    { icon: Tool, text: 'Услуги', link: '#' },
    { icon: Info, text: 'О компании', link: '#' },
    { icon: Award, text: 'Сотрудничество', link: '#' },
    { icon: Briefcase, text: 'Вакансии', link: '#' },
    { icon: Compass, text: 'Контакты', link: '#' },
  ],
  COPYRIGHT: 'Copyright',
};

export default PROMO_CONFIG;
