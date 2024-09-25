import GitHub from '../icons/GitHub.astro';
import React from '../icons/React.astro';
import AstroIcon from '../icons/AstroIcon.astro';
import Cloudinary from '../icons/Cloudinary.astro';
import Css from '../icons/Css.astro';
import Django from '../icons/Django.astro';
import Docker from '../icons/Docker.astro';
import Express from '../icons/Express.astro';
import Figma from '../icons/Figma.astro';
import Git from '../icons/Git.astro';
import Html from '../icons/Html.astro';
import Jest from '../icons/Jest.astro';
import Js from '../icons/Js.astro';
import MongoDB from '../icons/MongoDB.astro';
import MySQL from '../icons/MySQL.astro';
import NextJS from '../icons/NextJS.astro';
import NodeJS from '../icons/NodeJS.astro';
import Npm from '../icons/Npm.astro';
import PostgreSQL from '../icons/PostgreSQL.astro';
import Postman from '../icons/Postman.astro';
import Python from '../icons/Python.astro';
import SQL from '../icons/SQL.astro';
import Swagger from '../icons/Swagger.astro';
import Tailwind from '../icons/Tailwind.astro';
import Typescript from '../icons/Typescript.astro';
import Vercel from '../icons/Vercel.astro';
import Vite from '../icons/Vite.astro';
import Vsc from '../icons/Vsc.astro';
import Azure from '../icons/Azure.astro';
import Cloudflare from '../icons/Cloudflare.astro';

const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJS,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: Tailwind,
  },
  REACT: {
    name: 'React',
    icon: React,
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon,
  },
  CLOUDINARY: {
    name: 'Cloudinary',
    icon: Cloudinary,
  },
  CSS: {
    name: 'CSS',
    icon: Css,
  },
  DJANGO: {
    name: 'Django',
    icon: Django,
  },
  DOCKER: {
    name: 'Docker',
    icon: Docker,
  },
  EXPRESS: {
    name: 'Express',
    icon: Express,
  },
  FIGMA: {
    name: 'Figma',
    icon: Figma,
  },
  GIT: {
    name: 'Git',
    icon: Git,
  },
  HTML: {
    name: 'HTML',
    icon: Html,
  },
  JEST: {
    name: 'Jest',
    icon: Jest,
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: Js,
  },
  MONGODB: {
    name: 'MongoDB',
    icon: MongoDB,
  },
  MYSQL: {
    name: 'MySQL',
    icon: MySQL,
  },
  NODEJS: {
    name: 'Node.js',
    icon: NodeJS,
  },
  NPM: {
    name: 'NPM',
    icon: Npm,
  },
  POSTGRESQL: {
    name: 'PostgreSQL',
    icon: PostgreSQL,
  },
  POSTMAN: {
    name: 'Postman',
    icon: Postman,
  },
  PYTHON: {
    name: 'Python',
    icon: Python,
  },
  SQL: {
    name: 'SQL',
    icon: SQL,
  },
  SWAGGER: {
    name: 'Swagger',
    icon: Swagger,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: Typescript,
  },
  VERCEL: {
    name: 'Vercel',
    icon: Vercel,
  },
  VITE: {
    name: 'Vite',
    icon: Vite,
  },
  VSC: {
    name: 'VS Code',
    icon: Vsc,
  },
  AZURE: {
    name: 'Azure',
    icon: Azure,
  },
  CLOUDFLARE: {
    name: 'Cloudflare',
    icon: Cloudflare,
  },
  GITHUB: {
    name: 'Github',
    icon: GitHub,
  },
};



export const PROJECTS = [
  {
    title: 'GrinChat',
    subtitle: 'Aplicación de Chat Online Fullstack',
    description: 'La Aplicación de Chat Online Fullstack de GrinChat es una solución integral para la comunicación en tiempo real, combinando un backend sólido con un frontend moderno. El backend, desarrollado con Node.js y Express, proporciona una API RESTful completa que gestiona la autenticación JWT, operaciones CRUD y comunicación en tiempo real mediante Socket.IO. Utiliza MongoDB para el almacenamiento de datos, asegurando una arquitectura escalable y eficiente. El frontend, construido con Next.js y TypeScript, ofrece una interfaz de usuario moderna y receptiva para el registro de usuarios, mensajería instantánea, gestión de contactos y llamadas de audio/video. Todo el sistema está diseñado para ofrecer una experiencia de usuario fluida y continua, con notificaciones en tiempo real y una integración completa con los servicios del backend. El proyecto demuestra la implementación de una solución fullstack utilizando herramientas y tecnologías modernas, con una arquitectura modular que permite fácil mantenimiento y escalabilidad.',
    resume: 'GrinChat es una aplicación de comunicación en tiempo real que integra un backend robusto con un frontend moderno. Utiliza Node.js, Express y MongoDB para la gestión de usuarios, chats y mensajes. El frontend está construido con Next.js y TypeScript, proporcionando una experiencia de usuario dinámica y fluida para mensajería, llamadas y gestión de contactos.',
    link: 'https://grinchat.vercel.app',
    github: 'https://github.com/ChristianDev47/GrinChat',
    image: '/projects/grinchat.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/grinchat.mp4',
    tags: [TAGS.NEXT, TAGS.TYPESCRIPT, TAGS.CSS, TAGS.CLOUDINARY, TAGS.NODEJS, TAGS.EXPRESS, TAGS.SWAGGER, TAGS.MONGODB, TAGS.JEST, TAGS.DOCKER],
  },
  {
    title: 'Ecomtren',
    subtitle: 'Aplicación de E-Commerce Fullstack',
    description: 'Ecomtren es una aplicación fullstack diseñada e implementada para gestionar actividades de comercio electrónico en línea. El proyecto incluye un backend robusto y un frontend dinámico, ambos construidos con tecnologías modernas para ofrecer un sistema escalable y fácil de usar. El backend está desarrollado con Django, implementando autenticación JWT para una seguridad avanzada, protección de rutas, y pruebas con Jest para garantizar la fiabilidad. Además, utiliza Swagger con DRF Spectacular para la documentación de la API. El frontend, construido con React y TypeScript, proporciona una interfaz de usuario receptiva para la gestión de productos, carrito de compras, y perfiles de usuario. El sistema está diseñado para ofrecer una experiencia fluida y eficiente en la compra y gestión de productos, con integración completa entre frontend y backend.',
    resume: 'Ecomtren es una aplicación fullstack de comercio electrónico, construida con Django y React. El backend gestiona usuarios y pedidos con autenticación JWT y documentación Swagger. El frontend, desarrollado con React y TypeScript, permite gestionar productos, realizar compras y actualizar perfiles con una interfaz dinámica y responsiva.',
    link: 'https://e-commerce-nine-ebon.vercel.app',
    github: 'https://github.com/ChristianDev47/E-commerce',
    image: '/projects/ecomtren.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/ecomtren.mp4',
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.DJANGO, TAGS.PYTHON, TAGS.CLOUDINARY, TAGS.POSTGRESQL, TAGS.DOCKER, TAGS.SWAGGER],
  },
  {
    title: 'Boardify',
    subtitle: 'Aplicación de Gestión de Proyectos Fullstack',
    description: 'Boardify es una aplicación fullstack auto-diseñada e implementada, adaptada para una gestión efectiva de proyectos y colaboración. Inspirada en Trello, Boardify combina un backend sofisticado con un frontend dinámico y receptivo, ofreciendo una experiencia de usuario fluida para gestionar proyectos, tableros, listas y tarjetas. El backend está desarrollado con Node.js, Express y MongoDB, utilizando JWT para autenticación, Bcrypt para seguridad de contraseñas, y Cloudinary para la gestión de medios. El frontend, construido con React y Tailwind CSS, proporciona una interfaz de usuario rica con funcionalidad de arrastrar y soltar, visualización de calendarios y notificaciones en tiempo real. La aplicación está desplegada en Docker para asegurar un entorno de desarrollo y producción consistente.',
    resume: 'Boardify es una herramienta de gestión de proyectos inspirada en Trello, con un backend basado en Node.js y MongoDB. El frontend utiliza React y Tailwind CSS para una interfaz interactiva con arrastrar y soltar. Boardify permite la creación de tableros y listas, con integración de calendarios y notificaciones en tiempo real.',
    link: 'https://boardify-liart.vercel.app',
    github: 'https://github.com/ChristianDev47/Boardify',
    image: '/projects/boardify.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/boardify.mp4',
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.TAILWIND, TAGS.CLOUDINARY, TAGS.NODEJS, TAGS.EXPRESS, TAGS.SWAGGER, TAGS.MONGODB, TAGS.JEST, TAGS.DOCKER],
  },
  {
    title: 'Tasty Trails',
    subtitle: 'Sistema de Pedidos para Restaurantes Fullstack',
    description: 'Tasty Trails es una aplicación fullstack auto-diseñada e implementada para la gestión de pedidos en línea para restaurantes. Incluye tanto una API backend como una interfaz frontend, cada una construida con tecnologías modernas para ofrecer un sistema robusto, escalable y amigable con el usuario. El backend está desarrollado con Node.js y Express, utilizando una base de datos MySQL y siguiendo una arquitectura MVC para la gestión eficiente de datos y operaciones. La autenticación y autorización se gestionan mediante JWT, y el sistema incluye operaciones CRUD para usuarios, roles, pedidos y platos. El frontend, desarrollado con Next.js y TypeScript, proporciona una interfaz dinámica y receptiva, integrándose con la API backend para la gestión de pedidos y perfiles de usuario. La aplicación utiliza Tailwind CSS para el diseño, React Hook Form para el manejo de formularios y Zod para la validación de datos. Ambas partes del sistema están dockerizadas para asegurar un entorno de desarrollo y producción consistente.',
    resume: 'Tasty Trails es una plataforma de pedidos de restaurantes, construida con Node.js y MySQL en el backend. El frontend está desarrollado con Next.js y Tailwind CSS, ofreciendo una interfaz intuitiva para realizar pedidos y gestionar perfiles. La aplicación es completamente escalable y fácil de usar.',
    link: 'https://tasty-trails-self.vercel.app',
    github: 'https://github.com/ChristianDev47/Tasty_Trails',
    image: '/projects/tasty_trails.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/tasty_trails.mp4',
    tags: [TAGS.NEXT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.CLOUDINARY, TAGS.NODEJS, TAGS.EXPRESS, TAGS.SWAGGER, TAGS.MYSQL, TAGS.JEST, TAGS.DOCKER],
  },
  {
    title: 'Google Translate Copy',
    subtitle: 'Sistema de Traducción Fullstack',
    description: 'Google Translate Copy es una aplicación fullstack diseñada para proporcionar servicios de traducción de texto eficientes inspirada en el tradicional traductor de google. El sistema incluye una API backend y una interfaz frontend, cada una construida con tecnologías modernas para asegurar un sistema de traducción robusto, escalable y fácil de usar. El backend, desarrollado con Django y Django REST Framework (DRF), maneja todas las operaciones del servidor relacionadas con la traducción de texto, aprovechando los servicios de IA de Cloudflare para la detección automática de idiomas y opciones de idiomas personalizables. Incluye endpoints para traducir texto, detectar idiomas y manejar errores. La interfaz frontend, construida con React y TypeScript y estilizada con Tailwind CSS, ofrece una interfaz limpia e intuitiva para ingresar texto, seleccionar idiomas y ver traducciones. Integra características adicionales como texto a voz y copiar traducciones. Ambas partes del sistema están diseñadas para ofrecer una experiencia de usuario consistente y eficiente en todos los dispositivos.',
    resume: 'Google Translate Copy es una aplicación de traducción de texto fullstack inspirada en Google Translate. Utiliza Django en el backend y React en el frontend, con soporte para detección automática de idiomas. Incluye opciones para texto a voz y copiar traducciones, asegurando una experiencia fluida para los usuarios.',
    link: 'https://google-translate-pink.vercel.app',
    github: 'https://github.com/ChristianDev47/Google_Translate',
    image: '/projects/google_translate.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/google_translate.mp4',
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.DJANGO, TAGS.PYTHON, TAGS.CLOUDFLARE],
  },
  {
    title: 'To-Do App',
    subtitle: 'Gestión de Tareas',
    description: 'To-Do App es una aplicación de tareas responsiva construida con React y TypeScript, y estilizada con Tailwind CSS. Proporciona una interfaz intuitiva para gestionar tareas, incluyendo agregar, marcar como completadas y eliminar tareas. La aplicación también cuenta con funcionalidad de almacenamiento local para conservar las tareas a través de recargas de página.',
    resume: 'To-Do App es una aplicación de gestión de tareas construida con React y TypeScript. Permite a los usuarios añadir, completar y eliminar tareas de manera sencilla. El diseño responsivo y la persistencia de datos en el almacenamiento local aseguran una experiencia de usuario fluida.',
    link: 'https://to-do-app-nine-flame.vercel.app',
    github: 'https://github.com/ChristianDev47/To-do-app',
    image: '/projects/to_do_app.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/to_do_app.mp4',
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND],
  },
  {
    title: 'Tic Tac Toe',
    subtitle: 'Juego de Tres en Raya',
    description: 'El Tic-Tac-Toe Game es una implementación frontend responsiva del clásico juego de Tres en Raya, desarrollado utilizando React con JavaScript y CSS. La aplicación ofrece una interfaz simple e intuitiva para que los jugadores disfruten del juego en varios dispositivos, con funcionalidad de almacenamiento local para persistir el estado del juego.',
    resume: 'Tic-Tac-Toe Game es una versión moderna del clásico juego Tres en Raya. Desarrollado con React y JavaScript, ofrece una experiencia de juego fluida y sencilla. La interfaz es responsiva y el estado del juego se guarda en el almacenamiento local, lo que permite continuar el juego tras recargar la página.',
    link: 'tic-tac-toe-virid-one.vercel.app',
    github: 'https://github.com/ChristianDev47/Tic-tac-toe',
    image: '/projects/tic_tac_toe.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/tic_tac_toe.mp4',
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.CSS],
  },
];

