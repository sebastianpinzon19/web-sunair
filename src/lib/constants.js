// Constantes del sitio
export const SITE_NAME = 'Sun Air';
export const SITE_DESCRIPTION = 'Heating & A/C Supply Solutions';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const CONTACT_INFO = {
  email: 'info@sunair-usa.com',
  phone: '+1 (813) 443-0757',
  hours: 'Mon-Fri 8am-5pm EST',
  linkedin: 'https://linkedin.com/company/sunair',
};

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Warranty', href: '/warranty' },
  { label: 'Distributors', href: '/distributors' },
  { label: 'Contact', href: '/contact' },
];

export const COLORS = {
  primary: '#0052CC',
  primaryDark: '#003DA5',
  accent: '#FFC107',
  accentDark: '#FFB900',
};

export const PRODUCTS_CATEGORIES = [
  {
    id: 'heat-pumps',
    name: 'Heat Pumps',
    icon: '❄️',
  },
  {
    id: 'air-conditioners',
    name: 'Air Conditioners',
    icon: '🌡️',
  },
  {
    id: 'air-handlers',
    name: 'Air Handlers',
    icon: '🌬️',
  },
  {
    id: 'furnaces',
    name: 'Furnaces',
    icon: '🔥',
  },
  {
    id: 'coils',
    name: 'Coils',
    icon: '⚙️',
  },
];
