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
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.about-me': 'Sobre mí',
    'nav.education': 'Educación',
    'nav.experience': 'Experiencia',
    'nav.certifications': 'Certificaciones',
    'nav.contact': 'Contacto',
  },
  en: {
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.about-me': 'About me',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
  },
} as const;

export const routes = {
  es: {
    skills: 'habilidades',
    projects: 'proyectos',
    "about-me": 'sobre-mí',
    education: 'educación',
    experience: 'experiencia',
    certifications: 'certificaciones',
    contact: 'contacto',
  },
  en: {
    skills: 'skills',
    projects: 'projects',
    "about-me": 'about-me',
    education: 'education',
    experience: 'experience',
    certifications: 'certifications',
    contact: 'contact',
  },
};
