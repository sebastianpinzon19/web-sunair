// Constantes del sitio
export const SITE_NAME = 'SunAir supply INC';
export const SITE_DESCRIPTION = 'Heating & A/C Supply Solutions';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const CONTACT_INFO = {
  addressLine1: '4244 Old Dixie Rd',
  addressLine2: 'Atlanta, GA 30354',
  email: 'info@sunairsupply.com',
  phone: '(404) 363-1020',
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
