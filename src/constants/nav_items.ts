type NavItemKey = 'nav.skills' | 'nav.projects' | 'nav.about-me' | 'nav.contact';

interface NavItem {
  title: NavItemKey;
  url: string;
}

export const navItems: NavItem[] = [
  { title: 'nav.skills', url: '/#skills' },
  { title: 'nav.projects', url: '/#projects' },
  { title: 'nav.about-me', url: '/#about-me' },
  { title: 'nav.contact', url: '/#contact' }
];