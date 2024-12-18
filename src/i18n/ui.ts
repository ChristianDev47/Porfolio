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
    'nav.educación': 'Educación',
    'nav.experiencia': 'Experiencia',
    'nav.certificaciones': 'Certificaciones',
    'nav.contacto': 'Contacto',
  },
  en: {
    'nav.habilidades': 'Skills',
    'nav.proyectos': 'Projects',
    'nav.sobre-mí': 'About me',
    'nav.educación': 'Education',
    'nav.experiencia': 'Experience',
    'nav.certificaciones': 'Certifications',
    'nav.contacto': 'Contact',
  },
} as const;

export const routes = {
  es: {
    habilidades: 'habilidades',
    proyectos: 'proyectos',
    "sobre-mí": 'sobre-mí',
    "educación": 'educación',
    experiencia: 'experiencia',
    certificaciones: 'certificaciones',
    contacto: 'contacto',
  },
  en: {
    habilidades: 'skills',
    proyectos: 'projects',
    "sobre-mí": 'about-me',
    "educación": 'education',
    experiencia: 'experience',
    certificaciones: 'certifications',
    contacto: 'contact',
  },
};
