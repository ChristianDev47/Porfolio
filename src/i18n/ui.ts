export const LANGUAGES: Record<
	string,
	{ code: string; name: string;}
> = {
	en: {
		code: 'en',
		name: 'English'
	},
	es: {
		code: 'es',
		name: 'Español'
	},
};


export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
  es: {
    'nav.habilidades': 'Habilidades',
    'nav.proyectos': 'Proyectos',
    'nav.sobre-mí': 'Sobre mí',
    'nav.contacto': 'Contacto',
  },
  en: {
    'nav.habilidades': 'Skills',
    'nav.proyectos': 'Projects',
    'nav.sobre-mí': 'About me',
    'nav.contacto': 'Contact',
  },
} as const;


export const routes = {
	es: {
		habilidades: 'habilidades',
		proyectos: 'proyectos',
		"sobre-mí": 'sobre-mí',
		contacto: 'contacto',
	},
	en: {
		habilidades: 'skills',
		proyectos: 'projects',
		"sobre-mí": 'about-me',
		contact: 'contact',
	},
};